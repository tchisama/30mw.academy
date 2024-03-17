
import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";
import CourseModel from "@/models/Course";



export async function POST(request: Request) {
  try {
    console.log("fire route")
    const newCourse = new CourseModel(await request.json());
    const savedCourse = await newCourse.save();
    return NextResponse.json({id:savedCourse._id});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to create the course' });
  }
}


export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await CourseModel.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to delete the course' });
  }
}


