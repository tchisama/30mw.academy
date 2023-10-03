"use client"
import Navbar from '@/components/global/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Circle, Lock, Stars, Video } from 'lucide-react'
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

type Props = {
    params:{
        course_id:string
    }
}

interface Video {
  _id: string;
  title: string;
  free: boolean;
}

interface Section {
  _id: string;
  title: string;
  videos: Video[];
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
  useEffect(() => {
    axios.post("http://localhost:8080/get-course",{id:params.course_id}).then(data => {
      setCourse(data.data)
      console.log(data.data)
    })
  },[])
  return (
    <div className="w-full  px-8 ">
        <div className="py-0 container mx-auto flex flex-col">
            <Navbar/>
        </div>
        <div className='flex gap-4 max-w-[1700px] m-4 mx-auto'>


                    <div className='flex gap-2 flex-col flex-1'>
                        <div className=''>
                            <iframe className='w-full max-h-[70vh] aspect-video rounded-xl' height="600" src="https://www.youtube.com/embed/byDNMLTuOqI?si=8tPfpHn1hyySkIES" title="YouTube video player" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "></iframe>
                        </div>
                        <div className='max-w-[800px] mt-8'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                        </div>
                    </div>


                    <div className=' relative w-[500px] p-4 px-6'>
                        <div className=''>
                            <h1 className='text-3xl  font-medium'>Graphic Design Course</h1>
                            <div className='flex items-center my-4 gap-4'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p className='text-muted-forground flex-1'>tchisama</p>
                                <Button className='flex gap-2'>Buy now <Stars/></Button>
                            </div>
                            <Sections/>
                        </div>
                    </div>

        </div>
    </div>
  )
}

const Sections = ()=>(
    <>
        <h1 className='text-3xl font-medium'>Sections</h1>

        <div className='flex'>
        <div className='w-1 rounded my-8 translate-x-[20px] z-0 opacity-10 bg-foreground '></div>
        <div className=' my-3 space-y-2 flex-1'>
                        <div className='flex gap-4 my-1 items-center'>
                            <div className="p-1 bg-secondary z-10 rounded-md">
                                <CheckCircle size={28} className=' text-primary p-1'/>
                            </div>
                        <Card  className='flex-1 p-3 flex gap-2 items-center bg-secondary'>
                            <div className='w-8 h-8 flex text-primary justify-center items-center bg-secondary rounded-md'>
                                <Video size={18}/>
                            </div>
                            <div>video 1</div>
                        </Card>
                        </div>

                        <div className='flex gap-4 my-1 items-center'>
                            <div className="p-1 bg-secondary z-10 rounded-md">
                                <Circle size={28} className=' text-primary p-1'/>
                            </div>
                        <Card  className='flex-1 p-3 flex gap-2 items-center'>
                            <div className='w-8 h-8 flex justify-center items-center bg-secondary rounded-md'>
                                <Lock size={18}/>
                            </div>
                            <div>video 1</div>
                        </Card>
                        </div>

                        <div className='flex gap-4 my-1 items-center'>
                            <div className="p-1 bg-secondary z-10 rounded-md">
                                <Circle size={28} className=' text-primary p-1'/>
                            </div>
                        <Card  className='flex-1 p-3 flex gap-2 items-center'>
                            <div className='w-8 h-8 flex justify-center items-center bg-secondary rounded-md'>
                                <Lock size={18}/>
                            </div>
                            <div>video 1</div>
                        </Card>
                        </div>
        </div>
        </div>
    </>
)

export default page