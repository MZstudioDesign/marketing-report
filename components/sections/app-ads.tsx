"use client";

import { useState } from "react";
import { Smartphone, TrendingUp, ChevronLeft, ChevronRight, Download, Target, Zap, Search } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Image } from "@/components/ui/base-image";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SectionHeader } from "@/components/ui/section-header";
import { EvidenceModal } from "@/components/ui/evidence-modal";
import {
  googleAppAdsData,
  googleSearchAdsData,
  appleSearchAdsData,
  playStoreInstallTimeline,
  appStoreData,
} from "@/data/marketing-data";

const CARD_NEWS_COUNT = 20;

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

export function AppAdsSection() {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const visibleCards = 4;

  const prev = () => setCarouselIdx((p) => Math.max(0, p - 1));
  const next = () => setCarouselIdx((p) => Math.min(CARD_NEWS_COUNT - visibleCards, p + 1));

  const cardNums = Array.from({ length: CARD_NEWS_COUNT }, (_, i) => i + 1);

  return (
    <section id="app-ads" className="pt-2">
      <SectionHeader
        icon={Smartphone}
        title="앱 광고 (매튜)"
        subtitle="Google · Apple 양대 플랫폼 광고 집행"
        badge="2.10 ~ 2.18"
        period="앱 광고 집행 성과"
      />

      {/* ═══════════════════════════════════════════════════════════════════════
          GOOGLE (Android) SECTION
          ═══════════════════════════════════════════════════════════════════════ */}
      <BlurFade inView delay={0.05}>
        <div
          className="rounded-2xl border overflow-hidden mb-6"
          style={{ borderColor: "var(--color-border)" }}
        >
          {/* Google Header */}
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{ background: "linear-gradient(135deg, #e8f0fe 0%, #f0f4ff 100%)" }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white shadow-sm">
                <GoogleIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
                  Google Ads (Android)
                </h3>
                <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                  Google App Ads + Search Ads · Play Store 성과
                </p>
              </div>
            </div>
            <EvidenceModal
              images={[
                { src: "/images/app-ads/google-app-1.png", alt: "Google App Ads 성과 1" },
                { src: "/images/app-ads/google-app-2.png", alt: "Google App Ads 성과 2" },
                { src: "/images/app-ads/google-app-3.png", alt: "Google App Ads 성과 3" },
                { src: "/images/app-ads/google-app-4.png", alt: "Google App Ads 성과 4" },
                { src: "/images/app-ads/google-app-5.png", alt: "Google App Ads 성과 5" },
                { src: "/images/google-console-dashboard.png", alt: "구글 콘솔 대시보드" },
                { src: "/images/google-console-chart.png", alt: "구글 콘솔 다운로드 추이" },
              ]}
              label="Google 전체 데이터"
            />
          </div>

          <div className="bg-white p-6">
            {/* Play Store Install Chart */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4" style={{ color: "#4285F4" }} />
                  <h4 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
                    Play Store 누적 설치 추이
                  </h4>
                </div>
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "var(--color-success-light)", color: "var(--color-success-text)" }}
                >
                  <TrendingUp className="h-3 w-3" />
                  최근 7일 +500%
                </div>
              </div>
              <div style={{ height: 180 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={playStoreInstallTimeline}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="installGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4285F4" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#4285F4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "1px solid #e2e8f0",
                        backgroundColor: "white",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                        fontSize: "12px",
                      }}
                      formatter={(value: number | undefined) => [`${(value ?? 0).toLocaleString("ko-KR")}건`, "누적 설치"]}
                      labelFormatter={(label) => `${label}`}
                    />
                    <Area
                      type="monotone"
                      dataKey="cumulative"
                      stroke="#4285F4"
                      strokeWidth={2.5}
                      fill="url(#installGradient)"
                      dot={{ r: 5, fill: "#4285F4", strokeWidth: 2, stroke: "white" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-between items-center mt-2 pt-2 border-t" style={{ borderColor: "var(--color-border-light)" }}>
                {playStoreInstallTimeline.map((pt) => (
                  <div key={pt.period} className="text-center">
                    <p className="text-sm font-bold tabular-nums" style={{ color: "var(--color-text-primary)" }}>
                      {pt.cumulative.toLocaleString()}건
                    </p>
                    <p className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>{pt.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Google App Ads + Search Ads side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* App Ads */}
              <div className="p-4 rounded-xl border" style={{ borderColor: "var(--color-border)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="h-4 w-4" style={{ color: "#4285F4" }} />
                  <p className="text-xs font-bold" style={{ color: "var(--color-text-primary)" }}>App Ads (앱 설치)</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "클릭수", value: googleAppAdsData.clicks, suffix: "회" },
                    { label: "설치 전환", value: googleAppAdsData.conversions, suffix: "건" },
                    { label: "CPA", value: googleAppAdsData.cpa, suffix: "원", prefix: "₩" },
                    { label: "최적화 점수", value: googleAppAdsData.optimizationScore, suffix: "%", decimals: 1 },
                  ].map((stat) => (
                    <div key={stat.label} className="p-2.5 rounded-lg" style={{ backgroundColor: "var(--color-surface)" }}>
                      <NumberTicker
                        value={stat.value}
                        className="text-lg font-bold"
                        suffix={stat.suffix}
                        prefix={stat.prefix || ""}
                        decimalPlaces={stat.decimals || 0}
                      />
                      <p className="text-[10px] mt-0.5" style={{ color: "var(--color-text-secondary)" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1.5 rounded-lg"
                  style={{ backgroundColor: "var(--color-success-light)", color: "var(--color-success-text)" }}
                >
                  <Zap className="h-3 w-3" />
                  최근 7일 전환 +500% 폭발 성장
                </div>
              </div>

              {/* Search Ads */}
              <div className="p-4 rounded-xl border" style={{ borderColor: "var(--color-border)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Search className="h-4 w-4" style={{ color: "#4285F4" }} />
                  <p className="text-xs font-bold" style={{ color: "var(--color-text-primary)" }}>Search Ads (검색)</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "노출수", value: googleSearchAdsData.impressions, suffix: "회" },
                    { label: "클릭수", value: googleSearchAdsData.clicks, suffix: "회" },
                    { label: "평균 CPC", value: googleSearchAdsData.avgCPC, suffix: "원", prefix: "₩" },
                    { label: "최적화 점수", value: googleSearchAdsData.optimizationScore, suffix: "%", decimals: 1 },
                  ].map((stat) => (
                    <div key={stat.label} className="p-2.5 rounded-lg" style={{ backgroundColor: "var(--color-surface)" }}>
                      <NumberTicker
                        value={stat.value}
                        className="text-lg font-bold"
                        suffix={stat.suffix}
                        prefix={stat.prefix || ""}
                        decimalPlaces={stat.decimals || 0}
                      />
                      <p className="text-[10px] mt-0.5" style={{ color: "var(--color-text-secondary)" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#e8f0fe", color: "#4285F4" }}
                  >
                    TOP 키워드: &quot;{googleSearchAdsData.topKeyword}&quot;
                  </span>
                </div>
              </div>
            </div>

            {/* Google Ad Example Preview */}
            <div className="p-4 rounded-xl border" style={{ borderColor: "var(--color-border)" }}>
              <p className="text-[10px] font-semibold mb-2 uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
                실제 Google Play Store 광고 노출 화면
              </p>
              <div
                className="rounded-xl overflow-hidden border relative group cursor-pointer"
                style={{ borderColor: "var(--color-border)" }}
              >
                <Image
                  src="/images/app-ads/google-app-example.png"
                  alt="매튜 구글 앱광고 실제 노출 예시"
                  width={600}
                  height={300}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                  <p className="text-xs text-white font-semibold">Google Play Store 실제 광고 노출 예시</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* ═══════════════════════════════════════════════════════════════════════
          APPLE (iOS) SECTION
          ═══════════════════════════════════════════════════════════════════════ */}
      <BlurFade inView delay={0.15}>
        <div
          className="rounded-2xl border overflow-hidden mb-6"
          style={{ borderColor: "var(--color-border)" }}
        >
          {/* Apple Header */}
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm">
                <AppleIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">
                  Apple (iOS)
                </h3>
                <p className="text-[10px] text-white/60">
                  Apple Search Ads · App Store Connect 성과
                </p>
              </div>
            </div>
            <EvidenceModal
              images={[
                { src: "/images/app-ads/apple-group-1.png", alt: "Apple 광고 그룹 1" },
                { src: "/images/app-ads/apple-group-2.png", alt: "Apple 광고 그룹 2" },
                { src: "/images/app-ads/apple-keywords-1.png", alt: "Apple 서치 광고 키워드" },
                { src: "/images/appstore-source.png", alt: "App Store 유입 경로" },
                { src: "/images/appstore-analysis.png", alt: "앱스토어커넥트 앱 분석" },
                { src: "/images/appstore-metrics.png", alt: "앱스토어커넥트 지표" },
              ]}
              label="Apple 전체 데이터"
            />
          </div>

          <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Search Ads */}
              <div className="p-4 rounded-xl border" style={{ borderColor: "var(--color-border)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Search className="h-4 w-4" style={{ color: "#1a1a2e" }} />
                  <p className="text-xs font-bold" style={{ color: "var(--color-text-primary)" }}>Search Ads 성과</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "노출수", value: appleSearchAdsData.impressions, suffix: "회" },
                    { label: "탭 수", value: appleSearchAdsData.taps, suffix: "회" },
                    { label: "설치", value: appleSearchAdsData.installs, suffix: "건" },
                    { label: "전환율 (CR)", value: appleSearchAdsData.cr, suffix: "%", decimals: 2 },
                  ].map((stat) => (
                    <div key={stat.label} className="p-2.5 rounded-lg" style={{ backgroundColor: "var(--color-surface)" }}>
                      <NumberTicker
                        value={stat.value}
                        className="text-lg font-bold"
                        suffix={stat.suffix}
                        decimalPlaces={stat.decimals || 0}
                      />
                      <p className="text-[10px] mt-0.5" style={{ color: "var(--color-text-secondary)" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {appleSearchAdsData.topKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: "#1a1a2e10", color: "#1a1a2e" }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* App Store Connect */}
              <div className="p-4 rounded-xl border" style={{ borderColor: "var(--color-border)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Target className="h-4 w-4" style={{ color: "#1a1a2e" }} />
                  <p className="text-xs font-bold" style={{ color: "var(--color-text-primary)" }}>App Store Connect (1/20 ~ 2/18)</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "노출수", value: appStoreData.impressions, suffix: "", format: "11,600" },
                    { label: "페이지 조회", value: appStoreData.pageViews, suffix: "회" },
                    { label: "전환율", value: appStoreData.conversionRate, suffix: "%", decimals: 1 },
                    { label: "다운로드", value: appStoreData.downloads, suffix: "회" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-2.5 rounded-lg" style={{ backgroundColor: "var(--color-surface)" }}>
                      {stat.format ? (
                        <p className="text-lg font-bold" style={{ color: "var(--color-text-primary)" }}>{stat.format}</p>
                      ) : (
                        <NumberTicker
                          value={stat.value}
                          className="text-lg font-bold"
                          suffix={stat.suffix}
                          decimalPlaces={stat.decimals || 0}
                        />
                      )}
                      <p className="text-[10px] mt-0.5" style={{ color: "var(--color-text-secondary)" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-2 text-[10px] p-2 rounded-lg border-l-2"
                  style={{ backgroundColor: "#1a1a2e08", borderColor: "#1a1a2e", color: "var(--color-text-secondary)" }}
                >
                  검색 기반 유입 44% · 추천 트래픽 46% — 키워드 + 리뷰 전략 필요
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Card News Carousel */}
      <BlurFade inView delay={0.25}>
        <div
          className="bg-white rounded-2xl border overflow-hidden"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <h3 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
                광고 소재 — 카드뉴스 디자인
              </h3>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                직접 디자인한 {CARD_NEWS_COUNT}장 — Google Ads 캠페인 소재
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                disabled={carouselIdx === 0}
                className="p-1.5 rounded-lg border transition-colors disabled:opacity-30"
                style={{ borderColor: "var(--color-border)" }}
              >
                <ChevronLeft className="h-4 w-4" style={{ color: "var(--color-text-secondary)" }} />
              </button>
              <span className="text-xs tabular-nums" style={{ color: "var(--color-text-muted)" }}>
                {carouselIdx + 1}–{Math.min(carouselIdx + visibleCards, CARD_NEWS_COUNT)} / {CARD_NEWS_COUNT}
              </span>
              <button
                onClick={next}
                disabled={carouselIdx >= CARD_NEWS_COUNT - visibleCards}
                className="p-1.5 rounded-lg border transition-colors disabled:opacity-30"
                style={{ borderColor: "var(--color-border)" }}
              >
                <ChevronRight className="h-4 w-4" style={{ color: "var(--color-text-secondary)" }} />
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-4 gap-3">
              {cardNums.slice(carouselIdx, carouselIdx + visibleCards).map((num) => (
                <div
                  key={num}
                  className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer border hover:border-blue-300 transition-all duration-200"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <Image
                    src={`/images/card-news/${String(num).padStart(2, "0")}.png`}
                    alt={`카드뉴스 ${num}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold bg-black/50 px-2 py-1 rounded-full transition-opacity">
                      {num}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
