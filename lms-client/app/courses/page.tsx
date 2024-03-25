"use client";
import Courses from "@/components/global/Courses";
import MyCourses from "@/components/global/MyCourses";
import Navbar from "@/components/global/Navbar";
import { Separator } from "@/components/ui/separator";
import React, { useEffect } from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="w-full   container mx-auto" dir="rtl">
      <div className="py-4 flex min-h-screen flex-col">
        <MyCourses />
        <div className="pt-20">
          <h1 className="text-5xl font-bold">دوراتنا 📚</h1>
        </div>
        <div className="my-8">
          <Separator />
        </div>
        <Courses />
      </div>
    </div>
  );
};

export default page;
