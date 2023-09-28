import { Model } from "~/types";

export default {
  huggingface: [
    {
      refer:
        "https://github.com/ltdrdata/ComfyUI-Impact-Pack/blob/Main/install.py",
      repo_id: "dustysys/ddetailer",
      filename: "mmdet/bbox/mmdet_anime-face_yolov3.pth",
    },
  ],

  url: [
    {
      url: "https://raw.githubusercontent.com/Bing-su/dddetailer/master/config/mmdet_anime-face_yolov3.py",
      filename: "mmdet_anime-face_yolov3.py",
    },
  ],
} satisfies Model;
