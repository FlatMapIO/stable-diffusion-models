import { Model } from "~/types";

/**
 * https://comfyanonymous.github.io/ComfyUI_examples/gligen/
 */
export default {
  huggingface: [
    {
      refer: "https://comfyanonymous.github.io/ComfyUI_examples/gligen/",
      repo_id: "comfyanonymous/GLIGEN_pruned_safetensors",
      // gligen_sd14_textbox_pruned.safetensors
      filename: "gligen_sd14_textbox_pruned_fp16.safetensors",
    },
  ],
} satisfies Model;
