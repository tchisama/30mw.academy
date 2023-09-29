import React from 'react'
import { Card, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Edit2, Save } from 'lucide-react'

type Props = {}

function NewCourseTitle({}: Props) {
    const [editMode, setEditMode] = React.useState(false)
  return (
    <Card className='w-full h-fit'>
    <div className='flex justify-between items-start p-6'>
        <div>
            <h4 className='text-xl font-semibold'> Course Title </h4>

        {
            !editMode &&
            <h3> Design Course</h3>
        }
        </div>
        {
            !editMode &&
            <Button variant={"outline"} onClick={() => setEditMode(true)} className="flex gap-2">Edit<Edit2 size={18} /></Button>
        }
    </div>
    {
        editMode && 
        <CardFooter className='flex justify-end gap-2'>
            <Input></Input>
            <Button onClick={() => setEditMode(false)} className="flex gap-2">Save<Save size={18} /></Button>
        </CardFooter>
    }
    </Card>
  )
}

export default NewCourseTitle