import db from "@/lib/db";
import { NextResponse } from "next/server";

import RequestModel from "@/models/request";

export async function GET(request: Request, context: any) {
  await db();
  try {
    const { id } = context.params;
    console.log(id)
    const req = await RequestModel.find({
      _30mw_user_id: id,
    });
    return NextResponse.json(req);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to get the request" });
  }
}

export async function POST(request: Request) {
  try {
    const newRequest = new RequestModel(await request.json());
    const savedRequest = await newRequest.save();
    return NextResponse.json({ request: savedRequest });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: JSON.stringify(e) });
  }
}
