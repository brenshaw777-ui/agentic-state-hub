import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TerminalCard from "./TerminalCard";

interface UseCase {
  id: string;
  label: string;
  outcomes: string[];
  terminalLines: string[];
}

const useCases: UseCase[] = [
  {
    id: "telegram",
    label: "Telegram Bots",
    outcomes: [
      "Store per-user preferences that persist across sessions",
      "Manage per-chat configuration and allowlists",
      "Handle multi-step flows with automatic TTL expiry",
      "Audit what changed with full version history",
    ],
    terminalLines: [
      "/tg/user/<uid>/prefs/tone",
      "/tg/chat/<cid>/allowlists/tokens",
      "/tg/user/<uid>/state/active_flow  # ttl 600",
      "",
      "# All paths are auditable",
      "agentfs> history /tg/user/123/prefs/tone",
    ],
  },
  {
    id: "support",
    label: "Support Agents",
    outcomes: [
      "Index ticket summaries for semantic retrieval",
      "Store user preferences across conversations",
      "Track resolution patterns and escalations",
      "Cost-safe search with quota controls",
    ],
    terminalLines: [
      "/support/tickets/<id>/summary  # searchable",
      "/user/<id>/prefs/*",
      "/support/agents/<aid>/metrics",
      "",
      "# Semantic search with quotas",
      "agentfs> search \"billing issue\" --limit 5",
    ],
  },
  {
    id: "alerts",
    label: "Alerts / Trading Bots",
    outcomes: [
      "Maintain watchlists and alert configurations",
      "Store risk limits and position data",
      "Automatic cooldown expiry with TTL",
      "Deterministic reads for reliable trading logic",
    ],
    terminalLines: [
      "/alerts/<uid>/watchlist",
      "/risk/<uid>/limits",
      "/alerts/<uid>/cooldowns/*  # ttl auto-expire",
      "",
      "# Fast, deterministic reads",
      "agentfs> get /risk/user_42/limits",
    ],
  },
  {
    id: "multi-agent",
    label: "Multi-Agent Systems",
    outcomes: [
      "Separate namespaces per agent_id",
      "Store shared state across agent boundaries",
      "Version control for agent handoffs",
      "Strong tenant isolation between systems",
    ],
    terminalLines: [
      "/agents/<agent_id>/state/*",
      "/shared/context/<session_id>",
      "/agents/<agent_id>/handoff/last",
      "",
      "# Tenant isolation enforced",
      "# No cross-tenant queries possible",
    ],
  },
];

const UseCaseTabs = () => {
  const [activeTab, setActiveTab] = useState("telegram");
  const activeCase = useCases.find((uc) => uc.id === activeTab)!;

  return (
    <section id="use-cases" className="py-20 md:py-24 bg-background-panel/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for bots and agent systems.
          </h2>
          <p className="text-foreground-muted">
            See how AgentFS fits your use case.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === uc.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background-panel border border-border text-foreground-muted hover:border-border-bright hover:text-foreground"
              }`}
            >
              {uc.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Outcomes */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                What you can do:
              </h3>
              <ul className="space-y-3">
                {activeCase.outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Terminal */}
            <TerminalCard lines={activeCase.terminalLines} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCaseTabs;
