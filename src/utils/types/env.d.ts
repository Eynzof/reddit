declare namespace NodeJS {
  export interface ProcessEnv {
    REDIS_URL_PROD: string;
    REDIS_URL_DEV: string;
    REDIS_SECRET: string;
    POSTGRES_USERNAME: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DATABASE: string;
    POSTGRES_PORT: string;
    POSTGRES_HOST_PROD: string;
    POSRGRES_HOST_DEV: string;
    PORT: string;
    CORS_ORIGIN: string;
  }
}
