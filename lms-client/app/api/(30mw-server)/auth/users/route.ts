import UserModel from "@/models/User";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request: Request) {
  await db()
  try {
    // i want to get users by order or time
    const users = await UserModel.find({}).sort({ createdAt: -1 });
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.error()
  }
}
