/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CLIENT_ID: string;
  readonly PUBLIC_REDIRECT_URL: string;
  readonly PUBLIC_API_URL: string;
}