import { Model } from "src/types";

export default {
  huggingface: [
    {
      refer: "https://comfyanonymous.github.io/ComfyUI_examples/sdxl/#revision",
      desc: "ReVision is very similar to unCLIP but behaves on a more conceptual level. You can pass one or more images to it and it will take concepts from the images and will create new images using them as inspiration.",
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
