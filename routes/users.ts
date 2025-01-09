import { Router } from "../deps.ts";
import { getAllUsersHandler, createUserHandler } from "../controllers/users.ts";

const router = new Router();

router
  .get("/users", getAllUsersHandler)
  .post("/users", createUserHandler);

export default router;
