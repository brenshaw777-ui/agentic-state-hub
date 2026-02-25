import KPICard from "@/components/dashboard/KPICard";
import ModulePanel from "@/components/dashboard/ModulePanel";
import ActionCard from "@/components/dashboard/ActionCard";
import { useNavigate } from "react-router-dom";
import { Network, BookOpen, Brain, Search } from "lucide-react";

const Knowledge = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Freshness Score" value="94%" delta="+2%" trend="up" hint="Docs updated < 24h" />
        <KPICard title="Coverage" value="87%" delta="+5%" trend="up" hint="Indexed vs total" />
        <KPICard title="Index Health" value="Good" hint="No errors" />
        <KPICard title="Retrieval Latency" value="45ms" delta="-12ms" trend="down" hint="p95 response" />
      </div>

      <ModulePanel title="Topology Summary" subtitle="Knowledge architecture overview" icon={Network}>
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { label: "Entities", value: "2,847" },
            { label: "Relations", value: "8,421" },
            { label: "Documents", value: "342" },
          ].map((stat) => (
            <div key={stat.label} className="border border-border p-4">
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-foreground-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </ModulePanel>

      <ModulePanel title="Unresolved Extraction Issues" icon={Search}>
        <div className="space-y-0">
          {[
            { doc: "api-reference.md", issue: "3 unlinked entities detected", priority: "medium" },
            { doc: "architecture.md", issue: "Outdated references (>30d)", priority: "low" },
            { doc: "onboarding-guide.md", issue: "Missing entity classifications", priority: "high" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-2.5 border-b border-border text-xs">
              <span className="font-mono text-foreground w-40 truncate">{item.doc}</span>
              <span className="flex-1 text-foreground-muted">{item.issue}</span>
              <span className={`font-mono uppercase ${item.priority === "high" ? "text-primary" : item.priority === "medium" ? "text-secondary" : "text-foreground-muted"}`}>
                {item.priority}
              </span>
            </div>
          ))}
        </div>
      </ModulePanel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ActionCard title="Knowledge Graph" description="Explore entity relationships" icon={Network} onClick={() => navigate("/knowledge/graph")} />
        <ActionCard title="Memories" description="Browse contextual recall" icon={Brain} onClick={() => navigate("/knowledge/memories")} />
        <ActionCard title="Documents" description="Manage knowledge base" icon={BookOpen} onClick={() => navigate("/knowledge/docs")} />
      </div>
    </div>
  );
};

export default Knowledge;
