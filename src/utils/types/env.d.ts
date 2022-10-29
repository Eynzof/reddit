declare namespace NodeJS {
  export interface ProcessEnv {
    STATUS: string;
    REDIS_URL_DEV: string;
    REDIS_URL_PROD: string;
    REDIS_SECRET: string;
    POSTGRES_PORT: string;
    POSTGRES_USERNAME: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DATABASE: string;
    POSTGRES_HOST_PROD: string;
    POSTGRES_HOST_DEV: string;
    TOKEN_ACCESS_LIFETIME: string;
    JWT_SECRET: string;
    NODE_DEV: string;
  }
}
