import { cn } from "@/lib/utils";
import StatusChip from "./StatusChip";

type Severity = "critical" | "warning" | "info" | "success";

interface EventRowProps {
  time: string;
  severity: Severity;
  source: string;
  message: string;
  action?: React.ReactNode;
  className?: string;
}

const severityToTone: Record<Severity, "danger" | "warning" | "info" | "success"> = {
  critical: "danger",
  warning: "warning",
  info: "info",
  success: "success",
};

const EventRow = ({ time, severity, source, message, action, className }: EventRowProps) => {
  return (
    <div className={cn(
      "flex items-center gap-4 border-b border-border py-2.5 px-1 text-xs hover:bg-muted/30 transition-colors",
      className
    )}>
      <span className="font-mono text-foreground-muted w-16 shrink-0">{time}</span>
      <StatusChip label={severity} tone={severityToTone[severity]} />
      <span className="font-mono text-foreground-muted w-24 shrink-0 truncate">{source}</span>
      <span className="flex-1 text-foreground truncate">{message}</span>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};

export default EventRow;
