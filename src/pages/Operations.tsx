import KPICard from "@/components/dashboard/KPICard";
import ModulePanel from "@/components/dashboard/ModulePanel";
import ActionCard from "@/components/dashboard/ActionCard";
import StatusChip from "@/components/dashboard/StatusChip";
import { useNavigate } from "react-router-dom";
import { ListChecks, FolderKanban, Users, Monitor } from "lucide-react";

const Operations = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Open Tasks" value={18} delta="+3" trend="up" />
        <KPICard title="Blocked" value={2} hint="Awaiting approval" />
        <KPICard title="Pending Updates" value={5} delta="-2" trend="down" />
        <KPICard title="Failed Jobs (24h)" value={3} hint="2 retried" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ModulePanel title="Tasks Queue Snapshot" icon={ListChecks}>
          <div className="space-y-0">
            {[
              { id: "TSK-041", title: "Update knowledge embeddings", status: "in-progress", owner: "agent-alpha" },
              { id: "TSK-042", title: "Review security audit findings", status: "blocked", owner: "agent-gamma" },
              { id: "TSK-043", title: "Deploy model update v2.4", status: "queued", owner: "system" },
              { id: "TSK-044", title: "Process user feedback batch", status: "in-progress", owner: "agent-delta" },
            ].map((task) => (
              <div key={task.id} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
                <span className="font-mono text-foreground-muted w-16">{task.id}</span>
                <span className="flex-1 text-foreground">{task.title}</span>
                <StatusChip label={task.status} tone={task.status === "blocked" ? "danger" : task.status === "in-progress" ? "success" : "neutral"} />
                <span className="font-mono text-foreground-muted">{task.owner}</span>
              </div>
            ))}
          </div>
        </ModulePanel>

        <ModulePanel title="Runtime Supervision" icon={Monitor}>
          <div className="space-y-0">
            {[
              { name: "cron-sync", status: "running", next: "5m", health: "healthy" },
              { name: "cron-backup", status: "idle", next: "2h", health: "healthy" },
              { name: "cron-audit", status: "running", next: "30m", health: "warning" },
            ].map((cron) => (
              <div key={cron.name} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
                <span className="font-mono text-foreground w-28">{cron.name}</span>
                <StatusChip label={cron.status} tone={cron.status === "running" ? "success" : "neutral"} />
                <span className="text-foreground-muted">Next: {cron.next}</span>
                <StatusChip label={cron.health} tone={cron.health === "healthy" ? "success" : "warning"} />
              </div>
            ))}
          </div>
        </ModulePanel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ModulePanel title="Projects Progress" icon={FolderKanban}>
          <div className="space-y-3">
            {[
              { name: "Q1 Migration", progress: 72, status: "on-track" },
              { name: "Security Hardening", progress: 45, status: "at-risk" },
              { name: "Knowledge Expansion", progress: 88, status: "on-track" },
            ].map((p) => (
              <div key={p.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">{p.name}</span>
                  <span className={p.status === "at-risk" ? "text-primary font-mono" : "text-foreground-muted font-mono"}>{p.progress}%</span>
                </div>
                <div className="h-1 bg-border w-full">
                  <div className={`h-full ${p.status === "at-risk" ? "bg-primary" : "bg-foreground"}`} style={{ width: `${p.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </ModulePanel>

        <ModulePanel title="Mesh Activity" icon={Users}>
          <div className="space-y-0">
            {[
              { channel: "#ops-general", activity: "12 messages", lastActive: "5m ago" },
              { channel: "#agent-alerts", activity: "8 messages", lastActive: "2m ago" },
              { channel: "#dev-updates", activity: "3 messages", lastActive: "1h ago" },
            ].map((ch) => (
              <div key={ch.channel} className="flex items-center justify-between py-2.5 border-b border-border text-xs">
                <span className="font-mono text-foreground">{ch.channel}</span>
                <span className="text-foreground-muted">{ch.activity}</span>
                <span className="text-foreground-muted">{ch.lastActive}</span>
              </div>
            ))}
          </div>
        </ModulePanel>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ActionCard title="Tasks" description="Full task board" icon={ListChecks} onClick={() => navigate("/operations/tasks")} />
        <ActionCard title="Projects" description="Track projects" icon={FolderKanban} onClick={() => navigate("/operations/projects")} />
        <ActionCard title="Mesh" description="Team collaboration" icon={Users} onClick={() => navigate("/operations/mesh")} />
        <ActionCard title="Runtime" description="System supervision" icon={Monitor} onClick={() => navigate("/operations/runtime")} />
      </div>
    </div>
  );
};

export default Operations;
