"use client"
import { UserButton, useClerk } from "@clerk/nextjs"
import useFetchUser from "@/hooks/fetch-user"

export default function Home() {
  useFetchUser()
  return (
      <div>
        <UserButton afterSignOutUrl="/sign-in"/>
      </div>
  )
}
