import Image from 'next/image'
import React from 'react'
import hero from "@/public/photoshop hero.jpg"
import CountdownClock from './CountDownClock'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
type Props = {
  home?:boolean
}

function PhotoshopCourse({home=false}: Props) {
  const targetDate = new Date("2024-02-11T21:00:00");
  
  return (
    <div dir='rtl'>
      <div className='bg-[#30a8ff] p-4 md:p-8 drop-shadow-2xl rounded-3xl border-2 border-[#3660a088]' >
        <div className='md:container flex flex-col md:flex-row-reverse justify-between items-center'>
          <Image alt="illustration" className=" object-contain" width={400} src={hero}></Image>
          <div className='flex flex-col items-start gap-4 w-full md:w-fit'>
            <h1 className='md:text-7xl text-5xl text-white'>حصة مجانية </h1>
            <h1 className='md:text-4xl text-3xl text-[#124972]'>يوم الأحد ١١ فبراير </h1>
            <div className='text-white'>
              <CountdownClock targetDate={targetDate} />
            </div>
            <h1 className='md:text-2xl text-lg text-[#124972]'>سارع بالالتحاق بنا و ابدأ في تعلم التصميم ببرنامج الفوطوشوب</h1>
            <div className='flex gap-2 items-center'>
          <ButtonLink>
              <Button variant={"outline"} className='bg-white  rounded-full border-2 text-[#124972] text-2xl p-8 flex items-center gap-3'>
              إنضم الآن 
              <FaWhatsapp />
              </Button>
          </ButtonLink>
          {
            home ?
          <Link href={"/photoshop-course"}>
              <Button variant={"ghost"} className=' rounded-full  text-white text-lg  flex items-center gap-3'>
                المزيد <ArrowLeft />
              </Button>
          </Link>
          :null
          }
            </div>
          </div>
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

export default PhotoshopCourse