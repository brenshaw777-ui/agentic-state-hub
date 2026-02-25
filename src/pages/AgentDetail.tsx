import { useParams, useNavigate } from "react-router-dom";
import ModulePanel from "@/components/dashboard/ModulePanel";
import StatusChip from "@/components/dashboard/StatusChip";
import EventRow from "@/components/dashboard/EventRow";
import { Button } from "@/components/ui/button";
import { RefreshCw, RotateCcw, Eye, ArrowLeft } from "lucide-react";

const AgentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Agent Header */}
      <div className="border border-foreground p-4">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate("/agents")} className="text-foreground-muted hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-foreground">{id}</h2>
              <StatusChip label="healthy" tone="success" />
            </div>
            <p className="text-xs font-mono text-foreground-muted mt-1">Model: gpt-4o · Policy: enforced · Last heartbeat: 12s ago</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="text-xs h-7 bg-foreground text-background hover:bg-foreground/90 gap-1">
              <RefreshCw className="h-3 w-3" /> Sync Now
            </Button>
            <Button variant="outline" size="sm" className="text-xs h-7 gap-1">
              <RotateCcw className="h-3 w-3" /> Restore
            </Button>
            <Button variant="outline" size="sm" className="text-xs h-7 gap-1">
              <Eye className="h-3 w-3" /> Runtime
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Profile Files */}
        <ModulePanel title="Profile Files" subtitle="Configuration and version history">
          <div className="space-y-0">
            {["system-prompt.md", "skills.yaml", "policies.json", "memory-config.toml"].map((file) => (
              <div key={file} className="flex items-center justify-between py-2 border-b border-border text-xs">
                <span className="font-mono text-foreground">{file}</span>
                <span className="text-foreground-muted">v3 · 2h ago</span>
              </div>
            ))}
          </div>
        </ModulePanel>

        {/* Skills */}
        <ModulePanel title="Skills & Enforcement" subtitle="Capabilities and constraints">
          <div className="space-y-0">
            {[
              { skill: "web-search", enforced: true },
              { skill: "code-execution", enforced: true },
              { skill: "file-write", enforced: false },
              { skill: "email-send", enforced: true },
            ].map((s) => (
              <div key={s.skill} className="flex items-center justify-between py-2 border-b border-border text-xs">
                <span className="font-mono text-foreground">{s.skill}</span>
                <StatusChip label={s.enforced ? "enforced" : "relaxed"} tone={s.enforced ? "success" : "warning"} />
              </div>
            ))}
          </div>
        </ModulePanel>
      </div>

      {/* Runs / Artifacts */}
      <ModulePanel title="Recent Runs" subtitle="Execution history">
        <div className="space-y-0">
          {[
            { id: "run-001", task: "Knowledge sync", status: "completed", duration: "42s" },
            { id: "run-002", task: "Inbox processing", status: "completed", duration: "1m 12s" },
            { id: "run-003", task: "Report generation", status: "failed", duration: "3m 05s" },
          ].map((run) => (
            <div key={run.id} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
              <span className="font-mono text-foreground-muted w-16">{run.id}</span>
              <span className="flex-1 text-foreground">{run.task}</span>
              <StatusChip label={run.status} tone={run.status === "completed" ? "success" : "danger"} />
              <span className="font-mono text-foreground-muted">{run.duration}</span>
            </div>
          ))}
        </div>
      </ModulePanel>

      {/* Audit Events */}
      <ModulePanel title="Audit Events" subtitle="Recent agent activity">
        <div className="space-y-0">
          <EventRow time="09:45" severity="info" source={id || ""} message="Knowledge sync completed" />
          <EventRow time="09:30" severity="info" source={id || ""} message="Profile files updated" />
          <EventRow time="09:15" severity="warning" source={id || ""} message="Slow response detected" />
        </div>
      </ModulePanel>
    </div>
  );
};

export default AgentDetail;
