import { client } from "../database/connection.ts";

export const getAllUsers = async () => {
  const result = await client.queryArray("SELECT * FROM users;");
  return result.rows;
};

export const createUser = async (firstName: string, lastName: string, password: string) => {
  await client.queryArray(
    "INSERT INTO users (first_name, last_name, password) VALUES ($1, $2, $3);",
    firstName,
    lastName,
    password,
  );
};
