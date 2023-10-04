"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Bell, PlusCircle } from "lucide-react"
import { ModeToggle } from "./DarkModeButton"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { UserButton } from "@clerk/nextjs"
import { Button } from "../ui/button"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Users",
    href: "/dashboard/users",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Categories",
    href: "/dashboard/categories",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "landing page",
    href: "/dashboard/landing-page",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]

export default function DashboardNavBar() {
  return (
    <div className="py-8 flex justify-between">
    <NavigationMenu className="flex-1 flex justify-center">
        <Link href={"/"} className="mr-8">
          <h1 className=" text-2xl ">30mw<span className="text-lg">Academy</span></h1>
        </Link>
      <NavigationMenuList>

        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Dashboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/dashboard/new-course"
                  >
                    <PlusCircle className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Create course
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/dashboard/courses" title="Courses">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/dashboard/my-courses" title="My courses">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/installation" title="My analytics">
                How to install dependencies and structure your app.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Control</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <div className="flex gap-2 items-center">
                <Button variant={"ghost"} size={"icon"}><Bell size={18}/></Button>
        <ModeToggle/>
        <UserButton afterSignOutUrl="/sign-in"/>
    </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
