"use client";

import { Play, Film, Eye } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeader } from "@/components/ui/section-header";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { VideoModal } from "@/components/ui/video-modal";

const youtubeVideos = [
  {
    id: "G5oCIw_4xH8",
    title: "[매튜] 사진 한 장으로 전과목 과외가 시작됩니다.",
    type: "롱폼",
    views: "100+",
    description: "매튜 앱의 핵심 기능을 소개하는 프로모션 영상. AI 기반 문제풀이의 혁신적 사용 경험을 전달.",
    badge: "프로모션",
    badgeColor: "#4f90ff",
  },
  {
    id: "urC-w4GYkoE",
    title: "이거 알면 시험칠 때 안 떨림",
    type: "Shorts",
    views: "6,244",
    description: "시험 불안 극복 팁 — 공감형 숏폼으로 학생 타겟 자연 도달 극대화.",
    badge: "TOP 1",
    badgeColor: "#10b981",
  },
  {
    id: "a-8GPi5mKh8",
    title: "시험 전날 밸런스게임 🔥",
    type: "Shorts",
    views: "2,508",
    description: "밸런스게임 포맷으로 공유 유도 — 시험 시즌 학생 참여 콘텐츠.",
    badge: "TOP 2",
    badgeColor: "#10b981",
  },
  {
    id: "flJ_t7yTk5E",
    title: "같이 가고 싶은 친구에게 공유해보세요 ✈️",
    type: "Shorts",
    views: "2,230",
    description: "여행 공유 유도 포맷 — 친구 태그/공유 행동을 직접 유도하는 CTA 콘텐츠.",
    badge: "TOP 3",
    badgeColor: "#10b981",
  },
  {
    id: "ycnFL2FbTX8",
    title: "마음 다잡고 앉았는데 1번 문제부터 막혔을 때",
    type: "Shorts",
    views: "1,801",
    description: "학생 공감 밈형 숏폼 — 자연스러운 브랜드 노출과 바이럴 유도.",
    badge: null,
    badgeColor: null,
  },
  {
    id: "d2XTPQMzVcM",
    title: "공부에 방해되는 앱 TOP 3 공개합니다...",
    type: "Shorts",
    views: "1,688",
    description: "인스타그램 126K 바이럴 콘텐츠의 유튜브 버전. 동일 포맷 교차 게시.",
    badge: "인스타 126K",
    badgeColor: "#e1306c",
  },
  {
    id: "9Hz7j_Kc8s8",
    title: '"15년 공부했는데 이런 건 처음 봤다."',
    type: "Shorts",
    views: "400+",
    description: "매튜 앱 기능을 간접 노출하는 증언형 숏폼 콘텐츠.",
    badge: "앱 소개",
    badgeColor: "#f59e0b",
  },
];

function getYouTubeThumbnail(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

function getYouTubeEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

export function VideoShowcaseSection() {
  const featured = youtubeVideos[0];
  const shorts = youtubeVideos.slice(1);

  return (
    <section id="video-showcase" className="pt-2">
      <SectionHeader
        icon={Film}
        title="제작 영상 쇼케이스"
        subtitle="직접 기획·촬영·편집한 유튜브 콘텐츠 포트폴리오"
        badge="7편 제작"
        period="Shorts 6편 + 롱폼 1편"
      />

      {/* Featured Video - Longform */}
      <BlurFade inView delay={0.05}>
        <div
          className="bg-white rounded-2xl border overflow-hidden mb-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                style={{ backgroundColor: featured.badgeColor || "#4f90ff" }}
              >
                {featured.badge}
              </span>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: "var(--color-surface-2)", color: "var(--color-text-muted)" }}
              >
                {featured.type}
              </span>
            </div>
            <HeroVideoDialog
              videoSrc={getYouTubeEmbedUrl(featured.id)}
              thumbnailSrc={getYouTubeThumbnail(featured.id)}
              thumbnailAlt={featured.title}
              className="mb-5"
            />
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              {featured.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {featured.description}
            </p>
            <VideoModal
              videoId={featured.id}
              className="inline-flex items-center gap-1.5 text-xs font-semibold mt-3 px-3 py-1.5 rounded-full transition-colors hover:opacity-80"
              style={{ backgroundColor: "var(--color-primary-light)", color: "var(--color-primary)" }}
            >
              <Play className="h-3 w-3" /> 영상 재생
            </VideoModal>
          </div>
        </div>
      </BlurFade>

      {/* Shorts Grid */}
      <BlurFade inView delay={0.1}>
        <div className="flex items-center gap-2 mb-4">
          <Play className="h-4 w-4" style={{ color: "#ff0000" }} />
          <h3 className="font-bold text-sm" style={{ color: "var(--color-text-primary)" }}>
            Shorts 콘텐츠 ({shorts.length}편)
          </h3>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {shorts.map((video, i) => (
          <BlurFade key={video.id} inView delay={0.05 * i}>
            <div
              className="bg-white rounded-2xl border overflow-hidden hover:shadow-md transition-all duration-200 group"
              style={{ borderColor: "var(--color-border)" }}
            >
              <HeroVideoDialog
                videoSrc={getYouTubeEmbedUrl(video.id)}
                thumbnailSrc={getYouTubeThumbnail(video.id)}
                thumbnailAlt={video.title}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {video.badge && (
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: video.badgeColor || "#4f90ff" }}
                    >
                      {video.badge}
                    </span>
                  )}
                  <span
                    className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#fff0f0", color: "#cc0000" }}
                  >
                    {video.type}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] ml-auto" style={{ color: "var(--color-text-muted)" }}>
                    <Eye className="h-3 w-3" /> {video.views}
                  </span>
                </div>
                <h4
                  className="text-sm font-bold leading-snug mb-1.5 line-clamp-2"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {video.title}
                </h4>
                <p
                  className="text-xs leading-relaxed line-clamp-2"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {video.description}
                </p>
                <VideoModal
                  videoId={video.id}
                  className="inline-flex items-center gap-1 text-[10px] font-semibold mt-2 hover:underline"
                  style={{ color: "var(--color-primary)" }}
                >
                  <Play className="h-3 w-3" /> 재생
                </VideoModal>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Production Summary */}
      <BlurFade inView delay={0.3}>
        <div
          className="p-5 rounded-2xl border-l-4"
          style={{
            backgroundColor: "var(--color-primary-light)",
            borderColor: "var(--color-primary)",
          }}
        >
          <p className="text-sm font-bold mb-1" style={{ color: "var(--color-primary)" }}>
            콘텐츠 제작 전략
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            공감형 학생 콘텐츠 → 자연 바이럴 유도 전략 채택.
            앱 직접 광고보다 감정적 공감을 앞세워 공유 행동을 극대화하고,
            이후 프로필/하이라이트를 통해 앱 전환을 유도하는 2단계 퍼널 설계.
            인스타그램과 동일 소재 교차 게시로 리소스 효율 극대화.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
