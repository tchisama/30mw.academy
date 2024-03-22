"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VideoIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
type Props = {};
import axios from "axios";

export default function FormSection({}: Props) {
  const [sendedRequest, setSendedRequest] = useState(false);

  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const _30mw_user_id = localStorage.getItem("_30mw_user_id");
    if (!_30mw_user_id) return setSendedRequest(false);
    axios.get("/api/request/" + _30mw_user_id).then((res) => console.log(res));
  }, []);

  const requestCourse = async () => {
    let _30mw_user_id = await localStorage.getItem("_30mw_user_id");
    if (!_30mw_user_id) {
      _30mw_user_id = crypto.randomUUID();
      localStorage.setItem("_30mw_user_id", _30mw_user_id);
    }
    axios
      .post("/api/request", {
        _30mw_user_id: _30mw_user_id,
        id_course: "design course",
        user_name: fullName,
        user_number: number,
        user_email: email,
      })
      .then((res) => {
        console.log(res);
        alert("all good");
      })
      .catch(() => {
        alert("error");
      });
  };
  return (
    <div className=" dark:bg-slate-950">
      {/* 
        video section 


        - i want to add form to the section
        
        */}
      <div className="py-8 items-center  container flex md:flex-row-reverse flex-col-reverse gap-6">
        <video
          className="w-[700px] md:rounded-2xl "
          controls
          src="https://d2rk6n1qqhht0d.cloudfront.net/G05_EP00_INTRO.mp4"
        ></video>
        <div className="flex-1">
          <h1 className="text-4xl font-medium">دورة التصميم و المونتاج</h1>
          <h3 className="text-xl opacity-70 mt-2">
            أطلب الدورة ، الأمر سياخذ منك دقيقة فقط من وقتك
          </h3>

          <div className="flex flex-col gap-4 mt-10">
            <div className="flex gap-4">
              <Input
                value={fullName}
                onInput={(e: any) => setFullName(e.target.value)}
                className="text-lg h-16 bg-slate-100 border"
                placeholder="الإسم الكامل"
              ></Input>
              <Input
                value={number}
                onInput={(e: any) => setNumber(e.target.value)}
                placeholder="رقم الهاتف "
                className="text-lg h-16 bg-slate-100 border"
              ></Input>
            </div>
            <Input
              value={email}
              onInput={(e: any) => {
                setEmail(e.target.value);
              }}
              className="text-lg h-16 bg-slate-100  border"
              placeholder="البريد الإلكتروني "
            ></Input>
          </div>

          <div className="mt-4 flex gap-2 items-center">
            أو يمكنك إعطائنا معلوماتك عبر
            <Link href="" className="flex gap-1 text-primary items-center">
              واتساب
              <FaWhatsapp />
            </Link>
          </div>

          <div className="flex gap-2 mt-4">
            <Button
              disabled={!fullName || !number || !email}
              onClick={requestCourse}
              className="  border-white border-2  rounded-3xl  text-2xl p-8 flex items-center gap-3"
            >
              طلب الدورة
            </Button>
            <div>
              <Link href={"/course/652019e1200c377a6d6c31b5/146w9h"}>
                <Button
                  variant="outline"
                  className=" rounded-3xl border border-2 text-lg p-8 flex items-center gap-2"
                >
                  <VideoIcon />
                  شاهد المقدمة
                </Button>
              </Link>
            </div>
          </div>
          {/*
            <div className="py-4">
              <Link href={"/course/652019e1200c377a6d6c31b5/146w9h"}>
                <Button className="  border-white border-2  rounded-full  text-2xl p-8 flex items-center gap-3">
                  طلب الدورة
                </Button>
              </Link>
            </div>
            */}
        </div>
      </div>
    </div>
  );
}
