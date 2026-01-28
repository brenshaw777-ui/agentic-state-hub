import { motion } from "framer-motion";

const ArchitectureDiagram = () => {
  return (
    <div className="mt-6 p-4 bg-background border border-border rounded-sm">
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
        {/* SDK/Agent */}
        <div className="px-3 py-1.5 bg-background border border-foreground rounded-sm text-foreground">
          SDK/Agent
        </div>
        
        {/* Arrow 1 */}
        <div className="flex items-center gap-1 text-foreground-muted">
          <span className="text-primary font-bold">→</span>
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* HTTP API */}
        <div className="px-3 py-1.5 bg-background border border-primary rounded-sm text-primary">
          HTTP API
        </div>
        
        {/* Arrow 2 */}
        <div className="flex items-center gap-1 text-foreground-muted">
          <span className="text-secondary font-bold">→</span>
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-secondary"
            animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
        
        {/* Postgres */}
        <div className="px-3 py-1.5 bg-background border border-secondary rounded-sm text-secondary">
          Postgres + pgvector
        </div>
        
        {/* Bidirectional Arrow */}
        <div className="flex items-center gap-1 text-foreground-muted">
          <span className="text-primary font-bold">↔</span>
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
        
        {/* Embedding Worker */}
        <div className="px-3 py-1.5 bg-background border border-primary rounded-sm text-primary">
          Embedding Worker
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
