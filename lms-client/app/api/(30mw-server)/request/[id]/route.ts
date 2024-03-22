import db from "@/lib/db";
import { NextResponse } from "next/server";

import RequestModel from "@/models/request";

export async function GET(request: Request, context: any) {
  await db();
  try {
    const { id } = context.params;
    console.log("fire get request");
    const req = await RequestModel.find({
      _30mw_user_id: id,
    });
    return NextResponse.json(req);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to get the request" });
  }
}

export async function PATCH(request: Request, context: any) {
  await db();
  try {
    const { id } = context.params;
    const data = await request.json();
    const req = await RequestModel.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(req);
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
