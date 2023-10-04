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
import { StickyNote } from 'lucide-react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'
import { ScrollArea } from '../ui/scroll-area'
import { Textarea } from '../ui/textarea'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

type Props = {}

function Notes({}: Props) {
    const [value, setValue] = useState('');
  return (
<Sheet >
  <SheetTrigger asChild>
        <Button className='fixed bottom-4 right-4 flex gap-2'><StickyNote size={24}/>Notes</Button>
    </SheetTrigger>
  <SheetContent className='flex flex-col pb-4 rounded-l-3xl shadow-2xl'>
    <SheetHeader>
      <SheetTitle>Effective Note-taking Strategies</SheetTitle>
      <SheetDescription>
        Mastering the Art of Taking and Organizing Notes for Academic Success
      </SheetDescription>
      <div className='my-4'>
        <Separator />
      </div>
    </SheetHeader>
    <ReactQuill className='flex-1  rounded-lg' theme="snow" value={value} onChange={setValue} />
    <div className='h-20'>
    </div>
  </SheetContent>
</Sheet>

  )
}

export default Notes