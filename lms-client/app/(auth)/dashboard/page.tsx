"use client"
import DashboardNavbar from '@/components/global/DashboardNavbar'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import useProtuctDashboard from '@/hooks/protuctDashboard'
import { useClerk } from '@clerk/nextjs'
import { Book, CircleDollarSign, Eye, EyeIcon, Loader, ShoppingCart, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import CountUp from 'react-countup';


type Props = {}
interface MyData {
  courses: number;
  users: number;
  views: number;
  access: number;
  lastWeekUsersCount: number;
  lastWeekSalesCount: number;
  lastWeekProfits: number;
}

function page({}: Props) {
  const user = useClerk()
  const [data, setData] = React.useState<MyData>()
  const [loading, setLoading] = React.useState(true)
  useEffect(() => {
    fetch('http://localhost:8080/total')
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
  },[])
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
                  <h1 className='text-6xl'>+ <CountUp duration={3} end={data?.lastWeekUsersCount as number} /></h1>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className='flex h-full flex-col justify-between'>
                    <div className='flex gap-4'>
                        <ShoppingCart size={30}/>
                        <h2> Sales</h2>
                    </div>
                  <h1 className='text-6xl'>+ <CountUp duration={3} end={data?.lastWeekSalesCount as number} /></h1>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className='flex flex-col h-full justify-between'>
                    <div className='flex gap-4'>
                        <CircleDollarSign size={30}/>
                        <h2> Profits</h2>
                    </div>
                  <h1 className='text-5xl'>+<CountUp duration={3} end={data?.lastWeekProfits as number} /> Dh</h1>
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
                    <div className='flex gap-4'>
                        <Users size={30}/>
                        <h2> Total users</h2>
                    </div>
                  <h1 className='text-4xl'>{data?.users}</h1>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className='flex h-full flex-col justify-between'>
                    <div className='flex gap-4'>
                        <ShoppingCart size={30}/>
                        <h2>Total Sales</h2>
                    </div>
                  <h1 className='text-4xl'>{data?.access}</h1>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className='flex h-full flex-col justify-between'>
                    <div className='flex gap-4'>
                        <Book size={30}/>
                        <h2>Courses</h2>
                    </div>
                  <h1 className='text-4xl'>{data?.courses}</h1>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className='flex h-full flex-col justify-between'>
                    <div className='flex gap-4'>
                        <EyeIcon size={30}/>
                        <h2>Views</h2>
                    </div>
                  <h1 className='text-4xl'>{data?.views}</h1>
                </CardHeader>
              </Card>
            </div>

        </div>
    </div>
  )
}

export default page