import db from "@/lib/db";
import ViewModel from "@/models/View";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  await db();
  try {
    const { id_user, id_course } = context.params;
    const views = await ViewModel.find(
      {
        id_user: id_user,
        id_course: id_course,
      },
      {
        id_video: 1,
      },
    );
    return NextResponse.json(views.map((view: any) => view.id_video));
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to get the course" });
  }
}

