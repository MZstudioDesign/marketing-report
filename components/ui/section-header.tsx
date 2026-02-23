"use client";

import { LucideIcon } from "lucide-react";
import { BlurFade } from "./blur-fade";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  badge?: string;
  period?: string;
}

export function SectionHeader({ icon: Icon, title, subtitle, badge, period }: SectionHeaderProps) {
  return (
    <BlurFade inView delay={0}>
      <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div
            className="p-3 rounded-2xl"
            style={{ backgroundColor: "var(--color-primary-light)" }}
          >
            <Icon className="h-6 w-6" style={{ color: "var(--color-primary)" }} />
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: "var(--color-text-primary)" }}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {badge && (
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary)",
              }}
            >
              {badge}
            </span>
          )}
          {period && (
            <span
              className="text-xs px-3 py-1 rounded-full border"
              style={{
                color: "var(--color-text-muted)",
                borderColor: "var(--color-border)",
              }}
            >
              {period}
            </span>
          )}
        </div>
      </div>
    </BlurFade>
  );
}
