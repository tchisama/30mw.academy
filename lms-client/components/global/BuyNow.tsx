"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { ArrowLeft  } from 'lucide-react'
import { useClerk } from '@clerk/nextjs'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Props = {
    children : React.ReactNode
}

function BuyNow({children}: Props) {
    const [bankInfoOpen,setBankInfoOpen] = useState(true)
  return (
    <Dialog>
    <DialogTrigger asChild className='w-fit'>{children}</DialogTrigger>
    <DialogContent>
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
                                    <Link href={"https://wa.me/+212642680949?text=CIH"}>
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
    </DialogContent>
    </Dialog>

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

export default BuyNow