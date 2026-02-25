import ModulePanel from "@/components/dashboard/ModulePanel";
import StatusChip from "@/components/dashboard/StatusChip";
import EventRow from "@/components/dashboard/EventRow";
import { Button } from "@/components/ui/button";
import { Key, RotateCcw, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const secrets = [
  { name: "OPENAI_API_KEY", type: "API Key", created: "30d ago", rotationDue: "48h", lastAccessed: "2m ago", status: "warning" as const },
  { name: "ANTHROPIC_API_KEY", type: "API Key", created: "15d ago", rotationDue: "60d", lastAccessed: "5m ago", status: "healthy" as const },
  { name: "SLACK_TOKEN", type: "OAuth Token", created: "7d ago", rotationDue: "90d", lastAccessed: "1h ago", status: "healthy" as const },
  { name: "DB_PASSWORD", type: "Password", created: "20d ago", rotationDue: "5d", lastAccessed: "30s ago", status: "healthy" as const },
  { name: "GITHUB_PAT", type: "PAT", created: "45d ago", rotationDue: "Overdue", lastAccessed: "3h ago", status: "danger" as const },
];

const SecurityVault = () => {
  const [showValues, setShowValues] = useState<Record<string, boolean>>({});

  return (
    <div className="space-y-6">
      {/* Secrets List */}
      <ModulePanel
        title="Secrets"
        icon={Key}
        action={<Button className="bg-foreground text-background hover:bg-foreground/90 text-xs h-7">+ Add Secret</Button>}
      >
        <div className="space-y-0">
          {secrets.map((secret) => (
            <div key={secret.name} className="flex items-center gap-4 py-3 border-b border-border text-xs">
              <div className="w-44">
                <p className="font-mono font-medium text-foreground">{secret.name}</p>
                <p className="text-[10px] text-foreground-muted">{secret.type}</p>
              </div>
              <div className="flex-1 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-foreground-muted">Value:</span>
                  <span className="font-mono text-foreground">
                    {showValues[secret.name] ? "sk-xxxx...xxxx" : "••••••••••••"}
                  </span>
                  <button
                    onClick={() => setShowValues(prev => ({ ...prev, [secret.name]: !prev[secret.name] }))}
                    className="text-foreground-muted hover:text-foreground"
                  >
                    {showValues[secret.name] ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-foreground-muted">Rotation: <span className={secret.rotationDue === "Overdue" ? "text-primary font-medium" : ""}>{secret.rotationDue}</span></p>
                  <p className="text-[10px] text-foreground-muted">Last access: {secret.lastAccessed}</p>
                </div>
                <StatusChip label={secret.status === "danger" ? "overdue" : secret.status === "warning" ? "due soon" : "current"} tone={secret.status === "healthy" ? "success" : secret.status} />
                <Button variant="outline" size="sm" className="text-[10px] h-6 px-2 gap-1">
                  <RotateCcw className="h-3 w-3" /> Rotate
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ModulePanel>

      {/* Access History */}
      <ModulePanel title="Access / Audit History">
        <div className="space-y-0">
          <EventRow time="09:45" severity="info" source="system" message="OPENAI_API_KEY accessed by agent-alpha" />
          <EventRow time="09:30" severity="info" source="system" message="DB_PASSWORD accessed by runtime-cron" />
          <EventRow time="09:15" severity="warning" source="system" message="GITHUB_PAT rotation overdue — flagged for review" />
          <EventRow time="09:00" severity="success" source="admin" message="SLACK_TOKEN rotated successfully" />
        </div>
      </ModulePanel>
    </div>
  );
};

export default SecurityVault;
