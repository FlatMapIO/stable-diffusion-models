import { Model } from "src/types";

export default {
  huggingface: [
    {
      repo_id: "stabilityai/control-lora",
      filename: "revision/clip_vision_g.safetensors",
    },
    {
      repo_id: "openai/clip-vit-large-patch14",
      filename: "pytorch_model.bin",
      alias: "clip_vit14",
    },
  ],
} satisfies Model;
