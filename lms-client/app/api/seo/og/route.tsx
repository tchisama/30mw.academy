import {  NextResponse } from "next/server";
export const runtime = "edge";

export async function GET(request: Request) {
  try {
    // const { searchParams } = new URL(request.url);
    return NextResponse.json({ message: "still not ready yet"});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to generate the image" });
  }
}

