declare interface Env {
  readonly NODE_ENV: string;
  readonly NG_APP_GNEWS_API_KEY: string;
}

declare interface ImportMeta {
  readonly env: Env;
}
