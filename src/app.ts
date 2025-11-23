import express, { Application, Request, Response } from "express";
import taskRouter from "./modules/task/task.routes";
import userRouter from "./modules/user/user.routes";

const app: Application = express();
app.use(express.json());

// Routes:
app.use("/api/tasks/", taskRouter);
app.use("/api/users", userRouter);

export default app;
