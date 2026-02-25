import ModulePanel from "@/components/dashboard/ModulePanel";
import StatusChip from "@/components/dashboard/StatusChip";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const OperationsRuntime = () => {
  return (
    <div className="space-y-6">
      {/* Runtime Truth Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Providers", value: "3 active", tone: "success" as const },
          { label: "Allowlists", value: "Enforced", tone: "success" as const },
          { label: "Model", value: "gpt-4o", tone: "info" as const },
          { label: "Capabilities", value: "12/14 enabled", tone: "warning" as const },
        ].map((item) => (
          <div key={item.label} className="border border-foreground p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">{item.label}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-bold text-foreground">{item.value}</p>
              <StatusChip label={item.tone} tone={item.tone} />
            </div>
          </div>
        ))}
      </div>

      {/* Cron Health */}
      <ModulePanel
        title="Cron Health & Jobs"
        action={<Button variant="outline" size="sm" className="text-xs h-7 gap-1"><RefreshCw className="h-3 w-3" />Retry All Failed</Button>}
      >
        <div className="space-y-0">
          {[
            { name: "cron-sync", status: "running", interval: "5m", lastRun: "2m ago", health: "healthy", failures: 0 },
            { name: "cron-backup", status: "idle", interval: "2h", lastRun: "1h ago", health: "healthy", failures: 0 },
            { name: "cron-audit", status: "running", interval: "30m", lastRun: "12m ago", health: "warning", failures: 2 },
            { name: "cron-cleanup", status: "idle", interval: "1d", lastRun: "18h ago", health: "healthy", failures: 0 },
          ].map((cron) => (
            <div key={cron.name} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
              <span className="font-mono text-foreground w-28">{cron.name}</span>
              <StatusChip label={cron.status} tone={cron.status === "running" ? "success" : "neutral"} />
              <span className="text-foreground-muted">Every {cron.interval}</span>
              <span className="text-foreground-muted">Last: {cron.lastRun}</span>
              <StatusChip label={cron.health} tone={cron.health === "healthy" ? "success" : "warning"} />
              {cron.failures > 0 && (
                <span className="font-mono text-primary">{cron.failures} failures</span>
              )}
              <div className="ml-auto">
                <Button variant="outline" size="sm" className="text-[10px] h-6 px-2">Retry</Button>
              </div>
            </div>
          ))}
        </div>
      </ModulePanel>

      {/* Heartbeat Supervision */}
      <ModulePanel title="Heartbeat Supervision">
        <div className="space-y-0">
          {[
            { agent: "agent-alpha", lastBeat: "12s ago", interval: "30s", status: "healthy" },
            { agent: "agent-beta", lastBeat: "5m ago", interval: "30s", status: "timeout" },
            { agent: "agent-gamma", lastBeat: "8s ago", interval: "30s", status: "healthy" },
            { agent: "agent-delta", lastBeat: "2m ago", interval: "1m", status: "healthy" },
          ].map((hb) => (
            <div key={hb.agent} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
              <span className="font-mono text-foreground w-28">{hb.agent}</span>
              <span className="text-foreground-muted">Last: {hb.lastBeat}</span>
              <span className="text-foreground-muted">Interval: {hb.interval}</span>
              <StatusChip label={hb.status} tone={hb.status === "healthy" ? "success" : "danger"} />
              {hb.status === "timeout" && (
                <Button variant="outline" size="sm" className="text-[10px] h-6 px-2 ml-auto">Force Restart</Button>
              )}
            </div>
          ))}
        </div>
      </ModulePanel>

      {/* Long-Task Monitor */}
      <ModulePanel title="Long-Task Monitor" subtitle="Tasks running beyond expected duration">
        <div className="space-y-0">
          {[
            { task: "Embedding batch update", agent: "agent-delta", duration: "12m", expected: "5m", status: "overtime" },
            { task: "Full knowledge re-index", agent: "agent-alpha", duration: "45m", expected: "30m", status: "overtime" },
          ].map((lt, i) => (
            <div key={i} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
              <span className="text-foreground flex-1">{lt.task}</span>
              <span className="font-mono text-foreground-muted">{lt.agent}</span>
              <span className="font-mono text-primary">{lt.duration} / {lt.expected}</span>
              <StatusChip label={lt.status} tone="warning" />
              <Button variant="outline" size="sm" className="text-[10px] h-6 px-2">Cancel</Button>
            </div>
          ))}
        </div>
      </ModulePanel>
    </div>
  );
};

export default OperationsRuntime;
