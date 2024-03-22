import { cn } from "@/lib/utils";
import { Laptop, Laugh, Wifi } from "lucide-react";

type Props = {
  section: SectionType;
};

type SectionWithoutId =
  | {
      type: "content";
      data: {
        title: string;
        content: string;
        image: string;
        "show image": boolean;
        reverse: boolean; // Corrected spelling here
      };
    }
  | {
      type: "video";
      data: {
        addContent?: boolean;
        title?: string;
        content?: string;
        videoUrl?: string;
        reverse?: boolean; // Corrected spelling here
      };
    }
  | {
      type: "cards";
      data: {
        title: string;
        content: string;
        cards: {
          title?: string;
          subtitle?: string;
          icon?: string;
        }[];
      };
    };

export type SectionType = {
  id: string;
} & SectionWithoutId;

export default function Section({ section }: Props) {
  if (section.type == "content") {
    return (
      <div
        className={cn(
          "flex flex-col-reverse md:flex-row px-2 items-center  max-w-7xl mx-auto gap-12 py-24",
          section.data?.reverse && "md:flex-row-reverse",
        )}
      >
        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-3xl ">{section.data.title}</h1>
          {section.data?.content && (
            <p
              className=" text-lg md:text-xl max-w-3xl"
              dangerouslySetInnerHTML={{
                __html:
                  section.data?.content
                    .replaceAll(/\n/g, "</br>")
                    .replaceAll("  ", "&nbsp;") ?? "",
              }}
            ></p>
          )}
        </div>
        <div className="relative">
          {"show image" in section.data && section.data["show image"] && (
            <img
              className="w-[400px] bg-slate-100 drop-shadow-2xl h-[300px] md:h-[400px] object-cover rounded-3xl"
              width={500}
              alt=""
              height={500}
              src={section.data.image}
            ></img>
          )}
        </div>
      </div>
    );
  } else if (section.type == "video") {
    return (
      <div
        className={cn(
          "flex flex-col-reverse md:flex-row px-2 items-center  max-w-7xl mx-auto gap-12 py-24",
          section.data.reverse && "md:flex-row-reverse",
        )}
      >
        {(section.data as any)?.addContent && (
          <div className="flex flex-col gap-4 flex-1">
            {section.data?.title && (
              <h1
                className="text-3xl "
                dangerouslySetInnerHTML={{
                  __html:
                    section.data?.title
                      .replaceAll(/\n/g, "</br>")
                      .replaceAll("  ", "&nbsp;") ?? "",
                }}
              ></h1>
            )}
            {section.data?.content && (
              <p
                className=" text-lg md:text-xl max-w-3xl"
                dangerouslySetInnerHTML={{
                  __html:
                    section.data?.content
                      .replaceAll(/\n/g, "</br>")
                      .replaceall("  ", "&nbsp;") ?? "",
                }}
              ></p>
            )}
          </div>
        )}
        <div className="relative flex-1">
          {/*data.videoUrl*/}
          <video
            className="max-w-[900px] md:rounded-xl w-full mx-auto "
            controls
            src={(section.data as any)?.videoUrl}
          ></video>
        </div>
      </div>
    );
  } else if (section.type == "cards") {
    return (
      <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl md:rounded-none ">
        <div className="flex flex-col items-start max-w-7xl mx-auto px-4 gap-6 py-10 md:py-24">
          <h1 className="text-3xl font-medium dark:text-white">
            {section.data.title}
          </h1>
          <p className="max-w-4xl">{section.data.content}</p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 w-full">
            {section.data.cards.map((card, i) => {
              return (
                <div
                  key={i}
                  className="h-fit py-8 border dark:bg-black/5 border-black/20 drop-shadow-lg flex flex-col gap-0 items-center justify-center bg-white/30 rounded-3xl flex-1"
                >
                  <div className="mx-auto text-7xl text-gray-700 dark:text-white mb-4">
                    {card.icon}
                  </div>
                  <h1 className="text-lg max-w-[200px]  text-center dark:text-white">
                    {card.title}
                  </h1>
                  <h2 className="text-sm max-w-[200px] opacity-60  text-center dark:text-white">
                    {card.subtitle}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
