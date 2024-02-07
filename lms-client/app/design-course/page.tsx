import { Button } from '@/components/ui/button'
import { CheckCircle, Circle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import illustration from "@/public/psaipr.png"
import Image from 'next/image'

type Props = {}

function page({}: Props) {
  return (
    <div dir='rtl' className=' '>
      <div className='bg-slate-100'>

      <div className='py-8 items-center  container flex md:flex-row-reverse flex-col-reverse gap-6'>
        <video className='w-[700px] ' controls src="https://d2rk6n1qqhht0d.cloudfront.net/G05_EP00_INTRO.mp4"></video>
        <div className='flex-1'>
          <h1 className='text-4xl font-medium'>دورة التصميم و المونتاج</h1>
          <div className='pt-4'>
            {/* {
              [
                "5 ساعات فيديو تدريبية ",
                "من الصفر دون الحاجة لخبرة مسبقة",
                "شهادة معتمدة من أكاديمية 30mw",
              ]
              .map(item => (
                <div className='my-2 flex gap-4 items-center' key={item}>
                  <CheckCircle size={20} />
                  <h1 className='text-xl'>{item}</h1>
                </div>
              ))
            } */}
            {
              [
    'المدة: 9 ساعات فيديو تدريبية',
    'التوجيه: من الصفر دون الحاجة لخبرة مسبقة',
    'البرامج:  Photoshop،  Illustrator،  Premiere Pro',
    'اللغة: الشرح بالدارجة المغربية',
    'المؤطر: عبد الرحمان عقبة مدرب ذو خبرة 10 سنوات في المجال'
              ]
              .map(item => (
                <div className='my-2 flex gap-4 items-start' key={item}>
                  <Circle size={20} />
                  <h1 className='text-xl'>{item}</h1>
                </div>
              ))
            }
          </div>
          <div className='py-4'>
            <Link href={"/course/652019e1200c377a6d6c31b5/146w9h"}>
              <Button >طلب الدورة</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className='flex flex-col-reverse md:flex-row px-4 items-center  max-w-7xl mx-auto gap-6 py-24'>
      <div className='flex flex-col gap-4'>
          <h1 className='text-3xl '>عن الدورة</h1>
        <p className=' text-lg md:text-xl'>استعد لرحلة فريدة من نوعها في عالم التصميم والمونتاج! دورتنا المسجلة تقدم لك 8 ساعات من التدريب المكثف، مع شرح وافي وتطبيقات عملية تمكنك من اكتساب المهارات الضرورية للعمل على الإنترنت.</p>
      </div>
      <img src={illustration.src} className="w-[400px] " alt="" />
    </div>
    <div className='bg-slate-50'>
      <div className='flex flex-col items-start container max-w-4xl gap-6 py-24'>
            <h1 className='text-3xl '>لمن هذه الدورة؟</h1>
          <ul className='w-full space-y-2 text-lg list-disc md:text-xl'>
              <li>أولئك الذين يرغبون في اكتساب مهارات التصميم والمونتاج من الصفر.</li>
              <li>المبتدئين الذين يسعون لدخول سوق العمل في مجال الإنترنت.</li>
              <li>المهتمين بتعزيز مهاراتهم في استخدام برامج Adobe المعروفة.</li>
          </ul>
      </div>
      </div>
     <div className=''>
      <div className='flex flex-col items-start container max-w-4xl gap-6 py-24'>
            <h1 className='text-3xl '>ماذا ستتعلم في هذه الدورة؟</h1>
          <ul className='w-full space-y-2 text-lg list-decimal md:text-xl'>
                <li>استخدام برامج Adobe: Photoshop، اليستريتور، Premiere Pro.</li>
  <li>إنشاء تصاميم جرافيكية مبدعة.</li>
  <li>تحرير وإنتاج محتوى فيديو احترافي.</li>
  <li>التعامل مع الأدوات والتقنيات الحديثة في مجال التصميم والمونتاج.</li>
            </ul>
          <div className='py-4 w-full'>
            <Link href={"/course/652019e1200c377a6d6c31b5/146w9h"}>
              <Button >طلب الدورة</Button>
            </Link>
          </div>
      </div>
    </div>
    <div className='bg-slate-50'>
      <div className='flex flex-col items-start container max-w-4xl gap-6 py-24'>
            <h1 className='text-3xl '>ماذا ستحتاج؟</h1>
          <ul className='w-full space-y-2 text-lg list-disc md:text-xl'>
              <li>حاسوب يدعم تشغيل برامج Adobe.</li>
  <li>الرغبة في تعلم وتحسين مهارات التصميم والمونتاج.</li>
  <li>اتصال قوي بالإنترنت للوصول إلى محتوى الدورة.</li>
          </ul>
      </div>
      </div>
    </div>
  )
}

export default page