import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AnimatedOutlet from "./AnimatedOutlet";

const tabs = [
  { label: "Hub", value: "/security" },
  { label: "Vault", value: "/security/vault" },
];

const SecurityLayout = () => {
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
      <AnimatedOutlet><Outlet /></AnimatedOutlet>
    </div>
  );
};

export default SecurityLayout;
