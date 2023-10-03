import React from 'react'
import { Button } from '../ui/button'
import { Loader, LogIn } from 'lucide-react'
import Link from 'next/link'
import useFetchUser from '@/hooks/fetch-user'
import useUserStore from '@/hooks/users-store'
import { UserButton } from '@clerk/nextjs'
import { ModeToggle } from './DarkModeButton'

type Props = {}

const Navbar = (props: Props) => {
useFetchUser()
const {user} = useUserStore()

  return (
    <div className='w-full py-8 flex justify-between'>
        <h1 className='text-3xl font-bold'>30MW</h1>
        <div className='flex gap-3'>
            <ModeToggle/>
            {
                user._id?
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