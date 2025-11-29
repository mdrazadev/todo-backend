import express, { Application, Request, Response } from "express";
import taskRouter from "./modules/task/task.routes";
import userRouter from "./modules/user/user.routes";
import dashboardRouter from "./modules/dashboard/dashboard.routes";
import { errorHandler } from "./utils/middlewares/errorHandler";

const app: Application = express();
app.use(express.json());

// Routes:
app.use("/api/tasks/", errorHandler, taskRouter);
app.use("/api/users/", errorHandler, userRouter);
app.use("/api/dashboard/", errorHandler, dashboardRouter);
export default app;
