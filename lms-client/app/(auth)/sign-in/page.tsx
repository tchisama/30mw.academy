"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Loader } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import illu from "@/public/login1.png"
import Image from "next/image"
import Link from "next/link"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className="grid grid-cols-2 min-h-screen justify-center items-center">
      <div className="w-full h-full relative bg-primary justify-center items-center flex">
          <Image alt="illustration" className="w-[70%] object-contain drop-shadow-xl" src={illu}></Image>
          <Link className="absolute bottom-4 right-6 text-white" href="/">
            Create an teacher accout
          </Link>
      </div>
      <Button variant={"secondary"} className="absolute top-4 right-6">Sign up</Button>

    <Card className="w-[400px] shadow-lg mx-auto">
      <CardContent className="mt-8 text-center">
            <CardTitle className="my-4">Account Login</CardTitle>
            <CardDescription className="my-4">Sign in to access your account.</CardDescription>
            <div className={cn("grid gap-6", className)} {...props}>
              <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      disabled={isLoading}
                    />
                  </div>
                  <Button disabled={isLoading}>
                    {isLoading && (
                        <Loader className="mr-2 h-4 w-4 animate-spin"></Loader>
                    )}
                    Sign In with Email
                  </Button>
                </div>
              </form>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="flex gap-2">

              <Button variant="outline" className="flex-1" type="button" disabled={isLoading}>
                {isLoading ? (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <></>
                )}{" "}
                Facebook
              </Button>

              <Button variant="outline" className="flex-1" type="button" disabled={isLoading}>
                {isLoading ? (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <></>
                )}{" "}
                Google
              </Button>

              </div>
            </div>
      </CardContent>
      </Card>

    </div>
  )
}