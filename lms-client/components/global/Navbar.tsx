"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Loader, Lock, LogIn, Menu, X } from 'lucide-react'
import Link from 'next/link'
import useFetchUser from '@/hooks/fetch-user'
import useUserStore from '@/hooks/users-store'
import { ClerkProvider, UserButton, useClerk } from '@clerk/nextjs'
import { ModeToggle } from './DarkModeButton'
import logo from "@/public/30mw.png"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from 'next/image'


type Props = {}

const Navbar = (props: Props) => {
useFetchUser()
const {user} = useUserStore()
const u = useClerk()

  return (
    <div>
    <MobailNav />
    <div dir='rtl' className='hidden md:flex w-full py-8 items-center justify-between'>
        <div className='flex-1'>
            <Link href={"/"} className='flex drop-shadow-md items-center '>
                <Image className='h-14 w-14 dark:invert filter' height={50} width={50} src={logo} alt=""/>
                <div>
                    <h1 className='text-md '>اكاديمية</h1>
                    <h1 className='text-sm '>30MW</h1>
                </div>
            </Link>
        </div>
        <div className='flex-1 flex  items-center justify-center'>
        <NavigationMenu className='md:block hidden'>
            <NavigationMenuList dir='rtl'>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        الصفحة الرئيسية
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                    <Link href="/courses" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        الدورات
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                    <Link href="/About" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                    <Link href="https://wa.me/+212642680949?text=HELP" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        تواصل معنا
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                {
                user?.rule==='admin'&&<>
                <NavigationMenuItem>
                    <Link href="/dashboard" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Dashboard {" "}<Lock className='ml-2' size={18}/>
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                </>
                }
            </NavigationMenuList>
        </NavigationMenu>
        </div>
        <div className='flex flex-1 justify-end gap-3'>
            <ModeToggle/>
            {
                u.user?.id?
                <div className='flex gap-3 items-center'>
                <UserButton afterSignOutUrl='/'/>
                </div>

                :
                <>
                    <Link href={"/sign-up"}>
                        <Button variant={"ghost"} >sign up</Button>
                    </Link>
                    <Link href={"/sign-in"}>
                        <Button  className='flex gap-2'>Sign in <LogIn size={18}/></Button>
                    </Link>
                </>
            }
        </div>
    </div>
    </div>
  )
}


const MobailNav = ()=>{
    const [open,setOpen ] = useState(false)
    const u = useClerk()
    return(
        <div className='md:hidden z-30 relative flex py-4 items-center justify-between'>
            <Link href={"/"}>
                <Image className='h-14 w-14 dark:invert filter' height={50} width={50} src={logo} alt=""></Image>
            </Link>
            <Button size={"icon"} onClick={()=>setOpen(!open)}> 
                <Menu/>
            </Button>
            {
                open &&
                <div className='fixed p-4 flex flex-col gap-4 items-center top-0 left-0 h-screen w-screen bg-primary z-10'>
                    <div className='flex w-full  items-center justify-between'>
                        <Link href={"/"} onClick={()=>setOpen(!open)}>
                            <Image className='h-14 invert w-14 filter' height={50} width={50} src={logo} alt=""></Image>
                        </Link>
                        <Button className='text-primary bg-white' size={"icon"} onClick={()=>setOpen(!open)}> 
                            <X/>
                        </Button>
                    </div>
                        <NavigationMenu className=''>
                            <NavigationMenuList className='flex flex-col gap-4  w-full mx-auto' dir='rtl'>
                                <NavigationMenuItem onClick={()=>setOpen(!open)}>
                                    <Link  href="/" legacyBehavior passHref className=''>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()+ " text-white text-xl"}>
                                        الصفحة الرئيسية
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                
                                <NavigationMenuItem onClick={()=>setOpen(!open)}>
                                    <Link  href="/courses" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()+ " text-white text-xl"}>
                                        الدورات
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                {/* <NavigationMenuItem>
                                    <Link href="/About" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            About
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem> */}
                                <NavigationMenuItem onClick={()=>setOpen(!open)} >
                                    <Link href="https://wa.me/+212642680949?text=HELP" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()+ " text-white text-xl"}>
                                        تواصل معنا
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <div className='flex flex-col flex-1 items-center gap-3'>
                            <div className='py-8'>
                            <ModeToggle/>
                            </div>
                            {
                                u.user?.id?
                                <div className='flex gap-3 items-center'>
                                <UserButton afterSignOutUrl='/'/>
                                </div>

                                :
                                <>
                                    <Link onClick={()=>setOpen(!open)} href={"/sign-up"}>
                                        <Button >اشتراك</Button>
                                    </Link>
                                    <Link onClick={()=>setOpen(!open)} href={"/sign-in"}>
                                        <Button  className='flex gap-2'>تسجيل الدخول <LogIn size={18}/></Button>
                                    </Link>
                                </>
                            }
                        </div>
                    </div>
            }
        </div>
    )
}



export default Navbar