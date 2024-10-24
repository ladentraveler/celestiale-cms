/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly STRAPI_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}