export function resolveHfFileUrl({
  repoId,
  filename,
}: {
  repoId: string;
  filename: string;
}) {
  return `https://hf.co/${repoId}/resolve/main/${filename}`;
}

export async function getHfBlobInfo({
  repo_id,
  filename,
}: {
  repo_id: string;
  filename: string;
}) {
  const url = new URL(`${repo_id}/raw/main/${filename}`, "https://hf.co");

  const txt = await fetch(url).then((it) => it.text());

  const err = `blob info is invalid, repo_id=${repo_id},filename=${filename},url=${url}\n====\n${txt}\n====`;

  if (txt.startsWith("version ")) {
    const lines = txt.split("\n");

    if (lines.length < 3) throw new Error(err);

    const version = lines[0].split(" ")[1];
    const sha256 = lines[1].split(":")[1];
    const size = lines[2].split(" ")[1];
    return { version, sha256, size };
  } else {
    throw new Error(err);
  }
}
