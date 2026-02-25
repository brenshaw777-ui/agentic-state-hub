import ModulePanel from "@/components/dashboard/ModulePanel";
import { Button } from "@/components/ui/button";

const SettingsAPI = () => (
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
);

export default SettingsAPI;
