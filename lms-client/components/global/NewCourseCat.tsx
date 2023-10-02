import React from 'react'
import { Card, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Edit2, Save } from 'lucide-react'
import useCourseStore from '@/hooks/course-store'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import useCategories from '@/hooks/categories'



type Props = {}

function NewCourseCat({}: Props) {
    const [editMode, setEditMode] = React.useState(false)
    const {course,updateCourse}=useCourseStore()
    const {categories,update}=useCategories()
  return (
    <Card className='w-full h-fit'>
    <div className='flex justify-between items-start p-6'>
        <div className='space-y-2'>
            <h4 className='text-xl font-semibold'> Course Category </h4>

        {
            !editMode &&
            <h3>{categories.find(c=>c._id===course.category)?.name}</h3>
        }
        </div>
        {
            !editMode &&
            <Button variant={"outline"} onClick={() => setEditMode(true)} className="flex gap-2">Edit<Edit2 size={18} /></Button>
        }
    </div>
    {
        editMode && 
        <CardFooter className='flex justify-between gap-2'>
            <Select value={course.category} onValueChange={(e)=>updateCourse({...course,category:e})}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="category" />
            </SelectTrigger>
            <SelectContent>
                {
                    categories.map((cat)=>{
                        return <SelectItem key={cat._id} value={cat._id}>{cat.name}</SelectItem>
                    })
                }
            </SelectContent>
            </Select>

            <Button onClick={() => setEditMode(false)} className="flex gap-2">Save<Save size={18} /></Button>
        </CardFooter>
    }
    </Card>
  )
}

export default NewCourseCat