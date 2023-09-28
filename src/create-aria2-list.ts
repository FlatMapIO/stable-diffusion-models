import { globbySync } from "globby";
import * as path from "node:path";
import { getCivitalModelInfo } from "./lib/civital";
import { getHfBlobInfo, resolveHfFileUrl } from "./lib/hf";
import { Model } from "./types";
import { createAria2DownloadEntry } from "./lib/aria2";
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

  for (const it of define.model.civital ?? []) {
    tasks.push(async () => {
      const info = await getCivitalModelInfo(it.model_id);
      if (!info.success) throw new Error(info.error);

      const { type, modelVersions } = info.data;

      if (!define.path.includes(type.toLowerCase())) {
        throw new Error(
          `civital model type is ${type}, placement is ${define.path}`
        );
      }

      const version = modelVersions.find(
        (m) => String(m.id) === String(it.version_id)
      );
      if (!version)
        throw new Error(`version not found, ${it.model_id}/${it.version_id}`);
      const file = version.files.find((it) => it.primary);
      if (!file)
        throw new Error(
          `primary files is not found, ${it.model_id}/${it.version_id}`
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
  return entries.length > 0 ? entries.join("\n\n") : null;
}

const data = (
  await Promise.all(getDefines().flatMap(modelsToAriaInput))
).filter((it) => it !== null);

Bun.write("manifest.aria2.txt", data.join("\n"));
