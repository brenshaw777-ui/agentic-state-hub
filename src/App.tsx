import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
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
import Settings from "@/pages/Settings";
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
            <Route path="/mission-control" element={<MissionControl />} />
            <Route path="/mission-control/overview" element={<MissionControlOverview />} />
            <Route path="/mission-control/timeline" element={<MissionControlTimeline />} />
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
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
