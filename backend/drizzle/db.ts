import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema"
import postgres from "postgres"

const client = Deno.env.get("DATABASE_URL") || "";
export const db = drizzle(client,{ schema, logger: true})