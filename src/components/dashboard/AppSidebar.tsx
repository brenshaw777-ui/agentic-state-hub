import {
  Radar,
  Bot,
  Brain,
  Cog,
  Shield,
  Plug,
  Settings,
  LogOut,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import agentfsIcon from "@/assets/agentfs-icon-transparent.png";

const navItems = [
  { title: "Mission Control", url: "/mission-control", icon: Radar },
  { title: "Agents", url: "/agents", icon: Bot },
  { title: "Knowledge", url: "/knowledge", icon: Brain },
  { title: "Operations", url: "/operations", icon: Cog },
  { title: "Integrations", url: "/integrations", icon: Plug },
  { title: "Security", url: "/security", icon: Shield },
  { title: "Settings", url: "/settings", icon: Settings },
];

const AppSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (url: string) => {
    return location.pathname === url || location.pathname.startsWith(url + "/");
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-border px-3 py-3">
        <div className="flex items-center justify-center gap-2">
          <img src={agentfsIcon} alt="AgentOS" className="h-6 w-6" />
          <span className="text-sm font-bold tracking-tight text-foreground group-data-[collapsible=icon]:hidden">
            AgentOS
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-3">
        <nav className="flex flex-col gap-1.5">
          {navItems.map((item) => {
            const active = isActive(item.url);
            return (
              <button
                key={item.url}
                onClick={() => navigate(item.url)}
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 aspect-square w-14 rounded-sm border transition-colors",
                  "group-data-[collapsible=icon]:w-10",
                  active
                    ? "border-primary bg-muted text-foreground"
                    : "border-transparent text-foreground-muted hover:border-border hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                <span className="text-[8px] font-medium uppercase tracking-wider leading-tight group-data-[collapsible=icon]:hidden">
                  {item.title}
                </span>
              </button>
            );
          })}
        </nav>
      </SidebarContent>

      <SidebarFooter className="border-t border-border px-2 py-2">
        <button
          onClick={() => navigate("/")}
          className="flex flex-col items-center justify-center gap-1 rounded-sm border border-transparent px-2 py-3 text-foreground-muted transition-colors hover:border-border hover:bg-muted/50 hover:text-primary group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:py-2"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          <span className="text-[10px] font-medium uppercase tracking-wider leading-tight group-data-[collapsible=icon]:hidden">
            Logout
          </span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
