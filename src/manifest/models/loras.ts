import { Model } from "~/types";

export default {
  huggingface: [
    {
      refer:
        "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/tree/main",
      repo_id: "stabilityai/stable-diffusion-xl-base-1.0",
      filename: "sd_xl_offset_example-lora_1.0.safetensors",
    },
  ],
  civitai: [
    {
      // Pop Mart Toy

      desc: "Pop Mart Toy",
      refer: "https://civitai.com/models/104024",
      model_id: "104024",
      version_id: "111456",
      alias: "pop-mart-toy-v1.0-sd15",
    },
    {
      desc: "xl_more_art-full / xl_real / Enhancer",
      refer: "https://civitai.com/models/124347",
      alias: "xl-more-art-full-xl-real-enhancer-v1.0-sdxl",
      model_id: "124347",
      version_id: "152309",
    },
    {
      desc: "GAME DEV TOOLS 03 / TOPO",
      refer: "https://civitai.com/models/105670/game-dev-tools-03-topo",
      alias: "game-dev-tools-03-topo-v4-sd15",
      model_id: "105670",
      version_id: "117955",
    },

    {
      desc: "niji - Designer_BlindBox v1.0",
      refer: "https://civitai.com/models/111927",
      alias: "niji-designer-blindbox-v1.0-sd15",
      model_id: "111927",
      version_id: "120802",
    },
    {
      desc: "XL - Designer_BlindBox v1.0",
      refer: "https://civitai.com/models/127819/xl-designerblindbox",
      alias: "designer-blindbox-v1.0-sdxl",
      model_id: "127819",
      version_id: "139870",
    },
    {
      desc: "figure_chibi style Q版人物手办风 v1.0",
      refer: "https://civitai.com/models/106970/figurechibi-style-q",
      alias: "figure-chibi-style-q-v1.0-sd15",
      model_id: "106970",
      version_id: "114979",
    },
    {
      desc: "Marble (Make everything into marble)",
      refer:
        "https://civitai.com/models/70538/marble-make-everything-into-marble",
      alias: "marble-sd15",
      model_id: "70538",
      version_id: "75208",
    },
    {
      desc: "XP 3D : C4D,3D style on Midjourney v1.0",
      refer: "https://civitai.com/models/92695/xp-3d-c4d3d-style-on-midjourney",
      alias: "xp-3d-style-on-midjourney-v1.0-sd15",
      model_id: "92695",
      version_id: "98815",
    },
    {
      // blindbox/大概是盲盒

      desc: "blindbox/大概是盲盒 v1 mix",
      refer: "https://civitai.com/models/25995",
      model_id: "25995",
      version_id: "32988",
      alias: "blindbox-v1-mix-sd15",
    },
    {
      // blindbox/大概是盲盒

      desc: "Minion Style - Make your own Minions!",
      refer:
        "https://civitai.com/models/147313/minion-style-make-your-own-minions",
      model_id: "147313",
      version_id: "164270",
      alias: "minion-style-v1.0-sd15",
    },
    {
      // blindbox/大概是盲盒

      desc: "3D rendering style 3DMM_V12",
      refer: "https://civitai.com/models/73756/3d-rendering-style",
      model_id: "73756",
      version_id: "107366",
      alias: "3d-rendering-style-v12-sd15",
    },
    {
      name: "3D模型丨可爱化SDXL版",
      refer: "https://civitai.com/models/138583",
      desc: "<h3 id=\"heading-6\">The cute sdxl version is updated, mainly for the texture of t",
      model_id: "138583",
      version_id: "177483",
      sha256: "D2777C8D7C8A7D6F5773542BBC10A3BF26993687868FE24C83E8AB56370F29F5",
      alias: "3d-model-cute-v2.0-sdxl",
      downloadUrl: "https://civitai.com/api/download/models/177483"
    },
    {
      // blindbox/大概是盲盒

      desc: "Clay Render Style/白模渲染风格 v1.5.5",
      refer: "https://civitai.com/models/108464?modelVersionId=136620",
      model_id: "108464",
      version_id: "136620",
      alias: "clay-render-style-v1.5.5-sd15",
    },
    {
      // 更新了V3版本，调整了眼睛，俗话说眼睛是心灵的窗口。但是目前还是实验性质的，从稳定性上还是推荐v1_mix版本。

      desc: "blindbox/大概是盲盒 v3",
      refer: "https://civitai.com/models/25995",
      model_id: "25995",
      version_id: "48150",
      alias: "blindbox-v3-sd15",
    },
    {
      desc: "3d aniaml v1.0",
      refer: "https://civitai.com/models/128700",
      alias: "3d-aniaml-v1.0-sd15",
      model_id: "128700",
      version_id: "140953",
    },
    {
      name: "T Pose | 1MB Pose LoRA",
      refer: "https://civitai.com/models/87017",
      desc: "<p>T Pose | 1MB Pose LoRA</p><p><br /><strong>T POSE TO ASSERT DOMINANCE!!! YOUR",
      model_id: "87017",
      version_id: "92575",
      sha256:
        "CB8404EFACD2EA1CFDE4DB00A32F3C9DEAF3B31118CA592BFDE009743429C07A",
      alias: "TPose-sd15.safetensors",
      downloadUrl: "https://civitai.com/api/download/models/92575",
    },

    {
      name: "Jack-o-lantern Witch Hat",
      refer: "https://civitai.com/models/154871",
      desc: "<p><a rel=\"ugc\" href=\"https://civitai.com/articles/2397\"><strong><span style=\"co",
      model_id: "154871",
      version_id: "173621",
      sha256: "9795EC876D55E9C73353B94E9B484FDE1744A117C9414C4B7B16209FEA2EF1A5",
      alias: "Jack-o-lantern_Anime-sd15",
      downloadUrl: "https://civitai.com/api/download/models/173621"
    }
  ],
} satisfies Model;
