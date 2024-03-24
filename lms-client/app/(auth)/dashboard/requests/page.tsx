"use client";
import DashboardNavBar from "@/components/global/DashboardNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
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

const statusColors = {
  accepted: "border",
  pending: "border-green-400 bg-green-50",
  rejected: "border-red-400 bg-red-50",
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
    <div className="container px-2 md:px-4 min-h-screen  mx-auto w-screen">
      <DashboardNavBar />
      <h1 className="text-3xl my-8">Requests</h1>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        {requests.length > 0 &&
          requests.map((req, i) => {
            return (
              <Card className={cn("shadow border", statusColors[req.status])}>
                <CardHeader className="flex gap-2 justify-between">
                  <div className="flex gap-2 justify-between">
                    <div>
                      <div>{req.status}</div>
                      <div>{req.user_name}</div>
                    </div>
                    <div>
                      {new Date(req.updatedAt).toLocaleDateString()}
                      {" / "}
                      {new Date(req.updatedAt).toLocaleTimeString()}
                    </div>
                  </div>
                </CardHeader>
                <CardFooter className="flex flex-col md:flex-row w-full gap-2 items-start md:justify-between">
                  <div className="">
                    <div>{req.user_number}</div>
                    <div>{req.user_email}</div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`https://wa.me/+212${req.user_number}?text=HELP`}
                    >
                      <Button className="" size="icon" variant="outline">
                        <FaWhatsapp className="text-xl" />
                      </Button>
                    </Link>
                    <Select
                      defaultValue={req.status}
                      onValueChange={(value) => {
                        axios
                          .patch("/api/request/" + req._id, {
                            status: value,
                          })
                          .then(() => {
                            setRequests(
                              requests.map((r, j) =>
                                i == j ? { ...r, status: value as any } : r,
                              ),
                            );
                          });
                      }}
                    >
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">pending</SelectItem>
                        <SelectItem value="accepted">accepted</SelectItem>
                        <SelectItem value="rejected">rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Page;
