import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  delta?: string;
  trend?: "up" | "down" | "flat";
  hint?: string;
  className?: string;
}

const KPICard = ({ title, value, delta, trend = "flat", hint, className }: KPICardProps) => {
  return (
    <div className={cn(
      "border border-foreground bg-card p-4 card-accent-bar",
      className
    )}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">{title}</p>
        {delta && (
          <span className={cn(
            "inline-flex items-center gap-0.5 text-xs font-mono font-medium",
            trend === "up" && "text-primary",
            trend === "down" && "text-destructive",
            trend === "flat" && "text-foreground-muted"
          )}>
            {trend === "up" && <TrendingUp className="h-3 w-3" />}
            {trend === "down" && <TrendingDown className="h-3 w-3" />}
            {trend === "flat" && <Minus className="h-3 w-3" />}
            {delta}
          </span>
        )}
      </div>
      <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">{value}</p>
      {hint && <p className="mt-1 text-xs text-foreground-muted">{hint}</p>}
    </div>
  );
};

export default KPICard;
