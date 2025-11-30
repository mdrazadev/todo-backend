import express, { Application, Request, Response } from "express";
import taskRouter from "./modules/task/task.routes";
import userRouter from "./modules/user/user.routes";
import dashboardRouter from "./modules/dashboard/dashboard.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { authHandler } from "./middlewares/authHandler";

const app: Application = express();
app.use(express.json());

// Routes:
app.use("/api/tasks/", authHandler, taskRouter);
app.use("/api/users/", userRouter);
app.use("/api/dashboard/", authHandler, dashboardRouter);

// Global error handler (should be last)
app.use(errorHandler);
export default app;
