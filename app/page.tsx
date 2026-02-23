import { OverviewSection } from "@/components/sections/overview";
import { InstagramSection } from "@/components/sections/instagram";
import { FacebookSection } from "@/components/sections/facebook";
import { YoutubeSection } from "@/components/sections/youtube";
import { VideoShowcaseSection } from "@/components/sections/video-showcase";
import { AppAdsSection } from "@/components/sections/app-ads";
import { B2bAdsSection } from "@/components/sections/b2b-ads";
import { WorkCalendarSection } from "@/components/sections/work-calendar";

export default function Home() {
  return (
    <>
      <OverviewSection />
      <InstagramSection />
      <FacebookSection />
      <YoutubeSection />
      <VideoShowcaseSection />
      <AppAdsSection />
      <B2bAdsSection />
      <WorkCalendarSection />
    </>
  );
}
