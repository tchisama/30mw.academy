import { cn } from "@/lib/utils";

type Props = {
  type: SectionType["type"];
  data: SectionType["data"];
};

export type SectionType = {
  id: string;
} & (
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
);

export default function Section({ type, data }: Props) {
  if (type == "content") {
    return (
      <div
        className={cn(
          "flex flex-col-reverse md:flex-row px-2 items-center  max-w-7xl mx-auto gap-12 py-24",
          data?.reverse && "md:flex-row-reverse",
        )}
      >
        <div className="flex flex-col gap-4 flex-1">
          <h1 className="text-3xl ">{data.title}</h1>
          {data?.content && (
            <p
              className=" text-lg md:text-xl max-w-3xl"
              dangerouslySetInnerHTML={{
                __html:
                  data?.content
                    .replaceAll(/\n/g, "</br>")
                    .replaceAll("  ", "&nbsp;") ?? "",
              }}
            ></p>
          )}
        </div>
        <div className="relative">
          {"show image" in data && data["show image"] && (
            <img
              className="w-[400px] bg-slate-100 drop-shadow-2xl h-[300px] md:h-[400px] object-cover rounded-3xl"
              width={500}
              alt=""
              height={500}
              src={data.image}
            ></img>
          )}
        </div>
      </div>
    );
  } else if ((type = "video")) {
    return (
      <div
        className={cn(
          "flex flex-col-reverse md:flex-row px-2 items-center  max-w-7xl mx-auto gap-12 py-24",
          data?.reverse && "md:flex-row-reverse",
        )}
      >
        {(data as any)?.addContent && (
          <div className="flex flex-col gap-4 flex-1">
            {data?.title && (
              <h1
                className="text-3xl "
                dangerouslySetInnerHTML={{
                  __html:
                    data?.title
                      .replaceAll(/\n/g, "</br>")
                      .replaceAll("  ", "&nbsp;") ?? "",
                }}
              ></h1>
            )}
            {data?.content && (
              <p
                className=" text-lg md:text-xl max-w-3xl"
                dangerouslySetInnerHTML={{
                  __html:
                    data?.content
                      .replaceAll(/\n/g, "</br>")
                      .replaceAll("  ", "&nbsp;") ?? "",
                }}
              ></p>
            )}
          </div>
        )}
        <div className="relative flex-1">
          {/*data.videoUrl*/}
          <video
            className="max-w-[900px] w-full mx-auto "
            controls
            src={(data as any)?.videoUrl}
          ></video>
        </div>
      </div>
    );
  }
}
