"use client"
import Navbar from '@/components/global/Navbar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import useCategories from '@/hooks/categories'
import useCategoriesStore from '@/hooks/categories-store'
import { server } from '@/server'
import { ArrowLeft, Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'

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
        fetch("/api/courses").then(res => res.json()).then(data => {
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
  <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
      {
          courses.map(course => (
              
              <Card dir='rtl' onClick={() => {
                if(course._id=="652019e1200c377a6d6c31b5"){
                    router.push("/design-course")
                }else{
                    router.push(`/course/${course._id}/start`)
                }
              }} key={course._id} className='overflow-hidden drop-shadow-xl group cursor-pointer'>
                  <div className='relative aspect-video w-full overflow-hidden'>
                  {

                      course.image ? <img className='object-cover group-hover:scale-105 duration-300 w-full aspect-video' alt='' src={course.image}></img> 
                      : <div className='aspect-video bg-secondary'></div>
                  }
                  </div>
                  <CardHeader>
                      <CardTitle className='text-lg'>{course.title}</CardTitle>
                      <div className='flex items-center justify-between'>
                          <div >{categories
                          .find(c=>c._id===course.category)?.name}</div>
                          <h3 className='text-2xl font-medium'>{course.price==0?"Free":course.price+" Dh"} </h3>
                      </div>
                      <CardDescription className='h-10 overflow-hidden'>{course.description}</CardDescription>
                      {/* <Button className='mt-auto flex gap-3'>المزيد من التفاصيل <ArrowLeft size={18}/></Button> */}
                  </CardHeader>
              </Card>
          ))
      }
  </div>
  )
}

export default Courses