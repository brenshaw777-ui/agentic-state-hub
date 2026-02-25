import { useState } from "react";
import ModulePanel from "@/components/dashboard/ModulePanel";
import EventRow from "@/components/dashboard/EventRow";
import StatusChip from "@/components/dashboard/StatusChip";
import { Button } from "@/components/ui/button";
import { Filter, CheckSquare } from "lucide-react";

const allEvents = [
  { time: "09:45", severity: "info" as const, source: "agent-alpha", message: "Knowledge sync completed — 142 docs indexed" },
  { time: "09:42", severity: "critical" as const, source: "agent-beta", message: "Heartbeat timeout — initiating recovery" },
  { time: "09:38", severity: "warning" as const, source: "runtime", message: "Queue depth alert triggered" },
  { time: "09:35", severity: "success" as const, source: "agent-gamma", message: "Report generation completed successfully" },
  { time: "09:30", severity: "info" as const, source: "system", message: "Scheduled maintenance window opened" },
  { time: "09:28", severity: "warning" as const, source: "vault", message: "API key nearing expiration — 48h remaining" },
  { time: "09:22", severity: "info" as const, source: "agent-delta", message: "Embedding update started — 500 vectors queued" },
  { time: "09:18", severity: "success" as const, source: "agent-alpha", message: "Task completed: inbox processing (42 items)" },
  { time: "09:15", severity: "critical" as const, source: "runtime", message: "Memory usage exceeding 90% on worker-3" },
  { time: "09:10", severity: "info" as const, source: "system", message: "Backup snapshot created successfully" },
  { time: "09:05", severity: "warning" as const, source: "agent-epsilon", message: "Slow response detected — avg 2.4s" },
  { time: "09:00", severity: "success" as const, source: "system", message: "Daily health check passed" },
];

const MissionControlTimeline = () => {
  const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<typeof allEvents[0] | null>(null);

  const filteredEvents = selectedSeverity
    ? allEvents.filter((e) => e.severity === selectedSeverity)
    : allEvents;

  return (
    <div className="space-y-4">
      {/* Filter Bar */}
      <div className="flex items-center gap-3 border border-foreground p-3">
        <Filter className="h-4 w-4 text-foreground-muted" />
        <span className="text-xs font-medium text-foreground-muted">Severity:</span>
        {["critical", "warning", "info", "success"].map((sev) => (
          <button
            key={sev}
            onClick={() => setSelectedSeverity(selectedSeverity === sev ? null : sev)}
            className={`text-xs font-mono px-2 py-1 border transition-colors ${
              selectedSeverity === sev ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
            }`}
          >
            {sev}
          </button>
        ))}
        <div className="flex-1" />
        <Button variant="outline" size="sm" className="text-xs h-7 gap-1">
          <CheckSquare className="h-3 w-3" />
          Batch Actions
        </Button>
      </div>

      {/* Event Stream + Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3 border border-foreground bg-card">
          <div className="p-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Event Stream</h3>
            <div className="space-y-0">
              {filteredEvents.map((event, i) => (
                <button
                  key={i}
                  className={`w-full text-left ${selectedEvent === event ? "bg-muted/50" : ""}`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <EventRow {...event} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 border border-foreground bg-card sticky top-16 self-start">
          <div className="p-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Event Detail</h3>
            {selectedEvent ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <StatusChip label={selectedEvent.severity} tone={
                      selectedEvent.severity === "critical" ? "danger" :
                      selectedEvent.severity === "warning" ? "warning" :
                      selectedEvent.severity === "success" ? "success" : "info"
                    } />
                    <span className="font-mono text-xs text-foreground-muted">{selectedEvent.time}</span>
                  </div>
                  <p className="text-sm text-foreground">{selectedEvent.message}</p>
                  <div className="border-t border-border pt-3 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground-muted">Source</span>
                      <span className="font-mono text-foreground">{selectedEvent.source}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground-muted">Event ID</span>
                      <span className="font-mono text-foreground">evt_{Math.random().toString(36).slice(2, 8)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="text-xs h-7 bg-foreground text-background hover:bg-foreground/90">Acknowledge</Button>
                  <Button variant="outline" size="sm" className="text-xs h-7">Escalate</Button>
                </div>
              </div>
            ) : (
              <p className="text-xs text-foreground-muted">Select an event to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionControlTimeline;
