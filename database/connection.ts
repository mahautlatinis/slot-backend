import { Client } from "../deps.ts";

export const client = new Client({
  user: "postgres",
  password: "postgres",
  database: "deno_users",
  hostname: "localhost",
  port: 5432,
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};
