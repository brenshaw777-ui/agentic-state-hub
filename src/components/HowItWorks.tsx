import { motion } from "framer-motion";
import { PenLine, FileText, Sparkles, Search } from "lucide-react";

const steps = [
  {
    icon: PenLine,
    number: "01",
    title: "Write facts to paths",
    description: "Store structured data at predictable filesystem-like paths with optional TTL.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Read deterministically",
    description: "Retrieve data by path — no guessing, no vector lottery. Just get what you stored.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Optionally index curated entries",
    description: "Mark specific entries as searchable. Control costs with quotas and deduplication.",
  },
  {
    icon: Search,
    number: "04",
    title: "Retrieve by meaning when needed",
    description: "Semantic search for indexed entries only. Cost-safe by design.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How AgentFS works <span className="text-foreground-muted">(in 60 seconds)</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-background-panel border border-border rounded-lg"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
              
              <span className="text-xs font-mono text-primary mb-3 block">
                {step.number}
              </span>
              <step.icon className="w-8 h-8 text-foreground-muted mb-4" />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-foreground-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Simple flow diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-background-panel/50 border border-border rounded-lg"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-mono text-foreground-muted">
            <span className="px-3 py-1 border border-border rounded">Agent</span>
            <span className="text-primary">→ put()</span>
            <span className="px-3 py-1 border border-primary/30 bg-primary/5 rounded text-primary">AgentFS</span>
            <span className="text-secondary">→ get()</span>
            <span className="px-3 py-1 border border-border rounded">Agent</span>
            <span className="mx-2 text-foreground-muted/50">|</span>
            <span className="text-accent">search()</span>
            <span className="text-foreground-muted/50">(opt-in)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
