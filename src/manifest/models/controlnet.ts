import { Model } from "~/types";

export default {
  huggingface: [
    {
      refer: "https://huggingface.co/stabilityai/control-lora",
      repo_id: "stabilityai/control-lora",
      filename: "control-LoRAs-rank256/control-lora-canny-rank256.safetensors",
    },
    {
      refer: "https://huggingface.co/stabilityai/control-lora",
      repo_id: "stabilityai/control-lora",
      filename: "control-LoRAs-rank256/control-lora-depth-rank256.safetensors",
    },
    {
      repo_id: "stabilityai/control-lora",
      filename:
        "control-LoRAs-rank256/control-lora-recolor-rank256.safetensors",
    },
    {
      repo_id: "stabilityai/control-lora",
      filename: "control-LoRAs-rank256/control-lora-sketch-rank256.safetensors",
    },

    // sd 1.5
    ...["canny", "inpaint", "openpose"].map((it) => ({
      repo_id: "comfyanonymous/ControlNet-v1-1_fp16_safetensors",
      filename: `control_v11p_sd15_${it}_fp16.safetensors`,
    })),

    // =========================================================================
    // code:        https://github.com/TencentARC/T2I-Adapter
    // example:     https://comfyanonymous.github.io/ComfyUI_examples/controlnet/
    // - Note:
    //   * T2I-Adapter 比 ControlNet 高效得多，因此我强烈推荐它们。ControlNet 会显着降低生成速度，而 T2I 适配器对生成速度的负面影响几乎为零。
    //   * 在 ControlNets 中，ControlNet 模型每次迭代运行一次。对于 T2I-Adapter，模型总共运行一次。
    //   * NOTE: T2I 适配器比 controlnet 需要更少的处理能力，但可能会产生更差的结果。
    //   * T2I-Adapter 的使用方式与 ComfyUI 中的 ControlNet 相同：使用 ControlNetLoader 节点。
    // - 精确控制 AI 图像生成的破冰方案，ControlNet 和 T2I-Adapter: https://zhuanlan.zhihu.com/p/608609941

    {
      refer: "https://huggingface.co/TencentARC",
      desc: "线条引导",
      repo_id: "TencentARC/t2i-adapter-lineart-sdxl-1.0",
      filename: "diffusion_pytorch_model.safetensors",
      alias: "t2iadapter-xl-lineart",
    },
    {
      refer: "https://huggingface.co/TencentARC",
      desc: "关键点引导",
      repo_id: "TencentARC/t2i-adapter-openpose-sdxl-1.0",
      filename: "diffusion_pytorch_model.safetensors",
      alias: "t2iadapter-xl-openpose",
    },
    {
      refer: "https://huggingface.co/TencentARC",
      desc: "素描引导",
      repo_id: "TencentARC/t2i-adapter-sketch-sdxl-1.0",
      filename: "diffusion_pytorch_model.safetensors",
      alias: "t2iadapter-xl-sketch",
    },

    {
      refer: "https://huggingface.co/thibaud/controlnet-openpose-sdxl-1.0",
      desc: "ControlNet OpenPose v2 sdxl",
      repo_id: "thibaud/controlnet-openpose-sdxl-1.0",
      filename: "control-lora-openposeXL2-rank256.safetensors",
    },
    {
      refer:
        "https://huggingface.co/SargeZT/controlnet-sd-xl-1.0-softedge-dexined",
      desc: "ControlNet SoftImage sdxl",
      repo_id: "SargeZT/controlnet-sd-xl-1.0-softedge-dexined",
      filename: "controlnet-sd-xl-1.0-softedge-dexined.safetensors",
    },

    // SD 1.5
    // TODO
  ],
} satisfies Model;
