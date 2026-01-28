import { motion } from "framer-motion";
import { FolderTree, History, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroTerminal from "./HeroTerminal";
import ArchitectureDiagram from "./ArchitectureDiagram";

const valueProofs = [
  {
    icon: FolderTree,
    text: 'Deterministic paths: "/user/preferences/tone"',
  },
  {
    icon: History,
    text: "Versioned + auditable",
  },
  {
    icon: Shield,
    text: "Cost-safe indexing (opt-in + quotas)",
  },
];

const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden">
      {/* Scanline effect for hero only */}
      <div className="absolute inset-0 bg-scanlines opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 md:mb-6">
              Memory that agents can{" "}
              <span className="text-primary">actually trust.</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-foreground-muted mb-6 md:mb-8 max-w-xl">
              Give your agents memory they can trust: structured, inspectable, and searchable on demand.
            </p>

            {/* Value proofs */}
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {valueProofs.map((proof, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 text-foreground-muted"
                >
                  <proof.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-mono">{proof.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 md:mb-6">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold px-8"
              >
                Get started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-border-bright hover:bg-muted hover:border-primary/50 transition-all duration-300"
              >
                Read docs
              </Button>
            </div>

            {/* Trust line */}
            <p className="text-xs text-foreground-muted/70 font-mono">
              Ready for Telegram bots. Built for infra-grade reliability.
            </p>
          </motion.div>

          {/* Right column - Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <HeroTerminal />
            <ArchitectureDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
