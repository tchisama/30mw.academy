import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import useCourseStore, { Course } from "@/hooks/course-store";
import { server } from "@/server";
import { Button } from "../ui/button";
import axios from "axios";
import { Loader, Trash } from "lucide-react";
import { Input } from "../ui/input";

type Props = {
  children: React.ReactNode;
  id: string;
  courses: Course[];
};

function GiveAccess({ children, id, courses }: Props) {
  // const { courses } = useCourseStore();
  const [accesses, setAccesses] = React.useState<any[] | null>(null);
  const [selectedCourse, setSelectedCourse] = React.useState<Course>(
    {} as Course,
  );
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [price, setPrice] = React.useState(0);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    fetch(server + "accesses-user/" + id)
      .then((res) => res.json())
      .then((data2) => {
        // i want the accesses to be an array of objects with course title and _id course
        setAccesses(data2);
        setLoading(false);
      });
  }, [id, open]);
  const giveAccess = () => {
    const alreadyHaveAccess = accesses?.find(
      (access) => access.id_course === selectedCourse._id,
    );
    if (alreadyHaveAccess) return;
    axios
      .post(server + "auth/make-access", {
        id_user: id,
        id_course: selectedCourse._id,
        price_access: price,
      })
      .then(() => {
        setAccesses((p: any[] | null) =>
          p
            ? [
                ...p,
                {
                  id_course: selectedCourse._id,
                  title: selectedCourse.title,
                },
              ]
            : [
                {
                  id_course: selectedCourse._id,
                  title: selectedCourse.title,
                },
              ],
        );
      });
  };
  const removeAccess = (id_access: string) => {
    axios
      .delete(server + "auth/get-access", {
        data: {
          id_access,
        },
      })
      .then(() => {
        if (accesses === null) return;
        setAccesses((p: any[] | null) => {
          if (p === null) return null;
          return p?.filter((access) => access._id !== id_access);
        });
      });
  };
  useEffect(() => {
    setPrice(selectedCourse.price || 0);
  }, [selectedCourse]);
  return (
    <Dialog onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-start">Give Access </DialogTitle>
          <DialogDescription>
            <div className="mt-4 flex flex-col   gap-2">
              <Select
                onValueChange={(value) => {
                  setSelectedCourse(
                    courses.find((course) => course._id === value) as Course,
                  );
                }}
              >
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="course" />
                </SelectTrigger>
                <SelectContent className="flex-1">
                  {courses.map((course) => {
                    return (
                      <SelectItem key={course._id} value={course._id as string}>
                        {course.title}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <div className="flex gap-2 items-center">
                <Input
                  value={price}
                  onInput={(e) =>
                    setPrice((e.target as HTMLInputElement).valueAsNumber)
                  }
                  placeholder="price you got"
                  className="flex-1"
                  type="number"
                />
                Dh
                <Button onClick={giveAccess}>Give Access</Button>
              </div>
            </div>
            <h2 className="mt-4 text-xl text-start "> Accesses</h2>
            <div className="p-4  bg-slate-50 mt-2 rounded-xl border">
              {loading ? (
                <div className="flex min-h-[100px] justify-center">
                  <Loader className="animate-spin" />
                </div>
              ) : accesses && accesses.length > 0 ? (
                accesses.map((access: any) => {
                  const title = courses.find(
                    (course) => course._id === access.id_course,
                  )?.title;
                  return (
                    title && (
                      <div className="mt-1 py-2 px-2 flex justify-between items-center bg-white text-right rounded-md border">
                        <Button
                          size={"icon"}
                          variant={"outline"}
                          onClick={() => removeAccess(access._id)}
                        >
                          <Trash size={16} />
                        </Button>
                        {title ?? " deleted course"}
                      </div>
                    )
                  );
                })
              ) : (
                <div className="mt-1 justify-center items-center flex py-8 px-4 bg-white text-right rounded-md border">
                  No courses
                </div>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default GiveAccess;

