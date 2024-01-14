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
          Unlock course
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl">
        <DialogTitle className="text-2xl text-right mt-4">
            احصل على {course?.title}{" "}
        </DialogTitle>
        <div className="flex gap-8">
            <div className="flex-1" dir="rtl">
                <h2 className="text-2xl text-right mb-4">معلومات عن الدورة</h2>
                <ul className="text-right list-disc mr-4">
                    <li>لغة الدورة: الدارجة المغربية</li>
                    <li>جودة الفيديوات: FHD 1080p</li>
                    <li>ثمن الدورة:{course?.price}  درهم مغربي</li>
                </ul>
                <h2 className="text-xl text-right mt-4">بعد الأدء ستتوصل بمحتوات الدورة كاملة</h2>
                <h2 className="text-xl text-right mb-4">بالإضافة الى :</h2>
                <ul className="text-right list-disc mr-4">
                    <li>ملفات المشاريع</li>
                    <li>روابط البرامج</li>
                    <li>تواصل مباشر مع المؤطر</li>
                </ul>
            </div>
          <DialogHeader >
            {/* <DialogTitle>Price {course?.price} Dh</DialogTitle> */}
            <h2 className="text-xl text-right mt-4">
              {" "}
              30MW مرحبا بكم في اكاديمية
            </h2>
            <p className="text-right text-sm">
              انت الآن على بعد خطوة واحدة لبدأ تعلم مهارات جديدة
            </p>
            <h2 className="text-xl text-right mt-8 pt-4"> طرق الدفع</h2>
            <div className="flex gap-2  " dir="rtl">
                {
                    !bankInfoOpen ?
                <Button onClick={() => setBankInfoOpen(true)} className="h-full max-w-xl w-full py-4 flex gap-3 ">
                    {" "}
                    تحويل بنكي CIH Bank{" "}
                    <ArrowLeft size={18} />
                </Button>
                :
                <div className="p-4 bg-slate-100 rounded-xl w-full my-2">
                    <h2 className="text-lg text-right mb-8">تحويل بنكي CIH Bank</h2>
                    <h3 className="text-right text-md">اسم المؤطر :</h3>
                    <h3 className="text-right text-md font-bold">ABDERRAHMAN OQBA</h3>
                    <h3 className="text-right text-md">رقم الحساب :</h3>
                    <h3 className="text-right text-md font-bold">230 450 7982684211027700 71</h3>
                    <Link href={"https://wa.me/+212642680949?text=CIH" +"/"+user.user?.emailAddresses}>
                        <p className="text-primary text-right mt-4 flex items-center gap-2" dir="rtl"> بعد اتمام عملية التحويل قم بالتواصل معنا على واتساب <ArrowLeft size={18}/></p>
                    </Link>
                </div>
                }
            </div>
            <h2 className="text-xl text-right mt-8 pt-4">طرق دفع اخرى</h2>
            <div className="grid grid-cols-3 gap-2 " dir="rtl">
              <MethodButton href="https://wa.me/+212642680949?text=ATTIJARI">
                التجاري وفا بنك <br />
                Attijariwafa Bank
              </MethodButton>
              <MethodButton href="https://wa.me/+212642680949?text=SGMA">
                الشركة العامة <br />
                Societe General
              </MethodButton>
              <MethodButton href="https://wa.me/+212642680949?text=WAFACASH">
                وفاكاش <br />
                WafaCash
              </MethodButton>
              <MethodButton href="https://wa.me/+212642680949?text=CASHPLUS">كاش بلوس <br/>Cash Plus</MethodButton>
              <MethodButton href="https://wa.me/+212642680949?text=PAYPAL">
                {/* <PlayIcon/> */}
                بايبال <br />
                PayPal
              </MethodButton>
              <MethodButton href="https://wa.me/+212642680949?text=PAYONEER">
                بايونير <br />
                Payoneer
              </MethodButton>
              <MethodButton href="https://wa.me/+212642680949?text=HELP">
                لطلب المساعدة
                <br /> تواصل معنا عبر واطساب
              </MethodButton>
            </div>
          </DialogHeader>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const MethodButton = ({ children,href }: { children: React.ReactNode ,href:string}) => {
  const user = useClerk()
  return (
    <Link href={href+"/"+user.user?.emailAddresses} className="flex-1 w-full flex">
    <Button
      variant={"outline"}
      className="flex-1  flex flex-col py-4 h-full justify-center items-center gap-3"
    >
      {children}
    </Button>
    </Link>
  );
};

export default GetCourseAlert;
