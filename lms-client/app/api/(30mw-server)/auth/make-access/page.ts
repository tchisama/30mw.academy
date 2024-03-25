import AccessModel from "@/models/Access";
import { NextResponse } from "next/server";




export async function POST(request : Request){
  try {
    const body = await request.json()
    const newAccess = new AccessModel(body);
    newAccess.save();
    return NextResponse.json(newAccess);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

