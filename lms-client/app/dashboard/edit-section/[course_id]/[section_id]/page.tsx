"use client"
import DashboardNavBar from '@/components/global/DashboardNavbar'
import NewSectionDescription from '@/components/global/NewSectionDescription'
import NewSectionTitle from '@/components/global/NewSectionTitle'
import { Button } from '@/components/ui/button'
import useCourseStore from '@/hooks/course-store'
import axios from "axios"
import { ArrowLeft, Loader, Upload } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = {
    params: {
        course_id: string,
        section_id: string,
    }
}


const Page = ({params}: Props) => {

  const [loading,setLoading]=React.useState(true)
  const [publishing,setPublishing]=React.useState(false)

  const {updateCourse,course}=useCourseStore()

  // get the course by the param id using axios
  useEffect(()=>{
    try {
      axios.get("http://localhost:8080/course/"+params.course_id)
      .then((res)=>{
        console.log(res.data)
        updateCourse(res.data)
        setTimeout(() => {
          setLoading(false)
        }, 1200);
      })
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[params.course_id,updateCourse])

  const publish = ()=>{
    setPublishing(true)
    try {
      axios.post("http://localhost:8080/update-course/"+params.course_id,course).then(r=>{
        console.log(r.data)
        setTimeout(() => {
          setPublishing(false)
        }, 1000);
      }
      )
    }catch (error) {
      console.log(error)
      setPublishing(false)
    }
  }
  if(loading){
      return <div className='h-screen flex justify-center items-center '>
                  <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
              </div>
  }

  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='h-[120px] items-center flex justify-between'>
              <div className='flex flex-col gap-4'>
                <Link href={`/dashboard/edit-course/${params.course_id}`} className='text-lg flex gap-2 items-center '><ArrowLeft size={18}/>Back course</Link>
                <h1 className='text-3xl'>Edit Section</h1>
              </div>
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
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-4'>
                <NewSectionTitle section={params.section_id}/>
                <NewSectionDescription section={params.section_id}/>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Page