import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cn("grid w-full gap-4", className)}>
    {children}
  </div>
);

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  value,
  suffix,
  cta,
  href,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  description?: string;
  value?: string | number;
  suffix?: string;
  cta?: string;
  href?: string;
}) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl border bg-white",
      "hover:shadow-lg transition-all duration-300",
      className
    )}
    style={{ borderColor: "var(--color-border)" }}
  >
    {background && <div className="absolute inset-0">{background}</div>}
    <div className="relative z-10 flex flex-col gap-2 p-6">
      {Icon && (
        <div
          className="p-2.5 rounded-xl w-fit mb-1"
          style={{ backgroundColor: "var(--color-primary-light)" }}
        >
          <Icon className="h-5 w-5" style={{ color: "var(--color-primary)" } as React.CSSProperties} />
        </div>
      )}
      {value !== undefined && (
        <p className="text-3xl font-bold tabular-nums" style={{ color: "var(--color-text-primary)" }}>
          {typeof value === "number" ? value.toLocaleString("ko-KR") : value}
          {suffix && <span className="text-lg font-medium ml-1" style={{ color: "var(--color-text-secondary)" }}>{suffix}</span>}
        </p>
      )}
      <h3 className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
        {name}
      </h3>
      {description && (
        <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
          {description}
        </p>
      )}
    </div>
    {cta && href && (
      <div className="relative z-10 px-6 pb-5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
        <a
          href={href}
          className="inline-flex items-center gap-1 text-xs font-medium"
          style={{ color: "var(--color-primary)" }}
        >
          {cta}
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    )}
    <div className="absolute inset-0 transition-all duration-300 group-hover:bg-black/[.02] rounded-2xl" />
  </div>
);

export { BentoGrid, BentoCard };
