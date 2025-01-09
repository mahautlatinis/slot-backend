import { Client } from "../deps.ts";
import { DB_CONFIG } from "../config.ts";

const client = new Client(DB_CONFIG);

export const connectDB = async () => {
  try {
    await client.connect();
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export const getDBClient = () => client;
