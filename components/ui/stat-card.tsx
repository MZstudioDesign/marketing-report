"use client";

import { LucideIcon } from "lucide-react";
import { NumberTicker } from "./number-ticker";
import { BlurFade } from "./blur-fade";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
  icon?: LucideIcon;
  trend?: { value: number; label: string };
  color?: "blue" | "green" | "purple" | "orange";
  delay?: number;
  className?: string;
  badge?: string;
  evidenceSlot?: React.ReactNode;
}

const colorMap = {
  blue: {
    iconBg: "var(--color-primary-light)",
    iconColor: "var(--color-primary)",
    trendBg: "var(--color-primary-light)",
    trendColor: "var(--color-primary)",
  },
  green: {
    iconBg: "var(--color-success-light)",
    iconColor: "var(--color-success)",
    trendBg: "var(--color-success-light)",
    trendColor: "var(--color-success-text)",
  },
  purple: {
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    trendBg: "#f3e8ff",
    trendColor: "#7e22ce",
  },
  orange: {
    iconBg: "#fff7ed",
    iconColor: "#ea580c",
    trendBg: "#fff7ed",
    trendColor: "#c2410c",
  },
};

export function StatCard({
  label,
  value,
  suffix = "",
  prefix = "",
  description,
  icon: Icon,
  trend,
  color = "blue",
  delay = 0,
  className,
  badge,
  evidenceSlot,
}: StatCardProps) {
  const colors = colorMap[color];

  return (
    <BlurFade delay={delay} inView className={cn("h-full", className)}>
      <div
        className="relative bg-white rounded-2xl p-5 h-full flex flex-col gap-3 border hover:shadow-md transition-all duration-200"
        style={{ borderColor: "var(--color-border)" }}
      >
        {badge && (
          <div
            className="absolute top-4 right-4 text-[10px] font-semibold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: colors.trendBg, color: colors.trendColor }}
          >
            {badge}
          </div>
        )}
        <div className="flex items-start gap-3">
          {Icon && (
            <div
              className="p-2 rounded-xl flex-shrink-0"
              style={{ backgroundColor: colors.iconBg }}
            >
              <Icon className="h-5 w-5" style={{ color: colors.iconColor }} />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate" style={{ color: "var(--color-text-secondary)" }}>
              {label}
            </p>
            <div className="flex items-baseline gap-1 mt-1">
              {prefix && (
                <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  {prefix}
                </span>
              )}
              <NumberTicker
                value={value}
                className="text-2xl font-bold"
              />
              {suffix && (
                <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  {suffix}
                </span>
              )}
            </div>
          </div>
        </div>

        {description && (
          <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            {description}
          </p>
        )}

        {trend && (
          <div
            className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full self-start"
            style={{ backgroundColor: colors.trendBg, color: colors.trendColor }}
          >
            <span>+{trend.value}%</span>
            <span>{trend.label}</span>
          </div>
        )}

        {evidenceSlot && (
          <div className="mt-auto pt-2 border-t flex justify-end" style={{ borderColor: "var(--color-border-light)" }}>
            {evidenceSlot}
          </div>
        )}
      </div>
    </BlurFade>
  );
}
