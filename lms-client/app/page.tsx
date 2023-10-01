"use client"
import useUserStore from "@/hooks/users-store"
import { useEffect } from "react"
import axios from "axios"
import { useClerk } from "@clerk/nextjs"

export default function Home() {
  const {user,updateUser} = useUserStore()
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

  return (
      <div>{userClerk.user?.firstName}</div>
  )
}
