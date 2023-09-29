import React from 'react'
import { Card, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Edit2, ImageIcon, Save, Upload } from 'lucide-react'
import useCourseStore from '@/hooks/course-store'
import Image from 'next/image'

type Props = {}

function NewCourseImage({}: Props) {
    const [editMode, setEditMode] = React.useState(false)
    const {course,updateCourse}=useCourseStore()
    const fileInputRef = React.useRef<HTMLInputElement | null>(null);
    const onchange=(e:any) => {
        const file = (e.target as any).files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const dataURL = (event.target as any).result;
            updateCourse({ ...course, image: dataURL });
          };
          reader.readAsDataURL(file);
        }
    }
    const handleBrowseClick = () => {
        if(fileInputRef.current){
            fileInputRef.current.click();
        }
      };
    
  return (
    <Card className='w-full h-fit'>
    <div className='flex justify-between items-start p-6'>
        <div className='w-full'>
            <h4 className='text-xl font-semibold'> Course Image </h4>
        </div>
        {
            !editMode &&
            <Button variant={"outline"} onClick={() => setEditMode(true)} className="flex gap-2">Edit<Edit2 size={18} /></Button>
        }
    </div>
    <div className='p-4 pb-4 pt-0'>
        <div onClick={handleBrowseClick}>

    {
        course.image?
        <img className='w-full object-cover aspect-video rounded-lg ' src={course.image} alt=''></img>:
        <div style={{cursor:editMode?"pointer":"default"}} className='w-full flex gap-3 items-center justify-center bg-secondary rounded-lg  aspect-video '>
            {
                editMode?
                <>
                    <Upload/>
                    <h3>Upload image</h3>
                </>:
                <>
                    <ImageIcon/>
                    <h3>Upload image</h3>
                </>
            }
        </div>
    }
        </div>
    </div>
    {
        editMode && 
        <CardFooter className='flex justify-end gap-2'>
            <Input
            ref={fileInputRef}
            className='hidden'
            type="file"
            accept="image/*"
            onChange={onchange}
            />
            <Button onClick={() => setEditMode(false)} className="flex gap-2">Save<Save size={18} /></Button>
        </CardFooter>
    }
    </Card>
  )
}

export default NewCourseImage