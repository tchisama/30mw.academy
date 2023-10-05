import React, { useEffect } from 'react'
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
type User = {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  photo: string;
  rule: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  check:boolean
}
function AddAccessUsers() {
    const [users,setUsers]=React.useState<User[]>([])
    useEffect(()=>{
        fetch(server+'auth/users')
        .then(res => res.json())
        .then(data => 
            {
                console.log(data)
                setUsers(data.map((user:User)=>{
                    return {
                        ...user,
                        check:false
                    }
                }))
            })
    },[])

  return (
<Sheet>
    <SheetTrigger>
        <Button className='flex gap-2'><PlusCircle size={18}/> Add User</Button>
    </SheetTrigger>
  <SheetContent>
      <SheetTitle>Give course access</SheetTitle>
      <div className='min-w-[500px]'>
        <div className=''>
          <div className='flex justify-between items-center gap-8'>
              <h1 className='text-2xl my-4'>Users</h1>
              <Input/>
          </div>
          <div className='my-4'>
            {
              users.some((user)=>user.check) &&
              <Button>Give Access</Button>
            }
          </div>
          <div className='flex flex-col gap-2 '>
            {users.map((user)=>(
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
      </div>
  </SheetContent>
</Sheet>

  )
}

export default AddAccessUsers