import { motion } from "framer-motion";
import { Send, Github, BookOpen, ExternalLink } from "lucide-react";

// Official X logo component
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const links = [
  {
    name: "Telegram",
    icon: Send,
    href: "#",
    description: "Join our community",
    color: "hover:border-[#0088cc] hover:text-[#0088cc]",
  },
  {
    name: "Github",
    icon: Github,
    href: "#",
    description: "View the source",
    color: "hover:border-foreground hover:text-foreground",
  },
  {
    name: "Docs",
    icon: BookOpen,
    href: "#docs",
    description: "Read the documentation",
    color: "hover:border-secondary hover:text-secondary",
  },
  {
    name: "X",
    icon: XLogo,
    href: "#",
    description: "Follow for updates",
    color: "hover:border-foreground hover:text-foreground",
  },
];

const LinksSection = () => {
  return (
    <section id="links" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-mono border border-primary/30 rounded-full text-primary mb-4">
            CONNECT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="text-primary">Community</span>
          </h2>
          <p className="text-foreground-muted max-w-lg mx-auto">
            Connect with us across platforms
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("#") ? undefined : "_blank"}
              rel={link.href.startsWith("#") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative p-4 md:p-6 rounded-xl border border-border bg-background-panel transition-all duration-300 ${link.color}`}
            >
              {/* Terminal corner accent */}
              <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-primary/30 group-hover:border-current transition-colors" />
              <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-primary/30 group-hover:border-current transition-colors" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-primary/30 group-hover:border-current transition-colors" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-primary/30 group-hover:border-current transition-colors" />

              <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-lg bg-muted text-foreground-muted group-hover:bg-current/10 transition-all">
                  <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <span className="font-semibold text-foreground">
                      {link.name}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-foreground-muted">
                    {link.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
