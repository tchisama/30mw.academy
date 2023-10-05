import useCourseStore from '@/hooks/course-store'
import { ArrowRight, Edit, Folder, Plus, Trash } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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
import { Input } from '../ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from "axios"
import { server } from '@/server'
type Props = {}


function NewCourseSections({}: Props) {
    const router = useRouter()
    const {course,updateCourse}=useCourseStore()
    const [winReady,setWinReady]=React.useState(false)
    const [title,setTitle]=React.useState("")
    React.useEffect(()=>{
        setWinReady(true)
    },[])

    const addNewSection = ()=>{
        updateCourse({...course,sections:[...course.sections,{title,description:"",id_section:generateRandomString(6),videos:[]}]})
        setTitle("")
    }


    function handleOnDragEnd(result:any) {
      if (!result.destination) return;
  
      const items = Array.from(course.sections);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setTitle("")
      updateCourse({...course,sections:items});
    }

    function handleRemove(id:string) {
      updateCourse({...course,sections:course.sections.filter((section)=>section.id_section!==id)})
      setTitle("")
    }

    function generateRandomString(length:number) {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
    
      return result;
    }


    async function saveAndNavigate(link:string) {
      await  axios.post(server+"update-course/"+course._id,course)
      router.push(link)
    }

  return (
    <Card className='w-full h-fit'>
    <div className='flex justify-between items-start p-6'>
        <div className='w-full'>
            <h4 className='text-xl font-semibold'> Course Sections </h4>
        </div>
        <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="flex gap-2">New <Plus size={20}/></Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Name of the section</AlertDialogTitle>
              <Input value={title} onChange={(e)=>setTitle(e.target.value)}></Input>
              <AlertDialogDescription>you can always change it later</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() =>setTitle("")}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={addNewSection}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        </div>

    </div>
    {
    winReady?
    <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div className="px-4 space-y-2" {...provided.droppableProps} ref={provided.innerRef}>
                {course.sections.map(({id_section, title:ttl , description}, index) => {
                  return (
                    <Draggable key={id_section} draggableId={id_section} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className='p-3 px-3 pl-5 bg-background border rounded-lg flex justify-between items-center'>
                                <span className='text-lg flex gap-4 items-center'><Folder/> {ttl}</span>
                                <div className='flex gap-2 items-center'>
                                    {/* <div className='p-1 bg-primary text-sm text-white rounded-md px-4'>published</div> */}
                                        <AlertDialog>
                                          <AlertDialogTrigger asChild>
                                              <Button variant={"outline"} size={"icon"}><Trash size={18}/></Button>
                                          </AlertDialogTrigger>
                                          <AlertDialogContent>
                                            <AlertDialogHeader>
                                              <AlertDialogTitle>Are you sure you want to delete?</AlertDialogTitle>
                                              <Input value={title} onChange={(e)=>setTitle(e.target.value)}></Input>
                                              <AlertDialogDescription>type  &rdquo;{ttl}&rdquo; to confirm</AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                              <AlertDialogCancel onClick={() =>setTitle("")}>Cancel</AlertDialogCancel>
                                              <AlertDialogAction disabled={ttl!=title} onClick={()=>{if(ttl==title){handleRemove(id_section)}}}>Confirm</AlertDialogAction>
                                            </AlertDialogFooter>
                                          </AlertDialogContent>
                                        </AlertDialog>
                                          <Button onClick={()=>saveAndNavigate(`/dashboard/edit-section/${course._id}/${id_section}`)} variant={"outline"} size={"icon"}><ArrowRight size={18}/></Button>
                                </div>
                            </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        :null
    }

    <p className='py-2 px-6 text-muted-foreground'>Drag and drop to reorder sections</p>
    {/* <div className='px-4 space-y-2'>
        {
            course.sections.map((section,i)=>{
                return(
                )
            })
        }
    </div> */}
    <div className='p-4 pb-4 pt-0'>
    </div>
    </Card>
  )

}



export default NewCourseSections