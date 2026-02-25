import { Outlet, useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { label: "Profile & Identity", value: "/settings" },
  { label: "API Access & Keys", value: "/settings/api" },
  { label: "Billing & Plan", value: "/settings/billing" },
  { label: "Preferences", value: "/settings/preferences" },
  { label: "Safety Defaults", value: "/settings/safety" },
];

const SettingsLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
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
      <div className="max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
