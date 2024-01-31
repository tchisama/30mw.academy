import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { CheckCircle, Circle, PlusCircle } from 'lucide-react'
import { Input } from '../ui/input'
import { server } from '@/server'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
 import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import axios from 'axios'
type User = {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  photo: string;
  rule: string;
  id_user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  check:boolean
}
function AddAccessUsers({usersHaveAccess,params}:{usersHaveAccess:any,params:{course_id:string}}) {
    const [users,setUsers]=React.useState<User[]>([])
    const [search ,setSearch] = useState("")
    useEffect(()=>{
        fetch(server+'auth/users')
        .then(res => res.json())
        .then(data => 
            {
                var lvl1 =data.map((user:User)=>{
                    return {
                        ...user,
                        check:false
                    }
                }) 
                usersHaveAccess.forEach((user:any) => {
                    lvl1=lvl1.filter((u:User)=>user.user[0]?._id!==u._id)
                });
                setUsers(lvl1)
            })
    },[])
    const giveAccess = ()=>{
      users.forEach(
        (user)=>{
          if(user.check){
            axios.post(server+"auth/make-access",{
              id_course:params.course_id,
              id_user:user.id_user,
              price_access:0
            }).then(()=>{
              //reload the window
              window.location.reload()
            })
          }
        }
      )
    }
  return (
<Sheet>
    <SheetTrigger>
        <Button className='flex gap-2'><PlusCircle size={18}/> Add User</Button>
    </SheetTrigger>
  <SheetContent className='h-screen'>
      <SheetTitle>Give course access</SheetTitle>
      <div className='min-w-[500px] h-full flex flex-col pb-4'>
          <div className='flex justify-between items-center gap-8'>
              <h1 className='text-2xl my-4'>Users</h1>
              <Input placeholder='search by name or email' value={search} onInput={(e:any)=>setSearch(e.target.value)}/>
          </div>
          <div className='my-4'>
            {
              users.some((user)=>user.check) &&
              <Button onClick={giveAccess}>Give Access</Button>
            }
          </div>
          <div className='flex flex-col px-1 gap-2 overflow-y-scroll '>
            {users
            .filter((user)=>user.fname.toLowerCase().includes(search.toLowerCase()) || user.lname.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase()))
            .map((user)=>(
                <div className={'p-2 flex gap-2 border rounded-md'+(user.check?' bg-secondary':'')} key={user._id}>
                    <Avatar>
                      <AvatarImage src={user.photo} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className='flex-1'>
                          <div className='text-sm'>{user.fname} {user.lname}</div>
                          <div className='text-xs'>{user.email}</div>
                    </div>
                      <Button onClick={()=>setUsers(users.map(_user=>_user._id==user._id?{..._user,check:!_user.check}:_user))} size={"icon"} variant={"ghost"}>
                        {
                          user.check?
                          <CheckCircle/>:
                          <Circle/>
                        }
                      </Button>
                </div>
            ))}
            </div>
      </div>
  </SheetContent>
</Sheet>

  )
}

export default AddAccessUsers