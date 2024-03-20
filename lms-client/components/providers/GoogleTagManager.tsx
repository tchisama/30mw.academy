"use client";
import { useEffect } from "react";
import { initializeGoogleTagManager } from "@/lib/googleTagManager";

export default function GTMProvider() {
  useEffect(() => {
    initializeGoogleTagManager("AW-16503732124");
  }, []);
  return null;
}
