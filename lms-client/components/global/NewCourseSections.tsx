import useCourseStore from '@/hooks/course-store'
import { Edit, Plus } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

type Props = {}


function NewCourseSections({}: Props) {
    const {course,updateCourse}=useCourseStore()



    function handleOnDragEnd(result:any) {
      if (!result.destination) return;
  
      const items = Array.from(course.sections);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateCourse({...course,sections:items});
    }

  return (
    <Card className='w-full h-fit'>
    <div className='flex justify-between items-start p-6'>
        <div className='w-full'>
            <h4 className='text-xl font-semibold'> Course Sections </h4>
        </div>
        <div>
            <Button variant={"outline"} className="flex gap-2">New <Plus size={20}/></Button>
        </div>
    </div>
    
    <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="px-4 space-y-2" {...provided.droppableProps} ref={provided.innerRef}>
                {course.sections.map(({id, title, description}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <div className='p-3 px-3 pl-5 bg-background border rounded-lg flex justify-between items-center'>
                                <span className='text-lg'>{title}</span>
                                <div className='flex gap-2 items-center'>
                                    <div className='p-1 bg-primary text-sm text-white rounded-md px-4'>published</div>
                                    <Button variant={"outline"} size={"icon"}><Edit/></Button>
                                </div>
                            </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>


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