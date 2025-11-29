import { Router } from "express";
import { getDashboardData } from "./dashboard.controllers";

const router = Router();

/// GET: dashboard data
router.get("/:userId", getDashboardData);

export default router;
