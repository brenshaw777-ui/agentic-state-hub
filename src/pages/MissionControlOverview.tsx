import KPICard from "@/components/dashboard/KPICard";
import ModulePanel from "@/components/dashboard/ModulePanel";
import { TrendingUp, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";

const activityData = [
  { time: "00:00", ingestion: 120, queries: 80 },
  { time: "04:00", ingestion: 90, queries: 40 },
  { time: "08:00", ingestion: 200, queries: 150 },
  { time: "12:00", ingestion: 320, queries: 280 },
  { time: "16:00", ingestion: 280, queries: 200 },
  { time: "20:00", ingestion: 180, queries: 120 },
];

const jobData = [
  { day: "Mon", success: 45, failure: 2 },
  { day: "Tue", success: 52, failure: 1 },
  { day: "Wed", success: 38, failure: 5 },
  { day: "Thu", success: 60, failure: 0 },
  { day: "Fri", success: 55, failure: 3 },
  { day: "Sat", success: 20, failure: 0 },
  { day: "Sun", success: 15, failure: 1 },
];

const noisyAgents = [
  { name: "agent-alpha", events: 342, errors: 12, lastActive: "12s ago" },
  { name: "agent-gamma", events: 218, errors: 3, lastActive: "8s ago" },
  { name: "agent-beta", events: 156, errors: 28, lastActive: "5m ago" },
  { name: "agent-delta", events: 89, errors: 1, lastActive: "2m ago" },
];

const MissionControlOverview = () => {
  return (
    <div className="space-y-6">
      {/* Trend KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Total Events (24h)" value="1,842" delta="+12%" trend="up" />
        <KPICard title="Avg Response Time" value="142ms" delta="-8ms" trend="down" hint="Improving" />
        <KPICard title="Success Rate" value="97.3%" delta="+0.5%" trend="up" />
        <KPICard title="Active Sessions" value={24} delta="+3" trend="up" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ModulePanel title="Activity / Ingestion" icon={TrendingUp}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activityData}>
                <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="hsl(0 0% 45%)" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(0 0% 45%)" />
                <Tooltip contentStyle={{ border: "1px solid black", borderRadius: 0, fontSize: 12 }} />
                <Line type="monotone" dataKey="ingestion" stroke="hsl(4, 84%, 55%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="queries" stroke="hsl(0, 0%, 0%)" strokeWidth={1.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ModulePanel>

        <ModulePanel title="Job Success / Failure" icon={BarChart3}>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={jobData}>
                <XAxis dataKey="day" tick={{ fontSize: 10 }} stroke="hsl(0 0% 45%)" />
                <YAxis tick={{ fontSize: 10 }} stroke="hsl(0 0% 45%)" />
                <Tooltip contentStyle={{ border: "1px solid black", borderRadius: 0, fontSize: 12 }} />
                <Bar dataKey="success" fill="hsl(0, 0%, 0%)" />
                <Bar dataKey="failure" fill="hsl(4, 84%, 55%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ModulePanel>
      </div>

      {/* Noisy Agents */}
      <ModulePanel title="Top Noisy Agents" subtitle="Highest event volume">
        <div className="space-y-0">
          {noisyAgents.map((agent) => (
            <div key={agent.name} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
              <span className="font-mono font-medium text-foreground w-28">{agent.name}</span>
              <span className="text-foreground-muted">{agent.events} events</span>
              <span className={agent.errors > 10 ? "text-primary font-medium" : "text-foreground-muted"}>{agent.errors} errors</span>
              <span className="ml-auto text-foreground-muted">{agent.lastActive}</span>
            </div>
          ))}
        </div>
      </ModulePanel>

      {/* Triage */}
      <ModulePanel title="Triage Recommendations" subtitle="Suggested actions based on current state">
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 border border-primary/20 bg-primary/5 text-xs">
            <span className="font-semibold text-primary">HIGH</span>
            <span className="text-foreground">agent-beta has not responded in 5m — consider forced restart or escalation</span>
          </div>
          <div className="flex items-center gap-3 p-3 border border-secondary/20 bg-secondary/5 text-xs">
            <span className="font-semibold text-secondary">MED</span>
            <span className="text-foreground">Queue depth trending above threshold — review job scheduling</span>
          </div>
        </div>
      </ModulePanel>
    </div>
  );
};

export default MissionControlOverview;
