"use client";

import {
  Instagram,
  Eye,
  Heart,
  Share2,
  Users,
  Bookmark,
  TrendingUp,
  Star,
  ZoomIn,
  Play,
  Flame,
} from "lucide-react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SectionHeader } from "@/components/ui/section-header";
import { EvidenceModal } from "@/components/ui/evidence-modal";
import { VideoModal } from "@/components/ui/video-modal";
import { instagramData } from "@/data/marketing-data";

const metrics = [
  { label: "총 조회수", value: instagramData.totalViews, suffix: "", icon: Eye, color: "blue" as const },
  { label: "도달 계정", value: instagramData.reach, suffix: "", icon: Users, color: "blue" as const },
  { label: "총 반응", value: instagramData.reactions, suffix: "", icon: TrendingUp, color: "blue" as const },
  { label: "좋아요", value: instagramData.likes, suffix: "", icon: Heart, color: "blue" as const },
  { label: "공유", value: instagramData.shares, suffix: "", icon: Share2, color: "blue" as const },
  { label: "저장", value: instagramData.saves, suffix: "", icon: Bookmark, color: "blue" as const },
  { label: "댓글", value: instagramData.comments, suffix: "", icon: Star, color: "blue" as const },
  { label: "팔로워 증가", value: instagramData.followers, suffix: "명", icon: Users, color: "green" as const },
];

const reelsContent = [
  { id: "d2XTPQMzVcM", title: "공부에 방해되는 앱 TOP 3", views: "126K", instaViews: 126442, isViral: true, date: "2.13" },
  { id: "urC-w4GYkoE", title: "이거 알면 시험칠 때 안 떨림", views: "1.4K", instaViews: 1380, date: "2.15" },
  { id: "flJ_t7yTk5E", title: "같이 가고 싶은 친구에게 공유해보세요 ✈️", views: "1.8K", instaViews: 1755, date: "2.12" },
  { id: "ycnFL2FbTX8", title: "마음 다잡고 앉았는데 1번 문제부터 막혔을 때", views: "329", instaViews: 329, date: "2.17" },
  { id: "a-8GPi5mKh8", title: "시험 전날 밸런스게임 🔥", views: "200+", instaViews: 200, date: "2.14" },
  { id: "9Hz7j_Kc8s8", title: "15년 공부했는데 이런 건 처음 봤다.", views: "100+", instaViews: 100, date: "2.18" },
];

const instaReelYouTubeIds: Record<string, string> = {
  "공부에 방해되는 앱 TOP 3": "d2XTPQMzVcM",
  "같이 가고 싶은 친구에게 공유해보세요 ✈️": "flJ_t7yTk5E",
  "이거 알면 시험칠 때 안 떨림": "urC-w4GYkoE",
  "마음 다잡고 앉았는데 1번 문제부터 막혔을 때": "ycnFL2FbTX8",
};

const statsImages = [
  { src: "/images/instagram/total-views.jpg", alt: "총 조회수 스크린샷" },
  { src: "/images/instagram/reactions-total.jpg", alt: "반응 총량" },
  { src: "/images/instagram/reactions-detail.jpg", alt: "반응 세부 수치" },
  { src: "/images/instagram/content-stats.jpg", alt: "콘텐츠 성과 순위" },
  { src: "/images/instagram/viral-content.jpg", alt: "바이럴 콘텐츠 성과" },
  { src: "/images/instagram/follower-growth.jpg", alt: "팔로워 증가 추이" },
  { src: "/images/instagram/traffic-source.jpg", alt: "유입 경로 분석" },
  { src: "/images/instagram/gender-time.jpg", alt: "성별 비율 및 활동 시간" },
  { src: "/images/instagram/age-target.jpg", alt: "타겟 연령대" },
  { src: "/images/instagram/profile-visits.jpg", alt: "프로필 방문수" },
];

