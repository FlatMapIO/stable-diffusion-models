type ModelBase = {
  desc?: string;
  refer?: string;
};
export type HFModel = ModelBase & {
  repo_id: string;
  filename: string;
  alias?: string;
};
export type CivitaiModel = ModelBase & {
  model_id: string;
  version_id: string;
  alias?: string;
};
export type UrlModel = ModelBase & {
  url: string;
  filename: string;
};

export type Model = {
  huggingface?: HFModel[];
  civital?: CivitaiModel[];
  url?: UrlModel[];
};
