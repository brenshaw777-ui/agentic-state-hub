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
  },
  {
    name: "Github",
    icon: Github,
    href: "#",
    description: "View the source",
  },
  {
    name: "Docs",
    icon: BookOpen,
    href: "#docs",
    description: "Read the documentation",
  },
  {
    name: "X",
    icon: XLogo,
    href: "#",
    description: "Follow for updates",
  },
];

const LinksSection = () => {
  return (
    <section id="links" className="py-8 md:py-12 relative">
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
            CONNECT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
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
              className="group relative p-4 md:p-6 rounded-sm border border-border bg-background transition-all duration-300 hover:border-foreground card-accent-bar"
            >
              <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                <div className="p-2 md:p-3 rounded-sm border border-border text-foreground-muted group-hover:border-primary group-hover:text-primary transition-all">
                  <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <span className="font-semibold text-foreground">
                      {link.name}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
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
