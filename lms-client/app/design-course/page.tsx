import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

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
            {
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
    <div className='flex flex-col items-center container max-w-4xl gap-6 py-24'>
          <h1 className='text-3xl '>عن الدورة</h1>
        <p>
            مرحبًا بك في دورتنا المميزة في تصميم الجرافيك والتحرير! إذا كنت تبحث عن فرصة لتطوير مهاراتك في مجال التصميم والتحرير باستخدام أحدث الأدوات والتقنيات الرقمية، فإن هذه الدورة هي الخيار المثالي لك.
        </p>
        <p>
            سنقوم بتوجيهك خلال رحلة تعلم ممتعة وتحفيزية، حيث ستكتسب المهارات اللازمة لإنشاء تصاميم جرافيكية رائعة وتحرير محتوى فيديو مذهل. ستغطي الدورة أساسيات برامج Photoshop وIllustrator لتصميم الجرافيك، وPremiere Pro وAfter Effects للتحرير والإنتاج الفني.
        </p>
        <p>
            سوف تحصل على الفهم العميق لكيفية استخدام هذه الأدوات بفعالية، وكيفية دمج الإبداع مع التقنية لإنتاج أعمال استثنائية. ستتعلم أسرار الرسومات الرقمية، وكيفية تحسين مشروعات الفيديو الخاصة بك بأساليب متقدمة.
        </p>
    </div>
    <div className='bg-slate-50'>
      <div className='flex flex-col items-center container max-w-4xl gap-6 py-24'>
            <h1 className='text-3xl '>لمن هذه الدورة</h1>
          <ul className='w-full space-y-2 list-disc'>
            <li>تعلم الأساسيات في تصميم الجرافيك باستخدام Photoshop و Illustrator.</li>
            <li>رفع وجودك على الإنترنت من خلال تصاميم ملهمة بصرياً.</li>
            <li>اتقن Premiere Pro و After Effects لإنتاج محتوى فيديو جذاب.</li>
            <li>أنشئ مواد تسويقية تأثيرية باستخدام برمجيات التصميم.</li>
            <li>اكتسب مهارات التصميم لتعزيز هوية العلامة البصرية لعملك.</li>
        </ul>
      </div>
      </div>
     <div className=''>
      <div className='flex flex-col items-center container max-w-4xl gap-6 py-24'>
            <h1 className='text-3xl '>ماذا ستتعلم في هذه الدورة؟</h1>
            <ul className='w-full space-y-2 list-decimal'>
                <li>اكتساب المهارات الأساسية في تصميم الجرافيك باستخدام برامج Photoshop وIllustrator.</li>
                <li>تحرير وتنقيح الصور بفعالية باستخدام أحدث تقنيات التحرير في Photoshop.</li>
                <li>إنشاء رسومات متجهة مذهلة للاستخدام في التصميم باستخدام Illustrator.</li>
                <li>تعلم تقنيات التحرير الاحترافية للفيديو باستخدام Premiere Pro.</li>
                <li>إضافة تأثيرات بصرية وحركية رائعة لمشاريع الفيديو باستخدام After Effects.</li>
                <li>تحسين مهارات التصميم الخاصة بك من خلال مشاريع عملية وتحليلات فنية.</li>
                <li>فهم كيفية تواصل الألوان والأنماط لإنشاء تصاميم جذابة ومتناسقة.</li>
                <li>استكشاف أسرار التصميم الإبداعي والابتكار في عالم الجرافيك.</li>
            </ul>
          <div className='py-4 w-full'>
            <Link href={"/course/652019e1200c377a6d6c31b5/146w9h"}>
              <Button >طلب الدورة</Button>
            </Link>
          </div>
      </div>
    </div>
    </div>
  )
}

export default page