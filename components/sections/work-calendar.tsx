"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { CalendarDays, CheckCircle2, Circle, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeader } from "@/components/ui/section-header";
import { workCalendar } from "@/data/marketing-data";

const colorConfig = {
  blue: {
    accent: "var(--color-primary)",
    bg: "var(--color-primary-light)",
  },
  green: {
    accent: "var(--color-success)",
    bg: "var(--color-success-light)",
  },
};

function ImageLightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: { src: string; alt: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initialIndex);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        onClick={onClose}
      >
        <X className="h-5 w-5 text-white" />
      </button>
      <button
        className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30"
        onClick={(e) => { e.stopPropagation(); setIdx((p) => Math.max(0, p - 1)); }}
        disabled={idx === 0}
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
      <div
        className="relative w-[80vw] max-w-3xl h-[70vh] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[idx].src}
          alt={images[idx].alt}
          fill
          className="object-contain"
          unoptimized
        />
      </div>
      <button
        className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30"
        onClick={(e) => { e.stopPropagation(); setIdx((p) => Math.min(images.length - 1, p + 1)); }}
        disabled={idx === images.length - 1}
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>
      <div className="absolute bottom-4 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIdx(i); }}
            className="h-1.5 rounded-full transition-all duration-200"
            style={{
              width: i === idx ? "20px" : "6px",
              backgroundColor: i === idx ? "white" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </div>,
    document.body
  );
}

export function WorkCalendarSection() {
  const [lightbox, setLightbox] = useState<{ weekIdx: number; imgIdx: number } | null>(null);

  const openLightbox = (weekIdx: number, imgIdx: number) => setLightbox({ weekIdx, imgIdx });
  const closeLightbox = () => setLightbox(null);

  const isLast = (i: number) => i === workCalendar.length - 1;

  return (
    <section id="calendar" className="pt-2 pb-16">
      <SectionHeader
        icon={CalendarDays}
        title="업무 캘린더"
        subtitle="4주간 마케팅 활동 타임라인 (실무 시작 1/26~)"
        period="26.01.26 ~ 02.20"
      />

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
          style={{ backgroundColor: "var(--color-border)" }}
        />

        <div className="flex flex-col gap-8">
          {workCalendar.map((week, i) => {
            const cfg = colorConfig[week.color as keyof typeof colorConfig];
            const isRight = i % 2 === 1;

            return (
              <BlurFade key={week.week} inView delay={0.08 * i}>
                <div className={`relative flex items-start gap-4 md:gap-0 ${isRight ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  {/* Week Dot */}
                  <div
                    className="relative z-10 flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center border-4 border-white shadow-md md:absolute md:left-1/2 md:-translate-x-1/2"
                    style={{ backgroundColor: cfg.bg }}
                  >
                    <span className="text-xs font-black" style={{ color: cfg.accent }}>
                      {week.week}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 md:w-[45%] ${isRight ? "md:mr-[55%]" : "md:ml-[55%]"} ml-4 md:ml-0`}>
                    <div
                      className="bg-white rounded-2xl border overflow-hidden"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      {/* Top color bar */}
                      <div className="h-1" style={{ backgroundColor: cfg.accent }} />

                      <div className="p-5">
                        <div className="flex items-start justify-between gap-2 flex-wrap mb-3">
                          <div>
                            <p className="text-xs font-semibold" style={{ color: cfg.accent }}>
                              {week.label}
                            </p>
                            <p className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                              {week.period}
                            </p>
                          </div>
                          <span
                            className="text-[10px] px-2.5 py-1 rounded-full font-semibold"
                            style={{ backgroundColor: cfg.bg, color: cfg.accent }}
                          >
                            {week.milestone}
                          </span>
                        </div>

                        {/* Tasks */}
                        <div className="flex flex-col gap-1.5 mb-4">
                          {week.tasks.map((task, j) => (
                            <div key={j} className="flex items-start gap-2">
                              {isLast(i) ? (
                                <CheckCircle2
                                  className="h-3.5 w-3.5 flex-shrink-0 mt-0.5"
                                  style={{ color: "var(--color-success)" }}
                                />
                              ) : (
                                <Circle
                                  className="h-3.5 w-3.5 flex-shrink-0 mt-0.5"
                                  style={{ color: cfg.accent }}
                                />
                              )}
                              <span className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                                {task}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Image Gallery */}
                        {week.images && week.images.length > 0 && (
                          <div>
                            <p
                              className="text-[10px] font-semibold mb-2 uppercase tracking-wider"
                              style={{ color: "var(--color-text-muted)" }}
                            >
                              작업 결과물
                            </p>
                            <div className="grid grid-cols-4 gap-2">
                              {week.images.map((img, imgIdx) => (
                                <button
                                  key={imgIdx}
                                  onClick={() => openLightbox(i, imgIdx)}
                                  className="relative aspect-square rounded-xl overflow-hidden group border hover:border-blue-300 transition-all duration-200"
                                  style={{ borderColor: "var(--color-border)" }}
                                >
                                  <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    unoptimized
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                                    <ZoomIn className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>

      {/* Summary Footer */}
      <BlurFade inView delay={0.5}>
        <div
          className="mt-10 p-6 rounded-2xl text-center"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { label: "실무 기간", value: "4주" },
              { label: "운영 채널", value: "6개" },
              { label: "광고 플랫폼", value: "4개" },
              { label: "제작 콘텐츠", value: "20종+" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-2xl font-black" style={{ color: "var(--color-text-primary)" }}>
                  {item.value}
                </p>
                <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-4" style={{ color: "var(--color-text-secondary)" }}>
            전략 수립부터 전 채널 광고 런칭 & 콘텐츠 바이럴까지 — 4주 단독 실행
          </p>
        </div>
      </BlurFade>

      {/* Lightbox */}
      {lightbox !== null && (
        <ImageLightbox
          images={workCalendar[lightbox.weekIdx].images || []}
          initialIndex={lightbox.imgIdx}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
