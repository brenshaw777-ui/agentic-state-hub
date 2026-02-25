import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AnimatedOutlet from "./AnimatedOutlet";

const tabs = [
  { label: "Hub", value: "/operations" },
  { label: "Tasks", value: "/operations/tasks" },
  { label: "Projects", value: "/operations/projects" },
  { label: "Mesh", value: "/operations/mesh" },
  { label: "Runtime", value: "/operations/runtime" },
];

const OperationsLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = tabs.find(
    (t) => location.pathname === t.value || (t.value !== "/operations" && location.pathname.startsWith(t.value + "/"))
  )?.value ?? "/operations";

  return (
    <div className="space-y-4">
      <div className="border-b border-border">
        <nav className="flex gap-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => navigate(tab.value)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-medium uppercase tracking-wider border-b-2 transition-colors ${
                activeTab === tab.value
                  ? "border-primary text-foreground"
                  : "border-transparent text-foreground-muted hover:text-foreground hover:border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <AnimatedOutlet><Outlet /></AnimatedOutlet>
    </div>
  );
};

export default OperationsLayout;
