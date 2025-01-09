import { db } from "./drizzle.ts";
import { users } from "./schema.ts";

await db.run(
  db.schema.createTable(users).ifNotExists(),
);

console.log("Migration completed!");
