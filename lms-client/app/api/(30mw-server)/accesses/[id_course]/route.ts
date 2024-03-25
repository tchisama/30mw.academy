import AccessModel from "@/models/Access";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  try {
    const { id_course } = context.params;
    const accesses = await AccessModel.aggregate([
      {
        $match: { id_course: id_course },
      },
      {
        $lookup: {
          from: "users", // The name of the "users" collection
          localField: "id_user", // Field in "course_access" collection
          foreignField: "id_user", // Field in "users" collection
          as: "user",
        },
      },
    ]);
    return NextResponse.json(accesses);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to get the accesses" });
  }
}
