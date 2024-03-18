import axios from "axios";
import { ImageResponse, NextResponse } from "next/server";
export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    return new ImageResponse(
      <img src={"https://files.edgestore.dev/o5czfp70y8ctkrhw/publicFiles/_public/d9fb41bc-7a4b-44d2-90d1-aa1bedceaa86.jpg"}></img>
    )
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to generate the image" });
  }
}