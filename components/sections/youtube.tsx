"use client";

import Image from "next/image";
import { Youtube, Clock, Users, TrendingUp, Play, Eye, BarChart2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SectionHeader } from "@/components/ui/section-header";
import { EvidenceModal } from "@/components/ui/evidence-modal";
import { VideoModal } from "@/components/ui/video-modal";
import { youtubeData } from "@/data/marketing-data";

const shortsYouTubeIds: Record<string, string> = {
  "이거 알면 시험칠 때 안 떨림": "urC-w4GYkoE",
  "시험 전날 밸런스게임 🔥": "a-8GPi5mKh8",
  "같이 가고 싶은 친구에게 공유해보세요 ✈️": "flJ_t7yTk5E",
  "마음 다잡고 앉았는데 1번 문제부터 막혔을 때": "ycnFL2FbTX8",
  "공부에 방해되는 앱 TOP 3": "d2XTPQMzVcM",
};

const dashboardImages = [
  { src: "/images/youtube/dashboard.png", alt: "유튜브 채널 대시보드" },
  { src: "/images/youtube/overall-flow.png", alt: "전체 조회수 흐름" },
  { src: "/images/youtube/views-trend.png", alt: "조회수 추이" },
  { src: "/images/youtube/subscriber-trend.png", alt: "구독자 추이" },
];

const shortsImages = [
  { src: "/images/youtube/shorts-performance.png", alt: "Shorts 성과 현황" },
  { src: "/images/youtube/shorts-view-time.png", alt: "Shorts 조회수 + 시청 지속시간" },
];

