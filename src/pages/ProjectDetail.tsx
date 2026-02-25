import { useParams, useNavigate } from "react-router-dom";
import ModulePanel from "@/components/dashboard/ModulePanel";
import StatusChip from "@/components/dashboard/StatusChip";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="border border-foreground p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/operations/projects")} className="text-foreground-muted hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-foreground">Q1 Migration</h2>
            <p className="text-xs font-mono text-foreground-muted">{id} · Due: Mar 31 · 72% complete</p>
          </div>
          <StatusChip label="on-track" tone="success" />
        </div>
      </div>

      {/* Milestone Timeline */}
      <ModulePanel title="Milestone Timeline">
        <div className="space-y-0">
          {[
            { name: "Planning Complete", date: "Feb 1", status: "done" },
            { name: "Data Migration Phase 1", date: "Feb 15", status: "done" },
            { name: "Data Migration Phase 2", date: "Mar 1", status: "in-progress" },
            { name: "Testing & Validation", date: "Mar 15", status: "upcoming" },
            { name: "Go-Live", date: "Mar 31", status: "upcoming" },
          ].map((ms, i) => (
            <div key={i} className="flex items-center gap-4 py-3 border-b border-border">
              <div className={`h-2.5 w-2.5 rounded-full ${ms.status === "done" ? "bg-foreground" : ms.status === "in-progress" ? "bg-primary" : "bg-border"}`} />
              <span className="text-xs font-medium text-foreground flex-1">{ms.name}</span>
              <span className="text-xs font-mono text-foreground-muted">{ms.date}</span>
              <StatusChip label={ms.status} tone={ms.status === "done" ? "success" : ms.status === "in-progress" ? "info" : "neutral"} />
            </div>
          ))}
        </div>
      </ModulePanel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Related Tasks */}
        <ModulePanel title="Related Tasks">
          <div className="space-y-0">
            {[
              { id: "TSK-041", title: "Migrate user data tables", status: "completed" },
              { id: "TSK-048", title: "Validate data integrity", status: "in-progress" },
              { id: "TSK-049", title: "Update API endpoints", status: "queued" },
              { id: "TSK-050", title: "Load testing", status: "queued" },
            ].map((t) => (
              <div key={t.id} className="flex items-center gap-3 py-2.5 border-b border-border text-xs">
                <span className="font-mono text-foreground-muted w-16">{t.id}</span>
                <span className="flex-1 text-foreground">{t.title}</span>
                <StatusChip label={t.status} tone={t.status === "completed" ? "success" : t.status === "in-progress" ? "info" : "neutral"} />
              </div>
            ))}
          </div>
        </ModulePanel>

        {/* Risks & Decisions */}
        <ModulePanel title="Risks & Decisions">
          <div className="space-y-3">
            <div className="p-3 border border-secondary/20 bg-secondary/5 text-xs">
              <p className="font-semibold text-secondary">RISK</p>
              <p className="text-foreground mt-1">External API dependency may delay Phase 2</p>
            </div>
            <div className="p-3 border border-border text-xs">
              <p className="font-semibold text-foreground">DECISION</p>
              <p className="text-foreground-muted mt-1">Proceed with parallel testing track to mitigate delay</p>
            </div>
          </div>
        </ModulePanel>
      </div>
    </div>
  );
};

export default ProjectDetail;
