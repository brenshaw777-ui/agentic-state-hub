import { cn } from "@/lib/utils";

type StatusTone = "success" | "warning" | "danger" | "info" | "neutral";

interface StatusChipProps {
  label: string;
  tone?: StatusTone;
  className?: string;
}

const toneStyles: Record<StatusTone, string> = {
  success: "border-foreground text-foreground before:bg-green-500",
  warning: "border-foreground text-foreground before:bg-warning",
  danger: "border-foreground text-foreground before:bg-primary",
  info: "border-foreground text-foreground before:bg-secondary",
  neutral: "border-foreground text-foreground-muted before:bg-foreground-muted",
};

const StatusChip = ({ label, tone = "neutral", className }: StatusChipProps) => {
  return (
    <span className={cn(
      "relative inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 text-xs font-mono font-medium pl-4",
      "before:absolute before:left-1.5 before:top-1/2 before:-translate-y-1/2 before:h-1.5 before:w-1.5 before:rounded-full",
      toneStyles[tone],
      className
    )}>
      {label}
    </span>
  );
};

export default StatusChip;
