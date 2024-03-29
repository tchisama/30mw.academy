import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLandingPage } from "@/hooks/landingpage";
import structer from "./sectionsStructer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { Plus, Trash, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SingleImageDropzone } from "@/components/SingleImageDropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { Switch } from "@/components/ui/switch";

type Props = {};
export default function Controllers({}: Props) {
  const { selectedSection, setSelectedSection, updateSection, sections } =
    useLandingPage();
  return (
    selectedSection && (
      <Card className="w-[435px] sticky top-4 h-[90vh] overflow-y-auto shadow-2xl ">
        <Button
          className="absolute top-2 right-2"
          variant={"outline"}
          size={"icon"}
          onClick={() => setSelectedSection(null)}
        >
          <X />
        </Button>
        <CardContent className="p-2">
          <Tabs defaultValue="controllers" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="controllers">controllers</TabsTrigger>
            </TabsList>
            <TabsContent
              dir="rtl"
              value="controllers"
              className=" w-full flex flex-col gap-2"
            >
              {sections &&
                selectedSection &&
                structer[selectedSection?.type as keyof typeof structer].map(
                  (field, index) => {
                    return (
                      <div key={index}>
                        <h4 className="text-left text-sm">{field.name}</h4>
                        <Field
                          key={selectedSection.id + index}
                          field={field}
                          value={
                            selectedSection.data[
                              field.name as keyof typeof selectedSection.data
                            ]
                          }
                        />
                      </div>
                    );
                  },
                )}
            </TabsContent>
          </Tabs>
        </CardContent>
        {/* <div className="text-xs">{JSON.stringify(selectedSection)}</div>*/}
      </Card>
    )
  );
}

const Field = ({
  field,
  value: v,
}: {
  field: { name: string; type: string };
  value: any;
}) => {
  const { sections, updateSection, selectedSection } = useLandingPage();
  const [value, setValue] = useState<any>();
  const [file, setFile] = useState<File>();
  //

  //
  useEffect(() => {
    if (!selectedSection) return;
    // if (!(field.name in selectedSection.data)) return;
    setValue(
      selectedSection.data[field.name as keyof typeof selectedSection.data],
    );
  }, [selectedSection]);
  //
  useEffect(() => {
    console.log("fire");
    if (!selectedSection) return;
    if (!sections) return;
    const findSection = sections.find((s) => s.id === selectedSection.id);
    if (!findSection) return;
    updateSection(findSection);
  }, []);

  //
  const { edgestore } = useEdgeStore();
  if (!selectedSection) return null;
  if (field.type === "string") {
    return (
      <Input
        onInput={(e: any) => {
          updateSection({
            ...selectedSection,
            data: { ...selectedSection.data, [field.name]: e.target.value },
          } as any);
          setValue(e.target.value);
        }}
        placeholder={field.name}
        value={value}
        className="text-right bg-slate-50 min-w-0 w-full"
      ></Input>
    );
  } else if (field.type === "text") {
    return (
      <Textarea
        onChange={(e) => {
          updateSection({
            ...selectedSection,
            data: { ...selectedSection.data, [field.name]: e.target.value },
          } as any);
          setValue(e.target.value);
        }}
        placeholder={field.name}
        value={value}
        className="text-right bg-slate-50 h-[300px] min-w-0"
      ></Textarea>
    );
  } else if (field.type === "boolean") {
    return (
      <div className="flex justify-end">
        <Switch
          className=""
          dir="ltr"
          checked={value}
          onCheckedChange={(e) => {
            updateSection({
              ...selectedSection,
              data: { ...selectedSection.data, [field.name]: e },
            } as any);
            setValue(e as any);
          }}
        />
      </div>
    );
  } else if (field.type === "image") {
    return (
      <SingleImageDropzone
        width={400}
        height={200}
        className="w-full h-full aspect-video"
        value={file}
        onChange={(f) => {
          (async () => {
            if (f) {
              const res = await edgestore.publicFiles.upload({
                file: f,
              });
              updateSection({
                ...selectedSection,
                data: { ...selectedSection.data, [field.name]: res.url },
              } as any);
              setValue(res.url);
              setFile(f);
            } else {
              alert("no files");
            }
          })();
        }}
      />
    );
  } else if (field.type == "cards array") {
    return (
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex flex-col gap-2 mb-4">
            {value &&
              value.map((c: any, i: number) => {
                return (
                  <div
                    key={i}
                    className="border flex gap-2 flex-col p-2 rounded-lg shadow"
                  >
                    <Button
                      variant={"outline"}
                      size="icon"
                      onClick={() => {
                        if (!value) return;
                        updateSection({
                          ...selectedSection,
                          data: {
                            ...selectedSection.data,
                            cards: value.filter((cc: any) => cc.id !== c.id),
                          },
                        } as any);
                      }}
                    >
                      <Trash size={16} />
                    </Button>
                    {["icon", "title", "subtitle"].map((f, i) => {
                      return (
                        <Input
                          key={i}
                          value={c[f]}
                          onInput={(e: any) => {
                            updateSection({
                              ...selectedSection,
                              data: {
                                ...selectedSection.data,
                                cards: (selectedSection.data as any).cards.map(
                                  (cc: any) =>
                                    cc.id === c.id
                                      ? { ...cc, [f]: e.target.value }
                                      : cc,
                                ),
                              },
                            } as any);
                          }}
                        ></Input>
                      );
                    })}
                  </div>
                );
              })}
          </div>
          <Button
            onClick={() => {
              const newCard = {
                title: "test",
                icon: "💕",
                subtitle: "test test test",
                id: crypto.randomUUID(),
              };
              const newCards =
                value.length > 0
                  ? [...(selectedSection.data as any).cards, newCard]
                  : [newCard];
              updateSection({
                ...selectedSection,
                data: {
                  ...selectedSection.data,
                  cards: newCards,
                },
              } as any);
              setValue(newCards);
            }}
            variant="outline"
            className="flex gap-2"
          >
            <Plus />
            add card
          </Button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
