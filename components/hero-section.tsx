"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/lib/language-context";
import { Upload } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function HeroSection() {
  const { t } = useLanguage();
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) return;

    const targetPosition = aboutSection.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000; // 2 seconds for slow, smooth scroll
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Easing function for smooth animation
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error(t("upload_error"));
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error(t("upload_error"));
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload-cv", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success(t("upload_success"));
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        toast.error(t("upload_error"));
      }
    } catch (error) {
      toast.error(t("upload_error"));
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#E8E6E3] pt-24 pb-0 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A4A4A] mb-12 leading-tight">
            {t("hero_title")}
          </h1>

          <div className="space-y-6">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              className="hidden"
              id="cv-upload"
            />
            <label
              htmlFor="cv-upload"
              className={`inline-block px-12 py-4 bg-[#CD7F6C] text-white text-xl font-medium rounded-lg cursor-pointer transition-all duration-200 hover:bg-[#B86F5C] hover:shadow-lg transform hover:scale-105 ${
                isUploading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isUploading ? (
                <span className="flex items-center gap-2">
                  <Upload className="w-5 h-5 animate-pulse" />
                  {t("upload_cv")}
                </span>
              ) : (
                t("upload_cv")
              )}
            </label>
          </div>
        </div>
      </div>

      <div className="relative mt-auto">
        <div className="text-center mb-8">
          <p className="text-[#4A4A4A] text-xl mb-6">{t("or")}</p>
        </div>

        <div className="relative h-24 overflow-visible">
          <div className="absolute inset-0 w-full bg-[#CD7F6C] h-[96px]" />

          <div
            className="absolute flex flex-col items-center"
            style={{
              right: "calc(240px - 35px)",
              top: "-5px",
              zIndex: 10,
            }}
          >
            <div
              className="bg-[#E8E6E3]"
              style={{
                width: "70px",
                height: "60px",
                borderRadius: "0 0 45px 45px",
              }}
            />
          </div>

          <div
            className="absolute flex flex-col items-center"
            style={{
              right: "calc(130px - 35px)",
              top: "-60px",
            }}
          >
            <div
              className="bg-[#CD7F6C]"
              style={{
                width: "70px",
                height: "60px",
                borderRadius: "45px 45px 0 0",
              }}
            />
          </div>

          <button
            onClick={handleScrollToAbout}
            className="absolute inset-0 flex items-center justify-center z-10 text-white text-xl font-medium hover:underline transition-all duration-200 md:pt-0 pt-28"
          >
            {t("find_out")}
          </button>
        </div>
      </div>
    </section>
  );
}
