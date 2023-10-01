import { basename } from "path";
import { Model } from "~/types";

console.log(
  "⚠️ fooocus_expansion folder shuold be performed code sync later: https://github.com/FlatMapIO/Fooocus-MRE-Docker/blob/huodon/prepare.fish#L28C3-L30"
);

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
