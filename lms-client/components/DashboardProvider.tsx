"use client"
import useProtuctDashboard from '@/hooks/protuctDashboard'
import { Loader } from 'lucide-react'
import React from 'react'

function DashboardProvider({children}: {children: React.ReactNode}) {

  const {loading} = useProtuctDashboard()

  if (loading) {
    return <div className='h-screen flex justify-center items-center '>
      <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
    </div>
  }

  return (
    <div>{children}</div>
  )
}

export default DashboardProvider