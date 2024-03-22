import db from "@/lib/db";
import { NextResponse } from "next/server";

import RequestModel from "@/models/request";

export async function GET() {
  await db();
  try {
    const requests = await RequestModel.find();
    return NextResponse.json( requests );
  } catch (e) {
    console.log(e);
    NextResponse.error();
  }
}

export async function POST(request: Request) {
  await db();
  try {
    const newRequest = new RequestModel(await request.json());
    const savedRequest = await newRequest.save();
    return NextResponse.json({ request: savedRequest });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: JSON.stringify(e) });
  }
}
