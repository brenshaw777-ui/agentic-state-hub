import ModulePanel from "@/components/dashboard/ModulePanel";
import StatusChip from "@/components/dashboard/StatusChip";
import EventRow from "@/components/dashboard/EventRow";
import { Button } from "@/components/ui/button";

const Integrations = () => {
  return (
    <div className="space-y-6">
      {/* Connectivity Matrix */}
      <ModulePanel title="Connectivity Matrix" subtitle="Provider and channel status">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "OpenAI", type: "Provider", status: "connected", latency: "45ms" },
            { name: "Anthropic", type: "Provider", status: "connected", latency: "62ms" },
            { name: "Slack", type: "Channel", status: "connected", latency: "120ms" },
            { name: "GitHub", type: "Webhook", status: "connected", latency: "88ms" },
            { name: "Jira", type: "Channel", status: "degraded", latency: "450ms" },
            { name: "PagerDuty", type: "Webhook", status: "disconnected", latency: "—" },
          ].map((int) => (
            <div key={int.name} className="border border-foreground p-4 card-accent-bar">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-bold text-foreground">{int.name}</p>
                  <p className="text-[10px] font-mono text-foreground-muted">{int.type}</p>
                </div>
                <StatusChip label={int.status} tone={int.status === "connected" ? "success" : int.status === "degraded" ? "warning" : "danger"} />
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-foreground-muted">Latency: {int.latency}</span>
                <Button variant="outline" size="sm" className="text-[10px] h-6 px-2">Test</Button>
              </div>
            </div>
          ))}
        </div>
      </ModulePanel>

      {/* Health Events */}
      <ModulePanel title="Integration Health Events">
        <div className="space-y-0">
          <EventRow time="09:45" severity="warning" source="Jira" message="Response time degraded — avg 450ms (threshold: 200ms)" />
          <EventRow time="09:30" severity="critical" source="PagerDuty" message="Connection lost — webhook endpoint unreachable" />
          <EventRow time="09:15" severity="info" source="GitHub" message="Webhook successfully validated" />
          <EventRow time="09:00" severity="success" source="OpenAI" message="API key rotated successfully" />
        </div>
      </ModulePanel>

      {/* Runtime Binding Status */}
      <ModulePanel title="Runtime Binding Status">
        <div className="space-y-0">
          {[
            { binding: "LLM Provider", target: "OpenAI → gpt-4o", status: "active" },
            { binding: "Notification Channel", target: "Slack → #agent-alerts", status: "active" },
            { binding: "Issue Tracker", target: "Jira → Project AGENT", status: "degraded" },
            { binding: "Incident Mgmt", target: "PagerDuty → Service: prod", status: "disconnected" },
          ].map((b) => (
            <div key={b.binding} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
              <span className="font-medium text-foreground w-36">{b.binding}</span>
              <span className="flex-1 font-mono text-foreground-muted">{b.target}</span>
              <StatusChip label={b.status} tone={b.status === "active" ? "success" : b.status === "degraded" ? "warning" : "danger"} />
            </div>
          ))}
        </div>
      </ModulePanel>

      {/* Actions */}
      <div className="flex gap-3">
        <Button className="bg-foreground text-background hover:bg-foreground/90 text-xs">Test All Connections</Button>
        <Button variant="outline" className="text-xs">Reconnect Failed</Button>
        <Button variant="outline" className="text-xs">Validate Webhooks</Button>
        <Button variant="outline" className="text-xs">Manage API Keys</Button>
      </div>
    </div>
  );
};

export default Integrations;
