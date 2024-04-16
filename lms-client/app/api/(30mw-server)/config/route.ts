import { NextResponse } from "next/server";
import ConfigModel from "@/models/Config.js";
import db from "@/lib/db";

export async function GET(request: Request) {
  await db();
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
