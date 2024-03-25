import { NextResponse } from "next/server";
import CourseModel from "@/models/Course";
import ViewModel from "@/models/View";
import UserModel from "@/models/User";
import AccessModel from "@/models/Access";

const Total = async () => {
  try {
    const countCourses = (await CourseModel.find({})).length;
    const countUsers = (await UserModel.find({})).length;
    const countViews = (await ViewModel.find({})).length;
    const countAccess = (await AccessModel.find({})).length;

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
      courses: countCourses,
      users: countUsers,
      views: countViews,
      access: countAccess,

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
