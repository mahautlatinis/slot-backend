import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  driver: "pg",
  dbCredentials: {
    /* url: Deno.env.DATABASE_URL, */
    connectionString: Deno.env.DATABASE_URL as string
  },
  verbose: true,
  strict: true
});