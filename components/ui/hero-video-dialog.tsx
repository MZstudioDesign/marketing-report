"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroVideoProps {
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

export function HeroVideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <div
        className="relative cursor-pointer group"
        onClick={() => setIsVideoOpen(true)}
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-xl shadow-lg border"
          style={{ borderColor: "var(--color-border)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-xl">
          <div
            className="flex items-center justify-center rounded-full backdrop-blur-md"
            style={{
              width: 64,
              height: 64,
              backgroundColor: "rgba(79,144,255,0.15)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full transition-all ease-out duration-200 group-hover:scale-[1.2] scale-100"
              style={{
                width: 48,
                height: 48,
                background: "linear-gradient(135deg, #4f90ff, #3a7de8)",
                boxShadow: "0 4px 14px rgba(79,144,255,0.4)",
              }}
            >
              <Play className="h-5 w-5 text-white fill-white" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video mx-4 md:mx-0"
            >
              <motion.button className="absolute -top-14 right-0 text-white text-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/20 transition-colors">
                <XIcon className="h-5 w-5" />
              </motion.button>
              <div className="h-full w-full border-2 border-white/20 rounded-2xl overflow-hidden isolate z-[1] relative">
                <iframe
                  src={videoSrc}
                  className="h-full w-full rounded-2xl"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
