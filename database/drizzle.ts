import { drizzle } from "https://deno.land/x/drizzle_orm/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { DB_CONFIG } from "../config.ts";

const client = new Client(DB_CONFIG);

await client.connect();

export const db = drizzle(client);
