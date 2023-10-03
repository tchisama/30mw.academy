"use client"
import { UserButton, useClerk } from "@clerk/nextjs"
import useFetchUser from "@/hooks/fetch-user"
import Navbar from "@/components/global/Navbar"
import { ArrowRight } from "lucide-react"

export default function Home() {
  useFetchUser()
  return (
      <div className="w-full container mx-auto">
        <div className="py-4">
          <Navbar/>
          <div className="my-4 h-[600px] flex flex-col gap-2 justify-center items-center">
            <h1 className="text-7xl text-center font-bold ">
                Welcome to 30MW Academy🎉 
            </h1>
            <h2 className="text-5xl text-center font-bold">
                Your Learning Hub. Unlock new horizons today.
            </h2>
            <div className="p-8">
              <button className="px-8 hover:scale-105 duration-150 py-4 text-lg bg-primary text-white uppercase rounded-full flex gap-2 ">get started <ArrowRight/></button>

            </div>
          </div>
        </div>
      </div>
  )
}
