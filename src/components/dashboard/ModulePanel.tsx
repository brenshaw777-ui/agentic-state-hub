import { cn } from "@/lib/utils";
import SectionHeader from "./SectionHeader";
import { LucideIcon } from "lucide-react";

interface ModulePanelProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const ModulePanel = ({ title, subtitle, icon, action, footer, children, className }: ModulePanelProps) => {
  return (
    <div className={cn("border border-foreground bg-card", className)}>
      <div className="p-4">
        <SectionHeader title={title} subtitle={subtitle} icon={icon} action={action} />
        {children}
      </div>
      {footer && (
        <div className="border-t border-border px-4 py-3">
          {footer}
        </div>
      )}
    </div>
  );
};

export default ModulePanel;
