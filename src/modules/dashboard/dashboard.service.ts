import { pool } from "../../config/db";

export const dashboard = async (userId: number) => {
  const [result] = await pool.query<any[][]>("CALL getDashboardData(?)", [
    userId,
  ]);

  const totalCount = result[0][0].totalCount;
  const completedCount = result[1][0].completedCount;
  const pendingCount = result[2][0].pendingCount;
  const pendingTasks = result[3];
  const completedTasks = result[4];

  return {
    totalCount,
    completedCount,
    pendingCount,
    pendingTasks,
    completedTasks,
  };
};
