"use client"
import DashboardNavbar from '@/components/global/DashboardNavbar'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import useProtuctDashboard from '@/hooks/protuctDashboard'
import { useClerk } from '@clerk/nextjs'
import { CircleDollarSign, Loader, ShoppingCart, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

function page({}: Props) {
  const user = useClerk()
  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavbar/>
            <div className='my-8'>
              <h1 className='text-6xl font-medium'>Welcome {user.user?.firstName} 👋</h1>
            </div>
            <Separator/>
            <div className='my-4'>
              <h2 className='text-2xl '>Last week results 🎉</h2>
            </div>

            <div className='grid my-4 grid-cols-3 gap-4 justify-between'>
              <Card>
                <CardHeader className='flex flex-col h-full'>
                        <div className='flex gap-4'>
                            <Users size={30}/>
                            <h2> users</h2>
                        </div>
                  <h1 className='text-6xl'>+5</h1>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className='flex h-full flex-col justify-between'>
                    <div className='flex gap-4'>
                        <ShoppingCart size={30}/>
                        <h2> Sales</h2>
                    </div>
                  <h1 className='text-6xl'>+2</h1>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className='flex flex-col h-full justify-between'>
                    <div className='flex gap-4'>
                        <CircleDollarSign size={30}/>
                        <h2> Profits</h2>
                    </div>
                  <h1 className='text-5xl'>+1400 Dh</h1>
                </CardHeader>
              </Card>
            </div>

            <Separator/>

            <div className='my-4'>
              <h2 className='text-2xl'>Statistics</h2>
            </div>


            <div className='grid my-4 grid-cols-4 gap-4 justify-between'>
              <Card>
                <CardHeader className='flex flex-col h-full'>
                  <h2 className='text-lg'>Total Users</h2>
                  <h1 className='text-6xl'>15</h1>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className='flex h-full flex-col justify-between'>
                  <h2 className='text-lg'>Total Sales</h2>
                  <h1 className='text-6xl'>22</h1>
                </CardHeader>
              </Card>
            </div>

        </div>
    </div>
  )
}

export default page