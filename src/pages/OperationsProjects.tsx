import KPICard from "@/components/dashboard/KPICard";
import ModulePanel from "@/components/dashboard/ModulePanel";
import StatusChip from "@/components/dashboard/StatusChip";
import { useNavigate } from "react-router-dom";

const projects = [
  { id: "proj-1", name: "Q1 Migration", progress: 72, status: "on-track", tasks: 24, blocked: 1, due: "Mar 31" },
  { id: "proj-2", name: "Security Hardening", progress: 45, status: "at-risk", tasks: 18, blocked: 3, due: "Apr 15" },
  { id: "proj-3", name: "Knowledge Expansion", progress: 88, status: "on-track", tasks: 12, blocked: 0, due: "Mar 20" },
  { id: "proj-4", name: "Agent v3 Rollout", progress: 15, status: "on-track", tasks: 30, blocked: 0, due: "May 01" },
];

const OperationsProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Active Projects" value={4} />
        <KPICard title="Total Tasks" value={84} />
        <KPICard title="Blocked Items" value={4} delta="" trend="down" />
        <KPICard title="On-Time Rate" value="75%" />
      </div>

      <div className="border border-foreground">
        <div className="grid grid-cols-12 gap-2 p-3 border-b border-foreground bg-muted/20 text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
          <span className="col-span-3">Project</span>
          <span className="col-span-2">Status</span>
          <span className="col-span-3">Progress</span>
          <span className="col-span-1">Tasks</span>
          <span className="col-span-1">Blocked</span>
          <span className="col-span-2">Due</span>
        </div>
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => navigate(`/operations/projects/${p.id}`)}
            className="w-full grid grid-cols-12 gap-2 p-3 border-b border-border text-xs hover:bg-muted/30 transition-colors items-center text-left"
          >
            <span className="col-span-3 font-medium text-foreground">{p.name}</span>
            <span className="col-span-2">
              <StatusChip label={p.status} tone={p.status === "at-risk" ? "danger" : "success"} />
            </span>
            <span className="col-span-3">
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-border">
                  <div className={`h-full ${p.status === "at-risk" ? "bg-primary" : "bg-foreground"}`} style={{ width: `${p.progress}%` }} />
                </div>
                <span className="font-mono text-foreground-muted w-8 text-right">{p.progress}%</span>
              </div>
            </span>
            <span className="col-span-1 font-mono text-foreground-muted">{p.tasks}</span>
            <span className={`col-span-1 font-mono ${p.blocked > 0 ? "text-primary" : "text-foreground-muted"}`}>{p.blocked}</span>
            <span className="col-span-2 font-mono text-foreground-muted">{p.due}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ModulePanel title="Risks & Blockers">
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 border border-primary/20 bg-primary/5 text-xs">
              <span className="font-semibold text-primary">RISK</span>
              <span className="text-foreground">Security Hardening — 3 blocked tasks need approval escalation</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-secondary/20 bg-secondary/5 text-xs">
              <span className="font-semibold text-secondary">RISK</span>
              <span className="text-foreground">Q1 Migration — dependency on external API rollout</span>
            </div>
          </div>
        </ModulePanel>

        <ModulePanel title="Next Actions">
          <div className="space-y-0">
            {[
              "Escalate Security Hardening blockers to admin",
              "Review Knowledge Expansion final deliverables",
              "Schedule Agent v3 kickoff meeting",
            ].map((action, i) => (
              <div key={i} className="flex items-center gap-2 py-2.5 border-b border-border text-xs">
                <span className="text-primary font-mono">→</span>
                <span className="text-foreground">{action}</span>
              </div>
            ))}
          </div>
        </ModulePanel>
      </div>
    </div>
  );
};

export default OperationsProjects;
