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
    const { page,search } = await request.json();
    // i want to get users by order or time
    const users = await UserModel.find({
      // only users 
      rule: 'user',
      // search by name and email
      $or: [
        { fname: { $regex: search, $options: 'i' } },
        { lname: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ]
    }).sort({ createdAt: -1 }).skip(page * 10).limit(10);
    

    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.error()
  }
}
