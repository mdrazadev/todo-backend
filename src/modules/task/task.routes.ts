import { Router } from "express";
import { errorHandler } from "../../middlewares/errorHandler";
import { addTask, getTaskById, getTasks } from "./task.controllers";

const router = Router();

/// GET: get list of task
router.get("/:userId", getTasks);

// GET: get task by id
router.get("/:userId/:taskId", getTaskById);

/// POST: add task
router.post("/add", addTask);

export default router;
