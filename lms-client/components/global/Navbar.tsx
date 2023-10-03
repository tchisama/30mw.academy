import React from 'react'
import { Button } from '../ui/button'
import { Loader, LogIn } from 'lucide-react'
import Link from 'next/link'
import useFetchUser from '@/hooks/fetch-user'
import useUserStore from '@/hooks/users-store'
import { ClerkProvider, UserButton, useClerk } from '@clerk/nextjs'
import { ModeToggle } from './DarkModeButton'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


type Props = {}

const Navbar = (props: Props) => {
useFetchUser()
const {user} = useUserStore()
const u = useClerk()

  return (
    <div className='w-full py-8 flex items-center justify-between'>
        <div className='flex-1'>
            <Link href={"/"}>
            <h1 className='text-3xl font-bold'>30MW</h1>
            </Link>
        </div>
        <div className='flex-1 flex items-center justify-center'>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/courses" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Courses
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/About" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/Contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>
        <div className='flex flex-1 justify-end gap-3'>
            <ModeToggle/>
            {
                u.user?.id?
                <div className='flex gap-3 items-center'>
                {
                user?.rule==='admin'&&<>
                <Link href={"/dashboard"}>
                    <Button variant={"outline"}>Dashboard</Button>
                </Link>
                </>
                }
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
  )
}

export default Navbar