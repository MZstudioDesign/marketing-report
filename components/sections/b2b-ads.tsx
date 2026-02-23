"use client";

import { useState } from "react";
import {
  Building2,
  MessageCircle,
  Phone,
  Users,
  TrendingUp,
  Star,
  Clock,
  ChevronLeft,
  ChevronRight,
  Layers,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SectionHeader } from "@/components/ui/section-header";
import { EvidenceModal } from "@/components/ui/evidence-modal";
import { b2bAdsData } from "@/data/marketing-data";

const priorityConfig = {
  best: {
    label: "최우선",
    bg: "#fef3c7",
    color: "#92400e",
    border: "#fcd34d",
    icon: Star,
  },
  high: {
    label: "우선",
    bg: "var(--color-success-light)",
    color: "var(--color-success-text)",
    border: "#6ee7b7",
    icon: TrendingUp,
  },
  medium: {
    label: "일반",
    bg: "var(--color-primary-light)",
    color: "var(--color-primary)",
    border: "#93c5fd",
    icon: Building2,
  },
};

const adResultImages = [
  { src: "/images/b2b/ad-result-1.png", alt: "B2B 광고 성과 1" },
  { src: "/images/b2b/ad-result-2.png", alt: "B2B 광고 성과 2" },
  { src: "/images/b2b/ad-result-3.png", alt: "B2B 광고 성과 3" },
];

const systemImages = [
  { src: "/images/b2b/manychat-flow.png", alt: "ManyChat 자동 DM 플로우" },
  { src: "/images/b2b/target-1.png", alt: "메타 광고 타겟 오디언스 설정 1" },
  { src: "/images/b2b/target-2.png", alt: "메타 광고 타겟 오디언스 설정 2" },
];

// B2B 광고 소재 (세트1 이미지 9장 + AI튜터 카드뉴스 2장)
const CREATIVE_COUNT = 9;

