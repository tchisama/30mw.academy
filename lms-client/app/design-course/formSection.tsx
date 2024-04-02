"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, VideoIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
type Props = {};
import axios from "axios";

export default function FormSection({}: Props) {
  const [sendedRequest, setSendedRequest] = useState(false);
  const designcourseid = "652019e1200c377a6d6c31b5";

  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const _30mw_user_id = localStorage.getItem("_30mw_user_id");
    if (!_30mw_user_id) return setSendedRequest(false);
    axios.get("/api/request/" + _30mw_user_id).then((res) => {
      if (res.data.length > 0) {
        setSendedRequest(true);
      }
    });
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
        id_course: designcourseid,
        user_name: fullName??"",
        user_number: number,
        user_email: email??"",
      })
      .then((res) => {
        console.log(res);
        setSendedRequest(true);
      })
      .catch(() => {
        alert("error");
      });
  };
  return (
    <div className=" dark:bg-slate-950 overflow-x-hidden">
      {/* 
        video section 


        - i want to add form to the section
        
        */}
      <div className="py-8 items-center  container flex md:flex-row-reverse flex-col gap-6">
        <div className="w-[100vw] flex justify-center md:w-fit">
        <iframe width="560"
            className="md:w-[700px] aspect-video relative w-full md:rounded-2xl "
            src="https://www.youtube.com/embed/THOzCd4MEyc?si=_jhOOVcwRvJn5CGr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        {!sendedRequest ? (
          <div className="flex-1 w-screen px-5">
            <h1 className="text-4xl  font-medium">دورة التصميم و المونتاج</h1>
            <h3 className="text-xl opacity-70 mt-2">
              أطلب الدورة ، الأمر سياخذ منك دقيقة فقط من وقتك
            </h3>

            <div className="flex flex-col gap-4 mt-10">
              <div className="flex gap-4 md:flex-row flex-col">
                <Input
                  value={fullName}
                  type="text"
                  name="fullName"
                  onInput={(e: any) => setFullName(e.target.value)}
                  className="md:text-lg dark:bg-slate-800 h-16 bg-slate-100 border"
                  placeholder="الإسم الكامل"
                ></Input>
                <Input
                  dir={"rtl"}
                  value={number}
                  type="tel"
                  name="number"
                  onInput={(e: any) => setNumber(e.target.value)}
                  placeholder="رقم الهاتف "
                  className="md:text-lg  dark:bg-slate-800 h-16 bg-slate-100 border"
                ></Input>
              </div>
              <Input
                value={email}
                type="email"
                name="email"
                onInput={(e: any) => {
                  setEmail(e.target.value);
                }}
                className="md:text-lg h-16 bg-slate-100  dark:bg-slate-800 border"
                placeholder="البريد الإلكتروني "
              ></Input>
            </div>

            <div className="mt-4 w flex gap-2 items-center">
              أو يمكنك إعطائنا معلوماتك عبر
              <Link
                href="https://wa.me/+212642680949?text=HELP"
                className="flex gap-1 text-primary items-center"
              >
                واتساب
                <FaWhatsapp />
              </Link>
            </div>

            <div className="flex gap-2 mt-4 flex-col md:flex-row">
              <Button
                disabled={!number}
                onClick={requestCourse}
                className="  border-white border-2  rounded-3xl  text-2xl p-8 flex items-center gap-3"
              >
                طلب الدورة
              </Button>
              <div className="w-full md:w-fit">
                <Link href={"/course/652019e1200c377a6d6c31b5/146w9h"}>
                  <Button
                    variant="secondary"
                    className=" rounded-3xl text-lg p-8 flex items-center gap-2"
                  >
                    محتوى الدورة
                    <ArrowLeft size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1">
            <h1 className="font-bold  text-7xl">💕</h1>
            <h1 className="font-bold text-4xl  md:text-5xl mt-6">
              شكرا على الطلب
            </h1>
            <h3 className="md:text-2xl text-xl max-w-md mt-4">
              {" "}
              وسوف يقوم فريقنا بالتواصل معك في أقرب وقت ممكن
            </h3>
            <div className="mt-8">
              <Link href={"/course/652019e1200c377a6d6c31b5/146w9h"}>
                <Button className=" rounded-3xl text-lg p-8 flex items-center gap-2">
                  <VideoIcon />
                  شاهد المقدمة
                </Button>
              </Link>
            </div>
          </div>
        )}

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
  );
}
