import db from "@/lib/db";
import CourseModel from "@/models/Course";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request , context : any) {
  await db();
  try{
    const {id} = context.params
    console.log("get course by id from nextjs")
    const course = await CourseModel.findById(id);
    return NextResponse.json(course);
  }catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to get the course' });
  }
}

// update course by id 
export async function PATCH(request: Request, context : any) {
  try {
    const {id} = context.params
    const data = await request.json();
    console.log("update course by id from nextjs")
    const course = await CourseModel.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(course);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to update the course' });
  }
}



