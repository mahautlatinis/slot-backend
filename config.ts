import { config } from "./deps.ts";

const ENV = config();
export const DB_CONFIG = {
  user: ENV.DB_USER,
  database: ENV.DB_NAME,
  hostname: ENV.DB_HOST,
  password: ENV.DB_PASS,
  port: Number(ENV.DB_PORT),
};
export const ENVIRONMENT = ENV.ENVIRONMENT || "local";
