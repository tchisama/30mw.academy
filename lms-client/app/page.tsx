"use client"
import useUserStore from "@/hooks/users-store"
import { useEffect } from "react"
import axios from "axios"
import { useClerk } from "@clerk/nextjs"
import useCourseStore from "@/hooks/course-store"

export default function Home() {
  const {user,updateUser} = useUserStore()
  const {updateCourse,course} = useCourseStore()
  const userClerk = useClerk()

  useEffect(() => {
    if(userClerk.user){
      axios.post("http://localhost:8080/auth/create-user",{
          fname: userClerk.user?.firstName,
          lname: userClerk.user?.lastName,
          email: userClerk.user?.emailAddresses[0].emailAddress,
          photo: userClerk.user?.imageUrl,
          id_user: userClerk.user?.id,
      })
      .then((res)=> {
        updateUser(res.data)
      })
    }
  },[updateUser,userClerk.user])
  useEffect(()=>{
    if(course){
      updateCourse({...course,owner:{
          fname: userClerk.user?.firstName || "",
          lname: userClerk.user?.lastName || "",
          email: userClerk.user?.emailAddresses[0].emailAddress||"",
          photo: userClerk.user?.imageUrl||"",
          id_user: userClerk.user?.id||"",
      }})
    }
  },[updateCourse,userClerk.user,course])

  return (
      <div>{userClerk.user?.firstName}</div>
  )
}
