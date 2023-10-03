"use client"
import Navbar from '@/components/global/Navbar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CheckCircle, Circle, Stars, Video } from 'lucide-react'
import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Card,CardHeader } from '@/components/ui/card'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="w-full  px-8 ">
        <div className="py-0 container mx-auto flex flex-col">
            <Navbar/>
        </div>
        <div className='flex  max-w-[1700px] m-4 mx-auto'>


                    <div className='flex gap-2 flex-col flex-1'>
                        <div className=''>
                            <iframe className='w-full aspect-video rounded-xl' height="600" src="https://www.youtube.com/embed/byDNMLTuOqI?si=8tPfpHn1hyySkIES" title="YouTube video player" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "></iframe>
                        </div>
                        <div >
                            <div className='flex w-full py-8 justify-between items-start'>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas, voluptatum repellendus minima alias inventore. Dolorum hic voluptates voluptatum, provident, odio dolorem, aliquid labore sequi itaque impedit tempore voluptatem sed!</p>
                        </div>
                    </div>


                    <div className=' relative w-[600px] p-4 px-6'>
                        <div className='sticky top-10'>
                            <h1 className='text-3xl  font-medium'>Graphic Design Course</h1>
                            <div className='flex items-center my-4 gap-4'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <p className='text-muted-forground flex-1'>tchisama</p>
                                <Button size={"lg"} className='flex gap-2'>Buy now <Stars/></Button>
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
        <div className='flex my-3 flex-col gap-2'>
                <h1 className='text-xl my-1 font-medium'>introduction</h1>
                <div className='flex gap-4 items-center'>
                    <CheckCircle className='opacity-30'/>
                    <Card className='flex-1 p-4 flex gap-2 items-center'>
                        <div className='w-10 h-10 flex justify-center items-center bg-secondary rounded-lg'>
                            <Video/>
                        </div>
                        <div>video 1</div>
                    </Card>
                </div>
                <div className='flex gap-4 items-center'>
                    <Circle className='opacity-30'/>
                    <Card className='flex-1'>
                        <CardHeader>video 1</CardHeader>
                    </Card>
                </div>
        </div>
    </>
)

export default page