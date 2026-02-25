import { useState } from "react";
import ModulePanel from "@/components/dashboard/ModulePanel";
import { Search, Filter } from "lucide-react";

const memories = [
  { id: "mem-001", content: "User prefers concise responses under 200 words", agent: "agent-alpha", created: "2h ago", tags: ["preference", "format"] },
  { id: "mem-002", content: "Project deadline moved to March 15", agent: "agent-gamma", created: "4h ago", tags: ["project", "deadline"] },
  { id: "mem-003", content: "API rate limit is 1000 req/min for tier-2", agent: "agent-delta", created: "1d ago", tags: ["api", "limits"] },
  { id: "mem-004", content: "Team standup is at 9:30 AM EST daily", agent: "agent-alpha", created: "2d ago", tags: ["schedule", "team"] },
  { id: "mem-005", content: "Database migration requires downtime window", agent: "agent-beta", created: "3d ago", tags: ["ops", "database"] },
];

const KnowledgeMemories = () => {
  const [selected, setSelected] = useState<typeof memories[0] | null>(null);
  const [search, setSearch] = useState("");

  const filtered = memories.filter((m) =>
    m.content.toLowerCase().includes(search.toLowerCase()) || m.tags.some((t) => t.includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 border border-foreground p-3">
        <Search className="h-4 w-4 text-foreground-muted" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search memories..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-foreground-muted"
        />
        <Filter className="h-4 w-4 text-foreground-muted" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3 border border-foreground bg-card p-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Memory Feed</h3>
          <div className="space-y-0">
            {filtered.map((mem) => (
              <button
                key={mem.id}
                className={`w-full text-left py-3 border-b border-border hover:bg-muted/30 transition-colors ${selected?.id === mem.id ? "bg-muted/50" : ""}`}
                onClick={() => setSelected(mem)}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-xs text-foreground">{mem.content}</p>
                  <span className="text-[10px] font-mono text-foreground-muted shrink-0">{mem.created}</span>
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] font-mono text-foreground-muted">{mem.agent}</span>
                  {mem.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 border border-border text-foreground-muted">{t}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 border border-foreground bg-card p-4 sticky top-16 self-start">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Context</h3>
          {selected ? (
            <div className="space-y-3 text-xs">
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-foreground-muted">ID</span><span className="font-mono">{selected.id}</span></div>
                <div className="flex justify-between"><span className="text-foreground-muted">Agent</span><span className="font-mono">{selected.agent}</span></div>
                <div className="flex justify-between"><span className="text-foreground-muted">Created</span><span className="font-mono">{selected.created}</span></div>
              </div>
              <div className="border-t border-border pt-3">
                <p className="text-foreground">{selected.content}</p>
              </div>
              <div className="flex gap-1 flex-wrap">
                {selected.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 border border-foreground text-foreground">{t}</span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-xs text-foreground-muted">Select a memory to view context</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeMemories;
