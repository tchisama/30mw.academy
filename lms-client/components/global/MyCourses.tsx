"use client";
import Navbar from "@/components/global/Navbar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useCategories from "@/hooks/categories";
import useCategoriesStore from "@/hooks/categories-store";
import { server } from "@/server";
import { ArrowLeft, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import useUserStore from "@/hooks/users-store";
import { Separator } from "@radix-ui/react-dropdown-menu";

type Props = {};
type CourseClient = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

function MyCourses({}: Props) {
  const [courses, setCourses] = React.useState<CourseClient[]>([]);
  const { categories } = useCategoriesStore();
  const { update } = useCategories();
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  const [access, setAccesses] = React.useState<any[]>([]);
  const { user } = useUserStore();

  useEffect(() => {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        update((p) => p + 1);
        setLoading(false);
      });
  }, [user]);

  useEffect(() => {
    if (!user.id_user) return;
    fetch("/api/accesses-user/" + user.id_user)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAccesses(data.map((a: any) => a.id_course));
        update((p) => p + 1);
        setLoading(false);
      });
  }, [user.id_user]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <h1 className="flex gap-3">
          <Loader className="animate-spin" />
          Loading...
        </h1>
      </div>
    );
  }
  return (
    access.length  > 0 && 
    <>
      <div className="pt-20">
        <h1 className="text-3xl font-bold">الدورات المشترية</h1>
      </div>
      <div className="my-8">
        <Separator />
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 ">
        {courses
          .filter((c) => access.includes(c._id))
          .map((course) => (
            <Card
              dir="rtl"
              onClick={() => {
                  router.push(`/course/${course._id}/start`);
              }}
              key={course._id}
              className="overflow-hidden drop-shadow-xl group cursor-pointer"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                {course.image ? (
                  <img
                    className="object-cover group-hover:scale-105 duration-300 w-full aspect-video"
                    alt=""
                    src={course.image}
                  ></img>
                ) : (
                  <div className="aspect-video bg-secondary"></div>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <div className="flex items-center justify-between">
                  <div>
                    {categories.find((c) => c._id === course.category)?.name}
                  </div>
                  <h3 className="text-2xl font-medium">
                    {course.price == 0 ? "Free" : course.price + " Dh"}{" "}
                  </h3>
                </div>
                <CardDescription className="h-10 overflow-hidden">
                  {course.description}
                </CardDescription>
                {/* <Button className='mt-auto flex gap-3'>المزيد من التفاصيل <ArrowLeft size={18}/></Button> */}
              </CardHeader>
            </Card>
          ))}
      </div>
    </>
  );
}

export default MyCourses;
