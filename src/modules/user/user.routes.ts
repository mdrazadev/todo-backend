import { Router, Request, Response } from "express";
import { errorHandler } from "../../utils/middlewares/errorHandler";
import { createUser } from "./user.controllers";

const router = Router();

/// GET:

/// POST:
router.post("/", errorHandler, createUser);

export default router;
