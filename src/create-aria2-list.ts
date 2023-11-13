import { globbySync } from 'globby'
import * as path from 'node:path'
import * as fs from 'node:fs'
import { createAria2DownloadEntry } from './lib/aria2'
import { getCivitaiModelInfo, CIVITAI_MODEL_API_URL } from './lib/civitai'
import { getHfBlobInfo, resolveHfFileUrl } from './lib/hf'
import { Model } from './types'
const manifestFolder = path.join(import.meta.dir, 'manifest')
const pattern = path.join(manifestFolder, '**/*.ts')

type Define = {
  path: string
  model: Model
}

function getDefines() {
  const files = globbySync(pattern)
  const defines: Define[] = []

  for (const file of files) {
    const code = import.meta.require(file)

    const codeFile = path.relative(import.meta.dir, file)
    const codePath = codeFile.slice('manifest/'.length, -3)
    if ('default' in code) {
      defines.push({
        path: codePath,
        model: code.default as Model,
      })
    }
  }

  return defines
}

async function modelsToAriaInput(define: Define) {
  const tasks: (() => Promise<string>)[] = []

  for (const it of define.model.huggingface ?? []) {
    const url = resolveHfFileUrl({
      repoId: it.repo_id,
      filename: it.filename,
    })

    tasks.push(async () => {
      const info = await getHfBlobInfo({
        repo_id: it.repo_id,
        filename: it.filename,
      })

      /**
       * http://server/file.iso
       * dir=/iso_images
       * out=file.img
       */
      const entry = createAria2DownloadEntry({
        url: url,
        dir: define.path,
        checksum: { type: 'sha-256', value: info.sha256 },
        out: it.alias
          ? it.alias + path.extname(it.filename)
          : path.basename(it.filename),
      })
      return entry
    })
  }

  for (const it of define.model.civitai ?? []) {
    tasks.push(async () => {
      const info = await getCivitaiModelInfo(it.model_id)
      if (!info.success) throw new Error(`model not found: ${it.model_id}`)
      const { type, modelVersions } = info.data

      if (
        (type === 'Checkpoint' && !define.path.match(/checkpoints|vae/)) ||
        (type === 'LORA' && !define.path.endsWith('loras')) ||
        (type === 'TextualInversion' && !define.path.endsWith('embeddings'))
      ) {
        throw new Error(
          `civitai model type is not match? type=${type}, placement=${define.path}`,
        )
      }

      const version = modelVersions.find(
        (m) => String(m.id) === String(it.version_id),
      )
      if (!version)
        throw new Error(
          `model=${it.model_id} version=${it.version_id} not found.\nInspect using 'bun src/civitai-view.ts ${it.model_id}'`,
        )

      const file = version.files.find(
        (file) => String(file.id) === String(it.file_id),
      )
      if (!file) {
        throw new Error(
          `file not found model_id=${it.model_id} version_id=${it.version_id} file_id=${it.file_id}`,
        )
      }

      const entry = createAria2DownloadEntry({
        url: file.downloadUrl,
        dir: define.path,
        out: it.alias ? it.alias + path.extname(file.name) : file.name,
        checksum: { type: 'sha-256', value: file.hashes.SHA256 },
      })
      return entry
    })
  }
  for (const it of define.model.url ?? []) {
    tasks.push(async () =>
      createAria2DownloadEntry({
        url: it.downloadUrl,
        dir: define.path,
        out: it.filename,
      }),
    )
  }

  const entries = await Promise.all(tasks.map((it) => it()))
  return entries.length === 0 ? `# ${define.path}` : entries.join('\n\n')
}




const runPromises = async <T>(promises: Promise<T>[], concurrency: number): Promise<T[]> => {
    const results: T[] = [];

    for (let index = 0; index < promises.length; index += concurrency) {
        const chunk: Promise<T>[] = promises.slice(index, index + concurrency);
        const chunkResults = await Promise.all(chunk);
        results.push(...chunkResults);
    }

    return results;
};


async function main() {

  // const data = await Promise.all()
  const data = await runPromises(getDefines().flatMap(modelsToAriaInput), 3)

  if (!fs.existsSync('./storage')) {
    fs.mkdirSync('./storage')
  }

  // fs.writeFileSync('./storage/manifest.aria2.txt', data.join('\n'))
  Bun.write('./storage/manifest.aria2.txt', data.join('\n'))
}

main()
