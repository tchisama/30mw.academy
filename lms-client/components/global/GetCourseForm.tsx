"use client"
import React, { useEffect } from 'react'
import { DialogHeader } from '../ui/dialog'
import { Button } from '../ui/button'
import { ArrowLeft  } from 'lucide-react'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { Separator } from '../ui/separator'

type Props = {
    course:any
    model:boolean
    access : boolean
}

function GetCourseForm({course,model,access }: Props) {
    const [bankInfoOpen, setBankInfoOpen] = React.useState(false);
    useEffect(()=>{
        if(model){
            setBankInfoOpen(true)
        }else{
            setBankInfoOpen(false)
        }
    },[model])
  const user = useClerk()
  return (
        <div  className={"flex gap-8 ml-auto  max-w-5xl " +(model ? " flex-row " : " flex-col md:mt-8 ") }>
            <div className="flex-1 hidden md:block" dir="rtl">
                <h2 className="text-2xl text-right mb-4">معلومات عن الدورة</h2>
                <ul className="text-right list-disc mr-4">
                    <li>لغة الدورة: الدارجة المغربية</li>
                    <li>جودة الفيديوات: FHD 1080p</li>
                    <li>ثمن الدورة:{course?.price}  درهم مغربي</li>
                </ul>
                <h2 className="text-xl text-right mt-4">بعد الأدء ستتوصل بمحتوات الدورة كاملة</h2>
                <h2 className="text-xl text-right mb-4">بالإضافة الى :</h2>
                <ul className="text-right list-decimal mr-4">
                    <li>ملفات المشاريع</li>
                    <li>روابط البرامج</li>
                    <li>تواصل مباشر مع المؤطر</li>
                </ul>
                {
                    !model &&
                    <div>
                        <Separator className='my-8' />
                            <ul className='list-disc mr-4'>
                                <li>تأكد انك قد شاهدت الحصة المجانية لتفهم محتويات الدورة</li>
                                <li>تعتبر الدورة عبارة عن استثمار في النفس ينصح إضافت المهارات التي ستتعلمها في سيرتكم الذاتية</li>
                                <li>أو البدأ مباشرة في تطبيقها في العمل الحر و بناء معرض اعمال (Portfolio)</li>
                                <li>تحتوي الدورة على العديد من التمارين التطبيقية يمكنك مشاركتها في المجموعة</li>
                                <li>لا يوجد اي اختبار في نهاية الدورة لذالك لن يمكننا منحكم شهادة نهاية الدورة</li>
                                <li>شكرا لإختيارنا يسعدنا التعامل معك.</li>
                            </ul>
                        <Separator className='my-8' />
                    </div>
                }
            </div>
            {
                !access &&
                    <DialogHeader >
                        {/* <DialogTitle>Price {course?.price} Dh</DialogTitle> */}
                        <h2 className="text-sm md:text-xl text-right mt-4">
                        {" "}
                        30MW مرحبا بكم في اكاديمية
                        </h2>
                        <p className="text-right text-xs md:text-sm">
                        انت الآن على بعد خطوة واحدة لبدأ تعلم مهارات جديدة
                        </p>
                        <h2 className="text-md md:text-xl text-right mt-8 pt-4"> طرق الدفع</h2>
                        <div className="flex gap-2  " dir="rtl">
                            {
                                !bankInfoOpen ?
                            <Button onClick={() => setBankInfoOpen(true)} className="h-full max-w-xl w-full py-4 flex gap-3 ">
                                {" "}
                                تحويل بنكي CIH Bank{" "}
                                <ArrowLeft size={18} />
                            </Button>
                            :
                            <div className="p-4 dark:bg-slate-900 bg-slate-100 rounded-xl w-full my-2 flex flex-col items-start">
                                <h2 className="text-md md:text-lg text-right mb-8">تحويل بنكي CIH Bank</h2>
                                <h3 className="text-right text-sm md:text-md">اسم المؤطر :</h3>
                                <h3 className="text-right text-sm md:text-md font-bold">ABDERRAHMAN OQBA</h3>
                                <h3 className="text-right text-sm md:text-md">رقم الحساب :</h3>
                                <h3 dir={"ltr"} className="text-right text-sm md:text-md font-bold">230 450 7982684211027700 71</h3>
                                <Link href={"https://wa.me/+212642680949?text=CIH" +"/"+user.user?.emailAddresses}>
                                    <p className="text-primary text-right text-sm md:text-md mt-4 flex items-center gap-2" dir="rtl"> بعد اتمام عملية التحويل قم بالتواصل معنا على واتساب <ArrowLeft size={18}/></p>
                                </Link>
                            </div>
                            }
                        </div>
                        <h2 className=" text-md md:text-xl text-right mb-2 mt-8 pt-4">طرق دفع اخرى</h2>
                        <div className="grid overflow-y-auto grid-cols-2 md:grid-cols-3 gap-2 " dir="rtl">
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
                        <div className='col-span-2'>
                        <MethodButton href="https://wa.me/+212642680949?text=HELP">
                            لطلب المساعدة
                            <br /> تواصل معنا عبر واطساب
                        </MethodButton>
                        </div>
                        </div>
                    </DialogHeader>
            }
        </div>
  )
}
const MethodButton = ({ children,href }: { children: React.ReactNode ,href:string}) => {
  const user = useClerk()
  return (
    <Link href={href+"/"+user.user?.emailAddresses} className="flex-1 w-full flex">
    <Button
      variant={"outline"}
      className="flex-1 text-xs md:text-sm flex flex-col py-2 md:py-4 h-full justify-center items-center gap-3"
    >
      {children}
    </Button>
    </Link>
  );
};

export default GetCourseForm