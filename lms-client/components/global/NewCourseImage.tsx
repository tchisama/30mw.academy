import React from 'react'
import { Card, CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Edit2, ImageIcon, Save, Upload } from 'lucide-react'
import useCourseStore from '@/hooks/course-store'
import Image from 'next/image'
import { useEdgeStore } from '@/lib/edgestore'
import { SingleImageDropzone } from '@/components/SingleImageDropzone';

type Props = {}

function NewCourseImage({}: Props) {
    const [editMode, setEditMode] = React.useState(false)
    const {edgestore} = useEdgeStore()
    const {course,updateCourse}=useCourseStore()
    const [file, setFile] = React.useState<File>();
    const [changed, setChanged] = React.useState(false)
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
        <div>
            {
                editMode ?
            <SingleImageDropzone
                width={400}
                height={200}
                className='w-full h-full aspect-video'
                value={file}
                onChange={(file) => {
                    setFile(file);
                    setChanged(true)
                }}
            />:
            (
                course.image ?
            <img
                className='w-full bg-secondary object-cover h-full aspect-video rounded-md'
                src={course.image}
            ></img>
            :
            <div className='flex justify-center items-center bg-secondary rounded-lg w-full aspect-video '> upload image</div>
            )
            }
        </div>
    </div>
    {
        editMode && 
        <CardFooter className='flex justify-end gap-2'>
            <Button onClick={
                async () => {
                        if (file) {
                        const res = await edgestore.publicFiles.upload({
                            file,
                            onProgressChange: (progress) => {
                            // you can use this to show a progress bar
                            console.log(progress);
                            },
                        });
                        // you can run some server action or api here
                        // to add the necessary data to your database
                        updateCourse({
                            ...course,
                            image: res.url
                        })
                        console.log(res);
                        }
                        setChanged(false)
                    setEditMode(false);
                  }
            } className="flex gap-2">Save<Save size={18} /></Button>
        </CardFooter>
    }
    </Card>
  )
}

export default NewCourseImage