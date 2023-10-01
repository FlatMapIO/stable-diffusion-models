

## Commands

1. Edit `src/models/*.ts`

2. Pick civital model

```
bun src/models/civital-view.ts <model-id>

```

3. Create aria2 download list file

```
bun src/create-aria2-list.ts


# manifest.aria2.txt will be created

```

4. Download files to modules

```
aria2c -i manifest.aria2.txt
```

5. Link models

```
rm -rf ComfyUI/models Fooocus-MRE/models Fooocus/models

ln -s $PWD/models ComfyUI/
ln -s $PWD/models  Fooocus-MRE/
ln -s $PWD/models  Fooocus/
```

# Resources

- [ComfyUI-Impact-Pack](https://github.com/ltdrdata/ComfyUI-Impact-Pack)
- [ComfyUI's ControlNet Auxiliary Preprocessors](https://github.com/Fannovel16/comfyui_controlnet_aux)
- [ComfyUI-Manager](https://github.com/ltdrdata/ComfyUI-Manager)
  - [ComfyUI Nodes Info](https://ltdrdata.github.io/)
- [Fooocus Advanced](https://github.com/lllyasviel/Fooocus/discussions/117)
- [Rich-Text-to-Image](https://github.com/songweige/rich-text-to-image)
