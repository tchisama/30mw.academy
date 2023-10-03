"use client"
import Navbar from '@/components/global/Navbar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import useCategories from '@/hooks/categories'
import useCategoriesStore from '@/hooks/categories-store'
import Image from 'next/image'
import React, { useEffect } from 'react'

type Props = {}
type CourseClient={
    _id:string,
    title:string,
    description:string,
    price:number,
    image:string,
    category:string,
}

const page = (props: Props) => {
    const[courses, setCourses] = React.useState<CourseClient[]>([])
    const {categories}=useCategoriesStore()
    const {update}=useCategories()
    useEffect(() => {
        fetch("http://localhost:8080/courses-client/test").then(res => res.json()).then(data => {
            setCourses(data)
            update(p=>p+1)
        })
    })
  return (
    <div className="w-full   container mx-auto">
        <div className="py-4 flex min-h-screen flex-col">
            <Navbar/>
            <div className='pt-24'>
                <h1 className='text-3xl font-medium'>Courses</h1>
            </div>
            <div className='my-8'>
                <Separator/>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    courses.map(course => (
                        <Card key={course._id} className='overflow-hidden'>
                            {

                                course.image ? <img className='object-cover aspect-video' alt='' src={course.image}></img> 
                                : <div className='aspect-video bg-secondary'></div>
                            }

                            <CardHeader>
                                <CardTitle>{course.title}</CardTitle>
                                <div className='flex items-center justify-between'>
                                    <Badge>{categories
                                    .find(c=>c._id===course.category)?.name}</Badge>
                                    <h3 className='text-xl'>{course.price} Dh</h3>
                                </div>
                                <CardDescription>{course.description.slice(0, 70)}</CardDescription>
                                {/* <Progress value={33} /> */}
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default page