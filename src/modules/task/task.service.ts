import { pool } from "../../config/db";

export const getTasks = async (id: number) => {
  const [rows] = await pool.query<any[][]>("CALL getTasksByUserId(?)", [id]);
  return rows[0];
};

export const addTask = async (
  title: string,
  description: string,
  dueDate: string,
  userId: string
) => {
  const [rows] = await pool.query<any[][]>("CALL addTask(?,?,?,?,?)", [
    title,
    description,
    dueDate,
    false,
    userId,
  ]);

  return rows[0][0];
};

export const getTaskById = async (userId: number, taskId: number) => {
  const [rows] = await pool.query<any[][]>("CALL getTaskByIdAndUserId(?,?)", [
    taskId,
    userId,
  ]);

  return rows[0][0];
};
