"use client";

import { useState, useEffect } from "react";
import { Image } from "@/components/ui/base-image";
import {
  LayoutDashboard,
  Instagram,
  Facebook,
  Youtube,
  Film,
  Smartphone,
  Building2,
  CalendarDays,
} from "lucide-react";
import {
  Sidebar,
  SidebarBody,
  SidebarNavLink,
  useSidebar,
} from "@/components/ui/sidebar";
import { reportMeta } from "@/data/marketing-data";

const navLinks = [
  {
    label: "개요",
    href: "#overview",
    icon: <LayoutDashboard className="h-5 w-5" />,
    sectionId: "overview",
  },
  {
    label: "인스타그램",
    href: "#instagram",
    icon: <Instagram className="h-5 w-5" />,
    sectionId: "instagram",
  },
  {
    label: "페이스북",
    href: "#facebook",
    icon: <Facebook className="h-5 w-5" />,
    sectionId: "facebook",
  },
  {
    label: "유튜브",
    href: "#youtube",
    icon: <Youtube className="h-5 w-5" />,
    sectionId: "youtube",
  },
  {
    label: "영상 쇼케이스",
    href: "#video-showcase",
    icon: <Film className="h-5 w-5" />,
    sectionId: "video-showcase",
  },
  {
    label: "앱 광고 (매튜)",
    href: "#app-ads",
    icon: <Smartphone className="h-5 w-5" />,
    sectionId: "app-ads",
  },
  {
    label: "B2B 광고 (AI튜터)",
    href: "#b2b-ads",
    icon: <Building2 className="h-5 w-5" />,
    sectionId: "b2b-ads",
  },
  {
    label: "업무 캘린더",
    href: "#calendar",
    icon: <CalendarDays className="h-5 w-5" />,
    sectionId: "calendar",
  },
];

function SidebarContent({ activeSection }: { activeSection: string }) {
  return (
    <div className="flex flex-col h-full gap-6">
      {/* Logo */}
      <div className="flex items-center gap-3 px-2">
        <div className="flex-shrink-0 h-8 w-8 relative rounded-lg overflow-hidden">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span
            className="text-sm font-bold truncate"
            style={{ color: "var(--color-text-primary)" }}
          >
            성과 보고서
          </span>
          <span
            className="text-[10px] truncate"
            style={{ color: "var(--color-text-muted)" }}
          >
            {reportMeta.period}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full"
        style={{ backgroundColor: "var(--color-border)" }}
      />

      {/* Nav Links */}
      <nav className="flex flex-col gap-1 flex-1">
        {navLinks.map((link) => (
          <SidebarNavLink
            key={link.href}
            link={link}
            isActive={activeSection === link.sectionId}
          />
        ))}
      </nav>

      {/* Footer */}
      <div
        className="flex flex-col gap-2 pt-4 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="flex flex-col gap-1 px-2">
          <span
            className="text-xs font-semibold"
            style={{ color: "var(--color-text-primary)" }}
          >
            {reportMeta.author}
          </span>
          <span
            className="text-[10px]"
            style={{ color: "var(--color-text-muted)" }}
          >
            마케팅 담당
          </span>
        </div>
        <div
          className="mx-2 p-2 rounded-xl text-center"
          style={{ backgroundColor: "var(--color-primary-light)" }}
        >
          <p
            className="text-[10px] font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            26.01.26 ~ 02.20
          </p>
        </div>
      </div>
    </div>
  );
}

export function AppSidebar() {
  const [open, setOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <SidebarContent activeSection={activeSection} />
      </SidebarBody>
    </Sidebar>
  );
}
