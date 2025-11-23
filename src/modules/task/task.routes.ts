import { Router } from "express";
import { errorHandler } from "../../utils/middlewares/errorHandler";
import { getTasks } from "./task.controllers";

const router = Router();

/// GET: get list of task
router.get("/:userId", errorHandler, getTasks);

export default router;
