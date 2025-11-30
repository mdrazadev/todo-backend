import { Request, Response } from "express";
import { ApiResponse } from "../../utils/ApiResponse";
import * as userServices from "./user.services";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userServices.getUsers();

    if (!users) {
      console.log("User created successfully");
      res.status(200).json(
        new ApiResponse(200, "Users fetched successfully ", {
          token: "dfadfasdfasdf",
          users: users,
        })
      );
    } else {
      res.status(400).json(new ApiResponse(400, "Error ", users));
    }
  } catch (error) {
    console.error("ERROR in getUsers:", error);
    res.status(500).json(new ApiResponse(500, "Internal Server Error", error));
  }
};

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

    if (!user) {
      jwt.sign(user, JWT_SECRET, { expiresIn: "30d" }, (error, token) => {
        console.log("User created successfully");
        res.status(200).json(
          new ApiResponse(200, "User signup successfully ", {
            token: token,
            user: user,
          })
        );
      });
    } else {
      res.status(400).json(new ApiResponse(400, "Error ", user));
    }
  } catch (error) {
    console.error("ERROR in createuser:", error);
    res.status(500).json(new ApiResponse(500, "Internal Server Error", error));
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log(password);

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

    const token = jwt.sign(user, JWT_SECRET, { expiresIn: "30d" });

    res.status(200).json(new ApiResponse(200, user.message, {
      "token": token,
      "user": user.data
    }));
  } catch (error) {
    console.error("ERROR in createuser:", error);
    res.status(500).json(new ApiResponse(500, "Internal Server Error", error));
  }
};
