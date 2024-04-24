import AccessModel from "@/models/Access";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request: Request) {
  await db()
  try {
    const body = await request.json();
    const newAccess = new AccessModel(body);
    newAccess.save();
    return NextResponse.json(newAccess);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
