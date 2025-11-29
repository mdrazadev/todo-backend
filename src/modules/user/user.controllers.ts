import { Request, Response } from "express";
import { ApiResponse } from "../../utils/ApiResponse";
import * as userServices from "./user.services";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, img } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json(
          new ApiResponse(
            400,
            "Please provide required fields:name, email, password"
          )
        );
    }

    const user = await userServices.createUser(name, email, password, img);

    console.log("User created successfully");
    res.status(200).json(new ApiResponse(200, "Tasks fetched ", user));
  } catch (error) {
    console.error("ERROR in createuser:", error);
    res.status(500).json(new ApiResponse(500, "Internal Server Error", error));
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json(
          new ApiResponse(
            400,
            "Please provide required fields: email, password"
          )
        );
    }

    const user = await userServices.login(email, password);
    console.log("User created successfully");
    res.status(200).json(new ApiResponse(200, user.message, user.data));
  } catch (error) {
    console.error("ERROR in createuser:", error);
    res.status(500).json(new ApiResponse(500, "Internal Server Error", error));
  }
};

