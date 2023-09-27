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
  const args = ["continue=true", `dir=${dir}`];
  if (out) {
    args.push(`out=${out}`);
  }
  if (checksum) {
    args.push(`checksum=${checksum.type}=${checksum.value}`);
  }
  return [url, ...args.map((it) => "  " + it)].join("\n");
}
