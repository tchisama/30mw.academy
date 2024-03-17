import db from "@/lib/db";
import CategoryModel from  "@/models/Category";
import { NextResponse } from "next/server";


export async function GET() {
  await db();
  const categories = await CategoryModel.find();
  return NextResponse.json(categories);
}