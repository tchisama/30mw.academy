import axios from "axios";
import { ImageResponse, NextResponse } from "next/server";
export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    return new ImageResponse(
      <div></div>
    )
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to generate the image" });
  }
}
