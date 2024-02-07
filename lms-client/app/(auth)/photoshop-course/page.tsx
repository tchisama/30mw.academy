import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import hero from "@/public/photoshop hero.jpg"
import Link from 'next/link'

type Props = {}

function page({}: Props) {
  return (
    <div className='px-4' dir='rtl'>
      <div className='bg-[#30a8ff] p-8 drop-shadow-2xl rounded-3xl' >
        <div className='md:container flex flex-col md:flex-row-reverse justify-between items-center'>
          <Image alt="illustration" className=" object-contain" width={400} src={hero}></Image>
          <div className='flex flex-col items-start gap-4 w-full md:w-fit'>
            <h1 className='md:text-7xl text-5xl text-white'>حصة مجانية </h1>
            <h1 className='md:text-5xl text-4xl text-[#124972]'>يوم الأحد ١١ فبراير </h1>
            <h1 className='md:text-3xl text-2xl text-[#124972]'>أسرع بالالتحاق</h1>
      <ButtonLink>
          <Button variant={"outline"} className='bg-white rounded-full text-[#124972] text-2xl p-8'>إحجز الآن </Button>
      </ButtonLink>
          </div>
        </div>
      </div>
    <div className='flex flex-col-reverse md:flex-row px-4 items-center  max-w-7xl mx-auto gap-6 py-24'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-3xl '>عن الدورة</h1>
          <p className='max-w-3xl text-lg md:text-xl'>
استعد لرحلة مثيرة في عالم الفوتوشوب! دورتنا الحية المجانية تقدم لك فرصة لتجربة الدرس الأول مجانًا، مع تدريب مكثف وشرح شامل وتطبيقات عملية تمكنك من اكتساب المهارات اللازمة للعمل في مجال التصميم والمونتاج عبر الإنترنت.</p>
        </div>
    </div>
    <div className='bg-slate-50'>
      <div className='flex flex-col items-start max-w-7xl mx-auto px-4 gap-6 py-24'>
    <h1 className='text-3xl'>لمن هذه الدورة؟</h1>
    <ul className='w-full space-y-2 text-lg list-disc md:text-xl'>
        <li>أولئك الذين يرغبون في اكتساب مهارات الفوتوشوب والمونتاج من الصفر.</li>
        <li>المبتدئين الذين يسعون لدخول سوق العمل في مجال الإنترنت.</li>
        <li>المهتمين بتعزيز مهاراتهم في استخدام برنامج Adobe Photoshop المعروف.</li>
    </ul>
      <ButtonLink>
        <Button variant={"outline"} className=' bg-[#30a8ff] hover:bg-[#2892df] text-white hover:text-white rounded-full  text-2xl p-8'>إحجز الآن </Button>
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
      <div className='bg-slate-50'>
        <div className='flex flex-col items-start max-w-7xl mx-auto px-4 gap-6 py-24'>
              <h1 className='text-3xl '>ماذا ستحتاج؟</h1>
            <ul className='w-full space-y-2 text-lg list-disc md:text-xl'>
                <li>حاسوب يدعم تشغيل برامج Adobe.</li>
    <li>الرغبة في تعلم وتحسين مهارات التصميم والمونتاج.</li>
    <li>اتصال قوي بالإنترنت للوصول إلى محتوى الدورة.</li>
            </ul>
      <ButtonLink>
        <Button variant={"outline"} className=' bg-[#30a8ff] hover:bg-[#2892df] text-white hover:text-white rounded-full  text-2xl p-8'>إحجز الآن </Button>
      </ButtonLink>
        </div>
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