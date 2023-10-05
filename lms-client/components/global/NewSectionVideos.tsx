import useCourseStore, { Video } from '@/hooks/course-store'
import { ArrowRight, Edit, Plus, Trash, Video as V,  } from 'lucide-react'
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
type Props = {
  params:{
    course_id:string,
    section_id:string,
  }
}


function NewSectionVideos({params:{course_id,section_id}}: Props) {
    const router = useRouter()
    const {course,updateCourse}=useCourseStore()
    const [winReady,setWinReady]=React.useState(false)
    const [title,setTitle]=React.useState("")
    var section = course.sections.find((section)=>section.id_section===section_id)
    React.useEffect(()=>{
        setWinReady(true)
    },[])

    const addNewSection = ()=>{
            const updatedCourse = { ...course };

            // Find the section in the course by sectionId
            const sectionIndex = updatedCourse.sections.findIndex((section) => section.id_section === section_id);

            if (sectionIndex !== -1) {
                // Add the new video to the section's videos array
                updatedCourse.sections[sectionIndex].videos.push(
                  {
                    id_video:generateRandomString(6),
                    title,
                    url:"",
                    free:false,
                    duration:0
                  });
                // Trigger the state update with the modified course object
                updateCourse(updatedCourse);
            }
        setTitle("")
    }


    function handleOnDragEnd(result: any) {
      if (!result.destination) return;
    
      const sections = course.sections || []; // Handle the case where sections is undefined
      const section = sections.find((_section) => _section.id_section === section_id);
    
      if (!section) return; // Handle the case where section is not found
    
      const items = section.videos;
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setTitle("");
    
      const updatedSections = sections.map((_section) =>
        _section.id_section === section_id ? { ..._section, videos: items } : _section
      );
    
      // Update the course with the updated sections
      const updatedCourse = { ...course, sections: updatedSections };
      updateCourse(updatedCourse);
    }

    function handleRemove(id:string) {
      const updatedCourse = { ...course };

      // Find the section in the course by sectionId
      const sectionIndex = updatedCourse.sections.findIndex((section) => section.id_section === section_id);

      if (sectionIndex !== -1) {
          // Find the video in the section by videoId
          const videoIndex = updatedCourse.sections[sectionIndex].videos.findIndex((video) => video.id_video === id);

          if (videoIndex !== -1) {
              // Remove the video from the section's videos array
              updatedCourse.sections[sectionIndex].videos.splice(videoIndex, 1);
              // Trigger the state update with the modified course object
              updateCourse(updatedCourse);
          }
      }
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
            <h4 className='text-xl font-semibold'> Section Videos </h4>
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
                {course.sections.find((section)=>section.id_section===section_id)?.videos.map(({id_video, title:ttl}, index) => {
                  return (
                    <Draggable key={id_video} draggableId={id_video} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className='p-3 px-3 pl-5 bg-background border rounded-lg flex justify-between items-center'>
                                <span className='text-lg flex gap-4 items-center'><V/> {ttl}</span>
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
                                              <AlertDialogAction disabled={ttl!=title} onClick={()=>{if(ttl==title){handleRemove(id_video)}}}>Confirm</AlertDialogAction>
                                            </AlertDialogFooter>
                                          </AlertDialogContent>
                                        </AlertDialog>
                                          <Button onClick={()=>saveAndNavigate(`/dashboard/edit-video/${course._id}/${section_id}/${id_video}`)} variant={"outline"} size={"icon"}><ArrowRight size={18}/></Button>
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

    <p className='py-2 px-6 text-muted-foreground'>Drag and drop to reorder videos</p>
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



export default NewSectionVideos