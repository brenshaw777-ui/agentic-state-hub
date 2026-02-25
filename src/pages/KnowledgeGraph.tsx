import ModulePanel from "@/components/dashboard/ModulePanel";
import { Button } from "@/components/ui/button";

const KnowledgeGraph = () => {
  return (
    <div className="space-y-4">
      {/* Controls Bar */}
      <div className="flex items-center gap-3 border border-foreground p-3 text-xs">
        <span className="text-foreground-muted">Depth:</span>
        {[1, 2, 3].map((d) => (
          <button key={d} className={`px-2 py-1 border ${d === 2 ? "border-foreground bg-foreground text-background" : "border-border"}`}>
            {d}
          </button>
        ))}
        <div className="h-4 w-px bg-border" />
        <span className="text-foreground-muted">Nodes:</span>
        {["All", "Agents", "Docs", "Tasks"].map((n) => (
          <button key={n} className={`px-2 py-1 border ${n === "All" ? "border-foreground bg-foreground text-background" : "border-border"}`}>
            {n}
          </button>
        ))}
        <div className="flex-1" />
        <input placeholder="Search nodes..." className="bg-transparent border border-border px-2 py-1 text-xs outline-none w-40" />
      </div>

      {/* Graph Canvas Placeholder */}
      <div className="border border-foreground bg-card min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-64 h-64 mx-auto">
            {/* Simulated graph nodes */}
            {[
              { x: 128, y: 64, label: "Agent Alpha", size: 8 },
              { x: 48, y: 128, label: "API Docs", size: 6 },
              { x: 208, y: 128, label: "Knowledge", size: 7 },
              { x: 80, y: 200, label: "Tasks", size: 5 },
              { x: 176, y: 200, label: "Policies", size: 6 },
              { x: 128, y: 160, label: "System", size: 9 },
            ].map((node, i) => (
              <div key={i}>
                <div
                  className="absolute rounded-full bg-foreground"
                  style={{ left: node.x - node.size / 2, top: node.y - node.size / 2, width: node.size, height: node.size }}
                />
                <span
                  className="absolute text-[9px] font-mono text-foreground-muted"
                  style={{ left: node.x + node.size, top: node.y - 5 }}
                >
                  {node.label}
                </span>
              </div>
            ))}
            {/* Simulated edges */}
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
              <line x1="128" y1="64" x2="128" y2="160" stroke="hsl(0 0% 75%)" strokeWidth="1" />
              <line x1="128" y1="160" x2="48" y2="128" stroke="hsl(4 84% 55%)" strokeWidth="1" />
              <line x1="128" y1="160" x2="208" y2="128" stroke="hsl(0 0% 75%)" strokeWidth="1" />
              <line x1="128" y1="160" x2="80" y2="200" stroke="hsl(0 0% 75%)" strokeWidth="1" />
              <line x1="128" y1="160" x2="176" y2="200" stroke="hsl(4 84% 55%)" strokeWidth="1" />
            </svg>
          </div>
          <p className="text-xs text-foreground-muted mt-4">Interactive graph — connect to live API for full visualization</p>
        </div>
      </div>

      {/* Legend / Metrics */}
      <div className="flex items-center gap-6 border border-foreground p-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-foreground" />
          <span className="text-foreground-muted">Entity Node</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-px w-4 bg-foreground-muted" />
          <span className="text-foreground-muted">Relation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-px w-4 bg-primary" />
          <span className="text-foreground-muted">Active Path</span>
        </div>
        <div className="flex-1" />
        <span className="text-foreground-muted">2,847 nodes · 8,421 edges</span>
      </div>
    </div>
  );
};

export default KnowledgeGraph;
