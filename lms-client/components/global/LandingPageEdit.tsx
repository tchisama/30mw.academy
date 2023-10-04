import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Edit, GripHorizontal, PlusCircle, StickyNote, Trash } from 'lucide-react'
import { Separator } from '../ui/separator'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Input } from '../ui/input'

type Props = {
    Text:string,
    Heading:string,
    setHeading:React.Dispatch<React.SetStateAction<string>>,
    setText:React.Dispatch<React.SetStateAction<string>>
    tolearn:string[],
    handleOnDragEnd:(res:any)=>void,
    setToLearn:React.Dispatch<React.SetStateAction<string[]>>
}

function LandingPageEdit({Text,Heading,setHeading,setText,tolearn,handleOnDragEnd,setToLearn}: Props) {
  return (
<Sheet >
  <SheetTrigger asChild>
            <button className='w-14 h-14 flex justify-center items-center absolute bottom-6 right-6 bg-primary text-white rounded-full'>
                <Edit/>
            </button>
    </SheetTrigger>
  <SheetContent className='flex flex-col pb-4 rounded-l-3xl shadow-2xl'>
    <SheetHeader>
      <SheetTitle>Edit Landing Page</SheetTitle>
      <SheetDescription>
        the change will effect after the user will refrech the page
      </SheetDescription>
      <div className='py-8'>
        <Separator />
      </div>
      <Label>Header</Label>
      <Textarea value={Heading} onInput={(e)=>setHeading((e.target as HTMLInputElement).value)} />
      <Label>Sub Header</Label>
      <Textarea value={Text} onInput={(e)=>setText((e.target as HTMLInputElement).value)} />




    <div className='flex justify-between items-center w-full '>
      <Label>Learn</Label>
      <Button onClick={()=>setToLearn(p=>['',...p])} className='flex gap-2'>Add<PlusCircle size={18}/></Button>
    </div>

<DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div className="py-1 space-y-2" {...provided.droppableProps} ref={provided.innerRef}>
                {tolearn.map((learn, index) => {
                  return (
                    <Draggable key={index.toString()} draggableId={index.toString()} index={index}>
                      {(provided) => (
                        <div className='border bg-background items-center rounded-lg p-1 flex' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Input value={learn} onInput={(e)=>setToLearn(p=>p.map((_,l)=>l==index?(e.target as any).value:_))} contentEditable className=' flex-1'>
                            </Input>
                            <Button onClick={()=>setToLearn(p=>p.filter((_,l)=>l!=index))} size={"icon"} variant={"ghost"}><Trash size={18}/></Button>
                            <Button size={"icon"} variant={"ghost"}><GripHorizontal size={18}/></Button>
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






    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export default LandingPageEdit