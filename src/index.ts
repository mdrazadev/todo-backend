import dotenv from "dotenv";
import app from "./app";
import { Request, Response } from "express";
import { ApiResponse } from "./utils/ApiResponse";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/health-check", (req: Request, res: Response) => {
  res.status(200).json(new ApiResponse(200, "Server is running"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
