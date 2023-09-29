import React from 'react'
import { Card, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Edit2, Save } from 'lucide-react'
import { Textarea } from '../ui/textarea'
import useCourseStore from '@/hooks/course-store'

type Props = {}

function NewCourseDescription({}: Props) {
  const [editMode, setEditMode] = React.useState(false)
  const {course ,updateCourse}=useCourseStore()
  return (
    <Card className='w-full h-fit'>
    <div className='flex justify-between items-start p-6'>
        <div>
            <h4 className='text-xl font-semibold'> Course Description </h4>
        </div>
      {
        !editMode &&
        <Button onClick={() => setEditMode(true)} variant={"outline"} className="flex gap-2">Edit<Edit2 size={18} /></Button>
      }
    </div>
      {
        !editMode &&
        <div className='p-6 pt-0 text-forground'>
            <p>{course.description}</p>
        </div>
      }
    {
        editMode && 
        <CardFooter className='flex flex-col items-end gap-2'>
            <Textarea value={course.description} onInput={(e)=>updateCourse({...course,description:(e.target as HTMLInputElement).value})}></Textarea>
            <Button onClick={() => setEditMode(false)} className="flex gap-2">Save<Save size={18} /></Button>
        </CardFooter>
    }
    </Card>
  )
}

export default NewCourseDescription