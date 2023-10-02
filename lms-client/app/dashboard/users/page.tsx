"use client"
import DashboardNavBar from '@/components/global/DashboardNavbar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { User } from '@/hooks/users-store'
import { Loader, MoreHorizontal } from 'lucide-react'
import React from 'react'

type Props = {}

function Page({}: Props) {
    const [users, setUsers] = React.useState<User[]>([])
    const [loading, setLoading] = React.useState(true)
    // fetch usrs from the server
    React.useEffect(() => {
        fetch('http://localhost:8080/auth/users')
        .then(res => res.json())
        .then(data => 
            {
                setUsers(data)
                setLoading(false)
            })
    })
    if(loading){
        return <div className='h-screen flex justify-center items-center '>
                    <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
                </div>
    }
  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='my-4'>
                <div>
                    <h1 className='text-3xl'>Users</h1>
                </div>
            </div>
            <div className='grid my-6 gap-2 grid-cols-1'>
                {
                    users.map((user, index) => {
                        return(
                        <Card key={index} className='max-w-[600px]'>
                            <div className='p-4 flex gap-4 items-center'>
                                <Avatar>
                                    <AvatarImage src={user?.photo} alt="@shadcn" />
                                    <AvatarFallback>{user.fname[0]}  {user.lname[0]}</AvatarFallback>
                                </Avatar>
                                <div className='flex flex-col flex-1'>
                                    <h1>{user.fname} {user.lname}</h1>
                                    <p className='text-sm text-muted-foreground'>{user.email}</p>
                                </div>
                                <Button variant={"ghost"} className='flex gap-2' size={"icon"}>
                                    <MoreHorizontal size={16}/>
                                </Button>
                            </div>
                        </Card>
                        )
                    })
                }
            </div>
        </div>
        
    </div>
  )
}

export default Page