用于管理 stable diffusion 的脚本集

`src/manifest` 中维护了一个结构和 ComfyUI/models 相同的结构， 在 typescript 中声明模型链接， 可以是 huggingface, civitai, url 等。 `bun src/create-aria2-list.ts` 会生成一个 `./storage/manifest.aria2.txt` 文件。`aria2c -i manifest.aria2.txt` 可以将文件清单下载到本地， 并自动跳过已下载的文件。

## Commands

2. 查看 civital 模型, 该脚本用于模型版本选择， 最终打印一个模型下载的 config item

```bash
bun src/models/civital-view.ts <model-id>
```

3. 创建 aria2c 下载清单

```bash
bun src/create-aria2-list.ts
cd storage
aria2c -i manifest.aria2.txt
```

> 注意: aria2c 识别`https_proxy` 变量自动代理

# Resources

- [ComfyUI-Impact-Pack](https://github.com/ltdrdata/ComfyUI-Impact-Pack)
- [ComfyUI's ControlNet Auxiliary Preprocessors](https://github.com/Fannovel16/comfyui_controlnet_aux)
- [ComfyUI-Manager](https://github.com/ltdrdata/ComfyUI-Manager)
  - [ComfyUI Nodes Info](https://ltdrdata.github.io/)
- [Fooocus Advanced](https://github.com/lllyasviel/Fooocus/discussions/117)
- [Rich-Text-to-Image](https://github.com/songweige/rich-text-to-image)
