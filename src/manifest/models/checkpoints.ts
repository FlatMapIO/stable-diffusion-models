import { Model } from "~/types";

export default {
  huggingface: [
    {
      repo_id: "stabilityai/stable-diffusion-xl-base-1.0",
      filename: "sd_xl_base_1.0.safetensors",
    },
    {
      repo_id: "stabilityai/stable-diffusion-xl-base-1.0",
      filename: "sd_xl_base_1.0_0.9vae.safetensors",
    },
    {
      repo_id: "stabilityai/stable-diffusion-xl-refiner-1.0",
      filename: "sd_xl_refiner_1.0.safetensors",
    },
    {
    repo_id: "stabilityai/stable-diffusion-xl-refiner-1.0",
      filename: "sd_xl_refiner_1.0_0.9vae.safetensors",
    },

    {
      repo_id: "runwayml/stable-diffusion-v1-5",
      filename: "v1-5-pruned-emaonly.ckpt",
    },

    // unCLIP models
    // {
    //   repo_id: "comfyanonymous/illuminatiDiffusionV1_v11_unCLIP",
    //   filename: "illuminatiDiffusionV1_v11-unclip-h-fp16.safetensors",
    // },
  ],
  civitai: [
    {
      desc: "DynaVision XL - All-in-one stylized 3D SFW and NSFW output, no refiner needed!",
      refer: "https://civitai.com/models/122606",
      alias: "dyna-vision-0.5.3.4-sdxl",
      model_id: "122606",
      version_id: "169718",
    },
    {
      name: "Juggernaut XL",
      refer: "https://civitai.com/models/133005",
      desc: "<p>The wild journey continues with<strong> Juggernaut,</strong> but this time ba",
      model_id: "133005",
      version_id: "166909",
      sha256: "70229E1D563A36FDF9F006368611DD34A176E2BB9DBE9F29696ECAABA3969521",
      alias: "juggernautXL_version5-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/166909"
    },
    {
      desc: "Dark Sushi 2.5D 大颗寿司2.5D",
      refer: "https://civitai.com/models/48671",
      model_id: "48671",
      version_id: "141866",
      alias: "dark-sushi-2.5d-sd15",
    },
    {
      desc: "ReV Animated v1.2.2 EOL",
      alias: "rev-animated-v1.2.2-sd15",
      refer: "https://civitai.com/models/7371?modelVersionId=46846",
      model_id: "7371",
      version_id: "46846",
    },
    {
      desc: "[Lah] Mysterious | SDXL",
      refer: "https://civitai.com/models/118441/lah-mysterious-or-sdxl",
      model_id: "118441",
      version_id: "162380",
      alias: "mysterious-v4.0-sdxl",
    },
    {
      desc: "Starlight XL 星光 Animated v2",
      refer: "https://civitai.com/models/143043/starlight-xl-animated",
      model_id: "143043",
      version_id: "162796",
      alias: "starlight-v2-sdxl",
    },
    {
      desc: "3D Animation Diffusion v1.0",
      refer: "https://civitai.com/models/118086/3d-animation-diffusion",
      model_id: "118086",
      version_id: "128046",
      alias: "3d-animation-diffusion-v1.0-sd15",
    },
    {
      desc: "SDXL FaeTastic v1.6",
      refer: "https://civitai.com/models/129681/sdxl-faetastic",
      model_id: "129681",
      version_id: "157988",
      alias: "faetastic-v1.6-sdxl",
    },
    {
      desc: "SDVN5-3DCuteWave v1.0 (score 3)",
      refer: "https://civitai.com/models/103178/sdvn5-3dcutewave",
      alias: "3d-cute-wave-v1.0-sd15",
      model_id: "103178",
      version_id: "110455",
    },
    {
      refer: "https://civitai.com/models/4823/deliberate",
      model_id: "4823",
      version_id: "156110",
      alias: "deliberate-v3-sdxl",
    },
    {
      desc: "AWPainting v1.2",
      model_id: "84476",
      alias: "aw-painting-v1.2-sd15",
      refer: "https://civitai.com/models/84476",
      version_id: "156202",
    },
    {
      desc: "Wow_XL v1.0",
      alias: "wow-v1.0-sd15",
      refer: "https://civitai.com/models/147933/wowxl",
      model_id: "147933",
      version_id: "165039",
    },
    {
      desc: "TQ - WonderfulWorldXL v2.0",
      alias: "tq-wonderfulworld-v2.0-sdxl",
      refer: "https://civitai.com/models/145199/tq-wonderfulworldxl",
      model_id: "145199",
      version_id: "167115",
    },
    {
      model_id: "9409",
      desc: "万象熔炉 | Anything V5/Ink",
      alias: "anything-v5-sd15",
      refer: "https://civitai.com/models/9409?modelVersionId=90854",
      version_id: "90854",
    },
  ],

  url: [],
} satisfies Model;
