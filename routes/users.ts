import { Router } from "../deps.ts";
import { getAllUsers, createUser } from "../controllers/users.ts";

const router = new Router();

router
  .get("/users", getAllUsers)
  .post("/users", createUser);

export default router;
