import AccessModel from "@/models/Access";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newAccess = await AccessModel.findOne({
      id_user: body.id_user,
      id_course: body.id_course,
    });
    return NextResponse.json(newAccess ? true : false);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const newAccess = await AccessModel.findByIdAndDelete(body.id_access);
    return NextResponse.json(newAccess);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
