import { pool } from "../../config/db";

export const getTasks = async (id: number) => {
  const [rows] = await pool.query<any[][]>("CALL getTasksByUserId(?)", [id]);
  return rows[0];
};
