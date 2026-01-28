import { motion } from "framer-motion";
import { AlertTriangle, FileSearch, DollarSign } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Context disappears between sessions",
  },
  {
    icon: FileSearch,
    title: "Chat logs are unstructured and hard to audit",
  },
  {
    icon: DollarSign,
    title: "Semantic memory can get expensive fast",
  },
];

const ProblemSolution = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Problem statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Agents forget. Logs are messy.{" "}
            <span className="text-destructive">Vectors aren't inspectable.</span>
          </h2>
        </motion.div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 md:p-6 bg-background-panel border border-border rounded-lg hover:border-destructive/30 transition-colors"
            >
              <problem.icon className="w-6 h-6 md:w-8 md:h-8 text-destructive/70 mb-3 md:mb-4" />
              <p className="text-sm md:text-base text-foreground font-medium">{problem.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-4 md:p-6 lg:p-8 bg-primary/5 border border-primary/20 rounded-lg text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-3">
            AgentFS makes memory{" "}
            <span className="text-primary">structured</span>,{" "}
            <span className="text-secondary">inspectable</span>, and{" "}
            <span className="text-accent">cost-safe</span>.
          </p>
          <p className="text-sm text-foreground-muted font-mono">
            Filesystem semantics: predictable paths + list/glob + history + TTL.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
