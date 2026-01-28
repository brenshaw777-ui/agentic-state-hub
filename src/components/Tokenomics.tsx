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
    <section id="tokenomics" className="py-8 md:py-12 relative border-y border-border">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-mono border border-foreground rounded-sm text-foreground mb-4">
            TOKENOMICS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Token <span className="text-primary">Details</span>
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            The native token powering the AgentFS ecosystem
          </p>
        </motion.div>

        {/* Token Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto mb-6 md:mb-8">
          {tokenData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-4 md:p-6 rounded-sm border border-border bg-background hover:border-foreground card-accent-bar transition-all duration-300">
                <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 rounded-sm border border-border text-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-foreground-muted uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-base md:text-lg font-semibold text-foreground">
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
            className="w-full group relative flex items-center justify-between gap-4 p-4 rounded-sm border border-foreground bg-background hover:bg-muted transition-all duration-300"
          >
            <code className="text-sm md:text-base font-mono text-foreground truncate transition-colors">
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
