import dbConnect from "@/lib/db";
import UserModel from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  await dbConnect()
  try {
    const { id } = context.params;
    const user = await UserModel.findOne({ id_user: id });
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to get the user" });
  }
}
