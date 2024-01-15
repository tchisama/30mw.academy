import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ArrowLeft, PlayIcon, UnlockIcon } from "lucide-react";
import { Course } from "@/hooks/course-store";
import Image from "next/image";
import _30mw from "../public/30mw.png";
import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import GetCourseForm from "./global/GetCourseForm";

type Props = {
  course: any;
};

function GetCourseAlert({ course }: Props) {
    const [bankInfoOpen, setBankInfoOpen] = React.useState(false);
  const user = useClerk()
  const buyNow = () => {
    // if(!access){
    //     axios.post(server+"auth/make-access",
    //     {
    //         id_user:user?.user?.id,
    //         id_course:params.course_id,
    //         price_access:course?.price,
    //     }).then(()=>{
    //         window.location.reload();
    //     })
    // }
    // alert("hello world")
  };

  return (
    <Dialog onOpenChange={()=>setBankInfoOpen(false)}>
      <DialogTrigger>
        <Button onClick={buyNow} className="flex gap-2">
          <UnlockIcon size={18} />
          طلب الدورة
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl">
        <DialogTitle className="text-3xl text-right mt-4">
          {course?.title}{" "}
        </DialogTitle>
        <GetCourseForm model course={course} access={false}/>
      </DialogContent>
    </Dialog>
  );
}


export default GetCourseAlert;
