/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" /
interface ImportMetaEnv {
  readonly PUBLIC_RAINDROP_TOKEN: string;
  readonly PUBLIC_RAINDROP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
