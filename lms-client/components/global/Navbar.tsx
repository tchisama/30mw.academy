"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Loader, Lock, LogIn, Menu } from 'lucide-react'
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
                <h1 className='text-xl md:block hidden font-medium'>Academy</h1>
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
                    <Link href="/Contact" legacyBehavior passHref>
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
    return(
        <div className='md:hidden flex py-4 items-center justify-between'>
            <Link href={"/"}>
                <Image className='h-14 w-14 dark:invert filter' height={50} width={50} src={logo} alt=""></Image>
            </Link>
            <Button size={"icon"}> 
                <Menu/>
            </Button>
        </div>
    )
}



export default Navbar