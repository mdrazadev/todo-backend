import { Request, Response } from "express";
import { ApiResponse } from "../../utils/ApiResponse";
import * as taskService from "./task.service";

export const getTasks = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.userId);

    if (isNaN(id)) {
      return res.status(400).json(new ApiResponse(400, "Invalid user"));
    }

    const tasks = await taskService.getTasks(id);

    console.log("tasks");
    res.status(200).json(new ApiResponse(200, "Tasks fetched ", tasks));
  } catch (error) {
    console.error("ERROR in getUsers:", error);
    res.status(500).json(new ApiResponse(500, "Internal Server Error", error));
  }
};
