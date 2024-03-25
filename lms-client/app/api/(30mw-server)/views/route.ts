import db from "@/lib/db";
import ViewModel from "@/models/View";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  await db();
  try {
    const newView = new ViewModel(await request.json());
    newView.save();
    return NextResponse.json(newView);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to make view" });
  }
}

export async function PATCH(request: Request) {
  await db();
  try {
    const body = await request.json();
    const newView = await ViewModel.findOneAndDelete({
      id_user: body.id_user,
      id_course: body.id_course,
      id_video: body.id_video,
    });
    return NextResponse.json(newView);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Faild to delete view" });
  }
}
