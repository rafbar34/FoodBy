import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: "localhost",
  database: process.env.DB_ID,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default pool;
