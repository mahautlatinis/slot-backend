import { bcrypt, Context } from "../deps.ts";
import { getDBClient } from "../database/client.ts";

export const getAllUsers = async (ctx: Context) => {
  const client = getDBClient();
  const result = await client.queryObject("SELECT id, first_name, last_name FROM users;");
  ctx.response.body = result.rows;
};

export const createUser = async (ctx: Context) => {
  const { first_name, last_name, password } = await ctx.request.body().value;
  const hashedPassword = await bcrypt.hash(password);

  const client = getDBClient();
  await client.queryObject(
    "INSERT INTO users (first_name, last_name, password) VALUES ($1, $2, $3);",
    [first_name, last_name, hashedPassword],
  );

  ctx.response.body = { message: "User created!" };
};
