import KPICard from "@/components/dashboard/KPICard";
import ModulePanel from "@/components/dashboard/ModulePanel";
import StatusChip from "@/components/dashboard/StatusChip";
import EventRow from "@/components/dashboard/EventRow";
import ActionCard from "@/components/dashboard/ActionCard";
import { useNavigate } from "react-router-dom";
import { Shield, Key, FileCheck } from "lucide-react";

const Security = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Security Posture Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Security Score" value="B+" delta="+5pts" trend="up" hint="Last audit: 2d ago" />
        <KPICard title="Vault Health" value="Good" hint="All secrets current" />
        <KPICard title="Policy Compliance" value="94%" delta="+2%" trend="up" />
        <KPICard title="Open Findings" value={3} hint="1 critical, 2 medium" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ModulePanel title="Vault Health Summary" icon={Key}>
          <div className="space-y-0">
            {[
              { name: "OPENAI_API_KEY", rotation: "Due in 48h", status: "warning" },
              { name: "ANTHROPIC_API_KEY", rotation: "Current", status: "healthy" },
              { name: "SLACK_TOKEN", rotation: "Current", status: "healthy" },
              { name: "DB_PASSWORD", rotation: "Due in 5d", status: "healthy" },
            ].map((secret) => (
              <div key={secret.name} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
                <span className="font-mono text-foreground w-40">{secret.name}</span>
                <span className="flex-1 text-foreground-muted">{secret.rotation}</span>
                <StatusChip label={secret.status} tone={secret.status === "healthy" ? "success" : "warning"} />
              </div>
            ))}
          </div>
        </ModulePanel>

        <ModulePanel title="Policy Compliance" icon={FileCheck}>
          <div className="space-y-0">
            {[
              { policy: "Access Control", compliance: 100, status: "pass" },
              { policy: "Data Encryption", compliance: 100, status: "pass" },
              { policy: "Audit Logging", compliance: 95, status: "pass" },
              { policy: "Key Rotation", compliance: 80, status: "warning" },
            ].map((p) => (
              <div key={p.policy} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
                <span className="text-foreground w-36">{p.policy}</span>
                <div className="flex-1 flex items-center gap-2">
                  <div className="flex-1 h-1 bg-border">
                    <div className={`h-full ${p.status === "warning" ? "bg-secondary" : "bg-foreground"}`} style={{ width: `${p.compliance}%` }} />
                  </div>
                  <span className="font-mono text-foreground-muted w-8">{p.compliance}%</span>
                </div>
                <StatusChip label={p.status} tone={p.status === "pass" ? "success" : "warning"} />
              </div>
            ))}
          </div>
        </ModulePanel>
      </div>

      {/* Audit Events */}
      <ModulePanel title="Audit Events Timeline" icon={Shield}>
        <div className="space-y-0">
          <EventRow time="09:45" severity="info" source="auth" message="Admin login from 192.168.1.1" />
          <EventRow time="09:30" severity="warning" source="vault" message="API key nearing expiration" />
          <EventRow time="09:15" severity="info" source="policy" message="Policy enforcement check passed" />
          <EventRow time="09:00" severity="critical" source="auth" message="Failed login attempt — 3rd attempt from unknown IP" />
          <EventRow time="08:45" severity="success" source="vault" message="Secret rotation completed: SLACK_TOKEN" />
        </div>
      </ModulePanel>

      {/* Remediation Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ActionCard title="Rotate Keys" description="Rotate expiring API keys" icon={Key} priority="high" onClick={() => navigate("/security/vault")} />
        <ActionCard title="Enforce Policy" description="Apply pending policy updates" icon={FileCheck} priority="medium" />
        <ActionCard title="View Vault" description="Full secrets management" icon={Key} onClick={() => navigate("/security/vault")} />
        <ActionCard title="Audit Log" description="Complete audit trail" icon={Shield} />
      </div>
    </div>
  );
};

export default Security;
