import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import hero from "@/public/photoshop hero.jpg";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import CountdownClock from "@/components/global/CountDownClock";
import PhotoshopCourse from "@/components/global/PhotoshopCourse";
import laptop from "@/public/photoshop/laptop-photoshop.jpg"
import { ImageIcon, Laptop, Laugh, Medal, PaintBucket, Pen, PencilRuler, Pipette, Settings2, Wifi } from "lucide-react";
import girlWithLaptop from "@/public/photoshop/pexels-fauxels-3182792.jpg"
import Crazy from "@/public/photoshop/pexels-caio-56759.jpg"
import toolbar from "@/public/photoshop/toolbar.png"
type Props = {};

function page({}: Props) {
	// i want a date i=n 2024 02 11 and in time 9:pm
	const targetDate = new Date("2024-02-11T21:00:00");
	return (
		<div className="px-2 overflow-hidden" dir="rtl">
			<PhotoshopCourse />
			<div className="flex flex-col md:flex-row px-2 items-center  max-w-7xl mx-auto gap-12 py-24">
        <div className="relative"> 
          <Pipette strokeWidth={2} className="absolute -top-8 drop-shadow-xl border -left-2 md:-left-10 z-10 text-[#2892df] p-4 md:p-6 rotate-12 md:w-24 w-16 h-16 md:h-24 bg-white/70 backdrop-blur-md  rounded-3xl " />
          <Settings2 strokeWidth={2} className="absolute -top-8 drop-shadow-xl border -right-2 z-10 text-[#2892df] p-6 -rotate-6 w-20 h-20 bg-white/80 rounded-3xl backdrop-blur-md " />
          <PaintBucket className="absolute -bottom-8 drop-shadow-xl border right-1/2 z-10 text-[#2892df] p-3 -rotate-6 w-16 h-16 bg-white/70 rounded-3xl backdrop-blur-md " />
          <Image className="w-[400px] drop-shadow-2xl h-[300px] md:h-[400px] object-cover rounded-3xl" width={500} alt="" height={500} src={laptop}></Image>
        </div>
				<div className="flex flex-col gap-8">
					<h1 className="text-3xl ">عن الدورة</h1>
					<p className="max-w-3xl text-md md:text-xl">
						استعد لرحلة مثيرة في عالم الفوتوشوب! دورتنا الحية المجانية تقدم لك
						فرصة لتجربة الدرس الأول مجانًا، مع تدريب مكثف وشرح شامل وتطبيقات
						عملية تمكنك من اكتساب المهارات اللازمة للعمل في مجال التصميم
						والمونتاج عبر الإنترنت.
					</p>
					<ButtonLink>
						<Button
							variant={"outline"}
							className=" bg-[#30a8ff] border-white border-2 hover:bg-[#2892df] text-white hover:text-white rounded-full  text-2xl p-8 flex items-center gap-3"
						>
							إنضم الآن
							<FaWhatsapp />
						</Button>
					</ButtonLink>
				</div>
			</div>
			<div className=" dark:bg-slate-900  ">
				<div className="flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto  px-1 gap-6 py-10 md:py-24">
          <div className="relative">
            <Medal strokeWidth={1} className="absolute -top-8 drop-shadow-xl border  md:-right-12 z-10 text-[#2892df] p-3 -rotate-6 w-20 h-20 bg-white/50 rounded-3xl backdrop-blur-md " />
            <Image src={girlWithLaptop} alt="" width={540} height={500} className="rounded-3xl shadow-2xl w-full md:w-[550px] md:h-[400px] object-cover"></Image>
          </div>
          <div className="flex flex-1 flex-col gap-8">
            <h1 className="text-3xl">لمن هذه الدورة؟</h1>
            <ul className="w-full space-y-2 text-md list-disc md:text-xl mr-4">
              <li>
                أولئك الذين يرغبون في اكتساب مهارات الفوتوشوب والمونتاج من الصفر.
              </li>
              <li>المبتدئين الذين يسعون لدخول سوق العمل في مجال الإنترنت.</li>
              <li>
                المهتمين بتعزيز مهاراتهم في استخدام برنامج Adobe Photoshop
                المعروف.
              </li>
            </ul>
          </div>
				</div>
			</div>
			<div className="">
				<div  className="flex flex-col md:flex-row items-center max-w-7xl mx-auto px-2 gap-20 py-24">
          <div className="relative w-full ">
            <PencilRuler strokeWidth={1} className="absolute -top-8 drop-shadow-xl border left-0 md:-left-12 z-10 text-[#2892df] p-3 -rotate-12 w-20 h-20 bg-white/50 rounded-3xl backdrop-blur-md " />
            <Image src={Crazy} alt="" width={600} height={600} className="rounded-3xl w-[600px] md:h-[400px] object-cover"></Image>
            <Image src={toolbar} alt="" width={100} height={700} className="absolute border md:-right-10 rounded-xl -bottom-10 rotate-6 md:rotate-12 shadow-2xl w-[50px] md:w-[70px] object-contain"></Image>
          </div>
          <div className="flex flex-col gap-9">
            <h1 className="text-3xl ">ماذا ستتعلم في هذه الدورة؟</h1>
            <ul className="space-y-2 text-md list-decimal md:text-xl mr-4">
              <li>استخدام برنامج Adobe Photoshop بطريقة احترافية.</li>
              <li>إنشاء تصاميم جرافيكية مبدعة وجذابة.</li>
              <li>تطوير مهاراتك في تحرير الصور وتحسين جودتها.</li>
              <li>تعلم تقنيات تنقيح الصور وإضافة التأثيرات الخاصة.</li>
              <li>
                التعرف على أدوات التصميم والمونتاج الأساسية واستخدامها بفعالية.
              </li>
              <li>تحرير وتنسيق النصوص والرسومات بشكل احترافي.</li>
              <li>تطبيق الإبداع والابتكار في تصميم الصور والجرافيك.</li>
            </ul>
          </div>
				</div>
			</div>
			<div className="bg-[#2892df] rounded-3xl md:rounded-none dark:bg-slate-900">
				<div className="flex flex-col items-start max-w-7xl mx-auto px-4 gap-6 py-10 md:py-24">
					<h1 className="text-3xl font-medium text-white">ماذا ستحتاج؟</h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 w-full">
            <div className="h-fit py-8 border border-white/20 drop-shadow-lg flex flex-col gap-4 items-center justify-center bg-white/10 rounded-3xl flex-1">
              <Laptop strokeWidth={1} size={100} className="mx-auto" color="#fff"/>
              <h1 className="text-lg max-w-[200px]  text-center text-white">حاسوب يدعم تشغيل برامج Adobe</h1>
            </div>
            <div className="h-fit py-8 border border-white/20 drop-shadow-lg flex flex-col gap-4 items-center justify-center bg-white/10 rounded-3xl flex-1">
              <Laugh strokeWidth={1} size={100} className="mx-auto" color="#fff"/>
              <h1 className="text-lg max-w-[200px]  text-center text-white">الرغبة في تعلم مهارات التصميم والمونتاج</h1>
            </div>
            <div className="h-fit py-8 border border-white/20 drop-shadow-lg flex flex-col gap-4 items-center justify-center bg-white/10 rounded-3xl flex-1">
              <Wifi strokeWidth={1} size={100} className="mx-auto" color="#fff"/>
              <h1 className="text-lg max-w-[200px]  text-center text-white">اتصال بالإنترنت للوصول إلى محتوى الدورة</h1>
            </div>
          </div>
				</div>
			</div>
			<div className="max-w-7xl flex flex-col gap-4 mx-auto px-4 py-12">
				<div className="text-gray-800 dark:text-gray-300">
					<CountdownClock targetDate={targetDate} />
				</div>
				<h1 className="text-3xl ">أسرع بالإنضمام الآن </h1>
				<ButtonLink>
					<Button
						variant={"outline"}
						className=" bg-[#30a8ff] border-white border-2  hover:bg-[#2892df] text-white hover:text-white rounded-full  text-2xl p-8 flex items-center gap-3"
					>
						إنضم الآن
						<FaWhatsapp />
					</Button>
				</ButtonLink>
			</div>
		</div>
	);
}

const ButtonLink = ({ children }: { children: React.ReactNode }) => {
	return (
		<Link href={"https://chat.whatsapp.com/EsrYFGsKXvO2bklNq4GZ5D"}>
			{children}
		</Link>
	);
};

export default page;
