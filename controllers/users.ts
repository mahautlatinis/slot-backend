import { Context } from "../deps.ts";
import { getAllUsers, createUser } from "../services/userService.ts";
import { bcrypt } from "../deps.ts";

export const getAllUsersHandler = async (ctx: Context) => {
  const users = await getAllUsers();
  ctx.response.body = users;
};

export const createUserHandler = async (ctx: Context) => {
  const { firstName, lastName, password } = await ctx.request.body().value;
  const hashedPassword = await bcrypt.hash(password);

  await createUser(firstName, lastName, hashedPassword);

  ctx.response.body = { message: "User created!" };
};
