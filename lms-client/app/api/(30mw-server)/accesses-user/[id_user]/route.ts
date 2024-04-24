import AccessModel from "@/models/Access";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request: Request, context: any) {
  await db()
  try {
    const { id_user } = context.params;
    const accesses = await AccessModel.aggregate([
      {
        $match: { id_user: id_user },
      },
    ]);
    return NextResponse.json(accesses);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
