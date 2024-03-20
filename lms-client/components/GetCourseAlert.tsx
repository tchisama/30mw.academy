import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import {UnlockIcon } from "lucide-react";
import _30mw from "../public/30mw.png";
import GetCourseForm from "./global/GetCourseForm";

type Props = {
  course: any;
};

function GetCourseAlert({ course }: Props) {
  const [, setBankInfoOpen] = React.useState(false);
  const buyNow = () => {
  };
  return (
    <Dialog onOpenChange={()=>setBankInfoOpen(false)}>
      <DialogTrigger>
        <Button onClick={buyNow} className="flex gap-2">
          <UnlockIcon size={18} />
          طلب الدورة
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl overflow-y-auto h-[70vh]">
        <DialogTitle className="text-xl md:text-3xl text-right mt-4">
          {course?.title}{" "}
        </DialogTitle>
        <GetCourseForm model course={course} access={false}/>
      </DialogContent>
    </Dialog>
  );
}


export default GetCourseAlert;
