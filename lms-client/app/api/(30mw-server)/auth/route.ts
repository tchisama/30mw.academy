import db from "@/lib/db";
import { NextResponse } from "next/server";
import UserModel from "@/models/User";

export async function POST(request: Request) {
  await db();
  const data = await request.json();
  const user = await UserModel.findOne({ id_user: data.id_user });
  if (user) return NextResponse.json(user);
  try {
    const newUser = new UserModel(await request.json());
    const savedUser = await newUser.save();
    return NextResponse.json({ id: savedUser._id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to create the user" });
  }
}
