import ModulePanel from "@/components/dashboard/ModulePanel";
import { Button } from "@/components/ui/button";

const SettingsSafety = () => (
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
);

export default SettingsSafety;
