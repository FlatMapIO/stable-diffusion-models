import { Model } from "src/types";

export default {
  huggingface: [
    {
      repo_id: "sberbank-ai/Real-ESRGAN",
      filename: "RealESRGAN_x2.pth",
    },
    {
      repo_id: "sberbank-ai/Real-ESRGAN",
      filename: "RealESRGAN_x4.pth",
    },
    {
      repo_id: "lllyasviel/misc",
      filename: "fooocus_upscaler_s409985e5.bin",
    },
    // {
    //   repo_id: "uwg/upscaler",
    //   filename: "ESRGAN/4x-UltraSharp.pth",
    // },
    // {
    //   repo_id: "uwg/upscaler",
    //   filename: "ESRGAN/4x_NMKD-Siax_200k.pth",
    // },
    // {
    //   repo_id: "uwg/upscaler",
    //   filename: "ESRGAN/4x_Nickelback_70000G.pth",
    // },
  ],
  url: [
    {
      url: "https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth",
      filename: "RealESRGAN_x4plus.pth",
    },
  ],
} as Model;
