import { bcrypt } from "../deps.ts";
import { getDBClient } from "./client.ts";

export const seedUsers = async () => {
  const client = getDBClient();
  const password = await bcrypt.hash("password123");

  await client.queryObject(`
    INSERT INTO users (first_name, last_name, password)
    VALUES ('John', 'Doe', '${password}'),
           ('Jane', 'Smith', '${password}');
  `);

  console.log("Database seeded!");
};
