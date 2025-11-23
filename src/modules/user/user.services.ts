import { pool } from "../../config/db";

// DUMMY
export const getUser = async () => {};

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
