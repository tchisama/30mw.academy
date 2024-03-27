"use client";
import { Button } from "@/components/ui/button";
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
  Stars,
  Pointer,
  Users,
  Video,
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
import ps from "@/public/Adobe_Photoshop_CC_icon.svg.png";
import ai from "@/public/Adobe-Illustrator-Icon.png";
import pr from "@/public/png-transparent-adobe-premiere-pro-cc-14-3-hd-logo-thumbnail.png";

type Props = {};
const courseSections = [
  {
    title: "مقدمة الدورة",
    videos: ["حصة مجانية"],
  },
  {
    title: "برنامج الفوطوشوب",
    image: ps,
    videos: [
      "تعرف على واجهة برنامج الفوطوشوب",
      "كيف تصمم كارط فيزيت احترافية باستعمال فوطوشوب",
      "كيف تصمم افيش متقنة باستعمال برنامج فوطوشوب",
    ],
  },
  {
    title: "برنامج اليسطراتور",
    image: ai,
    videos: ["تعرف على واجهة برنامج illustrator"],
  },
  {
    title: "برنامج البروميير برو",
    image: pr,
    videos: [
      "الحصة الأولى في المونتاج تعرف على واجهة برنامج البروميير برو",
      "الحصة الثانية في المونتاج مهارة التقطيع و فصل الصوت عن الصورة",
      "الحصة الثالثة في المونتاج المؤثرات الإنتقالية و التأثيرات المختلفة",
      "الحصة الرابعة في المونتاج, تحريك العناصر، الكتابة على الفيديو، إخفاء أحد العناصر، إستخراج الفيديو النهائي",
    ],
  },
];

function Page({}: Props) {
  return (
    <div dir="rtl" className="px-2 ">
      <GTMProvider />
      <FormSection />

      <div className="flex  w-full overflow-x-hidden flex-col  items-start  max-w-7xl mx-auto gap-12 py-24">
        <h1 className="text-3xl mr-2 ">عن الدورة</h1>
        <div className="flex flex-col gap-3">
          {courseSections.map((sec, i) => (
            <div key={i} className="">
              <div className="border-r-2">
                <div className="flex gap-4 items-start">
                  {sec?.image && (
                    <Image
                      className="mr-2"
                      src={sec?.image ?? ""}
                      width={30}
                      height={30}
                      alt=""
                    ></Image>
                  )}
                  <h1 className="text-xl my-3 pt-2 w-fit pr-2 border-t">
                    {sec.title}
                  </h1>
                </div>
                {sec.videos.map((vid) => (
                  <div className="mr-8 flex gap-3 items-center my-1" key={vid}>
                    <Video size={20} />
                    <div className="text-sm opacity-70 my-1">{vid}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full overflow-x-hidden flex-col-reverse md:flex-row  items-center  max-w-7xl mx-auto gap-12 py-24">
        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-3xl mr-2 ">عن الدورة</h1>
          <p className=" text-lg mr-3 md:text-xl max-w-3xl">
            استعد لتجربة استثنائية في عالم التصميم والمونتاج! تقدم دورتنا
            المسجلة لك فرصة الاستفادة من 8 ساعات من التدريب المكثف، مع شرح شامل
            وتطبيقات عملية. ستمكنك هذه الدورة من اكتساب المهارات اللازمة للعمل
            بفعالية على الإنترنت. انطلق نحو التحسين المهني واستعد لاستكشاف عوالم
            جديدة في مجال الإبداع والتكنولوجيا!
          </p>
        </div>
        <div className="relative px-8">
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
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto  px-1 gap-6 py-8 md:py-24">
          <div className="relative">
            <Medal
              strokeWidth={1}
              className="  absolute -top-8 drop-shadow-xl border  md:-right-12 z-10 text-[#2892df] p-3 -rotate-6 w-20 h-20 dark:bg-slate-900/80 bg-white/80 rounded-3xl backdrop-blur-md "
            />
            <Image
              src={timeline}
              alt=""
              width={540}
              height={500}
              className="rounded-3xl shadow-2xl w-full md:w-[550px] md:h-[400px] object-cover"
            ></Image>
          </div>
          <div className="flex flex-col items-start max-w-7xl mx-auto px-4 gap-6 py-10">
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
            <ul className="w-full mt-4 mr-5 space-y-2 text-lg list-decimal md:text-xl">
              <li>استخدام برامج Adobe: Photoshop، اليستريتور، Premiere Pro.</li>
              <li>إنشاء تصاميم جرافيكية مبدعة.</li>
              <li>تحرير وإنتاج محتوى فيديو احترافي.</li>
              <li>
                التعامل مع الأدوات والتقنيات الحديثة في مجال التصميم والمونتاج.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-2 container md:flex-row gap-4">
        <div className=" max-w-3xl drop-shadow-xl flex relative flex-col bg-gradient-to-bl from-green-500 to-blue-500 gap-3 rounded-3xl p-4 pb-4  py-8">
          <Stars
            size={60}
            className="fill-white absolute top-2 left-2 "
            strokeWidth={1}
            color="white"
          />
          <div className="w-16 h-16 bg-white flex shadow items-center justify-center rounded-full">
            <FaWhatsapp className="text-4xl text-green-500" />
          </div>
          <h1 className="text-2xl text-white font-medium">
            تواصل مع مدرب الدورة
          </h1>
          <p className="text-white">
            تواصل عبر تطبيق واتساب مع مدرب الدورة للحصول على مزيد من المعلومات
            أو لطرح الاستفسارات المتعلقة بالدورة.
          </p>
          <Button
            className="py-4 text-xl max-w-md h-16 rounded-3xl "
            variant={"outline"}
            onClick={() => {
              const getRandomNumber = () => {
                return ["212610092651"][Math.floor(Math.random() * 1)];
              };
              window.open(`https://wa.me/${getRandomNumber()}`, "_blank");
            }}
          >
            اتصل عبر واتساب
            <FaWhatsapp className=" mx-2" />
          </Button>
        </div>

        <div className=" max-w-3xl  drop-shadow-xl flex relative flex-col bg-gradient-to-bl from-primary to-blue-500 gap-3 rounded-3xl p-4 pb-4  py-8">
          <div className="w-16 h-16 bg-white flex shadow items-center justify-center rounded-full">
            <Users size={30} className="text-4xl text-primary" />
          </div>
          <h1 className="text-2xl text-white font-medium">
            تواصل مع طاقم المبيعات
          </h1>
          <p className="text-white">
            تواصل عبر تطبيق واتساب مع مؤطرين الدورة للحصول على مزيد من المعلومات
            أو لطرح الاستفسارات المتعلقة بالدورة.
          </p>
          <Button
            className="py-4 text-xl max-w-md h-16 rounded-3xl "
            variant={"outline"}
            onClick={() => {
              const getRandomNumber = () => {
                return ["212654978006", "212610092651"][
                  Math.floor(Math.random() * 2)
                ];
              };
              window.open(`https://wa.me/${getRandomNumber()}`, "_blank");
            }}
          >
            اتصل عبر واتساب
            <FaWhatsapp className=" mx-2" />
          </Button>
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
