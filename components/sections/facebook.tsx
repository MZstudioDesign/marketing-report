"use client";

import {
  Facebook,
  Eye,
  Users,
  MousePointerClick,
  UserPlus,
  Film,
  FileText,
  TrendingUp,
} from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SectionHeader } from "@/components/ui/section-header";
import { EvidenceModal } from "@/components/ui/evidence-modal";
import { facebookData } from "@/data/marketing-data";

const FB_BLUE = "#1877f2";

const evidenceImages = [
  { src: "/images/facebook/reels-views.png", alt: "페이스북 릴스 조회수" },
  { src: "/images/facebook/post-views.png", alt: "페이스북 포스트 조회수" },
  { src: "/images/facebook/content-flow.png", alt: "콘텐츠 흐름 그래프" },
  { src: "/images/facebook/followers.png", alt: "팔로워 현황" },
  { src: "/images/facebook/traffic.png", alt: "유입 경로" },
  { src: "/images/facebook/content-list-1.png", alt: "게시 콘텐츠 목차 1" },
  { src: "/images/facebook/content-list-2.png", alt: "게시 콘텐츠 목차 2" },
];

export function FacebookSection() {
  return (
    <section id="facebook" className="pt-2">
      <SectionHeader
        icon={Facebook}
        title="페이스북"
        subtitle="인스타그램 콘텐츠 교차 게시 · 추가 도달 확보"
        badge="1.23 ~ 2.19"
        period="28일 성과"
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {[
          { label: "총 조회수", value: facebookData.totalViews, suffix: "", icon: Eye },
          { label: "순 시청자", value: facebookData.viewers, suffix: "명", icon: Users },
          { label: "페이지 방문", value: facebookData.pageVisits, suffix: "회", icon: MousePointerClick },
          { label: "링크 클릭", value: facebookData.linkClicks, suffix: "회", icon: MousePointerClick },
          { label: "콘텐츠 반응", value: facebookData.interactions, suffix: "회", icon: TrendingUp },
          { label: "팔로워 증가", value: facebookData.newFollowers, suffix: "명", icon: UserPlus },
        ].map((kpi, i) => (
          <BlurFade key={kpi.label} inView delay={0.04 * i}>
            <div
              className="bg-white rounded-2xl p-4 border hover:shadow-sm transition-all duration-200 relative overflow-hidden"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div
                className="absolute top-0 right-0 h-16 w-16 rounded-full -translate-y-6 translate-x-6 opacity-5"
                style={{ backgroundColor: FB_BLUE }}
              />
              <div className="p-2 rounded-lg w-fit mb-2" style={{ backgroundColor: `${FB_BLUE}15` }}>
                <kpi.icon className="h-4 w-4" style={{ color: FB_BLUE }} />
              </div>
              <NumberTicker
                value={kpi.value}
                className="text-2xl font-bold"
                suffix={kpi.suffix}
              />
              <p className="text-xs mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
                {kpi.label}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Content Breakdown + Traffic Source */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Content Type Breakdown */}
        <BlurFade inView delay={0.15}>
          <div
            className="bg-white rounded-2xl border p-5 h-full"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                콘텐츠 유형별 성과
              </h4>
              <EvidenceModal
                images={evidenceImages.slice(0, 2)}
                label="상세 보기"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl" style={{ backgroundColor: `${FB_BLUE}08` }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${FB_BLUE}15` }}>
                    <FileText className="h-4 w-4" style={{ color: FB_BLUE }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                      포스트 (광고 포함)
                    </p>
                    <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                      B2B 광고 게시물 + 교차 게시
                    </p>
                  </div>
                  <span className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>
                    {facebookData.postViews.toLocaleString("ko-KR")}
                  </span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${FB_BLUE}15` }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(facebookData.postViews / facebookData.totalViews) * 100}%`,
                      backgroundColor: FB_BLUE,
                    }}
                  />
                </div>
              </div>
              <div className="p-4 rounded-xl" style={{ backgroundColor: `${FB_BLUE}08` }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-1.5 rounded-lg" style={{ backgroundColor: `${FB_BLUE}15` }}>
                    <Film className="h-4 w-4" style={{ color: FB_BLUE }} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                      릴스
                    </p>
                    <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                      인스타그램 릴스 교차 게시 · 시청 {facebookData.reelsWatchTime}
                    </p>
                  </div>
                  <span className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>
                    {facebookData.reelsViews.toLocaleString("ko-KR")}
                  </span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: `${FB_BLUE}15` }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(facebookData.reelsViews / facebookData.totalViews) * 100}%`,
                      backgroundColor: FB_BLUE,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Traffic Source */}
        <BlurFade inView delay={0.2}>
          <div
            className="bg-white rounded-2xl border p-5 h-full"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                유입 구조 분석
              </h4>
              <EvidenceModal
                images={evidenceImages.slice(4)}
                label="상세 보기"
              />
            </div>

            {/* Donut-like visual */}
            <div className="flex items-center gap-6 mb-4">
              <div className="relative h-24 w-24 flex-shrink-0">
                <svg viewBox="0 0 36 36" className="h-24 w-24 -rotate-90">
                  <circle cx="18" cy="18" r="14" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                  <circle
                    cx="18" cy="18" r="14" fill="none"
                    stroke={FB_BLUE} strokeWidth="4"
                    strokeDasharray={`${facebookData.adsViews / facebookData.totalViews * 88} 88`}
                    strokeLinecap="round"
                  />
                  <circle
                    cx="18" cy="18" r="14" fill="none"
                    stroke="#10b981" strokeWidth="4"
                    strokeDasharray={`${facebookData.organicViews / facebookData.totalViews * 88} 88`}
                    strokeDashoffset={`-${facebookData.adsViews / facebookData.totalViews * 88}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-bold" style={{ color: "var(--color-text-secondary)" }}>
                    2.2K
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: FB_BLUE }} />
                    <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                      광고 유입
                    </span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                    {facebookData.adsViews.toLocaleString("ko-KR")} ({Math.round(facebookData.adsViews / facebookData.totalViews * 100)}%)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "#10b981" }} />
                    <span className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                      오가닉 유입
                    </span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                    {facebookData.organicViews.toLocaleString("ko-KR")} ({Math.round(facebookData.organicViews / facebookData.totalViews * 100)}%)
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl text-center" style={{ backgroundColor: "var(--color-surface)" }}>
                <p className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>
                  {facebookData.nonFollowerReach}%
                </p>
                <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>비팔로워 도달</p>
              </div>
              <div className="p-3 rounded-xl text-center" style={{ backgroundColor: "var(--color-surface)" }}>
                <p className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>
                  {facebookData.followerReach}%
                </p>
                <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>팔로워 도달</p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>

      {/* Insight */}
      <BlurFade inView delay={0.25}>
        <div
          className="p-5 rounded-2xl border-l-4"
          style={{ backgroundColor: `${FB_BLUE}08`, borderColor: FB_BLUE }}
        >
          <p className="text-sm font-bold mb-1" style={{ color: FB_BLUE }}>
            운영 전략 & 인사이트
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            인스타그램 콘텐츠를 페이스북에 자동 교차 게시하여 별도 리소스 없이 추가 2,200+ 조회 확보.
            전체 조회의 80%가 B2B 광고 유입이며, 오가닉 확산은 아직 초기 단계.
            릴스 포맷이 페이스북에서도 유효하게 노출되었으나, 인스타 대비 확산력은 제한적.
            향후 페이스북 전용 콘텐츠 및 커뮤니티 활용 전략 필요.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
