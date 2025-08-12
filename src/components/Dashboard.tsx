import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useStudyRequests } from '../context/StudyRequestContext';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
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
  AlertCircle,
  Eye,
  DollarSign,
  CreditCard,
  PieChart,
  TrendingDown,
  Home,
  Wifi,
  Shield,
  Cloud,
  Phone
} from 'lucide-react';
import logoImage from '../assets/images/logo_nexo_branca.svg';
import ThemeToggle from './ThemeToggle';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const { requests, updateRequestStatus } = useStudyRequests();
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('overview');
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sidebarItems = [
    { id: 'overview', label: 'Visão Geral', icon: BarChart3 },
    { id: 'requests', label: 'Solicitações', icon: Mail },
    { id: 'projects', label: 'Estudos Elétricos', icon: Zap },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'financial', label: 'Controle Financeiro', icon: DollarSign },
    { id: 'reports', label: 'Relatórios', icon: FileText },
    { id: 'calendar', label: 'Agenda', icon: Calendar },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotificationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Função para logout e redirecionamento
  const handleLogoutAndGoHome = () => {
    logout();
    window.location.href = '/EstudosN/';
  };

  // Contar notificações (solicitações pendentes)
  const pendingRequestsCount = requests.filter(request => request.status === 'pending').length;

  const stats = [
    { 
      label: 'Estudos Ativos', 
      value: '18', 
      change: '+3 este mês', 
      trend: 'up',
      icon: Zap,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'Clientes Ativos', 
      value: '52', 
      change: '+8 novos', 
      trend: 'up',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    { 
      label: 'Estudos Concluídos', 
      value: '247', 
      change: '+15 este mês', 
      trend: 'up',
      icon: Database,
      color: 'from-orange-500 to-orange-600'
    },
    { 
      label: 'Taxa de Sucesso', 
      value: '98.5%', 
      change: '+0.3% melhoria', 
      trend: 'up',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600'
    },
  ];

  const recentProjects = [
    { 
      id: 1, 
      name: 'Estudo de Acesso - Usina Solar Horizonte', 
      client: 'Energia Verde Ltda', 
      status: 'Em Andamento', 
      progress: 75,
      type: 'Acesso',
      priority: 'Alta',
      deadline: '15/12/2024',
      location: 'MG'
    },
    { 
      id: 2, 
      name: 'Relatório R2 - Subestação Norte', 
      client: 'Distribuidora Sul S.A.', 
      status: 'Revisão', 
      progress: 90,
      type: 'R2',
      priority: 'Média',
      deadline: '20/12/2024',
      location: 'SP'
    },
    { 
      id: 3, 
      name: 'Modelagem Eólica - Parque Ventos do Sertão', 
      client: 'Ventos do Norte Energia', 
      status: 'Iniciado', 
      progress: 25,
      type: 'Modelagem',
      priority: 'Alta',
      deadline: '30/01/2025',
      location: 'CE'
    },
    { 
      id: 4, 
      name: 'Análise de Ocorrência - Linha 230kV', 
      client: 'Transmissora Central', 
      status: 'Concluído', 
      progress: 100,
      type: 'Análise',
      priority: 'Baixa',
      deadline: '10/12/2024',
      location: 'GO'
    },
  ];

  const getStatusColor = (status: string) => {
    const lightColors = {
      'Em Andamento': 'bg-blue-100 text-blue-800 border-blue-200',
      'Revisão': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Iniciado': 'bg-green-100 text-green-800 border-green-200',
      'Concluído': 'bg-gray-100 text-gray-800 border-gray-200',
      'default': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    
    const darkColors = {
      'Em Andamento': 'bg-blue-900/80 text-blue-200 border-blue-600',
      'Revisão': 'bg-yellow-900/80 text-yellow-200 border-yellow-600',
      'Iniciado': 'bg-green-900/80 text-green-200 border-green-600',
      'Concluído': 'bg-gray-700/80 text-gray-200 border-gray-500',
      'default': 'bg-gray-700/80 text-gray-200 border-gray-500'
    };
    
    const colors = isDark ? darkColors : lightColors;
    return colors[status as keyof typeof colors] || colors.default;
  };

  const getPriorityColor = (priority: string) => {
    const lightColors = {
      'Alta': 'bg-red-100 text-red-800',
      'Média': 'bg-yellow-100 text-yellow-800',
      'Baixa': 'bg-green-100 text-green-800',
      'default': 'bg-gray-100 text-gray-800'
    };
    
    const darkColors = {
      'Alta': 'bg-red-900/80 text-red-200',
      'Média': 'bg-yellow-900/80 text-yellow-200',
      'Baixa': 'bg-green-900/80 text-green-200',
      'default': 'bg-gray-700/80 text-gray-200'
    };
    
    const colors = isDark ? darkColors : lightColors;
    return colors[priority as keyof typeof colors] || colors.default;
  };

  const getRequestStatusColor = (status: string) => {
    const lightColors = {
      'pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'reviewed': 'bg-blue-100 text-blue-800 border-blue-200',
      'approved': 'bg-green-100 text-green-800 border-green-200',
      'rejected': 'bg-red-100 text-red-800 border-red-200',
      'default': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    
    const darkColors = {
      'pending': 'bg-yellow-900/80 text-yellow-200 border-yellow-600',
      'reviewed': 'bg-blue-900/80 text-blue-200 border-blue-600',
      'approved': 'bg-green-900/80 text-green-200 border-green-600',
      'rejected': 'bg-red-900/80 text-red-200 border-red-600',
      'default': 'bg-gray-700/80 text-gray-200 border-gray-500'
    };
    
    const colors = isDark ? darkColors : lightColors;
    return colors[status as keyof typeof colors] || colors.default;
  };

  const getRequestStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'Pendente';
      case 'reviewed': return 'Em Análise';
      case 'approved': return 'Aprovado';
      case 'rejected': return 'Rejeitado';
      default: return 'Desconhecido';
    }
  };

  const handleStatusChange = (requestId: string, newStatus: 'pending' | 'reviewed' | 'approved' | 'rejected') => {
    updateRequestStatus(requestId, newStatus);
  };

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`w-72 shadow-2xl transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
            : 'gradient-bg'
        }`}
      >
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center"
          >
            <img 
              src={logoImage} 
              alt="Nexo Estudos Elétricos" 
              className="h-24 w-auto object-contain"
            />
          </motion.div>
        </div>
        
        <nav className="mt-6 px-4">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveTab(item.id)}
                className={`sidebar-item w-full mb-2 ${
                  activeTab === item.id ? 'active' : 'text-blue-100 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {activeTab === item.id && (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </motion.button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-72 p-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogoutAndGoHome}
            className="sidebar-item w-full text-blue-100 hover:text-white hover:bg-white/10"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sair</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`backdrop-blur-md shadow-lg border-b transition-colors duration-300 ${
            isDark 
              ? 'bg-gray-800/80 border-gray-700/20' 
              : 'bg-white/80 border-white/20'
          }`}
        >
          <div className="flex items-center justify-between px-8 py-6">
            <div className="flex items-center space-x-4">
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gradient'
              }`}>
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </h2>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Search className={`w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  placeholder="Buscar estudos, clientes..."
                  className={`pl-12 pr-4 py-3 w-80 rounded-xl border transition-colors duration-300 ${
                    isDark 
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500' 
                      : 'input-field'
                  }`}
                />
              </div>
              
              <div className="relative" ref={dropdownRef}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowNotificationDropdown(!showNotificationDropdown)}
                  className={`p-3 relative rounded-xl backdrop-blur-sm transition-colors duration-300 ${
                    isDark 
                      ? 'text-gray-400 hover:text-gray-200 bg-gray-700/50' 
                      : 'text-gray-400 hover:text-gray-600 bg-white/50'
                  }`}
                >
                  <Bell className="w-6 h-6" />
                  {pendingRequestsCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{pendingRequestsCount}</span>
                    </span>
                  )}
                </motion.button>

                {/* Dropdown de Notificações */}
                {showNotificationDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute right-0 mt-2 w-80 rounded-xl shadow-2xl border z-[9999] transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className={`p-4 border-b transition-colors duration-300 ${
                      isDark ? 'border-gray-700' : 'border-gray-100'
                    }`}>
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Notificações</h3>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{pendingRequestsCount} solicitações pendentes</p>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {requests.filter(request => request.status === 'pending').length === 0 ? (
                        <div className="p-6 text-center">
                          <Bell className={`w-12 h-12 mx-auto mb-3 transition-colors duration-300 ${
                            isDark ? 'text-gray-600' : 'text-gray-300'
                          }`} />
                          <p className={`transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-500'
                          }`}>Nenhuma notificação pendente</p>
                        </div>
                      ) : (
                        requests
                          .filter(request => request.status === 'pending')
                          .slice(0, 5)
                          .map((request) => (
                            <div key={request.id} className={`p-4 border-b cursor-pointer transition-colors duration-300 ${
                              isDark 
                                ? 'border-gray-700 hover:bg-gray-700/50' 
                                : 'border-gray-50 hover:bg-gray-50'
                            }`}>
                              <div className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <div className="flex-1">
                                  <p className={`text-sm font-medium transition-colors duration-300 ${
                                    isDark ? 'text-white' : 'text-gray-900'
                                  }`}>{request.companyName}</p>
                                  <p className={`text-xs mt-1 transition-colors duration-300 ${
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                  }`}>{request.projectType}</p>
                                  <p className={`text-xs mt-1 transition-colors duration-300 ${
                                    isDark ? 'text-gray-500' : 'text-gray-500'
                                  }`}>
                                    {new Date(request.createdAt).toLocaleDateString('pt-BR')}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))
                      )}
                    </div>
                    
                    {pendingRequestsCount > 0 && (
                      <div className={`p-4 border-t transition-colors duration-300 ${
                        isDark ? 'border-gray-700' : 'border-gray-100'
                      }`}>
                        <button
                          onClick={() => {
                            setActiveTab('requests');
                            setShowNotificationDropdown(false);
                          }}
                          className={`w-full text-center text-sm font-medium transition-colors duration-300 ${
                            isDark 
                              ? 'text-blue-400 hover:text-blue-300' 
                              : 'text-blue-600 hover:text-blue-800'
                          }`}
                        >
                          Ver todas as solicitações
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Theme Toggle */}
              <ThemeToggle className="shadow-lg" />
              
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">NX</span>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Dashboard Content */}
        <main className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="stat-card group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>{stat.label}</p>
                        <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{stat.value}</p>
                        <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Recent Projects */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Estudos Recentes</h3>
                    <p className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>Acompanhe o progresso dos seus projetos</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-outline flex items-center gap-2"
                    >
                      <Filter className="w-4 h-4" />
                      Filtrar
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Novo Estudo
                    </motion.button>
                  </div>
                </div>
                
                <div className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <table className="w-full">
                    <thead className={`transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
                        : 'bg-gradient-to-r from-gray-50 to-blue-50'
                    }`}>
                      <tr>
                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          Estudo
                        </th>
                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          Cliente
                        </th>
                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          Tipo
                        </th>
                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          Status
                        </th>
                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          Progresso
                        </th>
                        <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          Prazo
                        </th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-800 divide-gray-700' 
                        : 'bg-white divide-gray-100'
                    }`}>
                      {recentProjects.map((project, index) => (
                        <motion.tr 
                          key={project.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`transition-colors cursor-pointer ${
                            isDark 
                              ? 'hover:bg-gray-700/50' 
                              : 'hover:bg-blue-50/50'
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div>
                              <div className={`text-sm font-semibold transition-colors duration-300 ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>{project.name}</div>
                              <div className="flex items-center gap-2 mt-1">
                                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(project.priority)}`}>
                                  {project.priority}
                                </span>
                                <div className={`flex items-center gap-1 text-xs transition-colors duration-300 ${
                                  isDark ? 'text-gray-300' : 'text-gray-500'
                                }`}>
                                  <MapPin className="w-3 h-3" />
                                  {project.location}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className={`text-sm font-medium transition-colors duration-300 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>{project.client}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
                              isDark 
                                ? 'bg-blue-900/80 text-blue-200' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {project.type}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`flex-1 rounded-full h-2 transition-colors duration-300 ${
                                isDark ? 'bg-gray-700' : 'bg-gray-200'
                              }`}>
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${project.progress}%` }}
                                  transition={{ delay: index * 0.1, duration: 1 }}
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                                ></motion.div>
                              </div>
                              <span className={`text-sm font-medium min-w-[3rem] transition-colors duration-300 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                              }`}>{project.progress}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              <Clock className="w-4 h-4" />
                              {project.deadline}
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          )}

          {/* Requests Tab */}
          {activeTab === 'requests' && (
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Solicitações de Estudos</h3>
                    <p className={`transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Gerencie as solicitações recebidas através do site</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Total: {requests.length} solicitações
                    </span>
                  </div>
                </div>
                
                {requests.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Nenhuma solicitação</h3>
                    <p className={`max-w-md mx-auto transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Quando clientes enviarem solicitações através do formulário do site, elas aparecerão aqui.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {requests.map((request, index) => (
                      <motion.div
                        key={request.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                          isDark 
                            ? 'bg-gray-800 border-gray-700' 
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}>{request.companyName}</h4>
                              <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getRequestStatusColor(request.status)}`}>
                                {getRequestStatusLabel(request.status)}
                              </span>
                            </div>
                            <div className={`flex items-center gap-4 text-sm mb-3 transition-colors duration-300 ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              <div className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {request.corporateEmail}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {request.submittedAt.toLocaleDateString('pt-BR')}
                              </div>
                            </div>
                            <div className="mb-3">
                              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                                isDark 
                                  ? 'bg-blue-900/50 text-blue-300' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {request.projectType}
                              </span>
                            </div>
                            <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                              isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {request.projectDescription}
                            </p>
                          </div>
                        </div>
                        
                        <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${
                          isDark ? 'border-gray-700' : 'border-gray-100'
                        }`}>
                          <div className="flex items-center gap-2">
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleStatusChange(request.id, 'reviewed')}
                              disabled={request.status === 'reviewed'}
                              className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                                request.status === 'reviewed'
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                              }`}
                            >
                              <Eye className="w-3 h-3" />
                              Analisar
                            </motion.button>
                            
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleStatusChange(request.id, 'approved')}
                              disabled={request.status === 'approved'}
                              className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                                request.status === 'approved'
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                  : 'bg-green-100 text-green-700 hover:bg-green-200'
                              }`}
                            >
                              <CheckCircle className="w-3 h-3" />
                              Aprovar
                            </motion.button>
                            
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => handleStatusChange(request.id, 'rejected')}
                              disabled={request.status === 'rejected'}
                              className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                                request.status === 'rejected'
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                  : 'bg-red-100 text-red-700 hover:bg-red-200'
                              }`}
                            >
                              <XCircle className="w-3 h-3" />
                              Rejeitar
                            </motion.button>
                          </div>
                          
                          <motion.a
                            href={`mailto:${request.corporateEmail}?subject=Re: Solicitação de Estudo - ${request.companyName}&body=Olá,%0D%0A%0D%0ARecebemos sua solicitação de estudo para o projeto "${request.projectType}".%0D%0A%0D%0AAtenciosamente,%0D%0ANexo Estudos Elétricos`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                          >
                            <Mail className="w-3 h-3" />
                            Responder
                          </motion.a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          )}

          {/* Financial Tab */}
          {activeTab === 'financial' && (
            <div className="space-y-8">
              {/* Financial Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -5 }}
                  className="stat-card group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Receita Mensal</p>
                    <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>R$ 485.200</p>
                    <p className="text-sm text-green-600 font-medium">+12% este mês</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                  className="stat-card group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Contas a Receber</p>
                    <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>R$ 127.800</p>
                    <p className="text-sm text-green-600 font-medium">8 faturas pendentes</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="stat-card group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <TrendingDown className="w-6 h-6 text-white" />
                    </div>
                    <TrendingDown className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Despesas Mensais</p>
                    <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>R$ 89.500</p>
                    <p className="text-sm text-red-600 font-medium">+5% este mês</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ y: -5 }}
                  className="stat-card group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <PieChart className="w-6 h-6 text-white" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Lucro Líquido</p>
                    <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>R$ 395.700</p>
                    <p className="text-sm text-green-600 font-medium">+18% este mês</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Gastos Fixos Mensais */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1 transition-colors duration-300`}>Gastos Fixos Mensais</h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>Assinaturas, licenciamentos e custos recorrentes</p>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Novo Gasto Fixo
                  </motion.button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { 
                      name: 'Microsoft 365', 
                      value: 'R$ 1.200', 
                      category: 'Assinaturas', 
                      icon: Cloud,
                      color: 'from-blue-500 to-blue-600',
                      renewal: '15/01/2025'
                    },
                    { 
                      name: 'AutoCAD Electrical', 
                      value: 'R$ 2.800', 
                      category: 'Licenciamentos', 
                      icon: Zap,
                      color: 'from-orange-500 to-orange-600',
                      renewal: '20/01/2025'
                    },
                    { 
                      name: 'Internet Empresarial', 
                      value: 'R$ 450', 
                      category: 'Infraestrutura', 
                      icon: Wifi,
                      color: 'from-green-500 to-green-600',
                      renewal: '10/01/2025'
                    },
                    { 
                      name: 'Antivírus Corporativo', 
                      value: 'R$ 320', 
                      category: 'Segurança', 
                      icon: Shield,
                      color: 'from-purple-500 to-purple-600',
                      renewal: '25/01/2025'
                    },
                    { 
                      name: 'ETAP PowerStation', 
                      value: 'R$ 3.500', 
                      category: 'Licenciamentos', 
                      icon: Settings,
                      color: 'from-red-500 to-red-600',
                      renewal: '05/02/2025'
                    },
                    { 
                      name: 'Telefonia VoIP', 
                      value: 'R$ 280', 
                      category: 'Comunicação', 
                      icon: Phone,
                      color: 'from-indigo-500 to-indigo-600',
                      renewal: '12/01/2025'
                    },
                    { 
                      name: 'Backup em Nuvem', 
                      value: 'R$ 180', 
                      category: 'Infraestrutura', 
                      icon: Cloud,
                      color: 'from-cyan-500 to-cyan-600',
                      renewal: '18/01/2025'
                    },
                    { 
                      name: 'Certificado Digital', 
                      value: 'R$ 150', 
                      category: 'Segurança', 
                      icon: Shield,
                      color: 'from-emerald-500 to-emerald-600',
                      renewal: '30/01/2025'
                    }
                  ].map((expense, index) => {
                    const Icon = expense.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl p-4 hover:shadow-lg transition-all duration-300`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${expense.color} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className={`text-xs px-2 py-1 ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} rounded-full transition-colors duration-300`}>
                            {expense.category}
                          </span>
                        </div>
                        <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-1 transition-colors duration-300`}>{expense.name}</h4>
                        <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 transition-colors duration-300`}>{expense.value}</p>
                        <div className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-300' : 'text-gray-500'} transition-colors duration-300`}>
                          <Calendar className="w-3 h-3" />
                          Renovação: {expense.renewal}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                
                <div className={`mt-6 p-4 ${isDark ? 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-blue-700' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'} rounded-lg border transition-colors duration-300`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>Total de Gastos Fixos</h4>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>Custos mensais recorrentes</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-300`}>R$ 8.880</p>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>por mês</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Financial Tables */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contas a Receber */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="card"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1 transition-colors duration-300`}>Contas a Receber</h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>Faturas pendentes de pagamento</p>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Nova Fatura
                    </motion.button>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { client: 'Energia Verde Ltda', value: 'R$ 45.200', due: '15/12/2024', status: 'Pendente' },
                      { client: 'Distribuidora Sul S.A.', value: 'R$ 32.800', due: '20/12/2024', status: 'Vencida' },
                      { client: 'Ventos do Norte Energia', value: 'R$ 28.500', due: '25/12/2024', status: 'Pendente' },
                      { client: 'Transmissora Central', value: 'R$ 21.300', due: '30/12/2024', status: 'Pendente' }
                    ].map((invoice, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className={`flex items-center justify-between p-4 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg transition-colors`}
                      >
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>{invoice.client}</p>
                          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>Vencimento: {invoice.due}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>{invoice.value}</p>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            invoice.status === 'Vencida' 
                              ? isDark ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800'
                              : isDark ? 'bg-yellow-900/80 text-yellow-200' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {invoice.status}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Despesas Recentes */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="card"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1 transition-colors duration-300`}>Despesas Recentes</h3>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>Últimas movimentações financeiras</p>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-outline flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Nova Despesa
                    </motion.button>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { description: 'Licenças de Software', value: 'R$ 2.800', date: '10/12/2024', category: 'Tecnologia' },
                      { description: 'Aluguel do Escritório', value: 'R$ 8.500', date: '05/12/2024', category: 'Infraestrutura' },
                      { description: 'Equipamentos Técnicos', value: 'R$ 15.200', date: '03/12/2024', category: 'Equipamentos' },
                      { description: 'Treinamentos', value: 'R$ 3.400', date: '01/12/2024', category: 'Capacitação' }
                    ].map((expense, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className={`flex items-center justify-between p-4 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg transition-colors`}
                      >
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>{expense.description}</p>
                          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>{expense.date} • {expense.category}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${isDark ? 'text-red-400' : 'text-red-600'} transition-colors duration-300`}>{expense.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Other tabs content */}
          {activeTab !== 'overview' && activeTab !== 'requests' && activeTab !== 'financial' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card text-center py-16"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3 transition-colors duration-300`}>
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-md mx-auto transition-colors duration-300`}>
                Esta seção está em desenvolvimento. Em breve você terá acesso a todas as funcionalidades.
              </p>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Notificar quando estiver pronto
              </motion.button>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;