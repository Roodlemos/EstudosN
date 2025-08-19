import React, { memo, useMemo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  FileText,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  BarChart3,
  Mail,
  Activity,
  MapPin,
  Filter,
  Plus
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useStudyRequests } from '../../context/StudyRequestContext';
import { cache, CACHE_KEYS, fetchWithCache } from '../../utils/cache';
import Preloader from '../UI/Preloader';

const Overview: React.FC = memo(() => {
  const { isDark } = useTheme();
  const { requests } = useStudyRequests();
  const [isLoading, setIsLoading] = useState(false);
  const [statsData, setStatsData] = useState(null);

  // Helper function for currency formatting
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  // Memoized stats calculation with cache support
  const stats = useMemo(() => {
    const cachedStats = cache.get(CACHE_KEYS.DASHBOARD_STATS);
    if (cachedStats) return cachedStats;

    const calculatedStats = [
      {
        id: 1,
        title: 'Estudos em Análise',
        value: requests?.filter(r => r.status === 'reviewed')?.length?.toString() || '0',
        change: '+8%',
        icon: BarChart3,
        color: 'from-blue-500 to-blue-600',
        trend: 'up' as const
      },
      {
        id: 2,
        title: 'Solicitações Pendentes',
        value: requests?.filter(r => r.status === 'pending')?.length?.toString() || '0',
        change: '+12%',
        icon: Mail,
        color: 'from-orange-500 to-orange-600',
        trend: 'up' as const
      },
      {
        id: 3,
        title: 'Estudos Aprovados',
        value: requests?.filter(r => r.status === 'approved')?.length?.toString() || '0',
        change: '+5%',
        icon: Activity,
        color: 'from-green-500 to-green-600',
        trend: 'up' as const
      },
      {
        id: 4,
        title: 'Receita Mensal',
        value: formatCurrency(125000),
        change: '+15%',
        icon: TrendingUp,
        color: 'from-purple-500 to-purple-600',
        trend: 'up' as const
      }
    ];

    // Cache stats for 2 minutes
    cache.set(CACHE_KEYS.DASHBOARD_STATS, calculatedStats, 2 * 60 * 1000);
    return calculatedStats;
  }, [requests]);

  // Memoized recent projects with cache support
  const recentProjects = useMemo(() => {
    const cachedProjects = cache.get(CACHE_KEYS.RECENT_PROJECTS);
    if (cachedProjects) return cachedProjects;

    const mockProjects = [
      {
        id: 1,
        name: 'Estudo de Acesso - Usina Solar Horizonte',
        client: 'Energia Renovável Ltda.',
        status: 'Em Andamento',
        progress: 75,
        deadline: '2024-12-30',
        priority: 'Alta',
        location: 'São Paulo, SP'
      },
      {
        id: 2,
        name: 'Análise de Fluxo de Potência - Indústria XYZ',
        client: 'Indústria XYZ S.A.',
        status: 'Revisão',
        progress: 90,
        deadline: '2024-12-25',
        priority: 'Média',
        location: 'Rio de Janeiro, RJ'
      },
      {
        id: 3,
        name: 'Estudo de Curto-Circuito - Shopping Center',
        client: 'Shopping Center ABC',
        status: 'Concluído',
        progress: 100,
        deadline: '2024-12-20',
        priority: 'Baixa',
        location: 'Belo Horizonte, MG'
      }
    ];

    // Cache projects for 5 minutes
    cache.set(CACHE_KEYS.RECENT_PROJECTS, mockProjects, 5 * 60 * 1000);
    return mockProjects;
  }, []);

  // Memoized helper functions
  const getStatusColor = useMemo(() => (status: string) => {
    switch (status) {
      case 'Concluído':
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Em Andamento':
      case 'in_progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Revisão':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  }, []);

  const getPriorityColor = useMemo(() => (priority: string) => {
    switch (priority) {
      case 'Alta':
      case 'high':
        return 'text-red-600 dark:text-red-400';
      case 'Média':
      case 'medium':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'Baixa':
      case 'low':
        return 'text-green-600 dark:text-green-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  }, []);

  // Simulate data loading for demonstration
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
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
              className={`card group hover:shadow-xl transition-all duration-300 ${
                isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{stat.title}</p>
                <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{stat.value}</p>
                <p className="text-sm text-green-600 font-medium">{stat.change} este mês</p>
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
              isDark ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <tr>
                <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Projeto
                </th>
                <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Cliente
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
                  transition={{ delay: 0.1 * index }}
                  className={`transition-colors cursor-pointer ${
                    isDark 
                      ? 'hover:bg-gray-700/50' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="px-6 py-4">
                    <div>
                      <div className={`text-sm font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.name}
                      </div>
                      <div className={`flex items-center gap-1 text-xs transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`text-sm font-medium transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {project.client}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
                      getStatusColor(project.status)
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex-1 rounded-full h-2 transition-colors duration-300 ${
                        isDark ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                          style={{width: `${project.progress}%`}}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium min-w-[3rem] transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {project.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <Clock className="w-4 h-4" />
                      {new Date(project.deadline).toLocaleDateString('pt-BR')}
                    </div>
                    <div className={`text-xs font-medium ${getPriorityColor(project.priority)}`}>
                      {project.priority} prioridade
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
});

Overview.displayName = 'Overview';

export default Overview;