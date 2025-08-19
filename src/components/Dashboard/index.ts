// Dashboard Components Index
export { default as Overview } from './Pages/Overview';
export { default as Requests } from './Pages/Requests';
export { default as KanbanBoard } from './Kanban/KanbanBoard';
export { default as Projects } from './Pages/Projects';
export { default as Clients } from './Pages/Clients';
export { default as Financial } from './Pages/Financial';
export { default as Reports } from './Pages/Reports';
export { default as Calendar } from './Pages/Calendar';
export { default as Settings } from './Pages/Settings';

// Import components for internal use
import Overview from './Pages/Overview';
import Requests from './Pages/Requests';
import KanbanBoard from './Kanban/KanbanBoard';
import Projects from './Pages/Projects';
import Clients from './Pages/Clients';
import Financial from './Pages/Financial';
import Reports from './Pages/Reports';
import Calendar from './Pages/Calendar';
import Settings from './Pages/Settings';

// Types
export interface DashboardSection {
  id: string;
  label: string;
  component: React.ComponentType;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

// Dashboard Navigation Configuration
import {
  BarChart3,
  FileText,
  Kanban,
  FolderOpen,
  Users,
  DollarSign,
  PieChart,
  Calendar as CalendarIcon,
  Settings as SettingsIcon
} from 'lucide-react';

export const dashboardSections: DashboardSection[] = [
  {
    id: 'overview',
    label: 'Visão Geral',
    component: Overview,
    icon: BarChart3,
    description: 'Dashboard principal com estatísticas e resumos'
  },
  {
    id: 'requests',
    label: 'Solicitações',
    component: Requests,
    icon: FileText,
    description: 'Gerenciamento de solicitações de estudos'
  },
  {
    id: 'kanban',
  label: 'Fluxo',
  component: KanbanBoard,
  icon: Kanban,
  description: 'Quadro de Fluxo para gestão de projetos'
  },
  {
    id: 'projects',
    label: 'Projetos',
    component: Projects,
    icon: FolderOpen,
    description: 'Gerenciamento de projetos da empresa'
  },
  {
    id: 'clients',
    label: 'Clientes',
    component: Clients,
    icon: Users,
    description: 'Gestão de clientes e relacionamentos'
  },
  {
    id: 'financial',
    label: 'Financeiro',
    component: Financial,
    icon: DollarSign,
    description: 'Controle financeiro e orçamentos'
  },
  {
    id: 'reports',
    label: 'Relatórios',
    component: Reports,
    icon: PieChart,
    description: 'Relatórios e análises detalhadas'
  },
  {
    id: 'calendar',
    label: 'Calendário',
    component: Calendar,
    icon: CalendarIcon,
    description: 'Agenda e eventos da empresa'
  },
  {
    id: 'settings',
    label: 'Configurações',
    component: Settings,
    icon: SettingsIcon,
    description: 'Configurações do sistema e usuário'
  }
];

// Helper function to get section by id
export const getDashboardSection = (id: string): DashboardSection | undefined => {
  return dashboardSections.find(section => section.id === id);
};

// Helper function to get all section ids
export const getDashboardSectionIds = (): string[] => {
  return dashboardSections.map(section => section.id);
};

// Helper function to get section component
export const getDashboardComponent = (id: string): React.ComponentType | null => {
  const section = getDashboardSection(id);
  return section ? section.component : null;
};