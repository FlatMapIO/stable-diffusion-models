import { Model } from "~/types";

export default {
  huggingface: [
    // =========================================================
    // IP-Adapter
    // https://github.com/cubiq/ComfyUI_IPAdapter_plus
    ...[
      "models/ip-adapter_sd15.bin",
      "models/ip-adapter_sd15_light.bin",
      "models/ip-adapter-plus_sd15.bin",
      "models/ip-adapter-plus-face_sd15.bin",
      "sdxl_models/ip-adapter_sdxl.bin",

      // This model requires the use of the SD1.5 encoder despite being for SDXL checkpoints
      "sdxl_models/ip-adapter_sdxl_vit-h.bin",
      // Same as obove
      "sdxl_models/ip-adapter-plus_sdxl_vit-h.bin",
    ].map((it) => ({
      repo_id: "h94/IP-Adapter",
      filename: it,
    })),
  ],
} satisfies Model;
