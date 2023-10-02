"use client"
import DashboardNavbar from '@/components/global/DashboardNavbar'
import { Button } from '@/components/ui/button'
import useProtuctDashboard from '@/hooks/protuctDashboard'
import { useClerk } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

function page({}: Props) {

  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavbar/>
        </div>
    </div>
  )
}

export default page