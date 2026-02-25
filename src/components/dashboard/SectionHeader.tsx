import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
  className?: string;
}

const SectionHeader = ({ title, subtitle, icon: Icon, action, className }: SectionHeaderProps) => {
  return (
    <div className={cn("flex items-center justify-between border-b border-border pb-3 mb-4", className)}>
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-4 w-4 text-primary" />}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">{title}</h3>
          {subtitle && <p className="text-xs text-foreground-muted">{subtitle}</p>}
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

export default SectionHeader;
