import { Outlet, useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { label: "Hub", value: "/knowledge" },
  { label: "Graph", value: "/knowledge/graph" },
  { label: "Memories", value: "/knowledge/memories" },
  { label: "Docs", value: "/knowledge/docs" },
];

const KnowledgeLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="border-b border-border">
        <nav className="flex gap-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => navigate(tab.value)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-medium uppercase tracking-wider border-b-2 transition-colors ${
                location.pathname === tab.value
                  ? "border-primary text-foreground"
                  : "border-transparent text-foreground-muted hover:text-foreground hover:border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default KnowledgeLayout;
