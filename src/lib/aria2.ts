const urls = new Set<string>();

const pathnames = new Set<string>();

export function createAria2DownloadEntry({
  url,
  dir,
  out,
  checksum,
}: {
  url: string;
  dir: string;
  out?: string;
  checksum?: {
    type: "sha-256";
    value: string;
  };
}): string {
  console.log(`add url=${url} dir=${dir}`);

  if (!url) {
    throw new Error(`url is required, dir=${dir}`);
  }

  if (urls.has(url)) {
    throw new Error(`duplicate url=${url} dir=${dir}`);
  }
  urls.add(url);

  if (pathnames.has(`${dir}:${out}`)) {
    throw new Error(`duplicate dir=${dir} out=${out}`);
  }

  pathnames.add(`${dir}:${out}`);

  const args = ["continue=true", `dir=${dir}`];
  if (out) {
    args.push(`out=${out}`);
  }
  if (checksum) {
    args.push(`checksum=${checksum.type}=${checksum.value}`);
  }
  return [url, ...args.map((it) => "  " + it)].join("\n");
}
