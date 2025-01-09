import { pgTable, serial, text, varchar } from "https://deno.land/x/drizzle_orm/mod.ts";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  password: text("password").notNull(),
});
