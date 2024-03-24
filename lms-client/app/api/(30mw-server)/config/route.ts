import { NextResponse } from "next/server";
import ConfigModel from "@/models/Config.js";

export async function GET(request: Request) {
  try {
    const config = await ConfigModel.findOne();
    return NextResponse.json(config);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "faild to get the config data",
      error,
    });
  }
}
