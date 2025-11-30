import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

export const authHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json(new ApiResponse(401, "No token provided"));
  }

  const token = authHeader.split(" ")[1]; // Bearer token

  if (!token) {
    return res.status(401).json(new ApiResponse(401, "Token missing"));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json(new ApiResponse(401, "Invalid token"));
  }
};
