import { Router, Request, Response } from "express";
import { createUser, getUsers, loginUser } from "./user.controllers";

const router = Router();

/// GET:
router.get("/", getUsers);

/// POST: sign-up
router.post("/signup", createUser);

/// POST: login
router.post("/login", loginUser);

export default router;
