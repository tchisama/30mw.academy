import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import hero from "@/public/photoshop hero.jpg"
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";
import CountdownClock from '@/components/global/CountDownClock'
import PhotoshopCourse from '@/components/global/PhotoshopCourse'
type Props = {}

function page({}: Props) {
  // i want a date i=n 2024 02 11 and in time 9:pm 
  const targetDate = new Date("2024-02-11T21:00:00");
  return (
    <div className='px-4' dir='rtl'>
      <PhotoshopCourse />
      <div className='flex flex-col-reverse md:flex-row px-4 items-center  max-w-7xl mx-auto gap-6 py-24'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-3xl '>عن الدورة</h1>
          <p className='max-w-3xl text-lg md:text-xl'>
استعد لرحلة مثيرة في عالم الفوتوشوب! دورتنا الحية المجانية تقدم لك فرصة لتجربة الدرس الأول مجانًا، مع تدريب مكثف وشرح شامل وتطبيقات عملية تمكنك من اكتساب المهارات اللازمة للعمل في مجال التصميم والمونتاج عبر الإنترنت.</p>
        </div>
    </div>
    <div className='bg-slate-50 dark:bg-slate-900'>
      <div className='flex flex-col items-start max-w-7xl mx-auto px-4 gap-6 py-24'>
    <h1 className='text-3xl'>لمن هذه الدورة؟</h1>
    <ul className='w-full space-y-2 text-lg list-disc md:text-xl'>
        <li>أولئك الذين يرغبون في اكتساب مهارات الفوتوشوب والمونتاج من الصفر.</li>
        <li>المبتدئين الذين يسعون لدخول سوق العمل في مجال الإنترنت.</li>
        <li>المهتمين بتعزيز مهاراتهم في استخدام برنامج Adobe Photoshop المعروف.</li>
    </ul>
      <ButtonLink>
        <Button variant={"outline"} className=' bg-[#30a8ff] border-white border-2 hover:bg-[#2892df] text-white hover:text-white rounded-full  text-2xl p-8 flex items-center gap-3'>
          إنضم الآن 
          <FaWhatsapp />
        </Button>
      </ButtonLink>
      </div>     
      </div>
      <div className=''>
      <div className='flex flex-col items-start max-w-7xl mx-auto px-4 gap-6 py-24'>
            <h1 className='text-3xl '>ماذا ستتعلم في هذه الدورة؟</h1>
          <ul className='w-full space-y-2 text-lg list-decimal md:text-xl'>
            <li>استخدام برنامج Adobe Photoshop بطريقة احترافية.</li>
            <li>إنشاء تصاميم جرافيكية مبدعة وجذابة.</li>
            <li>تطوير مهاراتك في تحرير الصور وتحسين جودتها.</li>
            <li>تعلم تقنيات تنقيح الصور وإضافة التأثيرات الخاصة.</li>
            <li>التعرف على أدوات التصميم والمونتاج الأساسية واستخدامها بفعالية.</li>
            <li>تحرير وتنسيق النصوص والرسومات بشكل احترافي.</li>
            <li>تطبيق الإبداع والابتكار في تصميم الصور والجرافيك.</li>
          </ul>
      </div>
    </div>
      <div className='bg-slate-50 dark:bg-slate-900'>
        <div className='flex flex-col items-start max-w-7xl mx-auto px-4 gap-6 py-24'>
              <h1 className='text-3xl '>ماذا ستحتاج؟</h1>
            <ul className='w-full space-y-2 text-lg list-disc md:text-xl'>
                <li>حاسوب يدعم تشغيل برامج Adobe.</li>
    <li>الرغبة في تعلم وتحسين مهارات التصميم والمونتاج.</li>
    <li>اتصال قوي بالإنترنت للوصول إلى محتوى الدورة.</li>
            </ul>
        </div>
        </div>
        <div className='max-w-7xl flex flex-col gap-4 mx-auto px-4 py-12'>
            <div className='text-gray-800 dark:text-gray-300'>
              <CountdownClock targetDate={targetDate} />
            </div>
            <h1 className='text-3xl '>أسرع بالإنضمام الآن </h1>
            <ButtonLink>
              <Button variant={"outline"} className=' bg-[#30a8ff] border-white border-2  hover:bg-[#2892df] text-white hover:text-white rounded-full  text-2xl p-8 flex items-center gap-3'>
                إنضم الآن 
                <FaWhatsapp />
              </Button>
            </ButtonLink>
        </div>
  </div>
  )
}


const ButtonLink = ({ children }:{children: React.ReactNode})=>{
  return (
    <Link href={"https://chat.whatsapp.com/EsrYFGsKXvO2bklNq4GZ5D"}>
      {children}
    </Link>
  )
}

export default page