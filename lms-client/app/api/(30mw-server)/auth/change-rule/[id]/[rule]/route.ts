import { NextResponse } from "next/server";
import UserModel from "@/models/User";

export async function GET(request: Request, context: any) {
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
