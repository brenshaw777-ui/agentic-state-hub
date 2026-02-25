import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MissionControlLayout from "@/components/dashboard/MissionControlLayout";
import MissionControl from "@/pages/MissionControl";
import MissionControlOverview from "@/pages/MissionControlOverview";
import MissionControlTimeline from "@/pages/MissionControlTimeline";
import Agents from "@/pages/Agents";
import AgentDetail from "@/pages/AgentDetail";
import Knowledge from "@/pages/Knowledge";
import KnowledgeGraph from "@/pages/KnowledgeGraph";
import KnowledgeMemories from "@/pages/KnowledgeMemories";
import KnowledgeDocs from "@/pages/KnowledgeDocs";
import Operations from "@/pages/Operations";
import OperationsTasks from "@/pages/OperationsTasks";
import OperationsProjects from "@/pages/OperationsProjects";
import ProjectDetail from "@/pages/ProjectDetail";
import OperationsMesh from "@/pages/OperationsMesh";
import OperationsRuntime from "@/pages/OperationsRuntime";
import Integrations from "@/pages/Integrations";
import Security from "@/pages/Security";
import SecurityVault from "@/pages/SecurityVault";
import Admin from "@/pages/Admin";
import SettingsLayout from "@/components/dashboard/SettingsLayout";
import SettingsProfile from "@/pages/SettingsProfile";
import SettingsAPI from "@/pages/SettingsAPI";
import SettingsBilling from "@/pages/SettingsBilling";
import SettingsPreferences from "@/pages/SettingsPreferences";
import SettingsSafety from "@/pages/SettingsSafety";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/mission-control" replace />} />
          <Route element={<DashboardLayout />}>
            <Route path="/mission-control" element={<MissionControlLayout />}>
              <Route index element={<MissionControl />} />
              <Route path="overview" element={<MissionControlOverview />} />
              <Route path="timeline" element={<MissionControlTimeline />} />
            </Route>
            <Route path="/agents" element={<Agents />} />
            <Route path="/agents/:id" element={<AgentDetail />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/knowledge/graph" element={<KnowledgeGraph />} />
            <Route path="/knowledge/memories" element={<KnowledgeMemories />} />
            <Route path="/knowledge/docs" element={<KnowledgeDocs />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/operations/tasks" element={<OperationsTasks />} />
            <Route path="/operations/projects" element={<OperationsProjects />} />
            <Route path="/operations/projects/:id" element={<ProjectDetail />} />
            <Route path="/operations/mesh" element={<OperationsMesh />} />
            <Route path="/operations/runtime" element={<OperationsRuntime />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/security" element={<Security />} />
            <Route path="/security/vault" element={<SecurityVault />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/settings" element={<SettingsLayout />}>
              <Route index element={<SettingsProfile />} />
              <Route path="api" element={<SettingsAPI />} />
              <Route path="billing" element={<SettingsBilling />} />
              <Route path="preferences" element={<SettingsPreferences />} />
              <Route path="safety" element={<SettingsSafety />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
