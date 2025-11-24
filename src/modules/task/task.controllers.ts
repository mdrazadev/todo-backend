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
    res
      .status(200)
      .json(new ApiResponse(200, "Tasks fetched successfully", tasks));
  } catch (error) {
    console.error("ERROR in getUsers:", error);
    res.status(500).json(new ApiResponse(500, "Internal Server Error", error));
  }
};

export const addTask = async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate, userId } = req.body;

    if (!userId || !title || !dueDate) {
      return res
        .status(400)
        .json(
          new ApiResponse(
            400,
            "Please provide required fields:title, dueDate, userId"
          )
        );
    }

    const task = await taskService.addTask(title, description, dueDate, userId);

    console.log("Task created successfully");
    res.status(200).json(new ApiResponse(200, "Task added successfully", task));
  } catch (error) {
    console.error("ERROR in getUsers:", error);
    res.status(500).json(new ApiResponse(500, "Internal Server Error", error));
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const taskId = parseInt(req.params.taskId);

    const task = await taskService.getTaskById(userId, taskId);

    if (!task) {
      return res.status(200).json(new ApiResponse(200, "No task found", []));
    }

    console.log("task fetched");
    res
      .status(200)
      .json(new ApiResponse(200, "Task fetched successfully", task));
  } catch (error) {
    console.error("ERROR in getUsers:", error);
    res.status(500).json(new ApiResponse(500, "Internal Server Error", error));
  }
};
