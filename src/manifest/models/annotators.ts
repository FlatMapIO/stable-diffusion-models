import { Model } from "~/types";

export default {
  huggingface: [
    // https://github.com/SeargeDP/SeargeSDXL/blob/main/installer/SeargeSDXL-Installer.py
    {
      repo_id: "lllyasviel/Annotators",
      filename: "ControlNetHED.pth",
    },
    {
      repo_id: "lllyasviel/Annotators",
      filename: "res101.pth",
    },
  ],
} satisfies Model;
