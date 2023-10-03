"use client"
import DashboardNavBar from '@/components/global/DashboardNavbar'
import { Button } from '@/components/ui/button'
import { Card, CardHeader } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Edit, MoreHorizontal, PlusCircle, Trash, Trash2 } from 'lucide-react'
import React, { useEffect } from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from '@/components/ui/input'
import useCategories from '@/hooks/categories'
import axios from 'axios'
import useCategoriesStore from '@/hooks/categories-store'
type Props = {}

const page = (props: Props) => {
  const {update}=useCategories()
  const {categories}=useCategoriesStore()
  const [text,setText]=React.useState("")
  // create new category
  const createCategory =async()=>{
    try {
        const response = await axios.post("http://localhost:8080/category/create-category",{
            name:text
        })
        update(p=>p+1)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className=''>
        <div className='container min-h-screen  mx-auto'>
            <DashboardNavBar/>
            <div className='h-[120px] items-center flex justify-between'>
              <h1 className='text-3xl'>Categories</h1>
              <AlertDialog>
                    <AlertDialogTrigger>
                        <Button className='flex gap-2'>new <PlusCircle size={16}></PlusCircle></Button>
                    </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>yaay let's create new category,</AlertDialogTitle>
                    <AlertDialogDescription>
                        choose a category name ,you can change it any time later
                    </AlertDialogDescription>
                    <Input value={text} onInput={(e)=>setText((e.target as HTMLInputElement).value)} className='w-full my-2' placeholder='Enter category name'></Input>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className='' onClick={createCategory}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialog>

            </div>
            <div className='flex flex-col gap-2'>
                {
                    categories.map((category, index) => {
                        return (
                            <Card key={index} className='max-w-[600px]'>
                                <CardHeader className='flex flex-row p-2  m-0 px-4 items-center justify-between'>
                                    <h1 className='px-2'>{category.name}</h1>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button variant={"ghost"} className='flex gap-2' size={"icon"}>
                                            <MoreHorizontal size={16}/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>Category Actions</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                            <DropdownMenuItem className='flex gap-2 items-center'><Edit size={16}/> Edit category</DropdownMenuItem>
                                        <DropdownMenuItem className='flex gap-2 items-center dark:text-red-400 text-red-600'><Trash size={16}/>Delete category</DropdownMenuItem>
                                    </DropdownMenuContent>
                                    </DropdownMenu>
                                </CardHeader>
                            </Card>
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default page