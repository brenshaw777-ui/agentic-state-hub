import { Github, Twitter } from "lucide-react";
import agentfsLogo from "@/assets/agentfs-logo.png";

const Footer = () => {
  return (
    <footer id="docs" className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={agentfsLogo} alt="AgentFS" className="h-10 w-10" />
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
                <Twitter className="w-5 h-5" />
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
