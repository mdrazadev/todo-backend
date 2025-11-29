import { pool } from "../../config/db";

export const createUser = async (
  name: string,
  email: string,
  password: string,
  img: string
) => {
  const [rows] = await pool.query<any[][]>("CALL addUser(?,?,?,?);", [
    name,
    email,
    password,
    img,
  ]);

  return rows[0][0];
};

export const login = async (email: string, password: string) => {
  const [rows] = await pool.query<any[][]>("CALL loginUser(?,?)", [
    email,
    password,
  ]);

  return rows[0][0];
};
