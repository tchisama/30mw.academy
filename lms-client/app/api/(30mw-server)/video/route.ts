import { NextResponse } from "next/server";
import AccessModel from "@/models/Access";
import CourseModel from "@/models/Course";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const access = await AccessModel.findOne({
      id_user: body.id_user,
      id_course: body.id_course,
    });
    const video = await getVideoByCourseIdAndVideoId(
      body.id_course,
      body.id_video,
    );
    if (access || video?.free) {
      return NextResponse.json(video);
    } else {
      return NextResponse.json(null);
    }
  } catch (error) {
    console.log(error);
  }
}

const getVideoByCourseIdAndVideoId = async (
  courseId: string,
  videoId: string,
) => {
  try {
    // Find the course by ID and filter the videos array to find the desired video
    const course: any = await CourseModel.findOne(
      { _id: courseId },
      {
        sections: {
          $elemMatch: {
            videos: {
              $elemMatch: { id_video: videoId },
            },
          },
        },
      },
    );

    // Check if the course and video exist
    if (
      course &&
      course.sections.length > 0 &&
      course.sections[0].videos.length > 0
    ) {
      const video = course.sections[0].videos.find(
        (video: any) => video.id_video === videoId,
      );
      return video;
    } else {
      return null; // Video not found
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