export function YoutubeSection() {
  const maxViews = Math.max(...youtubeData.topShorts.map((s) => s.views));

  return (
    <section id="youtube" className="pt-2">
      <SectionHeader
        icon={Youtube}
        title="유튜브"
        subtitle="Shorts 기반 신규 시청자 확보 전략"
        badge="1.20 ~ 2.18"
        period="30일 성과"
      />

      {/* Growth Banner */}
      <BlurFade inView delay={0.05}>
        <div
          className="flex items-center justify-between gap-4 px-6 py-4 rounded-2xl mb-6 border-l-4"
          style={{
            backgroundColor: "var(--color-success-light)",
            borderColor: "var(--color-success)",
          }}
        >
          <div className="flex items-center gap-4">
            <TrendingUp className="h-6 w-6 flex-shrink-0" style={{ color: "var(--color-success)" }} />
            <div>
              <p className="font-bold text-sm" style={{ color: "var(--color-success-text)" }}>
                채널 개설 첫 달, Shorts만으로 1.5만 조회 돌파
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-success)" }}>
                신규 시청자 99.8% — 숏폼 콘텐츠 기반 신규 유입 극대화
              </p>
            </div>
          </div>
          <EvidenceModal
            images={dashboardImages}
            label="채널 데이터"
          />
        </div>
      </BlurFade>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {[
          { label: "총 조회수", value: youtubeData.totalViews, suffix: "회", icon: Eye, trend: null },
          { label: "시청 시간", value: youtubeData.watchTimeHours, suffix: "h", icon: Clock, decimals: 1, trend: null },
          { label: "구독자 증가", value: youtubeData.newSubscribers, suffix: "명", icon: Users, trend: null },
          { label: "Shorts 조회", value: youtubeData.shortsViews, suffix: "회", icon: Play, trend: null },
          { label: "유효 조회", value: youtubeData.effectiveViews, suffix: "회", icon: TrendingUp, trend: null },
        ].map((kpi, i) => (
          <BlurFade key={kpi.label} inView delay={0.04 * i}>
            <div
              className="bg-white rounded-2xl p-4 border hover:shadow-sm transition-all duration-200 relative overflow-hidden"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="absolute top-0 right-0 h-16 w-16 rounded-full -translate-y-6 translate-x-6 opacity-5"
                style={{ backgroundColor: "#ff0000" }} />
              <div className="p-2 rounded-lg w-fit mb-2" style={{ backgroundColor: "#fff0f0" }}>
                <kpi.icon className="h-4 w-4" style={{ color: "#ff0000" }} />
              </div>
              <NumberTicker
                value={kpi.value}
                className="text-2xl font-bold"
                decimalPlaces={kpi.decimals || 0}
                suffix={kpi.suffix}
              />
              <p className="text-xs mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
                {kpi.label}
              </p>
              {kpi.trend && (
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold mt-1 inline-block"
                  style={{ backgroundColor: "var(--color-success-light)", color: "var(--color-success-text)" }}
                >
                  {kpi.trend}
                </span>
              )}
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Top Shorts */}
      <BlurFade inView delay={0.2}>
        <div
          className="bg-white rounded-2xl border overflow-hidden mb-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center gap-3">
              <Play className="h-4 w-4" style={{ color: "#ff0000" }} />
              <h3 className="font-bold" style={{ color: "var(--color-text-primary)" }}>
                인기 Shorts TOP 5
              </h3>
            </div>
            <EvidenceModal
              images={shortsImages}
              label="Shorts 성과 보기"
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            {youtubeData.topShorts.map((short, i) => {
              const ytId = shortsYouTubeIds[short.title];
              return (
                <div
                  key={short.rank}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <span
                    className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: i === 0 ? "var(--color-primary)" : "var(--color-surface-2)",
                      color: i === 0 ? "white" : "var(--color-text-secondary)",
                    }}
                  >
                    {short.rank}
                  </span>
                  {ytId && (
                    <VideoModal
                      videoId={ytId}
                      className="flex-shrink-0 w-16 h-10 rounded-lg overflow-hidden relative border hover:border-red-400 transition-all"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`}
                        alt={short.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <Play className="h-3 w-3 text-white fill-white" />
                      </div>
                    </VideoModal>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate" style={{ color: "var(--color-text-primary)" }}>
                      {short.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div
                        className="h-1.5 rounded-full transition-all duration-500"
                        style={{
                          width: `${(short.views / maxViews) * 100}%`,
                          backgroundColor: i === 0 ? "var(--color-primary)" : "#ff000040",
                          minWidth: "8px",
                          maxWidth: "200px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <span className="text-sm font-bold tabular-nums block" style={{ color: "var(--color-text-primary)" }}>
                      {short.views.toLocaleString("ko-KR")}회
                    </span>
                    {ytId && (
                      <VideoModal
                        videoId={ytId}
                        className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5"
                        style={{ color: "var(--color-primary)" }}
                      >
                        <Play className="h-2.5 w-2.5" /> 재생
                      </VideoModal>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BlurFade>

      {/* Screenshots Gallery */}
      <BlurFade inView delay={0.22}>
        <div
          className="bg-white rounded-2xl border overflow-hidden mb-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center gap-3">
              <BarChart2 className="h-4 w-4" style={{ color: "#ff0000" }} />
              <div>
                <h3 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>채널 성과 스크린샷</h3>
                <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>실제 유튜브 스튜디오 데이터</p>
              </div>
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { src: "/images/youtube/dashboard.png", label: "대시보드" },
              { src: "/images/youtube/shorts-performance.png", label: "Shorts 성과" },
              { src: "/images/youtube/views-trend.png", label: "조회수 추이" },
              { src: "/images/youtube/subscriber-trend.png", label: "구독자 추이" },
              { src: "/images/youtube/shorts-view-time.png", label: "시청 지속시간" },
              { src: "/images/youtube/overall-flow.png", label: "전체 흐름" },
              { src: "/images/youtube/longform.png", label: "롱폼 영상" },
              { src: "/images/youtube/setup.png", label: "채널 세팅" },
            ].map((img, i) => (
              <EvidenceModal
                key={i}
                imageSrc={img.src}
                imageAlt={img.label}
                label={img.label}
              />
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Demographics */}
      <BlurFade inView delay={0.25}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Gender */}
          <div
            className="bg-white rounded-2xl p-5 border"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                콘텐츠 도달 성별
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "#fff0f0", color: "#cc0000" }}>
                인스타 도달 기준
              </span>
            </div>
            {youtubeData.audienceDemographics.gender.map((g) => (
              <div key={g.name} className="mb-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span style={{ color: "var(--color-text-secondary)" }}>{g.name}</span>
                  <span className="font-semibold" style={{ color: "var(--color-text-primary)" }}>{g.value}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-surface-2)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${g.value}%`,
                      backgroundColor: g.name === "남성" ? "var(--color-primary)" : "#ec4899",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Age */}
          <div
            className="bg-white rounded-2xl p-5 border"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                콘텐츠 도달 연령
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "#fff0f0", color: "#cc0000" }}>
                인스타 도달 기준
              </span>
            </div>
            {youtubeData.audienceDemographics.ageGroups.map((ag) => (
              <div key={ag.group} className="mb-2">
                <div className="flex justify-between text-xs mb-1.5">
                  <span style={{ color: "var(--color-text-secondary)" }}>{ag.group}</span>
                  <span className="font-semibold" style={{ color: "var(--color-text-primary)" }}>{ag.value}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-surface-2)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${ag.value}%`, backgroundColor: "#ff0000" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* New viewer rate */}
          <div
            className="bg-white rounded-2xl p-5 border flex flex-col justify-center items-center text-center"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div
              className="h-24 w-24 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--color-success-light)" }}
            >
              <span style={{ color: "var(--color-success)" }}>
                <NumberTicker
                  value={youtubeData.audienceDemographics.newViewerRate}
                  className="text-2xl font-black"
                  suffix="%"
                  decimalPlaces={1}
                />
              </span>
            </div>
            <p className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
              신규 시청자 비율
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
              채널 성장 초기 단계 — 잠재력 최상
            </p>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
