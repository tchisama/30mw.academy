import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";
import CourseModel from "@/models/Course";


export async function GET() {
  await dbConnect();
  const courses = await CourseModel.find();
  return NextResponse.json(courses);
}