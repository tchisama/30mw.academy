"use client"
import DashboardNavBar from '@/components/global/DashboardNavbar'
import React, { useEffect } from 'react';

import NewCourseDescription from '@/components/global/NewCourseDescription'
import NewCourseSections from '@/components/global/NewCourseSections'
import NewCourseImage from '@/components/global/NewCourseImage'
import NewCourseTitle from '@/components/global/NewCourseTitle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Frown, Loader, Upload } from 'lucide-react'
import Masonry from 'react-masonry-css'
import NewCoursePrice from '@/components/global/NewCoursePrice'
import NewCourseCat from '@/components/global/NewCourseCat'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import useCourseStore from '@/hooks/course-store';
import usePublishCourse from '@/hooks/use-publish-course';
type Props = {
  params: {
    course_id: string
  }
}

const Page = ({params}: Props) => {
  const [loading,setLoading]=React.useState(true)
  const [err,setErr]=React.useState(false)
  const {updateCourse,course}=useCourseStore()

  const {publish,publishing}=usePublishCourse()

  // get the course by the param id using axios
  useEffect(()=>{
    try {
      axios.get("http://localhost:8080/course/"+params.course_id)
      .then((res)=>{
        console.log(res.data)
        if(res.data!==null){
          updateCourse(res.data)
        }else{
          setErr(
            true
          )
        }
        setTimeout(() => {
          setLoading(false)
        }, 1200);
      })
    } catch (error) {
      console.log(error)
      setLoading(false)
      setErr(true)
    }

  },[params.course_id,updateCourse])

  if(loading){
      return <div className='h-screen flex justify-center items-center '>
                  <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
              </div>
  }

  if(err){
      return <div className='h-screen flex gap-2 flex-col justify-center items-center '>
                  <h1 className='flex gap-3 text-lg'><Frown className=''/>No Course Found</h1>
                  <p className='text-'>it may be deleted</p>
              </div>
  }


  return (
    <>
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='h-[120px] items-center flex justify-between'>
              <h1 className='text-3xl'>Manage course</h1>
              <Button onClick={publish} className='flex gap-2' disabled={publishing}>
                {
                  publishing ?
                  <>
                    Publishing <Loader className='animate-spin' size={18}/>
                  </>
                  :
                  <>
                    Publish <Upload size={18}/>
                  </>
                }
              </Button>
            </div>

            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="account">General</TabsTrigger>
                <TabsTrigger value="password">Security</TabsTrigger>
              </TabsList>
              <TabsContent value="account">Make changes to your account here.</TabsContent>
              <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>

            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-4'>
                  <NewCourseTitle/>
                  <NewCourseCat/>
                  <NewCourseDescription/>
                  <NewCourseSections/>
              </div>
              <div className='flex flex-col gap-4'>
                  <NewCourseImage/>
                  <NewCoursePrice/>
              </div>
            </div>
            
        </div>
    </div>
    </>
  )
}



export default Page