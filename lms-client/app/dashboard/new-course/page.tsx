import DashboardNavBar from '@/components/global/DashboardNavbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Stars } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const  Page = (props: Props) => {
  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='min-h-[60vh] flex justify-center items-center'>
                <Card className='min-w-[500px]'>
                    <CardHeader>
                        <CardTitle>Let&apos;s start creating</CardTitle>
                        <CardDescription>you can aloways change the name later :)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Input></Input>
                    </CardContent>
                    <CardFooter className='flex justify-end'>
                        <Link href="/dashboard/edit-course">
                            <Button className='flex gap-2'>Create<Stars/></Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default Page
