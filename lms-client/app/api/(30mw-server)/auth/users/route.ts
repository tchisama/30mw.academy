import UserModel from "@/models/User";
import { NextResponse } from "next/server";
import db from "@/lib/db";

import AccessModel from "@/models/Access";

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


export async function POST(request: Request) {
  await db()
  try {
    const { page } = await request.json();
    // i want to get users by order or time
    const users = await UserModel.find({
      // only users 
      rule: 'user'
    }).sort({ createdAt: -1 }).skip(page * 10).limit(10);
    

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.error()
  }
}
