import fs from "fs";
import path from "path";
import { pool } from "./config/db";

const runMigrations = async () => {
  try {
    const migrationsDir = path.join(__dirname, "../db");
    const files = fs.readdirSync(migrationsDir).sort();

    console.log("\n🚀 Running migrations...\n");

    for (const file of files) {
      if (file.endsWith(".sql")) {
        const filePath = path.join(migrationsDir, file);
        const sql = fs.readFileSync(filePath, "utf8");

        console.log(`➡ Executing migration: ${file}`);
        await pool.query(sql); // executes full SQL file
        console.log(`✔ Done: ${file}\n`);
      }
    }

    console.log("🎉 All migrations executed successfully!\n");
  } catch (err) {
    console.error("❌ Migration error:", err);
    process.exit(1);
  }
};

runMigrations();
