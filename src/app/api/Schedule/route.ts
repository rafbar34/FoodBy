import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import pool from "../../../../db/db";

export async function POST(request: Request) {
  const req = await request.json();
  const { date, name, last_name } = req;
  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO schedule (date, name, last_name) VALUES ($1, $2, $3) RETURNING *",
      [date, name, last_name]
    );
    client.release();
    return NextResponse.json({
      res: result,
    });
  } catch (err) {
    return NextResponse.json({ error: "failed to load data" });
  }
}
