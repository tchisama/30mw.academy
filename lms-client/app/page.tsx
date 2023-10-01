"use client"
import useUserStore from "@/hooks/users-store"
import { useEffect } from "react"
import axios from "axios"
import { useClerk } from "@clerk/nextjs"
import useCourseStore from "@/hooks/course-store"
import usePublishCourse from "@/hooks/use-publish-course"
import useFetchUser from "@/hooks/fetch-user"

export default function Home() {
  useFetchUser()
  return (
      <div></div>
  )
}
