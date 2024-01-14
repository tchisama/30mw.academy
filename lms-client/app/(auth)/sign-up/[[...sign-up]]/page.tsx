import * as React from "react"

import { Button } from "@/components/ui/button"
import illu from "@/public/signup1.png"
import { SignUp } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"


export default function page() {

  return (
    
    <div className="grid md:grid-cols-2 my-12 md:my-0 container  h-[80vh] md:bg-slate-200 rounded-3xl justify-center items-center ">
      <div className="w-full md:flex hidden rounded-3xl h-full relative  justify-center items-center">
          <Image alt="illustration" className="w-[70%] object-contain drop-shadow-xl" src={illu}></Image>
      </div>


      <div className=" md:w-[400px] mx-auto flex items-center justify-center  w-full">
          <SignUp/>
          
        </div>


    </div>
  )
}