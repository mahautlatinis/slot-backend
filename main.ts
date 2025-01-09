import { Application } from "./deps.ts";
import userRoutes from "./routes/users.ts";
import { connectDB } from "./database/connection.ts";

const app = new Application();
await connectDB();

app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
