'use client'
import DashboardNavBar from '@/components/global/DashboardNavbar'
import LandingPageEdit from '@/components/global/LandingPageEdit'
import TypeWriter from '@/components/global/TypingWriter'
import { ArrowRight, Edit } from 'lucide-react'
import React from 'react'

function Page() {
    const [Heading, setHeading] = React.useState("Welcome to 30MW Academy🎉");
    const [Text, setText] = React.useState("Your Learning Hub. Unlock new horizons today.");
    const [tolearn,setToLearn] = React.useState(["Design 🎨", "Video Editing 🎥", "3d Modelling 🏡"]);


    function handleOnDragEnd(result:any) {
      if (!result.destination) return;
  
      const items = Array.from(tolearn);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setToLearn(items);
    }



  return (
    <div className=''>
        <div className='container min-h-screen flex flex-col mx-auto'>
            <DashboardNavBar/>
            <LandingPageEdit {...{ 
                Text, 
                Heading , 
                setHeading, 
                setText,
                tolearn,
                handleOnDragEnd,
                setToLearn
                }}/>
            <div className="my-8 pt-24 flex-1 flex flex-col gap-2 justify-center items-center">
                <h1  className="text-7xl text-center font-bold ">
                     {Heading}
                </h1>
                <h2  className="text-3xl text-mutid-foreground text-center">
                    {Text}
                </h2>
                <h2 className="text-4xl font-medium text-mutid-foreground text-center">
                Learn {" "} 
                <TypeWriter data={tolearn}></TypeWriter>
                </h2>
                <div className="p-8">
                <button className="px-8 shadow-2xl hover:scale-105 items-center duration-150 py-4 text-lg bg-primary text-white uppercase rounded-full flex gap-2 ">get started <ArrowRight/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page
