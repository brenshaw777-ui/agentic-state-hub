import { motion } from "framer-motion";
import { FolderTree, History, Timer, Users, Search, Code } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: FolderTree,
    title: "Filesystem paths",
    bullets: [
      "Stable keys like `/user/preferences/tone`",
      "List directories, glob patterns",
    ],
    color: "primary" as const,
  },
  {
    icon: History,
    title: "Version history",
    bullets: [
      "Every write creates a version",
      "Audit changes with history()",
    ],
    color: "primary" as const,
  },
  {
    icon: Timer,
    title: "TTL (expiry)",
    bullets: [
      "Session state that expires",
      "Expired behaves like 'not found'",
    ],
    color: "secondary" as const,
  },
  {
    icon: Users,
    title: "Tenant isolation",
    bullets: [
      "Strong tenant boundary",
      "No cross-tenant queries",
    ],
    color: "secondary" as const,
  },
  {
    icon: Search,
    title: "Cost-safe semantic search",
    bullets: [
      "Opt-in indexing only",
      "Quotas + dedupe by hash",
    ],
    color: "accent" as const,
  },
  {
    icon: Code,
    title: "SDK + API",
    bullets: [
      "TypeScript-first",
      "Simple HTTP endpoints",
    ],
    color: "accent" as const,
  },
];

const FeatureGrid = () => {
  return (
    <section id="product" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Inspectable memory for AI agents
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Everything your agents need to remember, organized with filesystem semantics and protected by cost-safe design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
