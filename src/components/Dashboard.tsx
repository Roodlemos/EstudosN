import React, { useState, useRef, useEffect, Suspense, lazy, memo, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { useStudyRequests } from '../context/StudyRequestContext';
import { useTheme } from '../context/ThemeContext';
import { KanbanProvider } from '../context/KanbanContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  FileText, 
  Users, 
  Settings, 
  LogOut, 
  Bell,
  Search,
  Plus,
  Calendar,
  TrendingUp,
  Activity,
  Zap,
  Database,
  ChevronRight,
  Filter,
  MapPin,
  Clock,
  Mail,
  CheckCircle,
  XCircle,
  Eye,
  DollarSign,
  CreditCard,
  PieChart,
  TrendingDown,
  Wifi,
  Shield,
  Cloud,
  Phone,
  Kanban,
  User,
  Tag,
  MessageSquare,
  Paperclip,
  Flag,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  Archive,
  AlertCircle,
  Star,
  ArrowRight,
  ArrowLeft,
  Save,
  X,
  Menu,
  Home,
  Briefcase,
  FolderOpen,
  Building,
  Loader2,
  ChevronDown
} from 'lucide-react';
import logoImage from '../assets/images/logo_nexo_branca.svg';
import ThemeToggle from './ThemeToggle';
import DashboardSEO from './SEO/DashboardSEO';

// Lazy load dashboard components for better performance and SEO
const Overview = lazy(() => import('./Dashboard/Pages/Overview'));
const Requests = lazy(() => import('./Dashboard/Pages/Requests'));
const KanbanBoard = lazy(() => import('./Dashboard/Kanban/KanbanBoard'));
const Projects = lazy(() => import('./Dashboard/Pages/Projects'));
const Clients = lazy(() => import('./Dashboard/Pages/Clients'));
const Financial = lazy(() => import('./Dashboard/Pages/Financial'));
const Reports = lazy(() => import('./Dashboard/Pages/Reports'));
const CalendarComponent = lazy(() => import('./Dashboard/Pages/Calendar'));
const SettingsComponent = lazy(() => import('./Dashboard/Pages/Settings'));

