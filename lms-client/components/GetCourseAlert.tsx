import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { UnlockIcon } from 'lucide-react'
import { Course } from '@/hooks/course-store'
  
type Props = {
    course : any
}

function GetCourseAlert({course}: Props) {

    const buyNow = () => {
        // if(!access){
        //     axios.post(server+"auth/make-access",
        //     {
        //         id_user:user?.user?.id,
        //         id_course:params.course_id,
        //         price_access:course?.price,
        //     }).then(()=>{
        //         window.location.reload();
        //     })
        // }
        // alert("hello world")
    }

  return (
    <Dialog>
    <DialogTrigger>
        <Button onClick={buyNow} className='flex gap-2'><UnlockIcon size={18}/>Unlock course</Button>
    </DialogTrigger>
    <DialogContent>
        <DialogHeader>
        <DialogTitle className='text-2xl text-right mt-4'> ثمن الدورة هو   {course?.price} درهم  </DialogTitle>
        {/* <DialogTitle>Price {course?.price} Dh</DialogTitle> */}
        <h2 className='text-xl text-right mt-4'>طرق الدفع </h2>
        <div className='flex gap-2 h-20 '>
            <MethodButton>
                Bank transfer
            </MethodButton>
            <MethodButton>
                Wafacash
            </MethodButton>
            <MethodButton>
                Paypal
            </MethodButton>
        </div>
        </DialogHeader>
    </DialogContent>
    </Dialog>

  )
}



const MethodButton = ({children}:{children: React.ReactNode}) => {
    return(
        <Button variant={"outline"} className='flex-1 flex h-full justify-center items-center'>
            {children}
        </Button>
    )
}

export default GetCourseAlert