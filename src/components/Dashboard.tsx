import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useStudyRequests } from '../context/StudyRequestContext';
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
  Eye
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { logout } = useAuth();
  const { requests, updateRequestStatus } = useStudyRequests();
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarItems = [
    { id: 'overview', label: 'Visão Geral', icon: BarChart3 },
    { id: 'requests', label: 'Solicitações', icon: Mail },
    { id: 'projects', label: 'Estudos Elétricos', icon: Zap },
    { id: 'clients', label: 'Clientes', icon: Users },
    { id: 'reports', label: 'Relatórios', icon: FileText },
    { id: 'calendar', label: 'Agenda', icon: Calendar },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

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
    switch (status) {
      case 'Em Andamento': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Revisão': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Iniciado': return 'bg-green-100 text-green-800 border-green-200';
      case 'Concluído': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Média': return 'bg-yellow-100 text-yellow-800';
      case 'Baixa': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRequestStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'reviewed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="w-72 gradient-bg shadow-2xl"
      >
        <div className="p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">NEXO Dashboard</h1>
              <p className="text-blue-100 text-sm">Estudos Elétricos</p>
            </div>
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
            onClick={logout}
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
          className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20"
        >
          <div className="flex items-center justify-between px-8 py-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gradient">
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </h2>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar estudos, clientes..."
                  className="input-field pl-12 pr-4 py-3 w-80"
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 text-gray-400 hover:text-gray-600 relative bg-white/50 rounded-xl backdrop-blur-sm"
              >
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </motion.button>
              
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
                        <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
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
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Estudos Recentes</h3>
                    <p className="text-gray-600">Acompanhe o progresso dos seus projetos</p>
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
                
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Estudo
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Cliente
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Tipo
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Progresso
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Prazo
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      {recentProjects.map((project, index) => (
                        <motion.tr 
                          key={project.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="hover:bg-blue-50/50 transition-colors cursor-pointer"
                        >
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{project.name}</div>
                              <div className="flex items-center gap-2 mt-1">
                                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(project.priority)}`}>
                                  {project.priority}
                                </span>
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <MapPin className="w-3 h-3" />
                                  {project.location}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{project.client}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
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
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${project.progress}%` }}
                                  transition={{ delay: index * 0.1, duration: 1 }}
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                                ></motion.div>
                              </div>
                              <span className="text-sm font-medium text-gray-700 min-w-[3rem]">{project.progress}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Solicitações de Estudos</h3>
                    <p className="text-gray-600">Gerencie as solicitações recebidas através do site</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-600">
                      Total: {requests.length} solicitações
                    </span>
                  </div>
                </div>
                
                {requests.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Nenhuma solicitação</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
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
                        className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h4 className="text-lg font-semibold text-gray-900">{request.companyName}</h4>
                              <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getRequestStatusColor(request.status)}`}>
                                {getRequestStatusLabel(request.status)}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
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
                              <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                                {request.projectType}
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {request.projectDescription}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
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

          {/* Other tabs content */}
          {activeTab !== 'overview' && activeTab !== 'requests' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card text-center py-16"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Activity className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
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