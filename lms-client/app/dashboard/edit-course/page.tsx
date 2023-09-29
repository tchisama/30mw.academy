"use client"
import DashboardNavBar from '@/components/global/DashboardNavbar'

import NewCourseDescription from '@/components/global/NewCourseDescription'
import NewCourseSections from '@/components/global/NewCourseSections'
import NewCourseImage from '@/components/global/NewCourseImage'
import NewCourseTitle from '@/components/global/NewCourseTitle'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import Masonry from 'react-masonry-css'
import NewCoursePrice from '@/components/global/NewCoursePrice'
import NewCourseCat from '@/components/global/NewCourseCat'

type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='h-[120px] items-center flex justify-between'>
              <h1 className='text-3xl'>Create a new course</h1>
              <Button className='flex gap-2'>Publish <Upload size={18}/></Button>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-4'>
                  <NewCourseTitle/>
                  <NewCourseDescription/>
                  <NewCourseCat/>
                  <NewCourseSections/>
              </div>
              <div className='flex flex-col gap-4'>
                  <NewCourseImage/>
                  <NewCoursePrice/>
              </div>
            </div>
            
        </div>
    </div>
  )
}



export default page