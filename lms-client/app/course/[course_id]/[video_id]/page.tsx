"use client"
import Navbar from '@/components/global/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Circle, Loader, Lock, Stars, Unlock, Video } from 'lucide-react'
import React, { useEffect } from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Card,CardHeader } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import axios from "axios"
import { useRouter } from 'next/navigation'

type Props = {
    params:{
        course_id:string,
        video_id:string
    }
}

interface Video {
  _id: string;
  title: string;
  free: boolean;
  id_video: string;
}

interface Section {
  _id: string;
  title: string;
  videos: Video[];
  id_section: string;
}

interface Owner {
  id_user: string;
  fname: string;
  lname: string;
  email: string;
  photo: string;
}

interface Course {
  owner: Owner;
  _id: string;
  title: string;
  price: number;
  category: string;
  sections: Section[];
}





const page = ({params}: Props) => {
  const [course, setCourse] = React.useState<Course>()
  const [loading, setLoading] = React.useState(true)
  useEffect(() => {
    setLoading(true)
    axios.post("http://localhost:8080/get-course",{id:params.course_id}).then(data => {
      setCourse(data.data)
      setLoading(false)
      console.log(data.data)
    })
  },[])
    if(loading){
        return <div className='h-screen flex justify-center items-center '>
                    <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
                </div>
    }
  return (
    <div className="w-full  px-8 ">
        <div className="py-0 container mx-auto flex flex-col">
            <Navbar/>
        </div>
        <div className='flex gap-4 max-w-[1700px] m-4 mx-auto'>


                    <div className='flex gap-2 flex-col flex-1'>
                        <div className=''>
                            {
                                course?.sections.find(section=>section.videos.find(video=>video.id_video===params.video_id))?.videos.find(video=>video.id_video===params.video_id)?.free ? (
                                    <iframe className='w-full max-h-[70vh] aspect-video rounded-xl' height="100%" src="https://www.youtube.com/embed/byDNMLTuOqI?si=8tPfpHn1hyySkIES" title="YouTube video player" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "></iframe>
                                ):(
                                    <div className='w-full max-h-[70vh] aspect-video rounded-xl bg-secondary flex justify-center items-center flex-col gap-4'>
                                        <Lock size={40}/>
                                        you dont have access to this video
                                        <Button className='flex gap-2'><Unlock size={18}/>Unlock course</Button>
                                    </div>
                                )
                            }
                        </div>
                        <div className='max-w-[800px] mt-8'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                        </div>
                    </div>


                    <div className=' relative w-[500px] p-4 px-6'>
                        <div className=''>
                            <h1 className='text-3xl  font-medium'>{course?.title}</h1>
                            <div className='flex items-center my-4 gap-4'>
                                <Avatar>
                                    <AvatarImage src={course?.owner.photo} />
                                    <AvatarFallback>{course?.owner.fname[0]}{course?.owner.lname[0]}</AvatarFallback>
                                </Avatar>
                                <p className='text-muted-forground flex-1'>{course?.owner.fname} {course?.owner.lname}</p>
                                {
                                    (course?.price || 0) > 0 && (
                                        <Button className='flex gap-2'>Buy now <Stars/></Button>
                                    )
                                }
                            </div>
                            <Sections video_id={params.video_id} course={course}/>
                        </div>
                    </div>

        </div>
    </div>
  )
}

const Sections = ({course,video_id}:{course:Course|undefined,video_id:string})=>
{
    const router= useRouter()
    return(
    <>
        <h1 className='text-3xl font-medium'>Sections</h1>

        {
            course?.sections.map(section => (
                <div className='my-2'>
                <h1 className='text-xl font-medium'>{section.title}</h1>
                <div className='flex'>
                <div className='w-1 rounded my-8 translate-x-[20px] z-0 opacity-10 bg-foreground '></div>
                <div className=' my-3 space-y-2 flex-1'>
                    {
                        section.videos.map(video => (
                                <div className='flex gap-4 my-1 items-center'>
                                    <div className="p-1 bg-secondary z-10 rounded-md">
                                            {
                                                video.free ? (
                                                    <CheckCircle size={28} className=' text-primary p-1'/>
                                                ):(
                                                    <Circle size={28} className=' text-primary p-1'/>
                                                )
                                            }
                                    </div>
                                    <Card onClick={()=>router.push(`/course/${course?._id}/${video.id_video}`)}  className={'flex-1 p-3 flex gap-2 items-center '+(video.id_video===video_id?' bg-secondary ':'')}>
                                        <div className='w-8 h-8 flex text-primary justify-center items-center bg-secondary rounded-sm'>
                                            {
                                                video.free ? (
                                                    <Video size={18}/>
                                                ):(
                                                    <Lock size={18}/>
                                                )
                                            }
                                        </div>
                                        <div className='text-sm'>{video.title}</div>
                                    </Card>
                                </div>
                        ))
                    }

                                {/* <div className='flex gap-4 my-1 items-center'>
                                    <div className="p-1 bg-secondary z-10 rounded-md">
                                        <Circle size={28} className=' text-primary p-1'/>
                                    </div>
                                <Card  className='flex-1 p-3 flex gap-2 items-center'>
                                    <div className='w-8 h-8 flex justify-center items-center bg-secondary rounded-md'>
                                        <Lock size={18}/>
                                    </div>
                                    <div>video 1</div>
                                </Card>
                                </div> */}

                                {/* <div className='flex gap-4 my-1 items-center'>
                                    <div className="p-1 bg-secondary z-10 rounded-md">
                                        <Circle size={28} className=' text-primary p-1'/>
                                    </div>
                                <Card  className='flex-1 p-3 flex gap-2 items-center'>
                                    <div className='w-8 h-8 flex justify-center items-center bg-secondary rounded-md'>
                                        <Lock size={18}/>
                                    </div>
                                    <div>video 1</div>
                                </Card>
                                </div> */}
                </div>
                </div>
                </div>
            ))
        }
    </>
)
}

export default page