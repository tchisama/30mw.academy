import dbConnect from "@/lib/db";
import UserModel from "@/models/User";
import { NextResponse } from "next/server";


export default async function POST(request: Request) {
  await dbConnect()
  const body = await request.json();
  const user = await UserModel.findOne({ id_user: body.id_user });

  if (user) {
    return NextResponse.json(user);
  } else {
    try {
      const newUser = new UserModel(body);
      const savedUser = await newUser.save();
      return NextResponse.json(savedUser);
    } catch {
      return NextResponse.error()
    }
  }
};
