"use client"
import Navbar from "@/components/global/Navbar"
import { ArrowRight, Loader } from "lucide-react"
import _30mw from "@/public/30mw.png"
import _s3d from "@/public/s3d.png"
import Image from "next/image"
import useFetchUser from "@/hooks/fetch-user"
import { use, useEffect, useState } from "react"
import { useClerk } from "@clerk/nextjs"
import TypeWriter from "@/components/global/TypingWriter"
import Link from "next/link"
import { server } from "@/server"

interface LandingPage {
  landing_page: {
    Header: string;
    Text: string;
    learn: string[];
    button: string;
  };
  _id: string;
  __v: number;
}

export default function Home() {
  const user = useClerk()
  const [config, setConfig] = useState<LandingPage>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(server+'config')
      .then(res => res.json())
      .then(data =>{
          setConfig(data)
          setLoading(false)
      })
  },[])
  if(loading){
    return <div className='h-screen flex justify-center items-center '>
                <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
            </div>
  }
  return (
      <div className="w-full  px-6  mx-auto">
        <div className="py-4 flex max-w-[1800px] mx-auto min-h-screen flex-col">
          <div className="container mx-auto">
            <Navbar/>
          </div>
          <div className="my-8 pt-24 flex-1 flex flex-col gap-2 justify-center items-center">
            <h1 className="text-7xl text-center font-bold ">
              {config?.landing_page?.Header}
            </h1>
            <h2 className="text-3xl text-mutid-foreground text-center">
              {config?.landing_page?.Text}
            </h2>
            <h2 className="text-4xl font-medium text-mutid-foreground text-center">
               Learn {" "} 
              <TypeWriter data={config?.landing_page?.learn||[]}></TypeWriter>
            </h2>
            <div className="p-8">
              <Link href="/courses" className="px-8 shadow-2xl hover:scale-105 items-center duration-150 py-4 text-lg bg-primary text-white uppercase rounded-full flex gap-2 ">get started <ArrowRight/></Link>
            </div>
          </div>

          <p className="text-center opacity-60">Powered By</p>
          <div className="flex dark:invert filter gap-8 opacity-70 drop-shadow-2xl justify-center items-center">
            <Image
              src={_30mw}
              width={150}
              height={150}
              alt="Picture of the author"
              className=""
            />
            <Image
              src={_s3d}
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
  )
}
