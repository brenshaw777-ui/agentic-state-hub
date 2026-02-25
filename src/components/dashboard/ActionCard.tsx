import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ActionCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  priority?: "high" | "medium" | "low";
  onClick?: () => void;
  className?: string;
}

const ActionCard = ({ title, description, icon: Icon, priority, onClick, className }: ActionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group w-full text-left border border-foreground bg-card p-4 card-accent-bar transition-colors hover:bg-muted/30",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {Icon && <Icon className="h-4 w-4 mt-0.5 text-foreground" />}
          <div>
            <p className="text-sm font-semibold text-foreground">{title}</p>
            {description && <p className="mt-1 text-xs text-foreground-muted">{description}</p>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {priority && (
            <span className={cn(
              "text-[10px] font-mono uppercase tracking-wider",
              priority === "high" && "text-primary",
              priority === "medium" && "text-secondary",
              priority === "low" && "text-foreground-muted"
            )}>
              {priority}
            </span>
          )}
          <ArrowRight className="h-3.5 w-3.5 text-foreground-muted transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </button>
  );
};

export default ActionCard;
