"use client"
import DashboardNavBar from '@/components/global/DashboardNavbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Stars } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import useCourseStore from '@/hooks/course-store'

type Props = {}

const  Page = (props: Props) => {
    const navigate = useRouter()
    const [title,setTitle]=React.useState("")
    const {updateCourse}=useCourseStore()
    const createCourse =async ()=>{
        try {
            const response = await axios.post("http://localhost:8080/create-course",{
                title,
            })
            navigate.push(`/dashboard/edit-course/${response.data.id}`)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='min-h-[60vh] flex justify-center items-center'>
                <Card className='min-w-[500px]'>
                    <CardHeader>
                        <CardTitle>Let&apos;s start creating</CardTitle>
                        <CardDescription>you can aloways change the name later :)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input value={title} onChange={(e)=>setTitle(e.target.value)}></Input>
                    </CardContent>
                    <CardFooter className='flex justify-end'>
                        <Button onClick={createCourse} className='flex gap-2'>Create<Stars/></Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Page
