"use client";

import { useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoModalProps {
  videoId: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function VideoModal({ videoId, children, className, style }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setIsOpen(true); }}
        className={cn("cursor-pointer", className)}
        style={style}
        role="button"
        tabIndex={0}
      >
        {children}
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="relative w-full max-w-4xl aspect-video mx-4 md:mx-0"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                    className="absolute -top-14 right-0 text-white text-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/20 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <XIcon className="h-5 w-5" />
                  </motion.button>
                  <div className="h-full w-full border-2 border-white/20 rounded-2xl overflow-hidden isolate z-[1] relative">
                    <iframe
                      src={embedUrl}
                      className="h-full w-full rounded-2xl"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
