"use client"

import Section from "@/components/LandingPage/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useState } from "react";
import Controllers from "./Controllers";
import Navbar from "@/components/global/Navbar";


type Section = {
  id: string
  type: string
}

export default function LandingPageController ()  {
  const [sections,setSections] = useState<Section[]>([])
  return <div className="w-[98vw] flex gap-2 relative left-1/2 -translate-x-1/2">
    <Controllers/>
    <Card className="min-h-screen flex-1  ">
      <div className="container px-4">
        <div className="pointer-events-none border-b">
         <Navbar />
        </div>
      <div className=" flex justify-center border-b">
        <Button 
        size={"icon"}
        variant={"ghost"}
        onClick={()=>{
          setSections(p=>[{id:crypto.randomUUID(),type:"list"},...p])
        }}
        ><Plus size={20} /></Button>
      </div>
      {
        sections.map(section => (
          <div key={section.id} className="border-b">
          <Section key={section.id} type={section.type}/>
          </div>
        ))
      }
      </div>
    </Card>
  </div>;
}