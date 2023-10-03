"use client"
import Navbar from '@/components/global/Navbar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="w-full   container mx-auto">
        <div className="py-4 flex min-h-screen flex-col">
            <Navbar/>
            <div className='pt-24'>
                <h1 className='text-3xl font-medium'>Courses</h1>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default page