// Optimized Loading component for Suspense fallback with memo
const LoadingSpinner: React.FC<{ message?: string }> = memo(({ message = 'Carregando...' }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`flex items-center justify-center min-h-[400px] ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="text-center">
        <Loader2 className={`w-8 h-8 animate-spin mx-auto mb-4 ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`} />
        <p className={`text-sm font-medium ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>{message}</p>
      </div>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

// Memoized Sidebar Section Component
const SidebarSection: React.FC<{
  section: typeof dashboardSections[0];
  isActive: boolean;
  isCollapsed: boolean;
  isDark: boolean;
  onClick: () => void;
}> = memo(({ section, isActive, isCollapsed, isDark, onClick }) => {
  const Icon = section.icon;
  
  return (
    <motion.button
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
        isActive
          ? isDark
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-blue-50 text-blue-600 border border-blue-200'
          : isDark
          ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      }`}
    >
      <Icon className={`w-5 h-5 flex-shrink-0 ${
        isActive && !isDark ? 'text-blue-600' : ''
      }`} />
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-start overflow-hidden"
          >
            <span className="font-medium text-sm whitespace-nowrap">
              {section.label}
            </span>
            {section.description && (
              <span className={`text-xs opacity-75 whitespace-nowrap ${
                isActive && !isDark ? 'text-blue-500' : isDark ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {section.description}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
});

SidebarSection.displayName = 'SidebarSection';

// Memoized Notification Item Component
const NotificationItem: React.FC<{
  notification: {
    id: number;
    title: string;
    message: string;
    time: string;
    type: string;
    unread: boolean;
  };
  isDark: boolean;
}> = memo(({ notification, isDark }) => {
  const getNotificationIcon = () => {
    switch (notification.type) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <Bell className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <motion.div
      whileHover={{ x: 2 }}
      className={`p-3 border-b transition-colors duration-200 ${
        isDark ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'
      } ${notification.unread ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}`}
    >
      <div className="flex items-start gap-3">
        {getNotificationIcon()}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className={`text-sm font-medium truncate ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {notification.title}
            </h4>
            {notification.unread && (
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 ml-2" />
            )}
          </div>
          <p className={`text-xs mt-1 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {notification.message}
          </p>
          <span className={`text-xs mt-1 ${
            isDark ? 'text-gray-500' : 'text-gray-500'
          }`}>
            {notification.time}
          </span>
        </div>
      </div>
    </motion.div>
  );
});

NotificationItem.displayName = 'NotificationItem';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Dashboard component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center min-h-[400px] bg-red-50">
          <div className="text-center">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-red-800 mb-2">Erro ao carregar componente</h3>
            <p className="text-red-600 mb-4">Ocorreu um erro inesperado. Tente recarregar a página.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Dashboard navigation configuration
const dashboardSections = [
  {
    id: 'overview',
    label: 'Visão Geral',
    icon: BarChart3,
    component: Overview,
    description: 'Dashboard principal com estatísticas e resumos'
  },
  {
    id: 'requests',
    label: 'Solicitações',
    icon: FileText,
    component: Requests,
    description: 'Gerenciamento de solicitações de estudos'
  },
  {
    id: 'kanban',
    label: 'Fluxo',
    icon: Kanban,
    component: KanbanBoard,
    description: 'Quadro de Fluxo para gestão de projetos'
  },
  {
    id: 'projects',
    label: 'Projetos',
    icon: FolderOpen,
    component: Projects,
    description: 'Gerenciamento de projetos da empresa'
  },
  {
    id: 'clients',
    label: 'Clientes',
    icon: Users,
    component: Clients,
    description: 'Gestão de clientes e relacionamentos'
  },
  {
    id: 'financial',
    label: 'Financeiro',
    icon: DollarSign,
    component: Financial,
    description: 'Controle financeiro e orçamentos'
  },
  {
    id: 'reports',
    label: 'Relatórios',
    icon: PieChart,
    component: Reports,
    description: 'Relatórios e análises detalhadas'
  },
  {
    id: 'calendar',
    label: 'Calendário',
    icon: Calendar,
    component: CalendarComponent,
    description: 'Agenda e eventos da empresa'
  },
  {
    id: 'settings',
    label: 'Configurações',
    icon: Settings,
    component: SettingsComponent,
    description: 'Configurações do sistema e usuário'
  }
];

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { requests } = useStudyRequests();
  const { isDark } = useTheme();
  
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const sidebarRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Optimized section change handler with useCallback
  const handleSectionChange = useCallback(async (sectionId: string) => {
    if (sectionId === activeSection) return;
    
    setIsLoading(true);
    
    // Simulate loading delay for better UX and allow component preloading
    await new Promise(resolve => setTimeout(resolve, 200));
    
    setActiveSection(sectionId);
    setIsLoading(false);
    
    // Update document title for SEO
    const section = dashboardSections.find(s => s.id === sectionId);
    if (section) {
      document.title = `${section.label} - Dashboard | NEXO Estudos Elétricos`;
      // Update meta description dynamically
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${section.description} - Sistema NEXO de gestão de estudos elétricos.`);
      }
    }
  }, [activeSection]);

  // Get current section
  const currentSection = dashboardSections.find(section => section.id === activeSection);
  const CurrentComponent = currentSection?.component || Overview;

  // Optimized filter sections with useMemo
  const filteredSections = React.useMemo(() => 
    dashboardSections.filter(section =>
      section.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.description.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]
  );

  // Optimized click handlers with useCallback - using functional updates
  const handleNotificationToggle = useCallback(() => {
    setShowNotifications(prev => !prev);
  }, []);

  const handleUserMenuToggle = useCallback(() => {
    setShowUserMenu(prev => !prev);
  }, []);

  const handleSidebarToggle = useCallback(() => {
    setSidebarCollapsed(prev => !prev);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  // Mock notifications data - memoized for performance
  const notifications = React.useMemo(() => [
    {
      id: 1,
      title: 'Nova solicitação de estudo',
      message: 'Cliente EcoEnergy Brasil enviou uma nova solicitação',
      time: '5 min atrás',
      type: 'info',
      unread: true
    },
    {
      id: 2,
      title: 'Projeto aprovado',
      message: 'O projeto Shopping Center foi aprovado pelo cliente',
      time: '1 hora atrás',
      type: 'success',
      unread: true
    },
    {
      id: 3,
      title: 'Prazo próximo',
      message: 'Relatório técnico vence em 2 dias',
      time: '3 horas atrás',
      type: 'warning',
      unread: false
    }
  ], []);

  const unreadNotifications = React.useMemo(() => 
    notifications.filter(n => n.unread).length, 
    [notifications]
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Dynamic SEO for current dashboard section */}
      <DashboardSEO 
        section={activeSection}
        sectionLabel={currentSection?.label || 'Dashboard'}
        sectionDescription={currentSection?.description || 'Sistema de gestão NEXO'}
      />
      {/* Sidebar */}
      <motion.div
        ref={sidebarRef}
        initial={false}
        animate={{
          width: sidebarCollapsed ? '80px' : '280px'
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed left-0 top-0 h-full z-30 transition-colors duration-300 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-r shadow-lg`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <AnimatePresence>
            {!sidebarCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3"
              >
                <img src={logoImage} alt="Logo" className="w-8 h-8" />
                <span className={`text-xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>EstudosN</span>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSidebarToggle}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isDark
                ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Search */}
        <AnimatePresence>
          {!sidebarCollapsed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="p-4 border-b border-gray-200 dark:border-gray-700"
            >
              <div className="relative">
                <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="text"
                  placeholder="Buscar seções..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className={`w-full pl-10 pr-4 py-2 rounded-lg border text-sm transition-colors duration-300 ${
                    isDark
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {filteredSections.map((section) => (
            <SidebarSection
              key={section.id}
              section={section}
              isActive={activeSection === section.id}
              isCollapsed={sidebarCollapsed}
              isDark={isDark}
              onClick={() => handleSectionChange(section.id)}
            />
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <AnimatePresence>
            {!sidebarCollapsed ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-medium truncate transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {user?.name || 'Usuário'}
                  </div>
                  <div className={`text-sm truncate transition-colors duration-300 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {user?.email || 'usuario@exemplo.com'}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user?.name?.charAt(0) || 'U'}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        sidebarCollapsed ? 'ml-20' : 'ml-80'
      }`}>
        {/* Header */}
        <header className={`sticky top-0 z-20 transition-colors duration-300 ${
          isDark ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'
        } backdrop-blur-sm border-b shadow-sm`}>
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <div>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {currentSection?.label || 'Dashboard'}
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {currentSection?.description || 'Bem-vindo ao sistema de gestão'}
                </p>
              </div>
              
              {isLoading && (
                <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
              )}
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative" ref={notificationRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNotificationToggle}
                  className={`relative p-2 rounded-lg transition-colors duration-300 ${
                    isDark
                      ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                      : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Bell className="w-5 h-5" />
                  {unreadNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadNotifications}
                    </span>
                  )}
                </motion.button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute right-0 top-full mt-2 w-80 rounded-lg shadow-xl border z-50 ${
                        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Notificações</h3>
                      </div>
                      
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notification) => (
                          <NotificationItem
                            key={notification.id}
                            notification={notification}
                            isDark={isDark}
                          />
                        ))}
                      </div>
                      
                      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <button className={`w-full text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                          isDark
                            ? 'text-blue-400 hover:bg-gray-700'
                            : 'text-blue-600 hover:bg-gray-100'
                        }`}>
                          Ver todas as notificações
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* User Menu */}
              <div className="relative" ref={userMenuRef}>
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleUserMenuToggle}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    showUserMenu ? 'rotate-180' : ''
                  } ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </motion.button>

                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute right-0 top-full mt-2 w-48 rounded-lg shadow-xl border z-50 ${
                        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className={`font-medium transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {user?.name || 'Usuário'}
                        </div>
                        <div className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {user?.email || 'usuario@exemplo.com'}
                        </div>
                      </div>
                      
                      <div className="py-2">
                        <button
                          onClick={() => handleSectionChange('settings')}
                          className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          <Settings className="w-4 h-4" />
                          Configurações
                        </button>
                        
                        <button
                          onClick={logout}
                          className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300 ${
                            isDark ? 'text-red-400' : 'text-red-600'
                          }`}
                        >
                          <LogOut className="w-4 h-4" />
                          Sair
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <ErrorBoundary>
            <Suspense fallback={
              <LoadingSpinner message={`Carregando ${currentSection?.label || 'página'}...`} />
            }>
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {activeSection === 'kanban' ? (
                  <KanbanProvider>
                    <CurrentComponent />
                  </KanbanProvider>
                ) : (
                  <CurrentComponent />
                )}
              </motion.div>
            </Suspense>
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;