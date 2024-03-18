import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLandingPage } from "@/hooks/landingpage"
import structer from "./sectionsStructer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SingleImageDropzone } from "@/components/SingleImageDropzone"
import { useEdgeStore } from "@/lib/edgestore"
import { Switch } from "@/components/ui/switch"

const sectionControllers = {
}



type Props = {}
export default function Controllers({ }: Props) {
  const {selectedSection,setSelectedSection,updateSection,sections} = useLandingPage()
  return (
    selectedSection &&
    <Card  className="w-[420px] sticky top-4 h-fit shadow-2xl ">
      <Button className="absolute top-2 right-2" variant={"outline"} size={"icon"} onClick={()=>setSelectedSection(null)}><X/></Button>
      <CardContent className="p-2">
      <Tabs defaultValue="controllers" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="controllers">controllers</TabsTrigger>
        </TabsList>
        <TabsContent dir="rtl" value="controllers" className=" w-full flex flex-col gap-2">
          {
            sections && 
            selectedSection &&
            structer[selectedSection?.type as keyof typeof structer].map((field,index)=>{
            
              return (
              <div>
              <h4 className="text-left text-sm">{field.name}</h4>
              <Field key={selectedSection.id+index} field={field} value={selectedSection.data[field.name as keyof typeof selectedSection.data]}/>
              </div>
              )
            })
          }
        </TabsContent>
      </Tabs>
      </CardContent>
    </Card>
  )
}



const Field = ({field,value:v}:{field:{name:string,type:string},value:any}) => {
  const {updateSection,selectedSection} = useLandingPage()
  const [value,setValue] = useState<string>(v)
  const [file, setFile] = useState<File>();
  const {edgestore} = useEdgeStore()
  if(!selectedSection) return null
              if(field.type === "string"){
                return <Input onInput={
                  (e:any)=>{
                    updateSection({...selectedSection,data:{...selectedSection.data,[field.name]:e.target.value}})
                    setValue(e.target.value)
                  }
                } placeholder={field.name} value={value} className="text-right bg-slate-50 min-w-0 w-full"></Input>
              }else if(field.type === "text"){
                return <Textarea
                 onChange={
                   e=>{
                     updateSection({...selectedSection,data:{...selectedSection.data,[field.name]:e.target.value}})
                     setValue(e.target.value)
                   }
                 }
                 placeholder={field.name} value={value} className="text-right bg-slate-50 h-[300px] min-w-0"></Textarea>
              }else if (field.type === "boolean"){
                return <div className="flex justify-end">
                  <Switch className="" value={value} dir="ltr" onCheckedChange={
                  (e)=>{
                    updateSection({...selectedSection,data:{...selectedSection.data,[field.name]:e}})
                    setValue(e.toString())
                  }
                } />
                  </div>
              }else if(field.type === "image"){
                
              return <SingleImageDropzone
                  width={400}
                  height={200}
                  className='w-full h-full aspect-video'
                  value={file}
                  onChange={(f) => {
                    (async () => {
                            if (f) {
                            const res = await edgestore.publicFiles.upload({
                                file:f,
                            });
                            updateSection({...selectedSection,data:{...selectedSection.data,[field.name]:res.url}})
                            setValue(res.url)
                            setFile(f)
                          }else{
                            alert("no files")
                          }
                      })()
                  }}
              />
              }
              else{
                return null
              }
}