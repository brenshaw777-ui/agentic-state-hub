import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  { label: "Cockpit", value: "/mission-control" },
  { label: "Overview", value: "/mission-control/overview" },
  { label: "Timeline", value: "/mission-control/timeline" },
];

const MissionControlLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentTab = tabs.find((t) => t.value === location.pathname)?.value ?? "/mission-control";

  return (
    <div className="space-y-4">
      <Tabs value={currentTab} onValueChange={(v) => navigate(v)}>
        <TabsList className="bg-transparent border border-border rounded-none h-9 p-0 gap-0">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-none border-b-2 border-transparent px-4 text-xs font-medium uppercase tracking-wider text-foreground-muted data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <Outlet />
    </div>
  );
};

export default MissionControlLayout;
