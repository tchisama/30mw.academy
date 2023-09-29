import React from 'react'
import { Card, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Edit2, Save } from 'lucide-react'
import { Textarea } from '../ui/textarea'
import useCourseStore from '@/hooks/course-store'
import { Input } from '../ui/input'

type Props = {}

function NewCoursePrice({}: Props) {
  const [editMode, setEditMode] = React.useState(false)
  const {course ,updateCourse}=useCourseStore()
  return (
    <Card className='w-full h-fit'>
    <div className='flex justify-between items-start p-6'>
        <div>
            <h4 className='text-xl font-semibold'> Course Price </h4>
              {
                !editMode &&
                <div className='pt-2 text-forground'>
                    <p className='text-4xl'>{course.price} Dh</p>
                </div>
              }
        </div>
      {
        !editMode &&
        <Button onClick={() => setEditMode(true)} variant={"outline"} className="flex gap-2">Edit<Edit2 size={18} /></Button>
      }
    </div>
    {
        editMode && 
        <CardFooter className='flex justify-between items-center gap-2'>
            <Input className='max-w-[200px]' type='number' value={course.price} onInput={(e)=>updateCourse({...course,price:Number((e.target as HTMLInputElement).value)})}></Input>
            <Button onClick={() => setEditMode(false)} className="flex gap-2">Save<Save size={18} /></Button>
        </CardFooter>
    }
    </Card>
  )
}

export default NewCoursePrice