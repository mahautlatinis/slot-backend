import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const connectionString = Deno.env.get("DATABASE_URL") || "";

console.log("ConnectionString", connectionString)

const client = postgres(connectionString as string, {max: 1});

async function main() {
    await migrate(drizzle(client), {
        migrationsFolder: "./drizzle/"
    })
    await client.end();
}

main()