const urls = new Set<string>()

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
  if (urls.has(url)) {
    throw new Error(`duplicate url=${url} dir=${dir}`);
  }
  urls.add(url);

  const args = ["continue=true", `dir=${dir}`];
  if (out) {
    args.push(`out=${out}`);
  }
  if (checksum) {
    args.push(`checksum=${checksum.type}=${checksum.value}`);
  }
  return [url, ...args.map((it) => "  " + it)].join("\n");
}
