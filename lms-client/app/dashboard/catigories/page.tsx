import DashboardNavBar from '@/components/global/DashboardNavbar'
import { Card, CardHeader } from '@/components/ui/card'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='h-[120px] items-center flex justify-between'>
              <h1 className='text-3xl'>Catigories</h1>
            </div>
            <div>
                <Card className='max-w-[600px]'>
                    <CardHeader className='flex'>
                        <h1 className='text-xl'>Programming</h1>
                    </CardHeader>
                </Card>
            </div>
        </div>

    </div>
  )
}

export default page