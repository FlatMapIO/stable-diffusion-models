type ModelBase = {
  name?: string;
  desc?: string;
  refer?: string;
  sha256?: string;
};
export type HFModel = ModelBase & {
  repo_id: string;
  filename: string;
  alias?: string;
};
export type CivitaiModel = ModelBase & {
  model_id: string;
  version_id: string
  file_id: string
  alias?: string;
  downloadUrl?: string
};
export type UrlModel = ModelBase & {
  downloadUrl: string;
  filename: string;
};

export type Model = {
  huggingface?: HFModel[];
  civitai?: CivitaiModel[];
  url?: UrlModel[];
};
