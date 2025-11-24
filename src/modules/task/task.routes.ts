import { Router } from "express";
import { errorHandler } from "../../utils/middlewares/errorHandler";
import { addTask, getTaskById, getTasks } from "./task.controllers";

const router = Router();

/// GET: get list of task
router.get("/:userId", errorHandler, getTasks);

// GET: get task by id
router.get("/:userId/:taskId", errorHandler, getTaskById);

/// POST: add task
router.post("/add", errorHandler, addTask);

export default router;
