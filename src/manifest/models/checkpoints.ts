import { Model } from "~/types";

export default {
  huggingface: [
    {
      repo_id: "stabilityai/stable-diffusion-xl-base-1.0",
      filename: "sd_xl_base_1.0_0.9vae.safetensors",
    },
    {
      repo_id: "stabilityai/stable-diffusion-xl-refiner-1.0",
      filename: "sd_xl_refiner_1.0_0.9vae.safetensors",
    },

    {
      refer: "https://huggingface.co/segmind/SSD-1B",
      repo_id: "segmind/SSD-1B",
      filename: "SSD-1B-modelspec.safetensors",
    },
    {
      repo_id: "runwayml/stable-diffusion-v1-5",
      filename: "v1-5-pruned-emaonly.ckpt",
    },

    {
      refer: "https://huggingface.co/Hemlok/NutmegMix",
      repo_id: "Hemlok/NutmegMix",
      filename: "Models/NutmegMix-XL.safetensors",
    },
    {
      refer: "https://huggingface.co/Hemlok/REV-Mix",
      repo_id: "Hemlok/REV-Mix",
      filename: "Models/REV-XL-V2.safetensors",
    },
    ...[
      "realisticVisionV51_v51VAE.safetensors",
      "juggernautXL_version6Rundiffusion.safetensors",
      "bluePencilXL_v050.safetensors",
      "realisticStockPhoto_v10.safetensors",
      "realisticVisionV51_v51VAE.safetensors",
    ].map((it) => ({
      repo_id: "lllyasviel/fav_models",
      filename: `fav/${it}`,
    })),

    // unCLIP models
    // {
    //   repo_id: "comfyanonymous/illuminatiDiffusionV1_v11_unCLIP",
    //   filename: "illuminatiDiffusionV1_v11-unclip-h-fp16.safetensors",
    // },
  ],
  civitai: [
    {
      name: "DynaVision XL - All-in-one stylized 3D SFW and NSFW output, no refiner needed!",
      refer: "https://civitai.com/models/122606",
      desc: '<p>Like the work I do and want to help support me? <a target="_blank" rel="ugc" ',
      model_id: "122606",
      version_id: "198962",
      file_id: "152330",
      sha256:
        "FD9CDC26C3B6D1F30BACBC435E455E925E35622E4873CCFC55FD1C88E980585E",
      alias: "dynavisionXLAllInOneStylized_release0557Bakedvae-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/198962",
    },
    {
      name: "Juggernaut XL",
      refer: "https://civitai.com/models/133005",
      desc: "<p><strong>Important: VAE is already baked in</strong></p><p><strong>Edit: Inpai",
      model_id: "133005",
      version_id: "198530",
      file_id: "151968",
      sha256:
        "1FE6C7EC54C786040CDABC7B4E89720069D97096922E20D01F13E7764412B47F",
      alias: "juggernautXL_version6Rundiffusion-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/198530",
    },
    {
      name: "FormulaXL - 公式XL (ComfyUI)",
      refer: "https://civitai.com/models/129922",
      desc: '<p><strong><em><span style="color:rgb(250, 82, 82)">Now that you have been lured',
      model_id: "129922",
      version_id: "160525",
      file_id: "120832",
      sha256:
        "F561D8F8E14F903ED8B0A0BB72D5B6A21ABFBFC03CB9077AA02A74A3C6806781",
      alias: "formulaxlXLComfyui_v20Pruned-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/160525",
    },
    {
      name: "Dark Sushi 2.5D 大颗寿司2.5D",
      refer: "https://civitai.com/models/48671",
      desc: "<p>Recommend:</p><p>vae-ft-mse-840000-ema</p><p>use highres fix to improve quali",
      model_id: "48671",
      version_id: "141866",
      file_id: "104339",
      sha256:
        "BB32AD727A67F5EA5D7047646BD050F680EFFD3F2C589E38E042AD69A479F619",
      alias: "darkSushi25D25D_v40-sd15",
      downloadUrl: "https://civitai.com/api/download/models/141866",
    },
    {
      name: "ReV Animated",
      refer: "https://civitai.com/models/7371",
      desc: '<h3 id="heading-415">Quick Update 2:<br />I am no longer maintaining/updating th',
      model_id: "7371",
      version_id: "46846",
      file_id: "34909",
      sha256:
        "4199BCDD147E11328D5F3560301D5A7AB4AC7EEEFBF49DC3EB663CB3E772B9AC",
      alias: "revAnimated_v122EOL-sd15",
      downloadUrl: "https://civitai.com/api/download/models/46846",
    },
    {
      name: "[Lah] Mysterious | SDXL",
      refer: "https://civitai.com/models/118441",
      desc: '<h1 id="heading-260"><span style="color:rgb(190, 75, 219)">Mysterious - SDXL Ver',
      model_id: "118441",
      version_id: "162380",
      file_id: "122478",
      sha256:
        "DA5DDCE1949B9DC03286662FE62D47A3A071CF719CB305BD295EAD615CC6518B",
      alias: "LahMysteriousSDXL_v40-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/162380",
    },
    {
      name: "Starlight XL 星光 Animated",
      refer: "https://civitai.com/models/143043",
      desc: '<p>⚙️ ComfyUI workflows included <span style="color:rgb(209, 213, 219)">🇯🇵 Dan',
      model_id: "143043",
      version_id: "182077",
      file_id: "139722",
      sha256:
        "00A14CDEAA76C790B0CD0E541923CC10E2CB94C4D70A23F47580A06AE57DC3D2",
      alias: "starlightXLAnimated_v3-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/182077",
    },
    {
      name: "3D Animation Diffusion",
      refer: "https://civitai.com/models/118086",
      desc: '<h1 id="heading-2586">3D Animation Diffusion</h1><h2 id="heading-2587">3D Animat',
      model_id: "118086",
      version_id: "128046",
      file_id: "92669",
      sha256:
        "31829C378DBB34E6F9D48EC8A06F753EE811F6FC531358D4140BF9A0C21C7B61",
      alias: "3dAnimationDiffusion_v10-sd15",
      downloadUrl: "https://civitai.com/api/download/models/128046",
    },
    {
      name: "SDVN5-3DCuteWave",
      refer: "https://civitai.com/models/103178",
      desc: '<p><span style="color:rgb(250, 176, 5)">My model is already on the Mage platform',
      model_id: "103178",
      version_id: "110455",
      file_id: "78060",
      sha256:
        "133FBCA216C942E387FACE6FAE9ADB5F3D13479BF3D524A8DF350B20C4BE6C04",
      alias: "sdvn53dcutewave_v10-sd15",
      downloadUrl: "https://civitai.com/api/download/models/110455",
    },
    {
      name: "AWPainting",
      refer: "https://civitai.com/models/84476",
      desc: "<p><strong>AWPainting 1.2 What's New</strong></p><p>在1.1的基础上提升了光照表现及画面表现的细腻程度，更有",
      model_id: "84476",
      version_id: "156202",
      file_id: "119916",
      sha256:
        "3D1B3C42EC704F3397D9E2968E3E544EDA111741E10793AFD78FAA8148B36E12",
      alias: "awpainting_v12-sd15",
      downloadUrl: "https://civitai.com/api/download/models/156202",
    },
    {
      name: "WoW_XL v2",
      refer: "https://civitai.com/models/147933",
      desc: "<p>As the name entails, this model is all about the wow factor. It's aimed at pr",
      model_id: "147933",
      version_id: "184235",
      file_id: "141602",
      sha256:
        "6E8D4871F88A3939CC4A4730D5998BBC96D5CE9E393794FFB34C6D59ED87AEB5",
      alias: "wowXLV2_v2-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/184235",
    },
    {
      name: "TQ - WonderfulWorldXL",
      refer: "https://civitai.com/models/145199",
      desc: "",
      model_id: "145199",
      version_id: "167115",
      file_id: "126696",
      sha256:
        "8AB036E2818D9F631D0FAB1CE7D9D258F439EC6E0FE16A8DADE9EC6F07F61D62",
      alias: "tqWonderfulworldxl_v20-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/167115",
    },
    {
      name: "万象熔炉 | Anything V5/Ink",
      refer: "https://civitai.com/models/9409",
      desc: '<h3 id="heading-2"><strong><span style="color:#fa5252">不要问为什么别的模型能出这个模型不能出，或者为什么',
      model_id: "9409",
      version_id: "90854",
      file_id: "62542",
      sha256:
        "A1535D0A42CE4F8822ED034C15AEFF62CC515836E388511D294645D11DB8C10D",
      alias: "AnythingV5Ink_ink-sd15",
      downloadUrl: "https://civitai.com/api/download/models/90854",
    },
    {
      name: "SDXL Yamer's Anime 🌟💖😏 Ultra Infinity",
      refer: "https://civitai.com/models/76489",
      desc: '<h3 id="checkpoint-type-conceptgeneral-useanimefantasy-or-model-based-on-infinit',
      model_id: "76489",
      version_id: "198724",
      file_id: "152194",
      sha256:
        "3C624BF23A9D1FE96218E967BAB15B4B9150D92637A13079CCC039519451E64D",
      alias: "sdxlYamersAnimeUltra_ysAnimeV4-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/198724",
    },
    {
      name: "SDXL Unstable Diffusers ☛ YamerMIX",
      refer: "https://civitai.com/models/84040",
      desc: '<h2 id="heading-31"><strong><em><u><span style="color:rgb(71, 186, 0)">Checkpoin',
      model_id: "84040",
      version_id: "196039",
      file_id: "150135",
      sha256:
        "B4AB313D842FBAB0C6EBFCDF7AEEA6B3FDB47B903D1F507CDDE9CDAE0835B13D",
      alias: "sdxlUnstableDiffusers_v8HeavensWrathVAE-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/196039",
    },
    {
      name: "DeepBlue XL",
      refer: "https://civitai.com/models/128397",
      desc: '<h1 id="heading-15">DeepBlue XL</h1><p>This model is a illustration merge model.',
      model_id: "128397",
      version_id: "189102",
      file_id: "146523",
      sha256:
        "B9FCA6DF9B9E77FA8363643CD91A9E34BBEAE2D85C60F48241A8F5F8D2563EAF",
      alias: "deepblueXL_v020-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/189102",
    },
  ],

  url: [],
} satisfies Model;