export function InstagramSection() {
  return (
    <section id="instagram" className="pt-2">
      <SectionHeader
        icon={Instagram}
        title="인스타그램"
        subtitle="릴스 콘텐츠 중심 채널 성장 전략"
        badge="1.26 ~ 2.18"
        period="30일 성과"
      />

      {/* Viral Content Hero */}
      <BlurFade inView delay={0.05}>
        <div
          className="relative overflow-hidden rounded-3xl mb-8 p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }} />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Star className="h-4 w-4 text-yellow-300" />
                <span className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                  최고 성과 콘텐츠
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                &ldquo;{instagramData.viralContent.title}&rdquo;
              </h3>
              <p className="text-white/70 text-sm">
                {instagramData.viralContent.date} · 릴스
              </p>
              <VideoModal
                videoId="d2XTPQMzVcM"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors text-white/90"
              >
                <Play className="h-4 w-4" /> 콘텐츠 직접 보기
              </VideoModal>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4 flex-shrink-0">
              {[
                { label: "조회수", value: 126442, suffix: "" },
                { label: "공유", value: 4116, suffix: "" },
                { label: "좋아요", value: 3091, suffix: "" },
                { label: "총 반응", value: 7392, suffix: "" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-3 rounded-2xl text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <NumberTicker
                    value={stat.value}
                    className="text-2xl font-black text-white"
                    suffix={stat.suffix}
                  />
                  <p className="text-white/70 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative z-10 mt-6 p-4 rounded-2xl text-sm text-white/80 border border-white/20"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          >
            <strong className="text-white">전략적 인사이트:</strong> 앱 직접 광고보다 공감형 학생 콘텐츠가
            자연 바이럴 효과를 만들어냄. 공부 방해 앱 TOP 3 포맷이 공유 폭발(4,116회) → 브랜드 인지도 확산.
          </div>
        </div>
      </BlurFade>

      {/* Metrics Grid */}
      <BlurFade inView delay={0.1}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold" style={{ color: "var(--color-text-primary)" }}>
            채널 전체 지표
          </h3>
          <EvidenceModal
            images={statsImages}
            label="성과 데이터 보기"
          />
        </div>
      </BlurFade>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {metrics.map((m, i) => (
          <BlurFade key={m.label} inView delay={0.04 * i}>
            <div
              className="bg-white rounded-2xl p-4 border hover:shadow-sm transition-all duration-200"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div
                className="p-2 rounded-lg w-fit mb-2"
                style={{
                  backgroundColor: m.color === "green" ? "var(--color-success-light)" : "var(--color-primary-light)",
                }}
              >
                <m.icon
                  className="h-4 w-4"
                  style={{ color: m.color === "green" ? "var(--color-success)" : "var(--color-primary)" }}
                />
              </div>
              <NumberTicker
                value={m.value}
                className="text-2xl font-bold"
                suffix={m.suffix}
              />
              <p className="text-xs mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
                {m.label}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Reels Content Gallery */}
      <BlurFade inView delay={0.15}>
        <div
          className="bg-white rounded-2xl border overflow-hidden mb-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <h3 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
                릴스 콘텐츠 포트폴리오
              </h3>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                직접 기획·제작한 릴스 {reelsContent.length}편 — 유튜브 동시 게시
              </p>
            </div>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)" }}
            >
              {reelsContent.length}편 릴스
            </span>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {reelsContent.map((reel) => (
                <VideoModal
                  key={reel.id}
                  videoId={reel.id}
                  className="group rounded-xl overflow-hidden border hover:shadow-md transition-all duration-200"
                  style={{ borderColor: reel.isViral ? "#fd1d1d" : "var(--color-border)" }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${reel.id}/mqdefault.jpg`}
                      alt={reel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                      <div
                        className="flex items-center justify-center rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
                        style={{ width: 40, height: 40, backgroundColor: "rgba(0,0,0,0.6)" }}
                      >
                        <Play className="h-4 w-4 text-white fill-white" />
                      </div>
                    </div>
                    {reel.isViral && (
                      <div className="absolute top-2 left-2">
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-red-500 text-white shadow-sm">
                          126K VIRAL
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                      <div className="flex items-center gap-1.5">
                        <Eye className="h-3 w-3 text-white/80" />
                        <span className="text-[10px] text-white font-bold">{reel.views}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4
                      className="text-xs font-bold leading-snug line-clamp-2 mb-1"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {reel.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px]" style={{ color: "var(--color-text-muted)" }}>
                        {reel.date}
                      </span>
                      <span className="flex items-center gap-0.5 text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--color-primary)" }}>
                        <Play className="h-2.5 w-2.5" /> 재생
                      </span>
                    </div>
                  </div>
                </VideoModal>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Profile Setup & Branding */}
      <BlurFade inView delay={0.18}>
        <div
          className="bg-white rounded-2xl border overflow-hidden mb-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <h3 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
                채널 세팅 & 브랜딩
              </h3>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                프로필 고정 피드 7장 + 하이라이트 커버 7세트 디자인
              </p>
            </div>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: "#e1306c15", color: "#e1306c" }}
            >
              채널 세팅
            </span>
          </div>
          <div className="p-4">
            {/* Highlight Covers */}
            <p className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-text-muted)" }}>
              하이라이트 커버
            </p>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div
                  key={num}
                  className="aspect-square rounded-full overflow-hidden relative group cursor-pointer border-2 hover:border-pink-400 transition-all duration-200"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <Image
                    src={`/images/instagram-highlights/highlight-${num}.png`}
                    alt={`하이라이트 ${num}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* Feed Setup Cards */}
            <p className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-text-muted)" }}>
              고정 피드 카드뉴스
            </p>
            <div className="grid grid-cols-7 gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div
                  key={num}
                  className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer border hover:border-pink-300 transition-all duration-200"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <Image
                    src={`/images/instagram-feed/feed-0${num}.png`}
                    alt={`피드 세팅 ${num}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            <div
              className="mt-4 p-3 rounded-xl text-xs leading-relaxed"
              style={{ backgroundColor: "var(--color-surface)", color: "var(--color-text-secondary)" }}
            >
              <strong style={{ color: "var(--color-text-primary)" }}>브랜딩 전략:</strong> 하이라이트와 고정 피드를 통해 앱 소개, 기능 안내, 사용법 등을 체계적으로 정리.
              프로필 방문 → 하이라이트/피드 → 앱 다운로드 퍼널 설계로 전환율 극대화.
            </div>
          </div>
        </div>
      </BlurFade>

      {/* Viral Content Breakdown */}
      <BlurFade inView delay={0.19}>
        <div
          className="bg-white rounded-2xl border overflow-hidden mb-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Flame className="h-5 w-5" style={{ color: "#fd1d1d" }} />
                <h3 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
                  바이럴 콘텐츠 원본 (126K 릴스)
                </h3>
              </div>
            </div>
            <span
              className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
              style={{ backgroundColor: "#fd1d1d" }}
            >
              126,442 조회
            </span>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {Array.from({ length: 11 }, (_, i) => {
                const files = [
                  "1aaa@4x.png",
                  "2aa@4x.png",
                  "3aa_1@4x.png",
                  "4aaa_1@4x.png",
                  "5aa_2@4x.png",
                  "6aa_3@4x.png",
                  "7aa_4@4x.png",
                  "8aaa_2@4x.png",
                  "9Artboard 1 사본 13@4x.png",
                  "10Artboard 1 사본 11@4x.png",
                  "11Artboard 1 사본 12@4x.png",
                ];
                return (
                  <div
                    key={i}
                    className="aspect-[9/16] rounded-xl overflow-hidden relative group border hover:border-red-400 transition-all duration-200"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <Image
                      src={`/images/instagram-feed/viral/${files[i]}`}
                      alt={`바이럴 콘텐츠 ${i + 1}페이지`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-1">
                      <p className="text-[8px] text-white font-bold text-center">{i + 1}P</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-[10px] mt-3 text-center" style={{ color: "var(--color-text-muted)" }}>
              직접 기획·디자인한 11페이지 릴스 — &ldquo;공부에 방해되는 앱 TOP 3&rdquo;
            </p>
          </div>
        </div>
      </BlurFade>

      {/* Content Performance Table */}
      <BlurFade inView delay={0.2}>
        <div
          className="bg-white rounded-2xl border overflow-hidden mb-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
            <h3 className="font-bold" style={{ color: "var(--color-text-primary)" }}>
              콘텐츠 성과 순위
            </h3>
            <EvidenceModal
              imageSrc="/images/instagram/content-stats.jpg"
              imageAlt="인스타그램 콘텐츠 성과 스크린샷"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "var(--color-surface)" }}>
                  <th className="px-6 py-3 text-left text-xs font-semibold" style={{ color: "var(--color-text-secondary)" }}>순위</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold" style={{ color: "var(--color-text-secondary)" }}>콘텐츠</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold" style={{ color: "var(--color-text-secondary)" }}>조회수</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold" style={{ color: "var(--color-text-secondary)" }}>좋아요</th>
                  <th className="px-6 py-3 text-center text-xs font-semibold" style={{ color: "var(--color-text-secondary)" }}>날짜</th>
                </tr>
              </thead>
              <tbody>
                {instagramData.topContent.map((item) => {
                  const ytId = instaReelYouTubeIds[item.title];
                  return (
                    <tr
                      key={item.rank}
                      className="border-t hover:bg-gray-50 transition-colors"
                      style={{ borderColor: "var(--color-border-light)" }}
                    >
                      <td className="px-6 py-4">
                        {item.rank === 1 ? (
                          <span
                            className="inline-flex items-center justify-center h-6 w-6 rounded-full text-xs font-bold text-white"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          >
                            1
                          </span>
                        ) : (
                          <span className="text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
                            {item.rank}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {ytId ? (
                            <VideoModal
                              videoId={ytId}
                              className="h-8 w-12 rounded-lg overflow-hidden relative flex-shrink-0 hover:opacity-80 transition-opacity border group"
                              style={{ borderColor: "var(--color-border)" }}
                            >
                              <Image
                                src={`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`}
                                alt={item.title}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                                <Play className="h-2.5 w-2.5 text-white fill-white" />
                              </div>
                            </VideoModal>
                          ) : (
                            <div
                              className="h-8 w-12 rounded-lg overflow-hidden relative flex-shrink-0 border"
                              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
                            />
                          )}
                          <span className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                            {item.title}
                            {item.rank === 1 && (
                              <span
                                className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full font-semibold"
                                style={{ backgroundColor: "#fef3c7", color: "#92400e" }}
                              >
                                126K 바이럴
                              </span>
                            )}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-sm font-bold tabular-nums" style={{ color: "var(--color-text-primary)" }}>
                          {item.views.toLocaleString("ko-KR")}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-sm font-medium tabular-nums" style={{ color: "var(--color-text-secondary)" }}>
                          {item.likes.toLocaleString("ko-KR")}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "var(--color-surface)", color: "var(--color-text-muted)" }}>
                          2/{item.date}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </BlurFade>

      {/* Demographics */}
      <BlurFade inView delay={0.25}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Reach gender */}
          <div className="bg-white rounded-2xl p-5 border" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>도달 타겟 성별</h4>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--color-surface)", color: "var(--color-text-muted)" }}>
                  도달 계정 기준
                </span>
                <EvidenceModal imageSrc="/images/instagram/gender-time.jpg" imageAlt="성별 비율 스크린샷" label="보기" />
              </div>
            </div>
            {instagramData.reachDemographics.gender.map((g) => (
              <div key={g.name} className="mb-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span style={{ color: "var(--color-text-secondary)" }}>{g.name}</span>
                  <span className="font-semibold tabular-nums" style={{ color: "var(--color-text-primary)" }}>{g.value}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-surface-2)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${g.value}%`, backgroundColor: g.name === "여성" ? "#ec4899" : "var(--color-primary)" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Reach age */}
          <div className="bg-white rounded-2xl p-5 border" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>도달 타겟 연령</h4>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--color-surface)", color: "var(--color-text-muted)" }}>
                  도달 계정 기준
                </span>
                <EvidenceModal imageSrc="/images/instagram/age-target.jpg" imageAlt="타겟 연령대 스크린샷" label="보기" />
              </div>
            </div>
            {instagramData.reachDemographics.ageGroups.map((ag) => (
              <div key={ag.group} className="mb-2">
                <div className="flex justify-between text-xs mb-1.5">
                  <span style={{ color: "var(--color-text-secondary)" }}>{ag.group}세</span>
                  <span className="font-semibold tabular-nums" style={{ color: "var(--color-text-primary)" }}>{ag.value}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-surface-2)" }}>
                  <div className="h-full rounded-full" style={{ width: `${ag.value}%`, backgroundColor: "var(--color-primary)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Follower gender */}
          <div className="bg-white rounded-2xl p-5 border" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>팔로워 성별 분포</h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--color-surface)", color: "var(--color-text-muted)" }}>
                팔로워 기준
              </span>
            </div>
            {instagramData.followerDemographics.gender.map((g) => (
              <div key={g.name} className="mb-3">
                <div className="flex justify-between text-xs mb-1.5">
                  <span style={{ color: "var(--color-text-secondary)" }}>{g.name}</span>
                  <span className="font-semibold tabular-nums" style={{ color: "var(--color-text-primary)" }}>{g.value}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-surface-2)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${g.value}%`, backgroundColor: g.name === "여성" ? "#ec4899" : "var(--color-primary)" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Follower age */}
          <div className="bg-white rounded-2xl p-5 border" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold" style={{ color: "var(--color-text-primary)" }}>팔로워 연령 분포</h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--color-surface)", color: "var(--color-text-muted)" }}>
                팔로워 기준
              </span>
            </div>
            {instagramData.followerDemographics.ageGroups.map((ag) => (
              <div key={ag.group} className="mb-2">
                <div className="flex justify-between text-xs mb-1.5">
                  <span style={{ color: "var(--color-text-secondary)" }}>{ag.group}세</span>
                  <span className="font-semibold tabular-nums" style={{ color: "var(--color-text-primary)" }}>{ag.value}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: "var(--color-surface-2)" }}>
                  <div className="h-full rounded-full" style={{ width: `${ag.value}%`, backgroundColor: "var(--color-primary)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
