import { getDBClient } from "../client.ts";

export const createUsersTable = async () => {
  const client = getDBClient();
  await client.queryObject(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      password TEXT NOT NULL
    );
  `);
};
