"use client"
import DashboardNavBar from '@/components/global/DashboardNavbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Loader, Stars } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import useCourseStore from '@/hooks/course-store'
import useUserStore from '@/hooks/users-store'
import useFetchUser from '@/hooks/fetch-user'
import { server } from '@/server'

type Props = {}

const  Page = (props: Props) => {
    const navigate = useRouter()
    const [title,setTitle]=React.useState("")
    const [loading,setLoading]=React.useState(false)
    const {user,updateUser}=useUserStore()
    useFetchUser()
    const createCourse =async ()=>{
        setLoading(true)
        try {
            const response = await axios.post("/api/course",{
                title,
                owner:{
                    fname:user?.fname,
                    lname:user?.lname,
                    email:user?.email,
                    photo:user?.photo,
                    id_user:user?.id_user,
                }
            })
            navigate.push(`/dashboard/edit-course/${response.data.id}`)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='min-h-[60vh] flex justify-center items-center'>
                <Card className='min-w-[500px]'>
                    <CardHeader>
                        <CardTitle>Let&apos;s start creating 😀</CardTitle>
                        <CardDescription>you can aloways change the name later :)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input placeholder='Title of the course' value={title} onChange={(e)=>setTitle(e.target.value)}></Input>
                    </CardContent>
                    <CardFooter className='flex justify-end'>
                        <Button disabled={loading} onClick={createCourse} className='flex gap-2'>
                            {
                                loading?
                                <>Creating<Loader className='animate-spin'/></>
                                :
                                <>Create<Stars/></>

                            }
                            
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Page
