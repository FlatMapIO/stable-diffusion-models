import { basename } from "path";
import { Model } from "~/types";

async function getCodeList() {

  const branch = "moonride-main";

  const data = await fetch(
    `https://api.github.com/repos/MoonRide303/Fooocus-MRE/git/trees/${branch}?recursive=1`
  ).then((it) => it.json<{ tree: { path: string }[] }>());

  return data.tree
    .filter((it) =>
      it.path.startsWith("models/prompt_expansion/fooocus_expansion/")
    )
    .map((it) => ({
      url: `https://raw.githubusercontent.com/MoonRide303/Fooocus-MRE/${branch}/${it.path}`,
      filename: basename(it.path),
    }));
}

const sources = await getCodeList();

export default {
  huggingface: [
    {
      repo_id: "lllyasviel/misc",
      filename: "fooocus_expansion.bin",
      alias: "pytorch_model",
    },
  ],
  // url: [...sources],
} as Model;
