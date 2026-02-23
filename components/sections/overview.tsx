"use client";

import { Image } from "@/components/ui/base-image";
import { LayoutDashboard, Eye, Download, Building2, Share2, TrendingUp, Zap, Camera, Play, Smartphone, GraduationCap, Target, RefreshCw, BarChart2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { overviewKPIs, reportMeta } from "@/data/marketing-data";

const iconMap = { Eye, Download, Building2, Share2 };

const channelSummary: { channel: string; metric: string; subMetric: string; color: string; icon: LucideIcon; highlight: string }[] = [
  {
    channel: "인스타그램",
    metric: "조회수 134K",
    subMetric: "공유 4,196회",
    color: "#e1306c",
    icon: Camera,
    highlight: "릴스 126K 바이럴",
  },
  {
    channel: "페이스북",
    metric: "조회수 2.2K",
    subMetric: "교차 게시 자동 운영",
    color: "#1877f2",
    icon: Share2,
    highlight: "추가 도달 확보",
  },
  {
    channel: "유튜브",
    metric: "조회수 1.5만",
    subMetric: "시청시간 22.2h",
    color: "#ff0000",
    icon: Play,
    highlight: "Shorts 전략 적중",
  },
  {
    channel: "앱 광고 (매튜)",
    metric: "전환 61건",
    subMetric: "Google CPA ₩1,022",
    color: "#4f90ff",
    icon: Smartphone,
    highlight: "최근 7일 +500%",
  },
  {
    channel: "B2B (AI튜터)",
    metric: "리드 4곳",
    subMetric: "₩93,008 집행",
    color: "#10b981",
    icon: GraduationCap,
    highlight: "학원 리드 직접 확보",
  },
];

export function OverviewSection() {
  return (
    <section id="overview" className="min-h-screen">
      {/* Hero Header */}
      <div
        className="relative overflow-hidden rounded-3xl mb-8 p-8 md:p-12"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 -translate-y-1/2 translate-x-1/4"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-5 translate-y-1/3 -translate-x-1/4"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #4f90ff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />

        <BlurFade inView delay={0}>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 md:h-20 md:w-20 relative rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image src="/logo.png" alt="Logo" fill className="object-contain p-2" unoptimized />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full border border-white/20"
                  style={{ backgroundColor: "rgba(79,144,255,0.2)", color: "#93c5fd" }}
                >
                  2026 성과보고
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                마케팅 성과 보고서
              </h1>
              <p className="text-blue-200 text-lg font-medium">
                {reportMeta.period}
              </p>
            </div>
            <div className="flex-shrink-0 text-right">
              <div
                className="inline-flex flex-col items-end gap-1 px-5 py-3 rounded-2xl border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white font-semibold text-sm">{reportMeta.author}</span>
                </div>
                <span className="text-blue-300 text-xs">마케팅 담당</span>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Summary numbers inside hero */}
        <BlurFade inView delay={0.15}>
          <div className="relative z-10 mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "총 조회수", value: "151K+", sub: "인스타+유튜브+페이스북" },
              { label: "앱 광고 전환", value: "61건", sub: "Google 49 + Apple 12" },
              { label: "B2B 리드", value: "4곳", sub: "전화번호 직접 확보" },
              { label: "콘텐츠 공유", value: "4,196회", sub: "인스타그램 릴스" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-2xl border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <p className="text-white font-black text-2xl">{item.value}</p>
                <p className="text-blue-200 text-sm font-semibold mt-0.5">{item.label}</p>
                <p className="text-blue-300/70 text-xs mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>

      {/* KPI Cards */}
      <BlurFade inView delay={0.2}>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl" style={{ backgroundColor: "var(--color-primary-light)" }}>
            <LayoutDashboard className="h-5 w-5" style={{ color: "var(--color-primary)" }} />
          </div>
          <div>
            <h2 className="text-xl font-bold" style={{ color: "var(--color-text-primary)" }}>핵심 성과 지표</h2>
            <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>한 달간 마케팅 활동 전체 요약</p>
          </div>
        </div>
      </BlurFade>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {overviewKPIs.map((kpi, i) => {
          const Icon = iconMap[kpi.icon as keyof typeof iconMap];
          return (
            <BlurFade key={kpi.label} inView delay={0.05 * i}>
              <div
                className="bg-white rounded-2xl p-5 border hover:shadow-md transition-all duration-200 group"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="p-2 rounded-xl"
                    style={{ backgroundColor: kpi.color === "green" ? "var(--color-success-light)" : "var(--color-primary-light)" }}
                  >
                    {Icon && (
                      <Icon
                        className="h-5 w-5"
                        style={{ color: kpi.color === "green" ? "var(--color-success)" : "var(--color-primary)" }}
                      />
                    )}
                  </div>
                </div>
                <NumberTicker
                  value={kpi.value}
                  className="text-3xl font-black"
                  suffix={kpi.suffix}
                />
                <p className="text-sm font-semibold mt-1" style={{ color: "var(--color-text-primary)" }}>
                  {kpi.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                  {kpi.description}
                </p>
              </div>
            </BlurFade>
          );
        })}
      </div>

      {/* Channel Summary Grid */}
      <BlurFade inView delay={0.3}>
        <div className="flex items-center gap-2 mb-5">
          <Zap className="h-5 w-5" style={{ color: "var(--color-primary)" }} />
          <h3 className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>채널별 성과 요약</h3>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {channelSummary.map((ch, i) => (
          <BlurFade key={ch.channel} inView delay={0.05 * i}>
            <div
              className="rounded-2xl p-5 border hover:shadow-lg transition-all duration-300 relative overflow-hidden group cursor-default"
              style={{ borderColor: "var(--color-border)", backgroundColor: "white" }}
            >
              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${ch.color}08 0%, ${ch.color}03 100%)`,
                }}
              />
              {/* Left accent bar */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
                style={{ backgroundColor: ch.color }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${ch.color}12` }}
                  >
                    <ch.icon className="h-5 w-5" style={{ color: ch.color }} />
                  </div>
                  <span className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>
                    {ch.channel}
                  </span>
                </div>
                <p className="text-2xl font-black mb-0.5" style={{ color: "var(--color-text-primary)" }}>
                  {ch.metric}
                </p>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  {ch.subMetric}
                </p>
                <div
                  className="mt-4 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full w-fit"
                  style={{ backgroundColor: `${ch.color}15`, color: ch.color }}
                >
                  <TrendingUp className="h-3 w-3" />
                  {ch.highlight}
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
      {/* Strategic Approach - Feature Showcase */}
      <BlurFade inView delay={0.35}>
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="p-2 rounded-xl" style={{ backgroundColor: "var(--color-primary-light)" }}>
              <LayoutDashboard className="h-4 w-4" style={{ color: "var(--color-primary)" }} />
            </div>
            <div>
              <h3 className="text-base font-bold" style={{ color: "var(--color-text-primary)" }}>전략적 마케팅 접근</h3>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>4주간 단독 실행한 마케팅 전략 하이라이트</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {([
              {
                title: "2단계 퍼널 설계",
                desc: "공감형 콘텐츠로 자연 바이럴 유도 → 프로필/하이라이트를 통한 앱 전환. 직접 광고보다 공유 행동 극대화 전략.",
                icon: Target,
                color: "#4f90ff",
              },
              {
                title: "교차 게시 효율화",
                desc: "인스타그램 콘텐츠를 유튜브·페이스북에 동시 배포. 1개 소재로 3개 채널 커버, 리소스 효율 300% 달성.",
                icon: RefreshCw,
                color: "#10b981",
              },
              {
                title: "데이터 기반 최적화",
                desc: "일별 광고 모니터링으로 CPA ₩1,022 달성. Google App Ads 최적화 점수 90.4%까지 튜닝.",
                icon: BarChart2,
                color: "#f59e0b",
              },
              {
                title: "자동화 시스템 구축",
                desc: "ManyChat DM 자동 플로우로 B2B 리드 자동 수집. 학원 전화번호 4곳 직접 확보 완료.",
                icon: Zap,
                color: "#8b5cf6",
              },
            ] as { title: string; desc: string; icon: LucideIcon; color: string }[]).map((item, i) => (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-5 border hover:shadow-lg transition-all duration-300 overflow-hidden"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${item.color}08 0%, transparent 70%)` }}
                />
                <div
                  className="absolute left-0 inset-y-0 w-1 rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
                  style={{ backgroundColor: item.color }}
                />
                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}12` }}
                  >
                    <item.icon className="h-5 w-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4
                      className="font-bold text-sm mb-1 group-hover:translate-x-0.5 transition-transform duration-200"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
