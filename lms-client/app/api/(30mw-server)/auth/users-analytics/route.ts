import AccessModel from "@/models/Access";
import { NextResponse } from "next/server";
import UserModel from "@/models/User";

export async function GET(request: Request) {
  try {
    const user = await UserModel.find().countDocuments();

    const Last7Days = await UserModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(
              new Date().getTime() - 7 * 60 * 60 * 24 * 1000,
            ) ,
          },
        },
      }, // the  left-hand side of an arithmetic operation must be of type 'any' 'number' 'bigint' or an enum type
      {
        $group: {
          _id: { $week: "$createdAt" },
          count: { $sum: 1 },
        },
      },
    ]);
    const today = await UserModel.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date().getTime() - 1 * 60 * 60 * 24 * 1000),
          },
        },
      },
      {
        $group: {
          _id: { $week: "$createdAt" },
          count: { $sum: 1 },
        },
      },
    ]);
    const admins = await UserModel.aggregate([
      {
        $match: {
          rule: "admin",
        },
      },
    ]);

    return NextResponse.json({
      user,
      Last7Days: Last7Days[0]?.count || 0,
      today: today[0]?.count || 0,
      admins: admins?.length || 0,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
