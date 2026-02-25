import KPICard from "@/components/dashboard/KPICard";
import ModulePanel from "@/components/dashboard/ModulePanel";
import EventRow from "@/components/dashboard/EventRow";
import ActionCard from "@/components/dashboard/ActionCard";
import StatusChip from "@/components/dashboard/StatusChip";
import { Activity, AlertTriangle, Play, Eye, RotateCcw, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const mockQueue = [
  { id: "job-401", agent: "agent-alpha", task: "Sync knowledge base", status: "running" as const, eta: "2m" },
  { id: "job-402", agent: "agent-beta", task: "Process inbox", status: "queued" as const, eta: "5m" },
  { id: "job-403", agent: "agent-gamma", task: "Generate report", status: "running" as const, eta: "1m" },
  { id: "job-404", agent: "agent-delta", task: "Update embeddings", status: "queued" as const, eta: "8m" },
];

const mockAlerts = [
  { time: "09:42", severity: "critical" as const, source: "agent-beta", message: "Heartbeat lost — no response for 5m" },
  { time: "09:38", severity: "warning" as const, source: "runtime", message: "Job queue depth exceeding threshold (>50)" },
  { time: "09:31", severity: "warning" as const, source: "vault", message: "API key rotation due in 48h" },
];

const mockEvents = [
  { time: "09:45", severity: "info" as const, source: "agent-alpha", message: "Knowledge sync completed — 142 docs indexed" },
  { time: "09:42", severity: "critical" as const, source: "agent-beta", message: "Heartbeat timeout — initiating recovery" },
  { time: "09:38", severity: "warning" as const, source: "runtime", message: "Queue depth alert triggered" },
  { time: "09:35", severity: "success" as const, source: "agent-gamma", message: "Report generation completed successfully" },
  { time: "09:30", severity: "info" as const, source: "system", message: "Scheduled maintenance window opened" },
];

const MissionControl = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* KPI Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Platform Status" value="Live" delta="99.97%" trend="up" hint="Uptime last 30d" />
        <KPICard title="Active Agents" value={7} delta="+2" trend="up" hint="3 idle, 1 stale" />
        <KPICard title="Failed Jobs (24h)" value={3} delta="-40%" trend="down" hint="Down from 5 yesterday" />
        <KPICard title="Restore Readiness" value="98%" delta="+1%" trend="up" hint="Last drill: 2h ago" />
      </div>

      {/* Execution Queue + Critical Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <ModulePanel
          title="Execution Queue"
          subtitle="Active and pending jobs"
          icon={Play}
          className="lg:col-span-3"
          action={<Button variant="outline" size="sm" className="text-xs h-7" onClick={() => navigate("/operations/runtime")}>View all</Button>}
        >
          <div className="space-y-0">
            {mockQueue.map((job) => (
              <div key={job.id} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
                <span className="font-mono text-foreground-muted w-16">{job.id}</span>
                <span className="font-mono text-foreground w-24 truncate">{job.agent}</span>
                <span className="flex-1 text-foreground">{job.task}</span>
                <StatusChip label={job.status} tone={job.status === "running" ? "success" : "neutral"} />
                <span className="font-mono text-foreground-muted w-8 text-right">{job.eta}</span>
              </div>
            ))}
          </div>
        </ModulePanel>

        <ModulePanel
          title="Critical Alerts"
          subtitle="Requires attention"
          icon={AlertTriangle}
          className="lg:col-span-2"
          action={<Button variant="outline" size="sm" className="text-xs h-7" onClick={() => navigate("/mission-control/timeline")}>All events</Button>}
        >
          <div className="space-y-0">
            {mockAlerts.map((alert, i) => (
              <EventRow key={i} {...alert} />
            ))}
          </div>
        </ModulePanel>
      </div>

      {/* Fleet Pulse */}
      <ModulePanel title="Fleet Pulse" subtitle="Agent health overview" icon={Activity}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "agent-alpha", status: "healthy", lastBeat: "12s ago" },
            { name: "agent-beta", status: "unhealthy", lastBeat: "5m ago" },
            { name: "agent-gamma", status: "healthy", lastBeat: "8s ago" },
            { name: "agent-delta", status: "idle", lastBeat: "2m ago" },
            { name: "agent-epsilon", status: "healthy", lastBeat: "4s ago" },
            { name: "agent-zeta", status: "idle", lastBeat: "1m ago" },
            { name: "agent-eta", status: "healthy", lastBeat: "15s ago" },
          ].map((agent) => (
            <button
              key={agent.name}
              onClick={() => navigate(`/agents/${agent.name}`)}
              className="flex items-center gap-3 border border-border p-3 hover:bg-muted/30 transition-colors text-left"
            >
              <div className={`h-2 w-2 rounded-full ${
                agent.status === "healthy" ? "bg-green-500" :
                agent.status === "unhealthy" ? "bg-primary" : "bg-foreground-muted"
              }`} />
              <div>
                <p className="text-xs font-mono font-medium text-foreground">{agent.name}</p>
                <p className="text-[10px] text-foreground-muted">{agent.lastBeat}</p>
              </div>
            </button>
          ))}
        </div>
      </ModulePanel>

      {/* Recent Critical Events */}
      <ModulePanel title="Recent Events" subtitle="Last 30 minutes" icon={Activity}>
        <div className="space-y-0">
          {mockEvents.map((event, i) => (
            <EventRow key={i} {...event} />
          ))}
        </div>
      </ModulePanel>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ActionCard title="Runtime Supervision" description="Monitor jobs and crons" icon={Eye} onClick={() => navigate("/operations/runtime")} />
        <ActionCard title="Tasks Queue" description="View and manage tasks" icon={ListChecks} onClick={() => navigate("/operations/tasks")} />
        <ActionCard title="Inspect Fleet" description="Agent health and status" icon={Activity} onClick={() => navigate("/agents")} />
        <ActionCard title="Restore Drill" description="Test restore readiness" icon={RotateCcw} priority="medium" />
      </div>
    </div>
  );
};

export default MissionControl;
