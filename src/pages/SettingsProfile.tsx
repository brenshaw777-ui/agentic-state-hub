import ModulePanel from "@/components/dashboard/ModulePanel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SettingsProfile = () => (
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
);

export default SettingsProfile;
