import Image from "next/image"
import montage from "@/public/photoshop/montag.avif";
import { cn } from "@/lib/utils";

type Props = SectionType

export type SectionType = {
  id: string
} & ({
  type: "content"
  data:{
    title: string
    content: string
    image: string
    "show image": boolean
    reverce: boolean
  }
})


export default function Section ({type,data}:Props) {
  return (
			<div className={cn("flex flex-col-reverse md:flex-row px-2 items-center  max-w-7xl mx-auto gap-12 py-24",data.reverce && "md:flex-row-reverse")}>
        <div className='flex flex-col gap-4 flex-1'>
          <h1 className='text-3xl '>{data.title }</h1>
            <p className=' text-lg md:text-xl max-w-3xl' dangerouslySetInnerHTML={{__html: data.content.replaceAll(/\n/g, "</br>").replaceAll("  ", "&nbsp;")}}>
            </p>
        </div>
        <div className="relative"> 
        {
          data["show image"] &&
          <img className="w-[400px] bg-slate-100 drop-shadow-2xl h-[300px] md:h-[400px] object-cover rounded-3xl" width={500} alt="" height={500} src={
            data.image
          }></img>
        }
        </div>
      </div>
  )
}