import { Router, Request, Response } from "express";
import { createUser, loginUser } from "./user.controllers";

const router = Router();

/// POST: sign-up
router.post("/signup", createUser);

/// POST: login
router.post("/login", loginUser);

export default router;
