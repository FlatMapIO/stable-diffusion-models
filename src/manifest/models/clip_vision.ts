import { Model } from '~/types'

export default {
  huggingface: [
    {
      refer: 'https://comfyanonymous.github.io/ComfyUI_examples/sdxl/#revision',
      desc: 'ReVision is very similar to unCLIP but behaves on a more conceptual level. You can pass one or more images to it and it will take concepts from the images and will create new images using them as inspiration.',
      repo_id: 'stabilityai/control-lora',
      filename: 'revision/clip_vision_g.safetensors',
    },
    {
      refer: 'fooocus',
      repo_id: 'lllyasviel/misc',
      filename: 'clip_vision_vit_h.safetensors',
    },
    {
      repo_id: 'openai/clip-vit-large-patch14',
      filename: 'pytorch_model.bin',
      alias: 'clip_vit14',
    },

    // ip adapter
    {
      repo_id: 'h94/IP-Adapter',
      filename: 'models/image_encoder/model.safetensors',
      alias: 'ip-adapter-image-encoder-sd15',
    },
    {
      repo_id: 'h94/IP-Adapter',
      filename: 'sdxl_models/image_encoder/model.safetensors',
      alias: 'ip-adapter-image-encoder-sdxl',
    },
  ],
} satisfies Model
