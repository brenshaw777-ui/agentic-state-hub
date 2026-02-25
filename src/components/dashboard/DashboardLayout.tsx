import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import StatusChip from "./StatusChip";

const routeTitles: Record<string, { title: string; subtitle?: string }> = {
  "/mission-control": { title: "Mission Control", subtitle: "Global operating cockpit" },
  "/mission-control/overview": { title: "Overview", subtitle: "Trends and analytics" },
  "/mission-control/timeline": { title: "Timeline", subtitle: "Event stream" },
  "/agents": { title: "Agents", subtitle: "Fleet management" },
  "/knowledge": { title: "Knowledge", subtitle: "Intelligence layer" },
  "/knowledge/graph": { title: "Knowledge Graph", subtitle: "Entity relationships" },
  "/knowledge/memories": { title: "Memories", subtitle: "Contextual recall" },
  "/knowledge/docs": { title: "Docs", subtitle: "Documentation" },
  "/operations": { title: "Operations", subtitle: "Tasks and runtime" },
  "/operations/tasks": { title: "Tasks", subtitle: "Task queue" },
  "/operations/projects": { title: "Projects", subtitle: "Project tracking" },
  "/operations/mesh": { title: "Mesh", subtitle: "Collaboration network" },
  "/operations/runtime": { title: "Runtime Supervision", subtitle: "System runtime" },
  "/integrations": { title: "Integrations", subtitle: "Connectivity" },
  "/security": { title: "Security", subtitle: "Posture and compliance" },
  "/security/vault": { title: "Vault", subtitle: "Secrets management" },
  "/admin": { title: "Admin", subtitle: "System administration" },
  "/settings": { title: "Settings", subtitle: "Configuration" },
  "/settings/api": { title: "Settings", subtitle: "API Access & Keys" },
  "/settings/billing": { title: "Settings", subtitle: "Billing & Plan" },
  "/settings/preferences": { title: "Settings", subtitle: "Preferences" },
  "/settings/safety": { title: "Settings", subtitle: "Safety Defaults" },
};

const DashboardLayout = () => {
  const location = useLocation();

  // Match route - try exact, then prefix
  const getPageInfo = () => {
    if (routeTitles[location.pathname]) return routeTitles[location.pathname];
    // Handle dynamic routes like /agents/:id
    const segments = location.pathname.split("/");
    if (segments[1] === "agents" && segments[2]) {
      return { title: "Agent Detail", subtitle: `Agent ${segments[2]}` };
    }
    if (segments[1] === "operations" && segments[2] === "projects" && segments[3]) {
      return { title: "Project Detail", subtitle: `Project ${segments[3]}` };
    }
    return { title: "Dashboard" };
  };

  const pageInfo = getPageInfo();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col border-l border-foreground">
          {/* Top Bar */}
          <header className="sticky top-0 z-40 flex h-12 items-center justify-between border-b border-foreground bg-background px-4">
            <div className="flex items-center gap-3">
              <h1 className="text-sm font-bold text-foreground">{pageInfo.title}</h1>
              {pageInfo.subtitle && (
                <>
                  <span className="text-xs text-foreground-muted hidden sm:inline">—</span>
                  <span className="text-xs text-foreground-muted hidden sm:inline">{pageInfo.subtitle}</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-3">
              <StatusChip label="System Live" tone="success" />
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-auto">
            <div className="mx-auto max-w-[1660px] p-4 md:p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
