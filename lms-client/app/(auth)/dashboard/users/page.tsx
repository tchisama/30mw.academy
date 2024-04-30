"use client";
import DashboardNavBar from "@/components/global/DashboardNavbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/hooks/users-store";
import {
    ArrowLeft,
  ArrowRight,
  Ban,
  Car,
  EyeIcon,
  LineChart,
  Loader,
  MoreHorizontal,
  Shield,
  ShieldCheck,
  Sun,
  Trash2,
  Users,
} from "lucide-react";
import React, { memo, useEffect } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useClerk } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import { server } from "@/server";
import UsersTable from "@/components/global/UsersTable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import axios from "axios";

type Props = {};

function Page({}: Props) {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [usersAnalitics, setUsersAnalytics] = React.useState<{
    user: number;
    Last7Days: number;
    today: number;
    admins: number;
  }>();
  const [search, setSearch] = React.useState("");
  const user = useClerk();
  const [page,setPage] = React.useState(0)
  const [admins,setAdmins] = React.useState<User[]>([]);
  // const [access,setAccess] = React.useState<any[]>([])





  // fetch usrs from the server
  const fetchUser = () => {
    // fetch(server + "auth/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUsers(data);
    //     setLoading(false);
    //   });
    axios.post(server + "auth/users", { page,search }).then((res) => {
      let resData = res.data;
      // resData.forEach(async(user:any,i:number) => {
      //   resData[i].access = await axios.get(server + "auth/access-user/" + user.id_user).then((res) => res.data);
      // })



      setUsers([...users, ...resData]);
      setLoading(false);
      console.log(resData);
    });


    

    axios.get (server + "auth/admins").then((res) => {
      setAdmins(res.data);
    })
    fetch(server + "auth/users-analytics")
      .then((res) => res.json())
      .then((data) => {
        setUsersAnalytics(data);
        setLoading(false);
      });
  };



  const add_access_to_users = async () => {
    const allUsers = await axios.get(server + "auth/users").then((res) => res.data);
    console.log("all users",allUsers);
    [allUsers[0]].forEach(async (user: any) => {
      const userAccess = await axios.get(server + "accesses-user/" + user.id_user).then((res) => res.data);
      console.log("user",user.fname,userAccess);
      if (userAccess.length === 0) {
        await axios.put(server + "user/" + user.id_user, {
          access: userAccess.map((access: any) => access.id_access),
        })
      }
    });
  }



  React.useEffect(() => {
    setUsers([]);
    fetchUser();
  }, [search]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <h1 className="flex gap-3">
          <Loader className="animate-spin" />
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="">
      <div className="container px-2 md:px-4 min-h-screen  mx-auto">
        <DashboardNavBar />
        <Button className="mt-8" onClick={add_access_to_users}>add access to users</Button>
        <div className="my-4">
          <div>
            <h1 className="text-3xl">Analytics</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          <Card className="flex-1 bg-secondary">
            <CardHeader>
              <div className="flex gap-4">
                <Users size={28} />
                <h2>Total users</h2>
              </div>
              <CardTitle className="text-5xl">{usersAnalitics?.user}</CardTitle>
            </CardHeader>
          </Card>
          <Card className="flex-1 bg-secondary">
            <CardHeader>
              <div className="flex gap-4">
                <Sun size={28} />
                <h2>Today</h2>
              </div>
              <CardTitle className="text-5xl">
                {usersAnalitics?.today}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="flex-1 bg-secondary">
            <CardHeader>
              <div className="flex gap-4">
                <LineChart size={28} />
                <h2>Last week</h2>
              </div>
              <CardTitle className="text-5xl">
                {usersAnalitics?.Last7Days}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="flex-1 bg-secondary">
            <CardHeader>
              <div className="flex gap-4">
                <ShieldCheck size={28} />
                <h2>Admins</h2>
              </div>
              <CardTitle className="text-5xl">
                {usersAnalitics?.admins}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div className="my-8">
          <Separator />
        </div>
        <div className="my-4">
          <div className="flex gap-4 justify-between flex-col md:flex-row">
            <h1 className="text-3xl"></h1>
            <Input
              type="text"
              value={search}
              onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
              className="max-w-[400px]"
              placeholder="search users"
            ></Input>
          </div>
        </div>
        <div className="grid my-6 gap-2 grid-cols-1">
          <ScrollArea>
            <Accordion type="single" className="bg-[#0003] border px-6 rounded-xl" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-between w-full items-center">
                  <h1 className="text-3xl  py-3">Admins</h1>
                  <EyeIcon  size={24}/>
                </AccordionTrigger>
                <AccordionContent>
                    <UsersTable
                      search={search}
                      setUsers={setAdmins}
                      fetchUser={fetchUser}
                      users={admins}
                    />
                </AccordionContent>
              </AccordionItem>
            </Accordion>



            <h1 className="text-3xl py-3">Users</h1>
            <UsersTable
              search={search}
              setUsers={setUsers}
              fetchUser={fetchUser}
              users={users.filter(_u=>_u.rule==="user")}
            />
            <div className="flex py-8 justify-center items-center">
              <Button
                onClick={() => {
                  setPage(page + 1);
                  fetchUser();
                }}
                variant="secondary"
                className="flex gap-2 items-center"
              >
                <ArrowRight size={16} />
                Load more
              </Button>
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {users
            .filter((_user) =>
              (
                _user.email.toLowerCase() +
                " " +
                _user.fname.toLowerCase() +
                " " +
                _user.lname.toLowerCase()
              ).includes(search.toLowerCase()),
            )
            .map((_user, index) => {
              return "";
              // <Card key={index} className='max-w-[800px]'>
              //     <div className='p-4 flex gap-4 items-center'>
              //         <Avatar>
              //             <AvatarImage src={_user?.photo} alt="@shadcn" />
              //             <AvatarFallback>{_user?.fname[0]}  {_user?.lname[0]}</AvatarFallback>
              //         </Avatar>
              //         <div className='flex flex-col flex-1'>
              //             <div className='flex gap-2 w-full justify-between'>
              //                 <h1>{_user?.fname} {_user?.lname}</h1>
              //             </div>
              //             <p className='text-sm text-muted-foreground'>{_user.email}</p>
              //         </div>
              //         <Badge variant={_user?.rule=="user"?"secondary":"default"}>{_user?.rule}</Badge>
              //         <DropdownMenu>
              //         <DropdownMenuTrigger>
              //             {
              //                 user.user?.id!==_user.id_user && (
              //                     <Button variant={"ghost"} className='flex gap-2' size={"icon"}>
              //                         <MoreHorizontal size={16}/>
              //                     </Button>
              //                 )
              //             }
              //         </DropdownMenuTrigger>
              //         <DropdownMenuContent>
              //             <DropdownMenuLabel>User Actions</DropdownMenuLabel>
              //             <DropdownMenuSeparator />
              //             {
              //                 _user.rule=="admin"?
              //                 <DropdownMenuItem onClick={()=>setUserRule(_user.id_user)} className='flex gap-2 items-center'><ShieldCheck size={16}/> Set user</DropdownMenuItem>
              //                 :<DropdownMenuItem onClick={()=>setAdmin(_user.id_user)} className='flex gap-2 items-center'><ShieldCheck size={16}/> Set admin</DropdownMenuItem>
              //             }
              //             <DropdownMenuItem className='flex gap-2 items-center'><Ban size={16}/>Block user</DropdownMenuItem>
              //             <DropdownMenuItem className='flex gap-2 items-center dark:text-red-400 text-red-600'><Trash2 size={16}/>Delete user</DropdownMenuItem>
              //         </DropdownMenuContent>
              //         </DropdownMenu>

              //     </div>
              // </Card>
            })}
        </div>
      </div>
    </div>
  );
}

export default Page;

