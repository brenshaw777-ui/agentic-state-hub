import { useState } from "react";
import KPICard from "@/components/dashboard/KPICard";
import ModulePanel from "@/components/dashboard/ModulePanel";
import StatusChip from "@/components/dashboard/StatusChip";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Search, Grid3X3, List, RefreshCw } from "lucide-react";

const agents = [
  { id: "agent-alpha", name: "Alpha", status: "healthy" as const, lastBeat: "12s ago", model: "gpt-4o", policy: "enforced" },
  { id: "agent-beta", name: "Beta", status: "unhealthy" as const, lastBeat: "5m ago", model: "gpt-4o", policy: "enforced" },
  { id: "agent-gamma", name: "Gamma", status: "healthy" as const, lastBeat: "8s ago", model: "claude-3.5", policy: "enforced" },
  { id: "agent-delta", name: "Delta", status: "idle" as const, lastBeat: "2m ago", model: "gpt-4o-mini", policy: "relaxed" },
  { id: "agent-epsilon", name: "Epsilon", status: "healthy" as const, lastBeat: "4s ago", model: "gpt-4o", policy: "enforced" },
  { id: "agent-zeta", name: "Zeta", status: "idle" as const, lastBeat: "1m ago", model: "claude-3.5", policy: "enforced" },
  { id: "agent-eta", name: "Eta", status: "healthy" as const, lastBeat: "15s ago", model: "gpt-4o", policy: "strict" },
];

const statusToTone = { healthy: "success" as const, unhealthy: "danger" as const, idle: "neutral" as const, stale: "warning" as const };

const Agents = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");

  const filtered = agents.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()) || a.id.includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Total Agents" value={7} />
        <KPICard title="Active" value={4} delta="" trend="up" />
        <KPICard title="Idle / Stale" value={2} hint="2 idle" />
        <KPICard title="Unhealthy" value={1} delta="" trend="down" hint="agent-beta" />
      </div>

      <div className="flex items-center gap-3 border border-foreground p-3">
        <Search className="h-4 w-4 text-foreground-muted" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search agents..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-foreground-muted"
        />
        <div className="flex gap-1">
          <button onClick={() => setView("grid")} className={`p-1.5 border ${view === "grid" ? "border-foreground bg-foreground text-background" : "border-border"}`}>
            <Grid3X3 className="h-3.5 w-3.5" />
          </button>
          <button onClick={() => setView("list")} className={`p-1.5 border ${view === "list" ? "border-foreground bg-foreground text-background" : "border-border"}`}>
            <List className="h-3.5 w-3.5" />
          </button>
        </div>
        <Button variant="outline" size="sm" className="text-xs h-7 gap-1">
          <RefreshCw className="h-3 w-3" />
          Sync All
        </Button>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((agent) => (
            <button
              key={agent.id}
              onClick={() => navigate(`/agents/${agent.id}`)}
              className="text-left border border-foreground p-4 card-accent-bar hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm font-bold text-foreground">{agent.name}</p>
                  <p className="text-xs font-mono text-foreground-muted">{agent.id}</p>
                </div>
                <StatusChip label={agent.status} tone={statusToTone[agent.status]} />
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between"><span className="text-foreground-muted">Last heartbeat</span><span className="font-mono">{agent.lastBeat}</span></div>
                <div className="flex justify-between"><span className="text-foreground-muted">Model</span><span className="font-mono">{agent.model}</span></div>
                <div className="flex justify-between"><span className="text-foreground-muted">Policy</span><span className="font-mono">{agent.policy}</span></div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="border border-foreground">
          {filtered.map((agent) => (
            <button
              key={agent.id}
              onClick={() => navigate(`/agents/${agent.id}`)}
              className="w-full text-left flex items-center gap-4 p-3 border-b border-border hover:bg-muted/30 transition-colors text-xs"
            >
              <span className="font-mono font-medium text-foreground w-28">{agent.id}</span>
              <StatusChip label={agent.status} tone={statusToTone[agent.status]} />
              <span className="text-foreground-muted">{agent.lastBeat}</span>
              <span className="font-mono text-foreground-muted">{agent.model}</span>
              <span className="ml-auto font-mono text-foreground-muted">{agent.policy}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Agents;
