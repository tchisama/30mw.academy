"use client"
import DashboardNavBar from '@/components/global/DashboardNavbar'

import NewCourseDescription from '@/components/global/NewCourseDescription'
import NewCourseTitle from '@/components/global/NewCourseTitle'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import Masonry from 'react-masonry-css'

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
            <Masonry
              breakpointCols={2}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
                  <NewCourseTitle/>
                  <NewCourseDescription/>
                  <NewCourseDescription/>
            </Masonry>
        </div>
    </div>
  )
}



export default page