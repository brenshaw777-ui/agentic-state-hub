import ModulePanel from "@/components/dashboard/ModulePanel";
import { Button } from "@/components/ui/button";

const SettingsBilling = () => (
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
);

export default SettingsBilling;
