import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface Milestone {
  phase: string;
  title: string;
  items: string[];
  status: "done" | "current" | "future";
}

const milestones: Milestone[] = [
  {
    phase: "Phase 1",
    title: "Core Storage",
    items: ["CRUD operations", "List/glob patterns", "Version history", "TTL expiry"],
    status: "done",
  },
  {
    phase: "Phase 2",
    title: "Search + Cost Controls",
    items: ["Opt-in semantic indexing", "Quota enforcement", "Dedupe by content hash", "pgvector integration"],
    status: "current",
  },
  {
    phase: "Phase 3",
    title: "SDK + Hardening",
    items: ["TypeScript SDK", "Rate limiting", "Observability", "Documentation"],
    status: "current",
  },
  {
    phase: "v1.1",
    title: "Changes Feed",
    items: ["Polling-based changes", "Webhook notifications", "Event replay"],
    status: "future",
  },
];

const deferredItems = [
  "WebSockets — polling works for MVP",
  "Solana integration — only if wedge is proven",
  "ACL sharing — off-chain first",
  "Qdrant migration — pgvector sufficient for now",
];

const RoadmapTimeline = () => {
  return (
    <section id="roadmap" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Roadmap
          </h2>
          <p className="text-foreground-muted">
            MVP-first. Ship fast, harden later.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-16 pb-8 last:pb-0"
              >
                {/* Status icon */}
                <div className="absolute left-0 w-8 md:w-12 flex justify-center">
                  {milestone.status === "done" ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : milestone.status === "current" ? (
                    <Circle className="w-6 h-6 text-secondary fill-secondary/20" />
                  ) : (
                    <Clock className="w-6 h-6 text-foreground-muted" />
                  )}
                </div>

                {/* Content */}
                <div className={`p-4 bg-background-panel border rounded-lg ${
                  milestone.status === "current" ? "border-secondary/30" : "border-border"
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-primary">{milestone.phase}</span>
                    <h3 className="font-semibold">{milestone.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {milestone.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs px-2 py-1 bg-muted rounded text-foreground-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Deferred items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto p-4 border border-border bg-background-panel/50 rounded-lg"
        >
          <h4 className="text-sm font-semibold text-foreground-muted mb-3">
            Explicitly deferred:
          </h4>
          <ul className="grid md:grid-cols-2 gap-2">
            {deferredItems.map((item, i) => (
              <li key={i} className="text-xs text-foreground-muted/70 flex items-start gap-2">
                <span className="text-foreground-muted/40">—</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;
