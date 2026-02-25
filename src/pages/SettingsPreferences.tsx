import ModulePanel from "@/components/dashboard/ModulePanel";
import { Button } from "@/components/ui/button";

const SettingsPreferences = () => (
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
);

export default SettingsPreferences;
