import { useState } from "react";
import ModulePanel from "@/components/dashboard/ModulePanel";
import StatusChip from "@/components/dashboard/StatusChip";
import { Button } from "@/components/ui/button";
import { Filter, LayoutGrid, List } from "lucide-react";

const tasks = [
  { id: "TSK-041", title: "Update knowledge embeddings", status: "in-progress", owner: "agent-alpha", priority: "high", sla: "2h" },
  { id: "TSK-042", title: "Review security audit findings", status: "blocked", owner: "agent-gamma", priority: "critical", sla: "1h" },
  { id: "TSK-043", title: "Deploy model update v2.4", status: "queued", owner: "system", priority: "medium", sla: "4h" },
  { id: "TSK-044", title: "Process user feedback batch", status: "in-progress", owner: "agent-delta", priority: "medium", sla: "3h" },
  { id: "TSK-045", title: "Rotate vault credentials", status: "queued", owner: "system", priority: "high", sla: "6h" },
  { id: "TSK-046", title: "Knowledge graph re-index", status: "completed", owner: "agent-alpha", priority: "low", sla: "—" },
  { id: "TSK-047", title: "Update onboarding flow", status: "queued", owner: "agent-beta", priority: "low", sla: "8h" },
];

const statusTone = { "in-progress": "success" as const, blocked: "danger" as const, queued: "neutral" as const, completed: "info" as const };
const columns = ["queued", "in-progress", "blocked", "completed"];

const OperationsTasks = () => {
  const [view, setView] = useState<"kanban" | "list">("kanban");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 border border-foreground p-3 text-xs">
        <Filter className="h-4 w-4 text-foreground-muted" />
        {["All", "Critical", "High", "Medium", "Low"].map((f) => (
          <button key={f} className={`px-2 py-1 border ${f === "All" ? "border-foreground bg-foreground text-background" : "border-border"}`}>
            {f}
          </button>
        ))}
        <div className="flex-1" />
        <button onClick={() => setView("kanban")} className={`p-1.5 border ${view === "kanban" ? "border-foreground bg-foreground text-background" : "border-border"}`}>
          <LayoutGrid className="h-3.5 w-3.5" />
        </button>
        <button onClick={() => setView("list")} className={`p-1.5 border ${view === "list" ? "border-foreground bg-foreground text-background" : "border-border"}`}>
          <List className="h-3.5 w-3.5" />
        </button>
        <Button variant="outline" size="sm" className="text-xs h-7">Batch Edit</Button>
      </div>

      {view === "kanban" ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {columns.map((col) => (
            <div key={col} className="border border-foreground">
              <div className="p-3 border-b border-foreground bg-muted/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">{col}</h4>
                <span className="text-[10px] text-foreground-muted">{tasks.filter((t) => t.status === col).length} tasks</span>
              </div>
              <div className="p-2 space-y-2">
                {tasks.filter((t) => t.status === col).map((task) => (
                  <div key={task.id} className="border border-border p-3 card-accent-bar hover:bg-muted/30 transition-colors">
                    <p className="text-xs font-medium text-foreground">{task.title}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] font-mono text-foreground-muted">{task.id}</span>
                      <span className={`text-[10px] font-mono uppercase ${task.priority === "critical" ? "text-primary" : task.priority === "high" ? "text-secondary" : "text-foreground-muted"}`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border border-foreground">
          <div className="grid grid-cols-12 gap-2 p-3 border-b border-foreground bg-muted/20 text-[10px] font-bold uppercase tracking-wider text-foreground-muted">
            <span className="col-span-1">ID</span>
            <span className="col-span-4">Title</span>
            <span className="col-span-2">Status</span>
            <span className="col-span-2">Owner</span>
            <span className="col-span-1">Priority</span>
            <span className="col-span-1">SLA</span>
          </div>
          {tasks.map((task) => (
            <div key={task.id} className="grid grid-cols-12 gap-2 p-3 border-b border-border text-xs hover:bg-muted/30 transition-colors items-center">
              <span className="col-span-1 font-mono text-foreground-muted">{task.id}</span>
              <span className="col-span-4 text-foreground">{task.title}</span>
              <span className="col-span-2"><StatusChip label={task.status} tone={statusTone[task.status as keyof typeof statusTone]} /></span>
              <span className="col-span-2 font-mono text-foreground-muted">{task.owner}</span>
              <span className={`col-span-1 font-mono uppercase ${task.priority === "critical" ? "text-primary" : task.priority === "high" ? "text-secondary" : "text-foreground-muted"}`}>{task.priority}</span>
              <span className="col-span-1 font-mono text-foreground-muted">{task.sla}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OperationsTasks;
