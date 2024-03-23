import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Circle,
  PaintBucket,
  Medal,
  PencilRuler,
  Laptop,
  Laugh,
  Wifi,
  Clapperboard,
  Wand2,
  VideoIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Crazy from "@/public/photoshop/pexels-caio-56759.jpg";
import toolbar from "@/public/photoshop/toolbar.png";
import montage from "@/public/photoshop/montag.avif";
import timeline from "@/public/photoshop/timeLine.jpg";
import GTMProvider from "@/components/providers/GoogleTagManager";
import { Input } from "@/components/ui/input";
import { FaWhatsapp } from "react-icons/fa";
import FormSection from "./formSection";

type Props = {};

function Page({}: Props) {
  return (
    <div dir="rtl" className="">
      <GTMProvider />
      <FormSection />

      <div className="flex flex-col-reverse md:flex-row px-2 items-center  max-w-7xl mx-auto gap-12 py-24">
        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-3xl ">عن الدورة</h1>
          <p className=" text-lg md:text-xl max-w-3xl">
            استعد لتجربة استثنائية في عالم التصميم والمونتاج! تقدم دورتنا
            المسجلة لك فرصة الاستفادة من 8 ساعات من التدريب المكثف، مع شرح شامل
            وتطبيقات عملية. ستمكنك هذه الدورة من اكتساب المهارات اللازمة للعمل
            بفعالية على الإنترنت. انطلق نحو التحسين المهني واستعد لاستكشاف عوالم
            جديدة في مجال الإبداع والتكنولوجيا!
          </p>
        </div>
        <div className="relative">
          <Clapperboard
            strokeWidth={2}
            className="  absolute -top-8 drop-shadow-xl border -left-2 md:-left-10 z-10 text-[#2892df] p-4 md:p-6 rotate-12 md:w-24 w-16 h-16 md:h-24 dark:bg-slate-900/80 bg-white/70 backdrop-blur-md  rounded-3xl "
          />
          <Wand2
            strokeWidth={2}
            className="  absolute -top-8 drop-shadow-xl border -right-2 z-10 text-[#2892df] p-6 -rotate-6 w-20 h-20 dark:bg-slate-900/80 bg-white/80 rounded-3xl backdrop-blur-md "
          />
          <PaintBucket className="  absolute -bottom-8 drop-shadow-xl border right-1/2 z-10 text-[#2892df] p-3 -rotate-6 w-16 h-16 dark:bg-slate-900/80 bg-white/70 rounded-3xl backdrop-blur-md " />
          <Image
            className="w-[400px] drop-shadow-2xl h-[300px] md:h-[400px] object-cover rounded-3xl"
            width={500}
            alt=""
            height={500}
            src={montage}
          ></Image>
        </div>
      </div>

      <div className=" dark:bg-slate-900  ">
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto  px-1 gap-6 py-10 md:py-24">
          <div className="relative">
            <Medal
              strokeWidth={1}
              className="  absolute -top-8 drop-shadow-xl border  md:-right-12 z-10 text-[#2892df] p-3 -rotate-6 w-20 h-20 dark:bg-slate-900/80 bg-white/50 rounded-3xl backdrop-blur-md "
            />
            <Image
              src={timeline}
              alt=""
              width={540}
              height={500}
              className="rounded-3xl shadow-2xl w-full md:w-[550px] md:h-[400px] object-cover"
            ></Image>
          </div>
          <div className="flex flex-col items-start max-w-7xl mx-auto px-4 gap-6 py-24">
            <h1 className="text-3xl">لمن هذه الدورة؟</h1>
            <ul className="w-full space-y-2 text-lg list-disc md:text-xl">
              <li>
                أولئك الذين يرغبون في اكتساب مهارات التصميم والمونتاج من الصفر.
              </li>
              <li>المبتدئين الذين يسعون لدخول سوق العمل في مجال الإنترنت.</li>
              <li>المهتمين بتعزيز مهاراتهم في استخدام برامج Adobe المعروفة.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto px-2 gap-20 py-24">
          <div className="relative w-full md:w-fit">
            <PencilRuler
              strokeWidth={1}
              className="  absolute -top-8 drop-shadow-xl border left-0 md:-left-12 z-10 text-[#2892df] p-3 -rotate-12 w-20 h-20 dark:bg-slate-900/80 bg-white/50 rounded-3xl backdrop-blur-md "
            />
            <Image
              src={Crazy}
              alt=""
              width={600}
              height={600}
              className="rounded-3xl w-[600px] md:h-[400px] object-cover"
            ></Image>
            <Image
              src={toolbar}
              alt=""
              width={100}
              height={700}
              className="absolute border md:-right-10 rounded-xl -bottom-10 rotate-6 md:rotate-12 shadow-2xl w-[50px] md:w-[70px] object-contain"
            ></Image>
          </div>
          <div>
            <h1 className="text-3xl ">ماذا ستتعلم في هذه الدورة؟</h1>
            <ul className="w-full space-y-2 text-lg list-decimal md:text-xl">
              <li>استخدام برامج Adobe: Photoshop، اليستريتور، Premiere Pro.</li>
              <li>إنشاء تصاميم جرافيكية مبدعة.</li>
              <li>تحرير وإنتاج محتوى فيديو احترافي.</li>
              <li>
                التعامل مع الأدوات والتقنيات الحديثة في مجال التصميم والمونتاج.
              </li>
            </ul>
            <div className="py-4 w-full">
              <Link href={"/course/652019e1200c377a6d6c31b5/146w9h"}>
                <Button>طلب الدورة</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl md:rounded-none ">
        <div className="flex flex-col items-start max-w-7xl mx-auto px-4 gap-6 py-10 md:py-24">
          <h1 className="text-3xl font-medium dark:text-white">ماذا ستحتاج؟</h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 w-full">
            <div className="h-fit py-8 border dark:bg-black/5 border-black/20 drop-shadow-lg flex flex-col gap-4 items-center justify-center bg-white/30 rounded-3xl flex-1">
              <Laptop
                strokeWidth={1}
                size={100}
                className="mx-auto text-gray-700 dark:text-white"
              />
              <h1 className="text-lg max-w-[200px]  text-center dark:text-white">
                حاسوب يدعم تشغيل برامج Adobe
              </h1>
            </div>
            <div className="h-fit py-8 border dark:bg-black/5 border-black/20 drop-shadow-lg flex flex-col gap-4 items-center justify-center bg-white/30 rounded-3xl flex-1">
              <Laugh
                strokeWidth={1}
                size={100}
                className="mx-auto text-gray-700 dark:text-white"
              />
              <h1 className="text-lg max-w-[200px]  text-center dark:text-white">
                الرغبة في تعلم مهارات التصميم والمونتاج
              </h1>
            </div>
            <div className="h-fit py-8 border dark:bg-black/5 border-black/20 drop-shadow-lg flex flex-col gap-4 items-center justify-center bg-white/30 rounded-3xl flex-1">
              <Wifi
                strokeWidth={1}
                size={100}
                className="mx-auto text-gray-700 dark:text-white"
              />
              <h1 className="text-lg max-w-[200px]  text-center dark:text-white">
                اتصال بالإنترنت للوصول إلى محتوى الدورة
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
