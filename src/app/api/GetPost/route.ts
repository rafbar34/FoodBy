import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import pool from "../../../../db/db";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const postId = searchParams.get("postId");
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM blog WHERE id=$1", [
      postId,
    ]);
    client.release();
    if (result?.rows?.length === 0) {
      return NextResponse.json({
        posts: {
          error: "Not found",
        },
      });
    } else {
      return NextResponse.json({
        post: result?.rows[0],
      });
    }
  } catch (err) {
    return NextResponse.json({ error: "failed to load data" });
  }
}
