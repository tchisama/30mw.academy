"use client"
import DashboardNavBar from '@/components/global/DashboardNavbar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User } from '@/hooks/users-store'
import {  Ban, Car, LineChart, Loader, MoreHorizontal, Shield, ShieldCheck, Sun, Trash2, Users } from 'lucide-react'
import React from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useClerk } from '@clerk/nextjs'
import { Separator } from '@/components/ui/separator'



type Props = {}

function Page({}: Props) {
    const [users, setUsers] = React.useState<User[]>([])
    const [loading, setLoading] = React.useState(true)
    const [usersAnalitics, setUsersAnalytics] = React.useState<{user:number,Last7Days:number,today:number,admins:number}>()
    const [search, setSearch] = React.useState('')
    const user = useClerk();
    // fetch usrs from the server
    const fetchUser = ()=>{
        fetch('http://localhost:8080/auth/users')
        .then(res => res.json())
        .then(data => 
            {
                console.log(data)
                setUsers(data)
                setLoading(false)
            })

        fetch('http://localhost:8080/auth/users-analytics')
        .then(res => res.json())
        .then(data => 
            {
                console.log(data)
                setUsersAnalytics(data)
                setLoading(false)
            })
    }
    React.useEffect(() => {
        fetchUser()
    },[])
    if(loading){
        return <div className='h-screen flex justify-center items-center '>
                    <h1 className='flex gap-3'><Loader className='animate-spin'/>Loading...</h1>
                </div>
    }
    const setAdmin = (id:string)=>{
        // make user admin
        fetch('http://localhost:8080/auth/change-rule/'+id+'/admin').then(res => res.json()).then(data => {
            fetchUser()
        })
    }

    const setUserRule = (id:string)=>{
        // make user admin
        fetch('http://localhost:8080/auth/change-rule/'+id+'/user').then(res => res.json()).then(data => {
            fetchUser()
        })
    }
  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='my-4'>
                <div>
                    <h1 className='text-3xl'>Analytics</h1>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <Card className='flex-1 bg-secondary'>
                    <CardHeader>
                        <div className='flex gap-4'>
                            <Users size={28}/>
                            <h2>Total users</h2>
                        </div>
                        <CardTitle className='text-5xl'>
                            {usersAnalitics?.user}
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card className='flex-1 bg-secondary'>
                    <CardHeader>
                        <div className='flex gap-4'>
                            <Sun size={28}/>
                            <h2>Today</h2>
                        </div>
                        <CardTitle className='text-5xl'>
                            {usersAnalitics?.today}
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card className='flex-1 bg-secondary'>
                    <CardHeader>
                        <div className='flex gap-4'>
                            <LineChart size={28}/>
                            <h2>Last week</h2>
                        </div>
                        <CardTitle className='text-5xl'>
                            {usersAnalitics?.Last7Days}
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card className='flex-1 bg-secondary'>
                    <CardHeader>
                        <div className='flex gap-4'>
                            <ShieldCheck size={28}/>
                            <h2>Admins</h2>
                        </div>
                        <CardTitle className='text-5xl'>
                            {usersAnalitics?.admins}
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>
            <div className='my-8'>
                <Separator/>
            </div>
            <div className='my-4'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl'>Users</h1>
                    <Input type='text' value={search} onInput={(e) => setSearch((e.target as HTMLInputElement).value)} className='max-w-[400px]' placeholder='search users'></Input>
                </div>
            </div>
            <div className='grid my-6 gap-2 grid-cols-1'>
                {
                    users.filter(_user => (_user.email.toLowerCase()+" "+_user.fname.toLowerCase()+" "+_user.lname.toLowerCase()).includes(search.toLowerCase())).map((_user, index) => {
                        return(
                        <Card key={index} className='max-w-[800px]'>
                            <div className='p-4 flex gap-4 items-center'>
                                <Avatar>
                                    <AvatarImage src={_user?.photo} alt="@shadcn" />
                                    <AvatarFallback>{_user?.fname[0]}  {_user?.lname[0]}</AvatarFallback>
                                </Avatar>
                                <div className='flex flex-col flex-1'>
                                    <div className='flex gap-2 w-full justify-between'>
                                        <h1>{_user?.fname} {_user?.lname}</h1>
                                    </div>
                                    <p className='text-sm text-muted-foreground'>{_user.email}</p>
                                </div>
                                <Badge variant={_user?.rule=="user"?"secondary":"default"}>{_user?.rule}</Badge>
                                <DropdownMenu>
                                <DropdownMenuTrigger>
                                    {
                                        user.user?.id!==_user.id_user && (
                                            <Button variant={"ghost"} className='flex gap-2' size={"icon"}>
                                                <MoreHorizontal size={16}/>
                                            </Button>
                                        )
                                    }
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>User Actions</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {
                                        _user.rule=="admin"?
                                        <DropdownMenuItem onClick={()=>setUserRule(_user.id_user)} className='flex gap-2 items-center'><ShieldCheck size={16}/> Set user</DropdownMenuItem>
                                        :<DropdownMenuItem onClick={()=>setAdmin(_user.id_user)} className='flex gap-2 items-center'><ShieldCheck size={16}/> Set admin</DropdownMenuItem>
                                    }
                                    <DropdownMenuItem className='flex gap-2 items-center'><Ban size={16}/>Block user</DropdownMenuItem>
                                    <DropdownMenuItem className='flex gap-2 items-center dark:text-red-400 text-red-600'><Trash2 size={16}/>Delete user</DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>

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