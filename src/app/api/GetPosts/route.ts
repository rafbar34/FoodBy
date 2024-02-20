import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import pool from "../../../../db/db";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM blog");
    client.release()
    return NextResponse.json({
      posts: result?.rows,
    });

  } catch (err) {
    return NextResponse.json({ error: "failed to load data" });
  }
}
