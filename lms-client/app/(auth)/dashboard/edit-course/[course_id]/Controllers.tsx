import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {}
export default function Controllers({ }: Props) {
  return (
    <Card className="w-[400px] sticky top-4 h-[75vh] shadow-2xl">
      <CardContent className="p-2">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="controllers">controllers</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
      </Tabs>
      </CardContent>
    </Card>
  )
}