import { NextResponse } from "next/server";
import UserModel from "@/models/User";
import dbConnect from "@/lib/db";

export async function GET(request: Request, context: any) {
  await dbConnect()
  try {
    const { id, rule } = context.params;
    const user = await UserModel.findOneAndUpdate(
      { id_user: id },
      {
        $set: {
          rule: rule,
        },
      },
    );
    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
