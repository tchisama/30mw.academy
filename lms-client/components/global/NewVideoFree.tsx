import React from 'react'
import { Card, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Edit2, Save } from 'lucide-react'
import useCourseStore from '@/hooks/course-store'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'

type Props = {
    section:string,
    video_id:string,
}

function NewVideoFree({section,video_id}: Props) {
    const [editMode, setEditMode] = React.useState(false)
    const {course,updateCourse}=useCourseStore()
  return (
    <Card className='w-full h-fit'>
    <div className='flex justify-between items-start p-6'>
        <div className=' flex justify-between w-full items-center'>
            <Label htmlFor='free' className='text-xl font-semibold'> Free video </Label>

            <Switch
            id='free'
            checked={
                (
                course.sections.find((s) => s.id_section === section)?.videos.find((v) => v.id_video === video_id)
                    ?.free
                ) // Convert the boolean to a string
            }
            onCheckedChange={(e) =>{
                console.log(course)
                updateCourse({
                ...course,
                sections: course.sections.map((s) =>
                    s.id_section === section
                    ? {
                        ...s,
                        videos: s.videos.map((v) =>
                            v.id_video === video_id
                            ? { ...v, free: e } // Convert the boolean to a string
                            : v
                        ),
                        }
                    : s
                ),
                })
                }
            }
            />
    </div>
    </div>
    {
        editMode && 
        <CardFooter className='flex justify-end gap-2'>
            <Input 
                value={course.sections.find((s)=>s.id_section===section)?.videos.find((v)=>v.id_video===video_id)?.title} 
                onInput={(e)=>updateCourse({
                ...course,
                sections:course.sections.map((s)=>s.id_section===section?{
                    ...s,
                    videos:s.videos.map((v)=>v.id_video===video_id?{...v,title:(e.target as HTMLInputElement ).value}:v)
                }:s)
            })}></Input>
            <Button onClick={() => setEditMode(false)} className="flex gap-2">Save<Save size={18} /></Button>
        </CardFooter>
    }
    </Card>
  )
}

export default NewVideoFree