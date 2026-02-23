import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "@/components/layout/app-sidebar";

export const metadata: Metadata = {
  title: "마케팅 성과 보고서 | 마케터 오유택",
  description: "2026년 1월-2월 마케팅 성과 보고서 — 인스타그램, 유튜브, 앱 광고, B2B 광고",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="flex h-screen overflow-hidden">
          <AppSidebar />
          <main
            className="flex-1 overflow-y-auto"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 flex flex-col gap-20">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
