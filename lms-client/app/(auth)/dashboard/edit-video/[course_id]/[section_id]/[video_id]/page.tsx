"use client"

import DashboardNavBar from '@/components/global/DashboardNavbar'
import NewSectionDescription from '@/components/global/NewSectionDescription'
import NewSectionTitle from '@/components/global/NewSectionTitle'
import NewSectionVideos from '@/components/global/NewSectionVideos'
import NewVideoFree from '@/components/global/NewVideoFree'
import NewVideoTitle from '@/components/global/NewVideoTitle'
import NewVideoUrl from '@/components/global/NewVideoUrl'
import VideoPlayer from '@/components/global/Video'
import { Button } from '@/components/ui/button'
import useCourseStore from '@/hooks/course-store'
import usePublishCourse from '@/hooks/use-publish-course'
import { server } from '@/server'
import axios from "axios"
import { ArrowLeft, Loader, Upload } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {
    params: {
        course_id: string,
        section_id: string,
        video_id: string,
    }
}


const Page = ({params}: Props) => {

  const [loading,setLoading]=React.useState(true)
  const {updateCourse,course}=useCourseStore()
  const {publish,publishing}=usePublishCourse()
  const router = useRouter()

  // get the course by the param id using axios
  useEffect(()=>{
    try {
      axios.get(server+"course/"+params.course_id)
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

  if(loading){
      return <div className='h-screen flex justify-center items-center '>
                  <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
              </div>
  }

  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='h-[120px] items-start mt-4  flex justify-between'>
              <div className='flex flex-col gap-4 items-start'>
                <Button variant={"outline"} onClick={()=>{publish();router.push(`/dashboard/edit-section/${params.course_id}/${params.section_id}`)}} className='flex gap-2 items-center '><ArrowLeft size={18}/>Back course</Button>
                <h1 className='text-3xl'>Edit Video</h1>
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
                <NewVideoTitle section={params.section_id} video_id={params.video_id}/>
                <NewVideoUrl section={params.section_id} video_id={params.video_id}/>
                <NewVideoFree section={params.section_id} video_id={params.video_id}/>
              </div>
              <div>
              <iframe className='w-full' width="560" height="390" src={course.sections.find((s)=>s.id_section===params.section_id)?.videos.find((v)=>v.id_video===params.video_id)?.url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              {/* <VideoPlayer/> */}
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Page