"use client";
import { ArrowLeft, Loader } from "lucide-react";
import _30mw from "@/public/30mw.png";
import _s3d from "@/public/s3d.png";
import Image from "next/image";
import useFetchUser from "@/hooks/fetch-user";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import heroIllstration from "@/public/first.svg";
import { server } from "@/server";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Courses from "@/components/global/Courses";
import { Separator } from "@/components/ui/separator";
import PhotoshopCourse from "@/components/global/PhotoshopCourse";
import MontagCourse from "@/components/global/MontagCourseBar";
import YoutubeCourseBar from "@/components/global/YoutubeCourseBar";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import GTMProvider from "@/components/providers/GoogleTagManager";
import { cn } from "@/lib/utils";

interface LandingPage {
  landing_page: {
    Header: string;
    Text: string;
    learn: string[];
    button: string;
  };
  _id: string;
  __v: number;
}

export default function Home() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const [config, setConfig] = useState<LandingPage>();
  const [loading, setLoading] = useState(true);
  useFetchUser();
  useEffect(() => {
    fetch(server + "config")
      .then((res) => res.json())
      .then((data) => {
        setConfig(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <h1 className="flex gap-3">
          <Loader className="animate-spin" />
          Loading...
        </h1>
      </div>
    );
  }



    

  return (
    <div className={cn("w-full  md:px-6   mx-auto")}>
      <GTMProvider />
      <div className="py-4 px-3 flex max-w-[1800px] mx-auto  flex-col">
        <div className={cn( "rounded-3xl p-4  my-8  md:px-20 flex-1 flex  md:flex-row flex-col  md:py-0  gap-2 justify-between items-center" )}>
          <Image
            src={heroIllstration}
            alt="logo"
            className="drop-shadow-2xl animated w-[350px] md:w-[500px]"
            width={500}
            height={500}
          ></Image>
          <div className="flex flex-col items-center md:items-end flex-1 justify-center ">
            <h1
              dangerouslySetInnerHTML={{
                __html: config?.landing_page?.Header as string,
              }}
              className="md:text-2xl text-md text-muted-foreground text-center md:text-right "
            ></h1>
            <h2 className="text-2xl max-w-3xl  md:text-5xl mt-4 text-mutid-foreground text-center md:text-right font-bold ">
              {config?.landing_page?.Text}
            </h2>
            {/* <h2 className="text-4xl font-medium text-mutid-foreground text-center">
               Learn {" "} 
              <TypeWriter data={config?.landing_page?.learn||[]}></TypeWriter>
            </h2> */}
            <div className="pt-8">
              <Link
                href="/sign-up"
                className="md:px-8 px-8 shadow-2xl flex-row-reverse hover:scale-105 items-center duration-150 py-4 md:py-4 text-md md:text-lg bg-primary text-white uppercase rounded-full flex gap-2 "
              >
                إشترك الآن بالمجان <ArrowLeft />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="container p-0"
      >
        <CarouselContent className="py-6 ">
          <CarouselItem className="">
            <div className="px-2 md:px-6">
              <MontagCourse home />
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className="px-2 md:px-6">
              <YoutubeCourseBar home />
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="flex items-center justify-center gap-2">
          {new Array(count).fill(0).map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full duration-150 ${current - 1 === index ? " w-8 bg-primary" : "bg-muted-foreground/50"}`}
            ></div>
          ))}
        </div>
      </Carousel>
      <div dir="rtl" className="md:container px-3 space-y-4 mx-auto my-8">
        <h1 className="text-4xl  font-medium py-8">دورات مسجلة </h1>
        <Courses />
        <PhotoshopCourse home />
      </div>

      <div className="my-8">
        <Separator />
      </div>

      <p className="text-center opacity-60">Powered By</p>

      <div className="flex dark:invert pb-10 px-3 filter gap-8 opacity-70 drop-shadow-2xl justify-center items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image
                src={_30mw}
                width={150}
                height={150}
                alt="Picture of the author"
                className=""
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>30 min website</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image
                src={_s3d}
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>stodio 3d</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
