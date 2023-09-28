import { basename, extname } from "node:path";
import { exit } from "node:process";
import { log, select } from "prask";
import { getCivitaiModelInfo, type File } from "./lib/civitai";
const argv = Bun.argv.slice(2);

function usage() {
  if (argv.length < 1) {
    console.log(`Usage: bun ${basename(process.argv[1])} <model-id>`);
    exit(1);
  }
}

usage();

async function main(modelId: string) {
  try {
    const info = await getCivitaiModelInfo(modelId);

    if (!info.success) {
      log.error(info.error);
      exit(1);
    }

    const model = info.data;

    log.info(
      `${model.type} | ${model.name} | ${(model.description ?? "NONE")?.slice(
        0,
        80
      )}`
    );

    let versionId: string | null = null;
    if (model.modelVersions.length === 1) {
      versionId = String(model.modelVersions[0].id);
    } else {
      const selectVersion = await select({
        options: model.modelVersions.map((it) => `${it.name}`),
        searchable: true,
        message: "Select model version",
      });
      if (selectVersion) {
        versionId =
          model.modelVersions
            .find((it) => it.name === selectVersion)
            ?.id?.toString() ?? null;
      }
    }

    if (!versionId) {
      log.warning("no version selected");
      return;
    }

    const version = model.modelVersions.find(
      (it) => String(it.id) === versionId
    )!;

    const baseOutput = {
      name: model.name,
      refer: `https://civitai.com/models/${modelId}`,
      desc: model.description?.slice(0, 80) ?? "",
      model_id: modelId,
      version_id: versionId,
    };

    let file: File | null = null;

    if (version.files.length === 1) {
      file = version.files[0];
    } else {
      const pid = version.files.findIndex((it) => it.primary);

      const selectFile = await select({
        message: "Select file",
        searchable: true,
        options: version.files.map((it, index) =>
          index === pid
            ? `${it.id} | ${it.name} | PRIMARY`
            : `${it.id} | ${it.name}`
        ),
      });

      if (selectFile) {
        file = version.files.find((it) => it.id === Number(selectFile))!;
      }
    }

    if (!file) {
      log.warning("no file selected");
      return;
    }

    const filename = file.name.replace(/\s+/g, "-");
    const ext = extname(filename);
    const name = filename.slice(0, -ext.length);

    const baseModel = version.baseModel.toLowerCase();
    const alias = baseModel.includes("sdxl")
      ? `${name}-sdxl${ext}`
      : baseModel.includes("1.5")
      ? `${name}-sd15${ext}`
      : filename;

    console.log({
      ...baseOutput,
      sha256: file.hashes.SHA256,
      alias: alias,
      downloadUrl: file.downloadUrl,
    });
  } catch (error) {
    console.error(error);
  }
}

main(argv[0]);
