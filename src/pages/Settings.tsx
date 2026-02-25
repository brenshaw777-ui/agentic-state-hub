import { useRef, useState } from "react";
import ModulePanel from "@/components/dashboard/ModulePanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sections = [
  { id: "profile", label: "Profile & Identity" },
  { id: "api", label: "API Access & Keys" },
  { id: "billing", label: "Billing & Plan" },
  { id: "preferences", label: "Preferences" },
  { id: "safety", label: "Safety Defaults" },
];

const Settings = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollTo = (id: string) => {
    setActiveSection(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-6">
      {/* Top Section Nav */}
      <div className="border-b border-border">
        <nav className="flex gap-0 overflow-x-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-medium uppercase tracking-wider border-b-2 transition-colors ${
                activeSection === s.id
                  ? "border-primary text-foreground"
                  : "border-transparent text-foreground-muted hover:text-foreground hover:border-border"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Settings Content */}
      <div className="space-y-6 max-w-4xl">
        {/* Profile */}
        <div ref={(el) => { sectionRefs.current["profile"] = el; }}>
          <ModulePanel title="Profile & Identity">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-foreground-muted mb-1 block">Display Name</label>
                  <Input defaultValue="Admin User" className="text-xs h-8 border-foreground rounded-none" />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground-muted mb-1 block">Email</label>
                  <Input defaultValue="admin@agentos.io" className="text-xs h-8 border-foreground rounded-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-foreground-muted mb-1 block">Organization</label>
                <Input defaultValue="AgentOS Inc." className="text-xs h-8 border-foreground rounded-none" />
              </div>
              <Button className="bg-foreground text-background hover:bg-foreground/90 text-xs h-8">Save Profile</Button>
            </div>
          </ModulePanel>
        </div>

        {/* API Access */}
        <div ref={(el) => { sectionRefs.current["api"] = el; }}>
          <ModulePanel title="API Access & Keys">
            <div className="space-y-4">
              <div className="space-y-0">
                {[
                  { name: "Production Key", created: "30d ago", scope: "read, write" },
                  { name: "Development Key", created: "7d ago", scope: "read" },
                ].map((key) => (
                  <div key={key.name} className="flex items-center justify-between py-2.5 border-b border-border text-xs">
                    <div>
                      <p className="font-medium text-foreground">{key.name}</p>
                      <p className="text-[10px] text-foreground-muted">Created {key.created} · Scope: {key.scope}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-[10px] h-6 px-2">Revoke</Button>
                      <Button variant="outline" size="sm" className="text-[10px] h-6 px-2">Copy</Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="text-xs h-8">+ Generate New Key</Button>
            </div>
          </ModulePanel>
        </div>

        {/* Billing */}
        <div ref={(el) => { sectionRefs.current["billing"] = el; }}>
          <ModulePanel title="Billing & Plan">
            <div className="space-y-4">
              <div className="border border-foreground p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-foreground">Pro Plan</p>
                    <p className="text-xs text-foreground-muted">$99/mo · Next billing: Mar 1, 2026</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs h-7">Upgrade</Button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-foreground-muted">API Calls Used</span>
                  <span className="font-mono text-foreground">8,420 / 50,000</span>
                </div>
                <div className="h-1 bg-border"><div className="h-full bg-foreground" style={{ width: "16.8%" }} /></div>
              </div>
            </div>
          </ModulePanel>
        </div>

        {/* Preferences */}
        <div ref={(el) => { sectionRefs.current["preferences"] = el; }}>
          <ModulePanel title="Preferences">
            <div className="space-y-3">
              {[
                { label: "Notifications", value: "Email + In-App" },
                { label: "Timezone", value: "UTC-5 (EST)" },
                { label: "Language", value: "English" },
                { label: "Date Format", value: "YYYY-MM-DD" },
              ].map((pref) => (
                <div key={pref.label} className="flex items-center justify-between py-2.5 border-b border-border text-xs">
                  <span className="text-foreground">{pref.label}</span>
                  <span className="font-mono text-foreground-muted">{pref.value}</span>
                </div>
              ))}
              <Button className="bg-foreground text-background hover:bg-foreground/90 text-xs h-8">Save Preferences</Button>
            </div>
          </ModulePanel>
        </div>

        {/* Safety Defaults */}
        <div ref={(el) => { sectionRefs.current["safety"] = el; }}>
          <ModulePanel title="Safety Defaults">
            <div className="space-y-3">
              {[
                { label: "Max concurrent agent runs", value: "5" },
                { label: "Auto-pause on failure threshold", value: "3 failures / 10min" },
                { label: "Default model capability scope", value: "Restricted" },
                { label: "Require approval for write operations", value: "Enabled" },
              ].map((sf) => (
                <div key={sf.label} className="flex items-center justify-between py-2.5 border-b border-border text-xs">
                  <span className="text-foreground">{sf.label}</span>
                  <span className="font-mono text-foreground-muted">{sf.value}</span>
                </div>
              ))}
              <Button className="bg-foreground text-background hover:bg-foreground/90 text-xs h-8">Save Safety Defaults</Button>
            </div>
          </ModulePanel>
        </div>
      </div>
    </div>
  );
};

export default Settings;
