"use client"
import Navbar from '@/components/global/Navbar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import useCategories from '@/hooks/categories'
import useCategoriesStore from '@/hooks/categories-store'
import { server } from '@/server'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
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


function Courses({}: Props) {
    const[courses, setCourses] = React.useState<CourseClient[]>([])
    const {categories}=useCategoriesStore()
    const {update}=useCategories()
    const router = useRouter()
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        fetch(server+"courses-client/test").then(res => res.json()).then(data => {
            setCourses(data)
            update(p=>p+1)
            setLoading(false)
        })
    },[])
    if (loading) {
        return(
            <div className='h-screen flex justify-center items-center '>
                <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
            </div>
        )
    }
  return (
  <div className='grid grid-cols-3 gap-4'>
      {
          courses.map(course => (
              
              <Card dir='rtl' onClick={() => router.push(`/course/${course._id}/start`)} key={course._id} className='overflow-hidden group cursor-pointer'>
                  <div className='relative aspect-video w-full overflow-hidden'>
                  {

                      course.image ? <img className='object-cover group-hover:scale-105 duration-300 w-full aspect-video' alt='' src={course.image}></img> 
                      : <div className='aspect-video bg-secondary'></div>
                  }
                  </div>
                  <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <div className='flex items-center justify-between'>
                          <Badge>{categories
                          .find(c=>c._id===course.category)?.name}</Badge>
                          <h3 className='text-xl'>{course.price==0?"Free":course.price+" Dh"} </h3>
                      </div>
                      <CardDescription>{course.description.slice(0, 70)}</CardDescription>
                  </CardHeader>
              </Card>
          ))
      }
  </div>
  )
}

export default Courses