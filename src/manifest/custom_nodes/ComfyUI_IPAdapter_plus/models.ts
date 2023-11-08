import { Model } from '~/types'

export default {
  huggingface: [
    // =========================================================
    // IP-Adapter
    // https://github.com/cubiq/ComfyUI_IPAdapter_plus
    ...[
      'models/ip-adapter_sd15',
      'models/ip-adapter_sd15_light',
      'models/ip-adapter-plus_sd15',
      'models/ip-adapter-plus-face_sd15',
      // ------------------------------------------
      // sdxl
      'sdxl_models/ip-adapter_sdxl',
      // This model requires the use of the SD1.5 encoder despite being for SDXL checkpoints
      'sdxl_models/ip-adapter_sdxl_vit-h',
      // Same as obove
      'sdxl_models/ip-adapter-plus_sdxl_vit-h',
      'sdxl_models/ip-adapter-plus-face_sdxl_vit-h'
    ].map((it) => ({
      repo_id: 'h94/IP-Adapter',
      filename: `${it}.safetensors`,
    })),
  ],
} satisfies Model
