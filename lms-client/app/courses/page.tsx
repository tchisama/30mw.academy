"use client"
import Courses from '@/components/global/Courses'
import Navbar from '@/components/global/Navbar'
import { Separator } from '@/components/ui/separator'
import React, { useEffect } from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="w-full   container mx-auto">
        <div className="py-4 flex min-h-screen flex-col">
                <Navbar/>
                <div className='pt-20'>
                    <h1 className='text-3xl font-medium'>Courses 📚</h1>
                </div>
                <div className='my-8'>
                    <Separator/>
                </div>
                <Courses/>
        </div>
    </div>
  )
}

export default page