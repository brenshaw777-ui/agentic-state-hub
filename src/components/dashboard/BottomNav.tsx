import {
  Radar,
  Bot,
  Brain,
  Cog,
  Shield,
  Plug,
  Settings,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Mission", url: "/mission-control", icon: Radar },
  { title: "Agents", url: "/agents", icon: Bot },
  { title: "Knowledge", url: "/knowledge", icon: Brain },
  { title: "Ops", url: "/operations", icon: Cog },
  { title: "Security", url: "/security", icon: Shield },
  { title: "Settings", url: "/settings", icon: Settings },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (url: string) =>
    location.pathname === url || location.pathname.startsWith(url + "/");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-foreground bg-background lg:hidden">
      <div className="flex items-stretch justify-around">
        {navItems.map((item) => {
          const active = isActive(item.url);
          return (
            <button
              key={item.url}
              onClick={() => navigate(item.url)}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-0.5 py-2 transition-colors",
                active
                  ? "text-foreground border-t-2 border-primary -mt-px"
                  : "text-foreground-muted"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-[8px] font-medium uppercase tracking-wider">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
