import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Course } from '@/hooks/course-store'
import { Edit, Eye } from 'lucide-react'
import { Cardo } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

function CourseCard({course}:{course:Course}) {
  return (
    <Card className="overflow-hidden group" key={course._id}>
      <div className="relative overflow-hidden ">
        <img
          className="w-full aspect-video object-cover"
          src={course?.image}
          alt=""
        />
        <div className="absolute bottom-2 -right-14 opacity-0 group-hover:opacity-100 duration-150 group-hover:right-2 flex gap-2 ">
          <Button variant={"outline"} size={"icon"}>
            <Eye size={18}></Eye>
          </Button>
          <Link href={`/dashboard/edit-course/${course._id}`}>
            <Button variant={"outline"} size={"icon"}>
              <Edit size={18}></Edit>
            </Button>
          </Link>
        </div>
      </div>
      <CardHeader>
        <CardDescription className="mb-2 flex gap-2">
          <Avatar>
            <AvatarImage src={course?.owner?.photo} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-md text-foreground">
              {course?.owner?.fname} {course?.owner?.lname}
            </span>
            <span className="text-sm ">{course?.owner?.email}</span>
          </div>
        </CardDescription>
        <Separator className="my-2" />
        <CardTitle className="">{course.title}</CardTitle>
        <div className="flex justify-between items-end">
          <Badge variant="outline">{course.category}</Badge>
          <CardTitle className="text-lg font-medium">
            {course.price} Dh
          </CardTitle>
        </div>
        <CardDescription>{course.description.slice(0, 50)}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default CourseCard;
