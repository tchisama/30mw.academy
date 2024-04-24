import { NextResponse } from "next/server";
import CourseModel from "@/models/Course";
import ViewModel from "@/models/View";
import UserModel from "@/models/User";
import AccessModel from "@/models/Access";
import db from "@/lib/db";

const Total = async () => {
  await db()
  try {
    const countCourses = await CourseModel.find({});
    const countUsers = await UserModel.find({});
    const countViews = await ViewModel.find({});
    const countAccess = await AccessModel.find({});

    const lastWeekUsersCount = await UserModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date().getTime() - 7 * 60 * 60 * 24 * 1000),
          },
        },
      },
    ]);
    const lastWeekAccessCount = await AccessModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date().getTime() - 7 * 60 * 60 * 24 * 1000),
          },
        },
      },
    ]);
    return {
      courses: countCourses.length,
      users: countUsers.length,
      views: countViews.length,
      access: countAccess.length,

      lastWeekUsersCount: lastWeekUsersCount.length,
      lastWeekSalesCount: lastWeekAccessCount.length,
      lastWeekProfits: lastWeekAccessCount.reduce(
        (a, b) => a + b.price_access,
        0,
      ),
    };
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export async function GET() {
  try {
    const total = await Total();
    return NextResponse.json(total);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
