import { expect, test } from "bun:test";
import { getHfBlobInfo } from "./hf";

test.skip("get HfBlobInfo", async () => {
  const info = await getHfBlobInfo({
    repo_id: "stabilityai/stable-diffusion-xl-refiner-1.0",
    filename: "sd_xl_refiner_1.0.safetensors",
  });

  console.log(info);
  expect(info).not.toBeNull();
});

import { createAria2DownloadEntry } from "./aria2";
test("create aria2 entry", () => {
  const entries = [
    createAria2DownloadEntry({
      url: "https://server",
      dir: "cache",
      out: "test.txt",
      checksum: { type: "sha-256", value: "123" },
    }),
    createAria2DownloadEntry({
      url: "https://server",
      dir: "cache",
      out: "test.txt",
      checksum: { type: "sha-256", value: "123" },
    }),
  ];

  console.log(entries.join("\n\n"));
});
