import DashboardNavbar from '@/components/global/DashboardNavbar'
import { Button } from '@/components/ui/button'
import React from 'react'

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