"use client";

import Section, { SectionType } from "@/components/LandingPage/Section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Trash, X } from "lucide-react";
import { useState } from "react";
import Controllers from "./Controllers";
import Navbar from "@/components/global/Navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLandingPage } from "@/hooks/landingpage";
import structer from "./sectionsStructer";
import { cn } from "@/lib/utils";

export default function LandingPageController() {
  const {
    sections,
    setSections,
    addSection,
    selectedSection,
    setSelectedSection,
  } = useLandingPage();
  return (
    <div className="w-[98vw] flex gap-2 relative left-1/2 -translate-x-1/2">
      <Controllers />
      <Card className="min-h-screen flex-1 duration-300 border drop-shadow-2xl ">
        <div className="container p-4">
          <div dir="rtl" className="flex flex-col gap-1">
            {sections.map((section) => (
              <div
                key={section.id}
                className={cn(
                  "hover:bg-slate-50 border-dashed hover:border border-blue-400  relative group rounded-2xl overflow-hidden ",
                  selectedSection?.id === section.id &&
                    "border-2 hover:border-2 border-solid",
                )}
                onClick={() => setSelectedSection(section)}
              >
                <Section section={section} />
                {selectedSection?.id === section.id && (
                  <div className="p-2 gap-2 flex shadow-lg bg-white absolute bottom-2 left-1/2 -translate-x-1/2  w-fit border rounded-xl ">
                    <Button
                      onClick={() => {
                        setSections(
                          sections.filter((s) => s.id !== selectedSection.id),
                        );
                      }}
                      variant={"outline"}
                      size={"icon"}
                    >
                      <Trash size={20} />
                    </Button>
                    <AddSection index={sections.indexOf(section)} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-2 py-4 flex items-center justify-center border-t ">
            <AddSection />
          </div>
        </div>
      </Card>
    </div>
  );
}

const AddSection = ({ index }: { index?: number }) => {
  const { addSection } = useLandingPage();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Plus size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.keys(structer).map((type) => (
          <DropdownMenuItem
            key={type}
            onClick={() =>
              addSection(
                {
                  type: type as SectionType["type"],
                  id: crypto.randomUUID(),
                  data: (() => {
                    let newData: any = {};
                    structer[type as keyof typeof structer].forEach((field) => {
                      if (field.type === "string") {
                        newData[field.name] = "لوريم إيبسوم";
                      } else if (field.type === "text") {
                        newData[field.name] =
                          "هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس";
                      } else if (field.type == "cards array") {
                        newData[field.name] = [];
                      } else {
                        newData[field.name] = "";
                      }
                    });
                    return newData;
                  })(),
                },
                0,
              )
            }
          >
            {type}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
