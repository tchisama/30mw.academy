"use client";
import Navbar from "@/components/global/Navbar";
import { ArrowLeft, ArrowRight, Loader } from "lucide-react";
import _30mw from "@/public/30mw.png";
import _s3d from "@/public/s3d.png";
import Image from "next/image";
import useFetchUser from "@/hooks/fetch-user";
import { use, useEffect, useState } from "react";
import { useClerk } from "@clerk/nextjs";
import TypeWriter from "@/components/global/TypingWriter";
import Link from "next/link";
import { server } from "@/server";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Courses from "@/components/global/Courses";
import { Separator } from "@/components/ui/separator";

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
  const user = useClerk();
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
    <div className="w-full  md:px-6 px-3  mx-auto">
      <div className="py-4 flex max-w-[1800px] mx-auto  flex-col">
        <div className="  rounded-3xl p-4  my-8  md:px-20 flex-1 flex  md:flex-row flex-col  md:py-8 dark:bg-slate-900 md:bg-slate-100 gap-2 justify-between items-center">
          <Image src={_30mw} alt="logo" className="drop-shadow-2xl opacity-60 filter dark:invert hidden md:block" width={400} height={400}></Image>
          <div className="flex flex-col items-end flex-1 justify-center ">
            <h1
              dangerouslySetInnerHTML={{
                __html: config?.landing_page?.Header as string,
              }}
              className="md:text-2xl text-lg text-muted-foreground  text-right "
            ></h1>
            <h2 className="text-lg md:text-5xl max-w-4xl mt-4 text-mutid-foreground text-right font-bold ">
              {config?.landing_page?.Text}
            </h2>
            {/* <h2 className="text-4xl font-medium text-mutid-foreground text-center">
               Learn {" "} 
              <TypeWriter data={config?.landing_page?.learn||[]}></TypeWriter>
            </h2> */}
            <div className="pt-8">
              <Link
                href="/sign-up"
                className="md:px-8 px-4 shadow-2xl flex-row-reverse hover:scale-105 items-center duration-150 py-2 md:py-4 text-md md:text-lg bg-primary text-white uppercase rounded-full flex gap-2 "
              >
                إشترك الآن المجان  <ArrowLeft />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:container mx-auto my-8">
        <Courses />
      </div>

      <div className="my-8">
        <Separator />
      </div>

      <p className="text-center opacity-60">Powered By</p>

      <div className="flex dark:invert pb-10 filter gap-8 opacity-70 drop-shadow-2xl justify-center items-center">
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
