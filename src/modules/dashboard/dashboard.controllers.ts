import { Request, Response } from "express";
import { ApiResponse } from "../../utils/ApiResponse";
import * as dashboardService from "./dashboard.service";

export const getDashboardData = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);

    const data = await dashboardService.dashboard(userId);

    console.log("Data fetched successfully");
    res.status(200).json(new ApiResponse(200, "Dashboard data fetched.", data));
  } catch (error) {
    console.error("ERROR in createuser:", error);
    res.status(500).json(new ApiResponse(500, "Internal Server Error", error));
  }
};
