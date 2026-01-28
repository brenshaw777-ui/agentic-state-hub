import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const setupCommands = `# Setup
pnpm db:up
pnpm db:migrate
pnpm db:seed
pnpm create:key

# Start development
pnpm dev:api`;

const sdkExample = `import { AgentFS } from '@agentfs/sdk';

const fs = new AgentFS({ 
  apiKey: process.env.AGENTFS_KEY 
});

// Write with TTL
await fs.put(
  '/user/123/prefs/tone', 
  { tone: 'direct' }, 
  { ttl: '30d', searchable: true }
);

// Read deterministically
const prefs = await fs.get(
  '/user/123/prefs/tone'
);

// Search indexed entries
const results = await fs.search(
  'user preferences', 
  { limit: 5 }
);`;

const DeveloperSection = () => {
  return (
    <section id="developers" className="py-8 md:py-12 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Developer-first. <span className="text-secondary">Postgres-first.</span>
          </h2>
          <p className="text-foreground-muted">
            Get started in minutes with our TypeScript SDK.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Setup commands */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Start</h3>
            <div className="bg-background border border-foreground rounded-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-foreground">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                </div>
                <span className="text-xs font-mono text-foreground-muted ml-2">terminal</span>
              </div>
              <pre className="p-4 overflow-x-auto">
                <code className="text-sm font-mono">
                  {setupCommands.split('\n').map((line, i) => (
                    <div key={i} className={line.startsWith('#') ? 'text-foreground-muted' : 'text-foreground'}>
                      {line.startsWith('#') ? line : <><span className="text-primary">$</span> {line}</>}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* SDK example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">SDK Example</h3>
            <div className="bg-background border border-foreground rounded-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-foreground">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                </div>
                <span className="text-xs font-mono text-foreground-muted ml-2">index.ts</span>
              </div>
              <pre className="p-3 sm:p-4 overflow-hidden">
                <code className="text-[10px] sm:text-xs md:text-sm font-mono text-foreground whitespace-pre-wrap break-words">
                  {sdkExample}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button className="bg-foreground text-background hover:bg-foreground/90 group">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Docs
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Button>
          <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
            GitHub
          </Button>
        </motion.div>

        {/* MVP constraints box */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-4 border border-secondary rounded-sm bg-background text-center"
        >
          <p className="text-sm text-foreground-muted font-mono">
            <span className="text-secondary font-semibold">MVP constraints:</span>{" "}
            No WebSockets. No Solana. No ACL sharing. Yet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperSection;
