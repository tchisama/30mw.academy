"use client"
import Navbar from "@/components/global/Navbar"
import { ArrowRight } from "lucide-react"
import _30mw from "@/public/30mw.png"
import _s3d from "@/public/s3d.png"
import Image from "next/image"
import useFetchUser from "@/hooks/fetch-user"
import { use, useEffect } from "react"
import { useClerk } from "@clerk/nextjs"
import TypeWriter from "@/components/global/TypingWriter"
import Link from "next/link"



export default function Home() {
  const user = useClerk()
  return (
      <div className="w-full   container mx-auto">
        <div className="py-4 flex min-h-screen flex-col">
            <Navbar/>
          <div className="my-8 pt-24 flex-1 flex flex-col gap-2 justify-center items-center">
            <h1 className="text-7xl text-center font-bold ">
                Welcome to 30MW Academy🎉 
            </h1>
            <h2 className="text-3xl text-mutid-foreground text-center">
                Your Learning Hub. Unlock new horizons today.
            </h2>
            <h2 className="text-4xl font-medium text-mutid-foreground text-center">
               Learn {" "} 
              <TypeWriter data={["Design 🎨", "Video Editing 🎥", "3d Modelling 🏡"]}></TypeWriter>
            </h2>
            <div className="p-8">
              <Link href="/courses" className="px-8 shadow-2xl hover:scale-105 items-center duration-150 py-4 text-lg bg-primary text-white uppercase rounded-full flex gap-2 ">get started <ArrowRight/></Link>
            </div>
          </div>

          <p className="text-center opacity-60">Powered By</p>
          <div className="flex dark:invert filter gap-8 opacity-70 justify-center items-center">
            <Image
              src={_30mw}
              width={150}
              height={150}
              alt="Picture of the author"
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
