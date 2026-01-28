import { useState } from "react";
import { Copy, Check, Coins, Tag, Database, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE";

const tokenData = [
  { label: "Name", value: "AgentFS", icon: Tag },
  { label: "Symbol", value: "$AFS", icon: Coins },
  { label: "Supply", value: "1,000,000,000", icon: Database },
  { label: "Launched on", value: "Pump.fun", icon: Rocket },
];

const Tokenomics = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tokenomics" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-mono border border-primary/30 rounded-full text-primary mb-4">
            TOKENOMICS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Token <span className="text-primary">Details</span>
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            The native token powering the AgentFS ecosystem
          </p>
        </motion.div>

        {/* Token Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
          {tokenData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-xl border border-border bg-background-panel hover:border-primary/50 transition-all duration-300">
                {/* Terminal corner accent */}
                <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-primary/50" />
                <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-primary/50" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-primary/50" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-primary/50" />

                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-foreground-muted uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contract Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-xs font-mono text-foreground-muted text-center mb-3 uppercase tracking-wider">
            Contract Address
          </p>
          <button
            onClick={handleCopy}
            className="w-full group relative flex items-center justify-between gap-4 p-4 rounded-xl border border-border bg-background-panel hover:border-primary/50 hover:bg-background-panel-alt transition-all duration-300"
          >
            {/* Terminal styling */}
            <div className="absolute inset-0 bg-scanlines opacity-30 rounded-xl pointer-events-none" />
            
            <code className="text-sm md:text-base font-mono text-foreground-muted group-hover:text-foreground truncate transition-colors">
              {CONTRACT_ADDRESS}
            </code>
            
            <div className="flex items-center gap-2 text-foreground-muted group-hover:text-primary transition-colors shrink-0">
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="text-xs font-mono hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-xs font-mono hidden sm:inline">Click to copy</span>
                </>
              )}
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
