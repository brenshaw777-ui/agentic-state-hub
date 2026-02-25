import KPICard from "@/components/dashboard/KPICard";
import ModulePanel from "@/components/dashboard/ModulePanel";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const Admin = () => {
  return (
    <div className="space-y-6">
      {/* System Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Tenant" value="AgentOS-Prod" hint="Primary instance" />
        <KPICard title="CPU Usage" value="34%" delta="-5%" trend="down" />
        <KPICard title="Memory" value="6.2 GB / 16 GB" hint="38% utilized" />
        <KPICard title="Storage" value="142 GB / 500 GB" hint="28% utilized" />
      </div>

      {/* Quotas & Load */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ModulePanel title="Quotas">
          <div className="space-y-3">
            {[
              { resource: "API Calls", used: 8420, limit: 50000 },
              { resource: "Agents", used: 7, limit: 25 },
              { resource: "Storage", used: 142, limit: 500 },
              { resource: "Concurrent Jobs", used: 4, limit: 20 },
            ].map((q) => (
              <div key={q.resource} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-foreground">{q.resource}</span>
                  <span className="font-mono text-foreground-muted">{q.used.toLocaleString()} / {q.limit.toLocaleString()}</span>
                </div>
                <div className="h-1 bg-border w-full">
                  <div className={`h-full ${(q.used / q.limit) > 0.8 ? "bg-primary" : "bg-foreground"}`} style={{ width: `${(q.used / q.limit) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </ModulePanel>

        <ModulePanel title="Governance Controls">
          <div className="space-y-0">
            {[
              { control: "Force 2FA", enabled: true },
              { control: "IP Allowlisting", enabled: false },
              { control: "Audit Log Retention (90d)", enabled: true },
              { control: "Auto Key Rotation", enabled: true },
              { control: "Agent Self-Update", enabled: false },
            ].map((gc) => (
              <div key={gc.control} className="flex items-center justify-between py-2.5 border-b border-border text-xs">
                <span className="text-foreground">{gc.control}</span>
                <span className={`font-mono ${gc.enabled ? "text-foreground" : "text-foreground-muted"}`}>
                  {gc.enabled ? "ENABLED" : "DISABLED"}
                </span>
              </div>
            ))}
          </div>
        </ModulePanel>
      </div>

      {/* High-Risk Actions */}
      <ModulePanel title="High-Risk Actions" icon={AlertTriangle}>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border border-primary/30 bg-primary/5">
            <div>
              <p className="text-xs font-semibold text-foreground">Purge All Agent Data</p>
              <p className="text-[10px] text-foreground-muted mt-1">Permanently delete all agent profiles, runs, and artifacts</p>
            </div>
            <Button variant="outline" size="sm" className="text-xs border-primary text-primary hover:bg-primary hover:text-background">
              Confirm & Execute
            </Button>
          </div>
          <div className="flex items-center justify-between p-3 border border-primary/30 bg-primary/5">
            <div>
              <p className="text-xs font-semibold text-foreground">Reset Tenant</p>
              <p className="text-[10px] text-foreground-muted mt-1">Reset all configurations to factory defaults</p>
            </div>
            <Button variant="outline" size="sm" className="text-xs border-primary text-primary hover:bg-primary hover:text-background">
              Confirm & Execute
            </Button>
          </div>
        </div>
      </ModulePanel>
    </div>
  );
};

export default Admin;
