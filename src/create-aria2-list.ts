import { globbySync } from "globby";
import * as path from "node:path";
import { createAria2DownloadEntry } from "./lib/aria2";
import { getCivitaiModelInfo, CIVITAI_MODEL_API_URL } from "./lib/civitai";
import { getHfBlobInfo, resolveHfFileUrl } from "./lib/hf";
import { Model } from "./types";
const dir = path.join(import.meta.dir, "models");
const pattern = path.join(dir, "**/*.ts");

type Define = {
  path: string;
  model: Model;
};

function getDefines() {
  const files = globbySync(pattern);
  const defines: Define[] = [];

  for (const file of files) {
    const code = import.meta.require(file);

    const codePath = path.relative(import.meta.dir, file);
    const defineFolder = codePath.slice(0, -3);

    if ("default" in code) {
      defines.push({
        path: defineFolder,
        model: code.default as Model,
      });
    }
  }

  return defines;
}

async function modelsToAriaInput(define: Define) {
  const tasks: (() => Promise<string>)[] = [];

  for (const it of define.model.huggingface ?? []) {
    const url = resolveHfFileUrl({
      repoId: it.repo_id,
      filename: it.filename,
    });

    tasks.push(async () => {
      const info = await getHfBlobInfo({
        repo_id: it.repo_id,
        filename: it.filename,
      });

      /**
       * http://server/file.iso
       * dir=/iso_images
       * out=file.img
       */
      const entry = createAria2DownloadEntry({
        url: url,
        dir: define.path,
        checksum: { type: "sha-256", value: info.sha256 },
        out: it.alias ? it.alias + path.extname(it.filename) : it.filename,
      });
      return entry;
    });
  }

  for (const it of define.model.civitai ?? []) {
    tasks.push(async () => {
      const info = await getCivitaiModelInfo(it.model_id);
      if (!info.success) throw new Error(info.error);

      const { type, modelVersions } = info.data;

      if (!define.path.includes(type.toLowerCase())) {
        throw new Error(
          `civitai model type is not match? type=${type}, placement=${define.path}`
        );
      }

      const version = modelVersions.find(
        (m) => String(m.id) === String(it.version_id)
      );
      if (!version)
        throw new Error(
          `model=${it.model_id} version=${it.version_id} not found.\nInspect using 'bun src/civitai-view.ts ${it.model_id}'`
        );
      const file = version.files.find((it) => it.primary);
      if (!file)
        throw new Error(
          `primary files is not found, ${CIVITAI_MODEL_API_URL}/${it.model_id}`
        );
      const entry = createAria2DownloadEntry({
        url: file.downloadUrl,
        dir: define.path,
        out: it.alias ? it.alias + path.extname(file.name) : file.name,
        checksum: { type: "sha-256", value: file.hashes.SHA256 },
      });
      return entry;
    });
  }
  for (const it of define.model.url ?? []) {
    tasks.push(async () =>
      createAria2DownloadEntry({
        url: it.url,
        dir: define.path,
        out: it.filename,
      })
    );
  }

  const entries = await Promise.all(tasks.map((it) => it()));
  return entries.length === 0 ? `# ${define.path}` : entries.join("\n\n");
}

const data = await Promise.all(getDefines().flatMap(modelsToAriaInput));

Bun.write("manifest.aria2.txt", data.join("\n"));
