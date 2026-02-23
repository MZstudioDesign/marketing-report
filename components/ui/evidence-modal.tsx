"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Info, ChevronLeft, ChevronRight, Images } from "lucide-react";
import Image from "next/image";

interface EvidenceImage {
  src: string;
  alt: string;
}

interface EvidenceModalProps {
  images?: EvidenceImage[];
  imageSrc?: string;
  imageAlt?: string;
  label?: string;
}

export function EvidenceModal({
  images,
  imageSrc,
  imageAlt,
  label = "실제 데이터 보기",
}: EvidenceModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const gallery: EvidenceImage[] =
    images && images.length > 0
      ? images
      : imageSrc
      ? [{ src: imageSrc, alt: imageAlt || label }]
      : [];

  const isMultiple = gallery.length > 1;
  const current = gallery[currentIdx];

  const prev = () => setCurrentIdx((i) => Math.max(0, i - 1));
  const next = () => setCurrentIdx((i) => Math.min(gallery.length - 1, i + 1));

  if (gallery.length === 0) return null;

  return (
    <>
      <button
        onClick={() => { setCurrentIdx(0); setIsOpen(true); }}
        className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full transition-all duration-150 hover:scale-105"
        style={{
          color: "var(--color-primary)",
          backgroundColor: "var(--color-primary-light)",
        }}
        title={label}
      >
        {isMultiple ? <Images className="h-3 w-3" /> : <Info className="h-3 w-3" />}
        <span className="hidden sm:inline">{label}</span>
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && current && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 16 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div
                    className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <Info className="h-4 w-4 flex-shrink-0" style={{ color: "var(--color-primary)" }} />
                      <span
                        className="text-sm font-medium truncate"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {current.alt}
                      </span>
                      {isMultiple && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)" }}
                        >
                          {currentIdx + 1} / {gallery.length}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                    >
                      <X className="h-4 w-4" style={{ color: "var(--color-text-secondary)" }} />
                    </button>
                  </div>

                  {/* Image */}
                  <div className="overflow-auto flex-1 relative">
                    <div className="relative w-full" style={{ minHeight: "300px" }}>
                      <Image
                        src={current.src}
                        alt={current.alt}
                        width={900}
                        height={700}
                        className="w-full h-auto object-contain"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Navigation (only if multiple) */}
                  {isMultiple && (
                    <div
                      className="flex items-center justify-between px-4 py-3 border-t flex-shrink-0"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <button
                        onClick={prev}
                        disabled={currentIdx === 0}
                        className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg border transition-colors disabled:opacity-30"
                        style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        이전
                      </button>
                      <div className="flex gap-1.5">
                        {gallery.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentIdx(i)}
                            className="h-1.5 rounded-full transition-all"
                            style={{
                              width: i === currentIdx ? "24px" : "6px",
                              backgroundColor:
                                i === currentIdx
                                  ? "var(--color-primary)"
                                  : "var(--color-border)",
                            }}
                          />
                        ))}
                      </div>
                      <button
                        onClick={next}
                        disabled={currentIdx === gallery.length - 1}
                        className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg border transition-colors disabled:opacity-30"
                        style={{ borderColor: "var(--color-border)", color: "var(--color-text-secondary)" }}
                      >
                        다음
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
