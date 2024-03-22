"use client";
import DashboardNavBar from "@/components/global/DashboardNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
type Props = {};

type RequestType = {
  _id: string;
  _30mw_user_id: string;
  id_course: string;
  user_name: string;
  user_number: string;
  user_email: string;
  createdAt: string; // Assuming createdAt is a string representing a date/time
  updatedAt: string; // Assuming updatedAt is a string representing a date/time
  __v: number;
  status: "pending" | "accepted" | "rejected";
};

function Page({}: Props) {
  const [requests, setRequests] = useState<RequestType[]>([]);
  useEffect(() => {
    axios.get<RequestType[]>("/api/request/").then((res) => {
      console.log(res.data);
      setRequests(res.data);
    });
  }, []);
  return (
    <div className="container px-2 md:px-4 min-h-screen  mx-auto">
      <DashboardNavBar />
      <h1 className="text-3xl my-8">Requests</h1>
      <div className="grid gap-2 grid-cols-2">
        {requests.length > 0 &&
          requests.map((req) => {
            return (
              <Card
                className={cn(
                  "shadow border",
                  {
                    pending: "border-yellow-400 bg-yellow-100",
                    accepted: "border-green-400",
                    rejected: "border-red-400",
                  }[req.status],
                )}
              >
                <CardHeader className="flex gap-2 justify-between">
                  <div className="flex gap-2 justify-between">
                    <div>
                      <div>{req.status}</div>
                      <div>{req.user_name}</div>
                    </div>
                    <div>{req.updatedAt}</div>
                  </div>
                </CardHeader>
                <CardContent className="flex gap-2 justify-between">
                  <div className="">
                    <div>{req.user_number}</div>
                    <div>{req.user_email}</div>
                  </div>
                  <div>
                    <Button className="" size="icon" variant="outline">
                      <FaWhatsapp className="text-xl" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Page;

