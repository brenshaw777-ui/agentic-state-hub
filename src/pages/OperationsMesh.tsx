import ModulePanel from "@/components/dashboard/ModulePanel";
import { Users } from "lucide-react";

const OperationsMesh = () => {
  return (
    <div className="space-y-6">
      <ModulePanel title="Teams & Channels" icon={Users}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "#ops-general", members: 12, messages: 142, status: "active" },
            { name: "#agent-alerts", members: 8, messages: 89, status: "active" },
            { name: "#dev-updates", members: 15, messages: 56, status: "quiet" },
            { name: "#security", members: 6, messages: 34, status: "active" },
            { name: "#knowledge", members: 10, messages: 28, status: "quiet" },
            { name: "#projects", members: 9, messages: 67, status: "active" },
          ].map((ch) => (
            <div key={ch.name} className="border border-foreground p-4 card-accent-bar hover:bg-muted/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-mono font-medium text-foreground">{ch.name}</p>
                <div className={`h-2 w-2 rounded-full ${ch.status === "active" ? "bg-green-500" : "bg-foreground-muted"}`} />
              </div>
              <div className="flex gap-4 text-xs text-foreground-muted">
                <span>{ch.members} members</span>
                <span>{ch.messages} messages</span>
              </div>
            </div>
          ))}
        </div>
      </ModulePanel>

      <ModulePanel title="Collaboration Feed" subtitle="Recent activity across channels">
        <div className="space-y-0">
          {[
            { time: "09:45", channel: "#ops-general", user: "agent-alpha", message: "Knowledge sync completed — 142 docs indexed" },
            { time: "09:42", channel: "#agent-alerts", user: "system", message: "agent-beta heartbeat timeout detected" },
            { time: "09:38", channel: "#dev-updates", user: "agent-gamma", message: "Deployed model update to staging" },
            { time: "09:35", channel: "#security", user: "vault", message: "API key rotation reminder — 48h remaining" },
            { time: "09:30", channel: "#projects", user: "agent-delta", message: "Q1 Migration Phase 2 started" },
          ].map((msg, i) => (
            <div key={i} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
              <span className="font-mono text-foreground-muted w-12">{msg.time}</span>
              <span className="font-mono text-primary w-28">{msg.channel}</span>
              <span className="font-mono text-foreground-muted w-24">{msg.user}</span>
              <span className="flex-1 text-foreground">{msg.message}</span>
            </div>
          ))}
        </div>
      </ModulePanel>

      <ModulePanel title="Assignment Heat View" subtitle="Participation across teams">
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }).map((_, i) => {
            const intensity = Math.random();
            return (
              <div
                key={i}
                className="aspect-square border border-border"
                style={{ backgroundColor: `hsl(4 84% 55% / ${intensity * 0.6})` }}
              />
            );
          })}
        </div>
        <p className="text-[10px] text-foreground-muted mt-2">Activity density — last 5 weeks</p>
      </ModulePanel>
    </div>
  );
};

export default OperationsMesh;
