import { motion } from "framer-motion";

const ArchitectureDiagram = () => {
  return (
    <div className="mt-6 p-4 bg-background-panel/50 border border-border rounded-lg">
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
        {/* SDK/Agent */}
        <div className="px-3 py-1.5 bg-background-panel-alt border border-border rounded text-foreground">
          SDK/Agent
        </div>
        
        {/* Arrow 1 */}
        <div className="flex items-center gap-1 text-foreground-muted">
          <span>→</span>
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        {/* HTTP API */}
        <div className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded text-primary">
          HTTP API
        </div>
        
        {/* Arrow 2 */}
        <div className="flex items-center gap-1 text-foreground-muted">
          <span>→</span>
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-secondary"
            animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
        
        {/* Postgres */}
        <div className="px-3 py-1.5 bg-secondary/10 border border-secondary/30 rounded text-secondary">
          Postgres + pgvector
        </div>
        
        {/* Bidirectional Arrow */}
        <div className="flex items-center gap-1 text-foreground-muted">
          <span>↔</span>
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-accent"
            animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
        
        {/* Embedding Worker */}
        <div className="px-3 py-1.5 bg-accent/10 border border-accent/30 rounded text-accent">
          Embedding Worker
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDiagram;
