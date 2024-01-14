"use client"
import Navbar from '@/components/global/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, ArrowRight, CheckCircle, Circle, HeartCrack, Loader, Lock, Stars, StickyNote, Unlock, Video, XCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'

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
import { useClerk } from '@clerk/nextjs'
import Notes from '@/components/global/Notes'
import { server } from '@/server'
import GetCourseAlert from '@/components/GetCourseAlert'
import GetCourseForm from '@/components/global/GetCourseForm'

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

interface VideoClient {
  _id: string;
  title: string;
  free: boolean;
  id_video: string;
  url: string;
  duration: number;
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


interface UserWatchedVideo {
    _id: string;
    id_user: string;
    id_course: string;
    id_video: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }
  

const page = ({params}: Props) => {
  const [course, setCourse] = React.useState<Course>()
  const [loading, setLoading] = React.useState(true)
  const [access, setAccess] = React.useState(false)
  const [video, setVideo] = React.useState<VideoClient|null>()
  const [views, setViews] = useState<string[]>()
  const user = useClerk()
  const router = useRouter()
  useEffect(() => {
    setLoading(true)
    if (user.user?.id) {
        axios.post(server+"get-course",{id:params.course_id}).then(data => {
        setCourse(data.data)
        }).then(() => {
            axios.post(server+"auth/get-access",{id_user:user?.user?.id,id_course:params.course_id}).then(data => {
                setAccess(data.data)
            })
        }).then(() => {
            axios.post(server+"get-video",
                {
                    id_course:params.course_id,
                    id_video:params.video_id,
                    id_user:user?.user?.id
                }
            ).then(data => {
                setVideo(data.data)
            }).then(() => {
                axios.get(server+"auth/get-views/"+user.user?.id+"/"+params.course_id).then(data => {
                    setViews(data.data)
                    setLoading(false)
                })
            })
        })
    }
  },[user.user?.id])

    const getViews = () => {
        if(!views?.includes(params.video_id)){
            axios.post(server+"auth/add-marked-view",
            {
                id_user:user?.user?.id,
                id_course:params.course_id,
                id_video:params.video_id
            }).then(data => {
                setViews(p=>[...p as string[],params?.video_id])
            })
        }
    }

    const removeView = () => {
        if(views?.includes(params.video_id)){
            axios.post(server+"auth/remove-marked-view",
            {
                id_user:user?.user?.id,
                id_course:params.course_id,
                id_video:params.video_id
            }).then(data => {
                setViews(p=>p?.filter(v=>v!==params?.video_id))
            })
        }
    }




    const [videos_ids, setVideos_ids] = useState<string[]>([]);

    useEffect(() => {
        if (course) {
            const list = getAllVideoIds(course)
            setVideos_ids(list);
            if (params.video_id=="start") {
                router.push("/course/"+params.course_id+"/"+list[0]);
            }
        }
    }, [course]);
    
    function getAllVideoIds(course: Course | undefined) {
        if (course) {
            const videoIds: string[] = [];
            
            course.sections.forEach((section) => {
                section.videos.forEach((video) => {
                    videoIds.push(video.id_video);
                });
            });
    
            return videoIds;
        }
    
        // If course is undefined, return an empty array
        return [];
    }
    



    async function goNext() {
        await getViews()
        const currentIndex = videos_ids.indexOf(params.video_id);
        if (currentIndex !== -1 && currentIndex < videos_ids.length - 1) {
            router.push("/course/"+params.course_id+"/"+videos_ids[currentIndex + 1])
        }
        return "End of the array";
    }
    function goPrev() {
        const currentIndex = videos_ids.indexOf(params.video_id);
        if (currentIndex !== -1 && currentIndex > 0) {
            router.push("/course/"+params.course_id+"/"+videos_ids[currentIndex - 1])
        }
        return "End of the array";
    }




if(loading){
    return <div className='h-screen flex justify-center items-center '>
                <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
            </div>
}
  return (
    <div className="w-full  px-8 ">
        {/* <Notes/> */}
        <div className='flex gap-4 max-w-[1700px] m-4 mx-auto'>


                    <div className='flex gap-2 flex-col flex-1'>
                        <div className=''>
                            {
                                (video)?
                                (
                                    <>
                                    {/* <iframe className='w-full max-h-[70vh] aspect-video rounded-xl' height="100%" src={video?.url} title="YouTube video player" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "></iframe> */}
                                    <video 
                                        autoPlay
                                        controlsList='nodownload'
                                        disablePictureInPicture
                                        className='w-full max-h-[70vh] aspect-video rounded-xl'
                                        src={video?.url}
                                        controls
                                    ></video>
                                    <div className='py-4 flex justify-between'>
                                        <div className='flex gap-2'>
                                            <Button onClick={goPrev} variant={"secondary"}><ArrowLeft/></Button>
                                            <Button onClick={goNext} variant={"secondary"}><ArrowRight/></Button>
                                        </div>
                                        {views?.includes(params.video_id)?
                                            <Button onClick={removeView} variant={"secondary"} className='flex gap-2'>Mark not completed <XCircle size={18}/></Button>:
                                            <Button onClick={getViews} className='flex gap-2'>Mark completed <CheckCircle size={18}/></Button>
                                        }
                                    </div>
                                    <h1 className='text-3xl text-right py-2 font-medium'>{video.title}</h1>
                                    <div>
                                        <GetCourseForm course={course} model={false} access={access}/>
                                    </div>
                                    </>
                                ):(
                                    <div className='w-full max-h-[70vh] aspect-video rounded-xl bg-secondary flex justify-center items-center flex-col gap-4'>
                                        {
                                            access?
                                            (
                                                
                                        <>
                                        <HeartCrack size={40}/>
                                        wrong url , please choose a video to start
                                        </>
                                            ):(

                                        <>
                                        <Lock size={40}/>
                                        Hello! To enjoy this video, consider purchasing the course. Thanks!🤗
                                        <GetCourseAlert course={course}/>
                                        </>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div className='max-w-[800px] mt-8'>
                                    <p></p>
                        </div>
                    </div>


                    <div className=' relative w-[500px] p-4 px-6 ' dir='rtl'>
                        <div className=''>
                            <h1 className='text-3xl  font-medium'>{course?.title}</h1>
                            <div className='flex flex-col justify-center my-4 gap-4'>
                                <div className='flex gap-4 '>
                                    <Avatar>
                                        <AvatarImage src={course?.owner.photo} />
                                        <AvatarFallback>{course?.owner.fname[0]}{course?.owner.lname[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className='flex-1'>
                                            <p className='text-muted-forground '>{course?.owner.fname}</p>
                                            <p className='text-muted-forground text-xs '>مؤطر ذو خبرة اكثر من 10 سنين في العمل على الانترنيت</p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center justify-between'>
                                {
                                    course &&
                                    (!access) && (
                                        <>
                                            <GetCourseAlert course={course} />
                                            <strong className='text-2xl text-right'>{
                                                course.price == 0 ? "Free" :
                                                <>  {course?.price} درهم </>
                                            }</strong>
                                        </>
                                    )
                                }
                                </div>
                            </div>
                            <Sections views={views} access={access} video_id={params.video_id} course={course}/>
                        </div>
                    </div>

        </div>
    </div>
  )
}

const Sections = ({course,views,video_id,access}:{views:string[]|undefined,course:Course|undefined,video_id:string,access:boolean})=>
{
    const router= useRouter()
    return(
    <>
        <div className='py-4'>
            <Separator/>
        </div>
        <div className=' pr-4'>

        {
            course?.sections.map(section => (
                <div className='my-2' key={section._id}>
                <h1 className='text-xl font-medium'>{section.title}</h1>
                <div className='flex'>
                <div className='w-1 rounded my-8 translate-x-[-20px] z-0 opacity-10 bg-foreground '></div>
                <div className=' my-3 space-y-4 flex-1'>
                    {
                        section.videos.map(video => (
                                <div key={video.id_video} className='flex gap-4 my-1 relative items-center'>
                                    <div className="p-1 bg-background border z-10 rounded-md shadow-md">
                                            {
                                                views?.includes(video.id_video) ? (
                                                    <CheckCircle size={28} className=' text-primary p-1'/>
                                                ):(
                                                    <Circle size={28} className=' text-primary p-1'/>
                                                )
                                            }
                                    </div>
                                    <div className='h-1 w-12 absolute top-[50%] right-[10px] z-0 bg-foreground opacity-10  '></div>
                                    <Card onClick={()=>router.push(`/course/${course?._id}/${video.id_video}`)}  className={'flex-1 p-3 z-10 relative cursor-pointer flex gap-2 items-center '+(video.id_video===video_id?' bg-secondary ':'')}>
                                        <div className='w-8 h-8 flex text-primary justify-center items-center bg-secondary rounded-sm'>
                                            {
                                                (video.free || access) ? (
                                                    <Video size={18}/>
                                                ):(
                                                    <Lock size={18}/>
                                                )
                                            }
                                        </div>
                                        <div className='text-sm h-5 overflow-hidden'>{video.title}</div>
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

        </div>
    </>
)
}

export default page