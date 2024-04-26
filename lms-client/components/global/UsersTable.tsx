import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useClerk } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { Ban, BookCopy, HelpCircle, MoreHorizontal, ShieldCheck, Trash2, User } from 'lucide-react';
import { server } from '@/server';
import { Badge } from '../ui/badge';
import GiveAccess from './GiveAccess';
import { Course } from '@/hooks/course-store';
import useUserStore from '@/hooks/users-store';
import axios from 'axios';


type Props = {
  users: any,
  fetchUser: ()=>void
  setUsers: React.Dispatch<React.SetStateAction<any>>
  search:string
}
interface User {
    _id: string;
    lname: string;
    fname: string;
    email: string;
    id_user: string;
    photo: string;
    rule: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

function UsersTable({users:_users,search,fetchUser,setUsers:_setUsers}: Props) {
  const [users, setUsers] = React.useState<User[]>(_users as User[])
  console.log(users)
  const fields = [
    {name:"avatar",key:"photo"},
    {name:"email",key:"email"},
    {name:"first name",key:"fname"},
    {name:"last name",key:"lname"},
    {name:"sign in date",key:"createdAt"},
    {name:"rule",key:"rule"},
  ]


  const [courses, setCourses] = React.useState<Course[]>([])
    
    useEffect(() => {
        fetch(server+'courses')
        .then(res => res.json()).then(data =>{
        setCourses(data)
        })
    },[])



  useEffect(() => {
    setUsers(_users)
  },[_users])
  return (
    <Table className='w-max md:w-full'>
      <TableHeader>
        <TableRow>
              <TableHead  className='capitalize md:hidden'>Access</TableHead>
          {
            fields.map((field)=>(
              <TableHead  key={field.key} className='capitalize min-w-[100px]'>{field.name}</TableHead>
            ))
          }
              <TableHead  className='capitalize text-left'>actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          users
          .filter(_user => (_user.email.toLowerCase()+" "+_user.fname.toLowerCase()+" "+_user.lname.toLowerCase()).includes(search.toLowerCase()))
          .map((user, index) => (
            <TableRow key={user._id}>
              <TableCell className='text-left flex md:hidden'>
                <GiveAccess courses={courses} id={user.id_user} >
                  <Button variant={"outline"} size={"icon"}><BookCopy size={16}/></Button>
                </GiveAccess>
              </TableCell>
              {
                fields.map((field)=>(
                  <TableCell key={field.key}>
                    {
                      field.name === "avatar" ?
                      <Avatar>
                        <AvatarImage src={user[field.key as keyof User] as string} />
                        <AvatarFallback>{user.fname[0]}  {user.lname[0]}</AvatarFallback>
                      </Avatar>
                      :
                      field.name === "sign in date" ?
                      new Date(user[field.key as keyof User]).toLocaleDateString() + " - " + new Date(user[field.key as keyof User]).toLocaleTimeString()
                      :
                      field.name === "rule" ?
                      <Badge variant={user[field.key as keyof User] === "user"?"secondary":"default"}>{user[field.key as keyof User]}</Badge>
                      :
                      user[field.key as keyof User]
                    }
                  </TableCell>
                ))
              }
              <TableCell className='text-left'>
                <GiveAccess courses={courses} id={user.id_user} >
                  <Button variant={"outline"} size={"icon"}><BookCopy size={16}/></Button>
                </GiveAccess>
                <MakeAdmin setUsers={_setUsers} _user={user} fetchUser={fetchUser}/>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}









const MakeAdmin = ({_user,fetchUser,setUsers}:{  _user: User,fetchUser: ()=>void,setUsers: React.Dispatch<React.SetStateAction<any>>})=>{
  const user = useClerk()
  const {user:userAdmin} = useUserStore()
    const setAdmin = (id:string)=>{
        // make user admin
        fetch(server+'auth/change-rule/'+id+'/admin').then(res => res.json()).then(data => {
            // fetchUser()
            setUsers((users:User[]) => {
                return users.map(user => {
                    if (user.id_user === id) {
                        return {
                            ...user,
                            rule: 'admin',
                        };
                    }
                    return user;
                });
            })
        })
    }

    const setUserRule = (id:string)=>{
        // make user admin
        fetch(server+'auth/change-rule/'+id+'/user').then(res => res.json()).then(data => {
            // fetchUser()
            setUsers((users:User[]) => {
                return users.map(user => {
                    if (user.id_user === id) {
                        return {
                            ...user,
                            rule: 'user',
                        };
                    }
                    return user;
                });
            })
        })
    }
    const setContributor = (id:string)=>{
        // make user admin
        fetch(server+'auth/change-rule/'+id+'/contributor').then(res => res.json()).then(data => {
            // fetchUser()
            setUsers((users:User[]) => {
                return users.map(user => {
                    if (user.id_user === id) {
                        return {
                            ...user,
                            rule: 'contributor',
                        };
                    }
                    return user;
                });
            })
        })
    }
 return (
                            userAdmin?.rule === "admin" &&
                            <DropdownMenu>
                            <DropdownMenuTrigger>
                                {
                                    user.user?.id!==_user._id && (
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
                                        _user.rule!=="user" &&
                                        <DropdownMenuItem onClick={()=>setUserRule(_user.id_user)} className='flex gap-2 items-center'><User size={16}/> Set user</DropdownMenuItem>
                                    }
                                    {
                                        _user.rule!=="contributor" &&
                                        <DropdownMenuItem onClick={()=>setContributor(_user.id_user)} className='flex gap-2 items-center'><HelpCircle size={16}/> Set contributor</DropdownMenuItem>
                                    }
                                    {
                                        _user.rule!=="admin" &&
                                        <DropdownMenuItem onClick={()=>setAdmin(_user.id_user)} className='flex gap-2 items-center'><ShieldCheck size={16}/> Set admin</DropdownMenuItem>
                                    }
                                    
                                <DropdownMenuItem className='flex gap-2 items-center'><Ban size={16}/>Block user</DropdownMenuItem>
                                <DropdownMenuItem className='flex gap-2 items-center dark:text-red-400 text-red-600' onClick={()=>{
            axios.delete(server+'auth/user/'+_user.id_user).then(res => {
              setUsers((users:User[]) => {
                return users.filter(user => user.id_user !== _user.id_user);
              })
            })
          }}><Trash2 size={16}/>Delete user</DropdownMenuItem>
                            </DropdownMenuContent>
                            </DropdownMenu>
 ) 
}




export default UsersTable