export function B2bAdsSection() {
  const [creativeIdx, setCreativeIdx] = useState(0);
  const visibleCards = 4;

  const prev = () => setCreativeIdx((p) => Math.max(0, p - 1));
  const next = () => setCreativeIdx((p) => Math.min(CREATIVE_COUNT - visibleCards, p + 1));

  const creativeImages = [
    { src: "/images/b2b/creatives/set1-01.png", num: 1 },
    { src: "/images/b2b/creatives/set1-03.png", num: 3 },
    { src: "/images/b2b/creatives/set1-04.png", num: 4 },
    { src: "/images/b2b/creatives/set1-05.png", num: 5 },
    { src: "/images/b2b/creatives/set1-06.png", num: 6 },
    { src: "/images/b2b/creatives/set1-07.png", num: 7 },
    { src: "/images/b2b/creatives/set1-08.png", num: 8 },
    { src: "/images/b2b/creatives/set1-09.png", num: 9 },
    { src: "/images/b2b/creatives/set1-10.png", num: 10 },
  ];

  return (
    <section id="b2b-ads" className="pt-2">
      <SectionHeader
        icon={Building2}
        title="B2B 광고 (AI튜터)"
        subtitle="Meta Instagram/Facebook · 학원 선생님 타겟 캠페인"
        badge="1.21 ~ 2.19"
        period="29일 집행"
      />

      {/* Campaign Overview */}
      <BlurFade inView delay={0.05}>
        <div
          className="relative overflow-hidden rounded-2xl p-6 mb-6"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #064e3b 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }} />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg" style={{ backgroundColor: "rgba(16,185,129,0.2)" }}>
                  <Building2 className="h-4 w-4" style={{ color: "#34d399" }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: "#34d399" }}>
                  캠페인 성과 요약
                </p>
              </div>
              <EvidenceModal
                images={adResultImages}
                label="광고 성과 보기"
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: "총 광고비", value: "₩93,008", sub: "29일 집행" },
                { label: "도달", value: "3,361명", sub: "유니크 사용자" },
                { label: "대화 시작", value: "18건", sub: "인스타그램 DM" },
                { label: "대화당 비용", value: "₩5,167", sub: "리드 단가" },
                { label: "전화번호 확보", value: "4곳", sub: "학원 직접 연결" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <p className="text-xl font-black text-white">{item.value}</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: "#6ee7b7" }}>{item.label}</p>
                  <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>

      {/* System Setup */}
      <BlurFade inView delay={0.08}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              title: "ManyChat 자동화",
              desc: "DM 답장 시 자동 전화번호 수집 플로우 구축",
              icon: MessageCircle,
              color: "#10b981",
              img: { src: "/images/b2b/manychat-flow.png", alt: "ManyChat DM 플로우 스크린샷" },
            },
            {
              title: "타겟 학원 10만 추출",
              desc: "학원 선생님 맞춤 오디언스 정밀 설정",
              icon: Users,
              color: "#4f90ff",
              img: { src: "/images/b2b/target-1.png", alt: "메타 광고 타겟 설정 스크린샷" },
            },
            {
              title: "AI튜터 소재 제작",
              desc: "학원 타겟 맞춤 카드뉴스 광고 소재 2세트",
              icon: Layers,
              color: "#f59e0b",
              img: { src: "/images/b2b/cardnews-1.png", alt: "AI튜터 B2B 카드뉴스 소재" },
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-4 border hover:shadow-sm transition-all"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon className="h-4 w-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>{item.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-text-secondary)" }}>{item.desc}</p>
                  </div>
                </div>
                <EvidenceModal imageSrc={item.img.src} imageAlt={item.img.alt} label="보기" />
              </div>
            </div>
          ))}
        </div>
      </BlurFade>

      {/* Ad Creatives Carousel */}
      <BlurFade inView delay={0.12}>
        <div
          className="bg-white rounded-2xl border overflow-hidden mb-6"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <h3 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
                B2B 광고 소재
              </h3>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                직접 디자인한 AI튜터 학원 타겟 광고 이미지 소재
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                disabled={creativeIdx === 0}
                className="p-1.5 rounded-lg border transition-colors disabled:opacity-30"
                style={{ borderColor: "var(--color-border)" }}
              >
                <ChevronLeft className="h-4 w-4" style={{ color: "var(--color-text-secondary)" }} />
              </button>
              <span className="text-xs tabular-nums" style={{ color: "var(--color-text-muted)" }}>
                {creativeIdx + 1}–{Math.min(creativeIdx + visibleCards, CREATIVE_COUNT)} / {CREATIVE_COUNT}
              </span>
              <button
                onClick={next}
                disabled={creativeIdx >= CREATIVE_COUNT - visibleCards}
                className="p-1.5 rounded-lg border transition-colors disabled:opacity-30"
                style={{ borderColor: "var(--color-border)" }}
              >
                <ChevronRight className="h-4 w-4" style={{ color: "var(--color-text-secondary)" }} />
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-4 gap-3">
              {creativeImages.slice(creativeIdx, creativeIdx + visibleCards).map((img) => (
                <div
                  key={img.num}
                  className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer border hover:border-green-400 transition-all duration-200"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <Image
                    src={img.src}
                    alt={`B2B 광고 소재 ${img.num}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold bg-black/50 px-2 py-1 rounded-full transition-opacity">
                      {img.num}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* B2B card news preview */}
          <div className="px-6 pb-4 border-t pt-4" style={{ borderColor: "var(--color-border-light)" }}>
            <p className="text-xs font-semibold mb-3" style={{ color: "var(--color-text-secondary)" }}>
              AI튜터 전용 B2B 카드뉴스
            </p>
            <div className="grid grid-cols-2 gap-3" style={{ maxWidth: "300px" }}>
              {[
                { src: "/images/b2b/cardnews-1.png", label: "카드뉴스 1" },
                { src: "/images/b2b/cardnews-2.png", label: "카드뉴스 2" },
              ].map((img) => (
                <div
                  key={img.label}
                  className="aspect-video rounded-xl overflow-hidden relative group cursor-pointer border hover:border-green-400 transition-all"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform" unoptimized />
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Confirmed Leads */}
      <BlurFade inView delay={0.3}>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" style={{ color: "var(--color-success)" }} />
            <h3 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
              전화번호 확보 완료 리드 ({b2bAdsData.confirmedLeads.length}곳)
            </h3>
          </div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "var(--color-success-light)", color: "var(--color-success-text)" }}
          >
            즉시 연락 가능
          </span>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {b2bAdsData.confirmedLeads.map((lead, i) => {
          const cfg = priorityConfig[lead.priority as keyof typeof priorityConfig];
          const PIcon = cfg.icon;
          return (
            <BlurFade key={lead.name} inView delay={0.06 * i}>
              <div
                className="bg-white rounded-2xl p-5 border hover:shadow-md transition-all duration-200 relative overflow-hidden"
                style={{ borderColor: cfg.border }}
              >
                {lead.priority === "best" && (
                  <div
                    className="absolute top-0 right-0 text-[10px] font-bold px-3 py-1 rounded-bl-xl"
                    style={{ backgroundColor: cfg.bg, color: cfg.color }}
                  >
                    <Star className="h-3 w-3 inline mr-0.5" /> 도입 의사 최상
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: cfg.bg }}
                  >
                    <Building2 className="h-5 w-5" style={{ color: cfg.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
                        {lead.name}
                      </p>
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold"
                        style={{ backgroundColor: cfg.bg, color: cfg.color }}
                      >
                        {cfg.label}
                      </span>
                    </div>
                    {lead.academy && (
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
                        {lead.academy}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-2 flex-wrap">
                      <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
                        <MapPin className="h-3 w-3 inline" /> {lead.location}
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: "var(--color-surface-2)", color: "var(--color-text-secondary)" }}
                      >
                        <Users className="h-3 w-3" /> {lead.size}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center gap-1.5 mt-3 text-xs font-medium px-3 py-2 rounded-xl"
                  style={{ backgroundColor: "var(--color-success-light)", color: "var(--color-success-text)" }}
                >
                  <Phone className="h-3 w-3" />
                  {lead.status}
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>

      {/* DM Follow-up Status */}
      <BlurFade inView delay={0.4}>
        <div
          className="bg-white rounded-2xl border p-5"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" style={{ color: "var(--color-primary)" }} />
              <h3 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
                DM 재추적 필요 ({b2bAdsData.dmFollowUp.length}명)
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3 w-3" style={{ color: "var(--color-warning)" }} />
                <span className="text-xs" style={{ color: "var(--color-warning)" }}>추가 전환 잠재력</span>
              </div>
              <EvidenceModal
                images={systemImages}
                label="시스템 보기"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {b2bAdsData.dmFollowUp.map((dm, i) => (
              <div
                key={`${dm.name}-${i}`}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                      {dm.name}
                    </span>
                    {dm.location !== "-" && (
                      <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                        <MapPin className="h-3 w-3 inline" /> {dm.location}
                      </span>
                    )}
                    {dm.size !== "-" && (
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full"
                        style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)" }}
                      >
                        {dm.size}
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className="text-[10px] px-2 py-1 rounded-full font-medium flex-shrink-0"
                  style={{
                    backgroundColor: dm.status === "읽음" ? "#fef3c7" : "var(--color-surface-2)",
                    color: dm.status === "읽음" ? "#92400e" : "var(--color-text-muted)",
                  }}
                >
                  {dm.status}
                </span>
              </div>
            ))}
          </div>
          <div
            className="mt-4 p-3 rounded-xl text-xs border-l-4"
            style={{
              backgroundColor: "var(--color-primary-light)",
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
            }}
          >
            <strong>전략 제안:</strong> 상단 11명 리드 추가 팔로업 시 최소 2~3곳 추가 전환 예상.
            특히 100명+ 규모 학원(송의진, 이정환) 우선 재연락 권장.
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
