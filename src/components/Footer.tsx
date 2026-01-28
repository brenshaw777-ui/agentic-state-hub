import { Github } from "lucide-react";
import agentfsLogo from "@/assets/agentfs-logo.png";

// Official X logo component
const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="docs" className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-foreground/90">
                <img src={agentfsLogo} alt="AgentFS" className="h-7 w-7" />
              </div>
              <span className="font-mono text-lg font-bold text-primary">AgentFS</span>
            </div>
            <p className="mt-3 text-sm text-foreground-muted max-w-sm">
              Multi-tenant, filesystem-like memory store for AI agents. 
              Postgres-first with opt-in semantic search.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#docs" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 text-foreground-muted hover:text-foreground hover:bg-muted rounded-lg transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 text-foreground-muted hover:text-foreground hover:bg-muted rounded-lg transition-all"
              >
                <XLogo className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-foreground-muted">
              hello@agentfs.dev
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-foreground-muted/70">
            © 2024 AgentFS. All rights reserved.
          </p>
          <p className="text-xs text-foreground-muted/70 font-mono">
            AgentFS is MVP-first. Search is opt-in. Quotas protect costs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
