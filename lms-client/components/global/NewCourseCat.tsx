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



type Props = {}

function NewCourseCat({}: Props) {
    const [editMode, setEditMode] = React.useState(false)
    const {course,updateCourse}=useCourseStore()
  return (
    <Card className='w-full h-fit'>
    <div className='flex justify-between items-start p-6'>
        <div className='space-y-2'>
            <h4 className='text-xl font-semibold'> Course Category </h4>

        {
            !editMode &&
            <h3>{course.category}</h3>
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
                <SelectItem value="montage">montage</SelectItem>
                <SelectItem value="programming">programming</SelectItem>
                <SelectItem value="3d modelling">3d modelling</SelectItem>
            </SelectContent>
            </Select>

            <Button onClick={() => setEditMode(false)} className="flex gap-2">Save<Save size={18} /></Button>
        </CardFooter>
    }
    </Card>
  )
}

export default NewCourseCat