export const CIVITAL_MODEL_API_URL = "https://civitai.com/api/v1/models/";

export type File = {
  id: number;
  type: "Model" | "Archive"; // TODO - to string union
  downloadUrl: string;
  name: string;
  hashes: {
    CRC32: string;
    SHA256: string;
    BLAKE3: string;
  };
  primary: boolean;
};
type Version = {
  id: number;
  name: string;
  modelId: number;
  baseModel: string;
  files: File[];
};

type CivitalModel = {
  id: number;
  name: string; // "Samuraibot.safetensors",
  description?: string;
  type: "LORA" | "Checkpoint" | "TextualInversion" | "Poses"; // LORA
  modelVersions: Version[];
};

export async function getCivitalModelInfo(modelId: string) {
  const response = await fetch(new URL(modelId, CIVITAL_MODEL_API_URL));
  if (response.status > 299) {
    return { success: false, error: response.statusText } as const;
  }
  const data = await response.json<CivitalModel>();
  return { success: true, data } as const;
}
