import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  TrendingUp,
  TrendingDown,
  FileText,
  Users,
  DollarSign,
  Clock,
  Target,
  Activity,
  Briefcase,
  Building,
  Zap,
  Settings,
  Eye,
  Share2,
  Printer,
  Mail,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Info,
  Star,
  Award,
  Layers,
  Grid,
  List,
  Calendar as CalendarIcon
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

interface Report {
  id: number;
  title: string;
  description: string;
  type: 'financial' | 'projects' | 'clients' | 'performance' | 'operational';
  category: string;
  status: 'generated' | 'generating' | 'scheduled' | 'failed';
  lastGenerated: string;
  nextScheduled?: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly' | 'on_demand';
  format: 'pdf' | 'excel' | 'csv' | 'json';
  size?: string;
  recipients: string[];
  tags: string[];
  priority: 'low' | 'medium' | 'high' | 'critical';
  automated: boolean;
  views: number;
  downloads: number;
}

interface ReportTemplate {
  id: number;
  name: string;
  description: string;
  type: 'financial' | 'projects' | 'clients' | 'performance' | 'operational';
  fields: string[];
  customizable: boolean;
  popular: boolean;
}

const Reports: React.FC = () => {
  const { isDark } = useTheme();
  
  const [reports, setReports] = useState<Report[]>([
    {
      id: 1,
      title: 'Relatório Financeiro Mensal',
      description: 'Análise completa das receitas, despesas e lucros do mês',
      type: 'financial',
      category: 'Financeiro',
      status: 'generated',
      lastGenerated: '2024-12-15T10:30:00',
      nextScheduled: '2025-01-15T10:30:00',
      frequency: 'monthly',
      format: 'pdf',
      size: '2.4 MB',
      recipients: ['financeiro@empresa.com', 'diretoria@empresa.com'],
      tags: ['Financeiro', 'Mensal', 'Receitas', 'Despesas'],
      priority: 'high',
      automated: true,
      views: 45,
      downloads: 12
    },
    {
      id: 2,
      title: 'Performance de Projetos',
      description: 'Acompanhamento do progresso e performance dos projetos ativos',
      type: 'projects',
      category: 'Projetos',
      status: 'generated',
      lastGenerated: '2024-12-14T16:45:00',
      nextScheduled: '2024-12-21T16:45:00',
      frequency: 'weekly',
      format: 'excel',
      size: '1.8 MB',
      recipients: ['projetos@empresa.com', 'gerencia@empresa.com'],
      tags: ['Projetos', 'Performance', 'Semanal'],
      priority: 'medium',
      automated: true,
      views: 32,
      downloads: 8
    },
    {
      id: 3,
      title: 'Análise de Clientes',
      description: 'Relatório detalhado sobre satisfação e engajamento dos clientes',
      type: 'clients',
      category: 'Clientes',
      status: 'generating',
      lastGenerated: '2024-12-10T09:15:00',
      frequency: 'monthly',
      format: 'pdf',
      recipients: ['comercial@empresa.com', 'atendimento@empresa.com'],
      tags: ['Clientes', 'Satisfação', 'Engajamento'],
      priority: 'medium',
      automated: true,
      views: 28,
      downloads: 6
    },
    {
      id: 4,
      title: 'Dashboard Executivo',
      description: 'Visão geral dos KPIs e métricas principais da empresa',
      type: 'performance',
      category: 'Executivo',
      status: 'generated',
      lastGenerated: '2024-12-15T08:00:00',
      nextScheduled: '2024-12-16T08:00:00',
      frequency: 'daily',
      format: 'pdf',
      size: '3.2 MB',
      recipients: ['ceo@empresa.com', 'diretoria@empresa.com'],
      tags: ['Executivo', 'KPIs', 'Diário'],
      priority: 'critical',
      automated: true,
      views: 67,
      downloads: 23
    },
    {
      id: 5,
      title: 'Relatório Operacional',
      description: 'Análise das operações diárias e eficiência dos processos',
      type: 'operational',
      category: 'Operacional',
      status: 'scheduled',
      lastGenerated: '2024-12-12T14:20:00',
      nextScheduled: '2024-12-19T14:20:00',
      frequency: 'weekly',
      format: 'excel',
      size: '2.1 MB',
      recipients: ['operacoes@empresa.com', 'supervisao@empresa.com'],
      tags: ['Operacional', 'Processos', 'Eficiência'],
      priority: 'medium',
      automated: true,
      views: 19,
      downloads: 4
    },
    {
      id: 6,
      title: 'Análise de Custos por Projeto',
      description: 'Detalhamento dos custos e margens de cada projeto',
      type: 'financial',
      category: 'Custos',
      status: 'failed',
      lastGenerated: '2024-12-13T11:30:00',
      frequency: 'on_demand',
      format: 'csv',
      recipients: ['financeiro@empresa.com', 'projetos@empresa.com'],
      tags: ['Custos', 'Projetos', 'Margens'],
      priority: 'high',
      automated: false,
      views: 15,
      downloads: 3
    }
  ]);
  
  const [templates, setTemplates] = useState<ReportTemplate[]>([
    {
      id: 1,
      name: 'Relatório Financeiro Básico',
      description: 'Template padrão para relatórios financeiros',
      type: 'financial',
      fields: ['Receitas', 'Despesas', 'Lucro Líquido', 'Fluxo de Caixa'],
      customizable: true,
      popular: true
    },
    {
      id: 2,
      name: 'Dashboard de Projetos',
      description: 'Visão geral do status e progresso dos projetos',
      type: 'projects',
      fields: ['Status', 'Progresso', 'Orçamento', 'Prazo', 'Equipe'],
      customizable: true,
      popular: true
    },
    {
      id: 3,
      name: 'Análise de Performance',
      description: 'Métricas de performance e KPIs principais',
      type: 'performance',
      fields: ['KPIs', 'Metas', 'Resultados', 'Tendências'],
      customizable: true,
      popular: false
    },
    {
      id: 4,
      name: 'Relatório de Clientes',
      description: 'Informações detalhadas sobre clientes e relacionamento',
      type: 'clients',
      fields: ['Satisfação', 'Retenção', 'Valor Lifetime', 'Segmentação'],
      customizable: true,
      popular: true
    },
    {
      id: 5,
      name: 'Relatório Operacional',
      description: 'Análise das operações e processos internos',
      type: 'operational',
      fields: ['Eficiência', 'Produtividade', 'Qualidade', 'Recursos'],
      customizable: false,
      popular: false
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [frequencyFilter, setFrequencyFilter] = useState('all');
  const [sortBy, setSortBy] = useState('lastGenerated');
  const [sortOrder, setSortOrder] = useState('desc');
  const [viewMode, setViewMode] = useState<'reports' | 'templates' | 'analytics'>('reports');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort reports
  const getFilteredReports = () => {
    let filtered = reports;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(report => 
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(report => report.type === typeFilter);
    }
    
    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(report => report.status === statusFilter);
    }
    
    // Priority filter
    if (priorityFilter !== 'all') {
      filtered = filtered.filter(report => report.priority === priorityFilter);
    }
    
    // Frequency filter
    if (frequencyFilter !== 'all') {
      filtered = filtered.filter(report => report.frequency === frequencyFilter);
    }
    
    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'lastGenerated':
          aValue = new Date(a.lastGenerated).getTime();
          bValue = new Date(b.lastGenerated).getTime();
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'priority':
          const priorityOrder = { 'critical': 4, 'high': 3, 'medium': 2, 'low': 1 };
          aValue = priorityOrder[a.priority as keyof typeof priorityOrder];
          bValue = priorityOrder[b.priority as keyof typeof priorityOrder];
          break;
        case 'views':
          aValue = a.views;
          bValue = b.views;
          break;
        case 'downloads':
          aValue = a.downloads;
          bValue = b.downloads;
          break;
        default:
          aValue = new Date(a.lastGenerated).getTime();
          bValue = new Date(b.lastGenerated).getTime();
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
    
    return filtered;
  };

  // Helper functions
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'generated': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      case 'generating': return isDark ? 'bg-blue-900/80 text-blue-200' : 'bg-blue-100 text-blue-800';
      case 'scheduled': return isDark ? 'bg-yellow-900/80 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'failed': return isDark ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'generated': return 'Gerado';
      case 'generating': return 'Gerando';
      case 'scheduled': return 'Agendado';
      case 'failed': return 'Falhou';
      default: return 'Desconhecido';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return isDark ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800';
      case 'high': return isDark ? 'bg-orange-900/80 text-orange-200' : 'bg-orange-100 text-orange-800';
      case 'medium': return isDark ? 'bg-yellow-900/80 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'low': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'critical': return 'Crítica';
      case 'high': return 'Alta';
      case 'medium': return 'Média';
      case 'low': return 'Baixa';
      default: return 'Desconhecida';
    }
  };

  const getFrequencyLabel = (frequency: string) => {
    switch (frequency) {
      case 'daily': return 'Diário';
      case 'weekly': return 'Semanal';
      case 'monthly': return 'Mensal';
      case 'quarterly': return 'Trimestral';
      case 'yearly': return 'Anual';
      case 'on_demand': return 'Sob Demanda';
      default: return 'Desconhecido';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'financial': return DollarSign;
      case 'projects': return Briefcase;
      case 'clients': return Users;
      case 'performance': return TrendingUp;
      case 'operational': return Settings;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'financial': return 'from-green-500 to-green-600';
      case 'projects': return 'from-blue-500 to-blue-600';
      case 'clients': return 'from-purple-500 to-purple-600';
      case 'performance': return 'from-orange-500 to-orange-600';
      case 'operational': return 'from-gray-500 to-gray-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const filteredReports = getFilteredReports();

  // Calculate statistics
  const stats = {
    totalReports: reports.length,
    generatedReports: reports.filter(r => r.status === 'generated').length,
    scheduledReports: reports.filter(r => r.status === 'scheduled').length,
    failedReports: reports.filter(r => r.status === 'failed').length,
    automatedReports: reports.filter(r => r.automated).length,
    totalViews: reports.reduce((sum, r) => sum + r.views, 0),
    totalDownloads: reports.reduce((sum, r) => sum + r.downloads, 0),
    avgViews: Math.round(reports.reduce((sum, r) => sum + r.views, 0) / reports.length)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Relatórios</h2>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Gerencie e analise todos os seus relatórios</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Buscar relatórios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`pl-10 pr-4 py-2 rounded-lg border transition-colors duration-300 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-300 ${
              isDark
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Filter className="w-4 h-4" />
            Filtros
          </motion.button>
          
          <div className="flex items-center gap-1 border rounded-lg p-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('reports')}
              className={`px-3 py-2 rounded text-sm transition-colors duration-300 ${
                viewMode === 'reports'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Relatórios
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('templates')}
              className={`px-3 py-2 rounded text-sm transition-colors duration-300 ${
                viewMode === 'templates'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Templates
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('analytics')}
              className={`px-3 py-2 rounded text-sm transition-colors duration-300 ${
                viewMode === 'analytics'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Análises
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <FileText className="w-4 h-4" />
            Novo Relatório
          </motion.button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`card group hover:shadow-xl transition-all duration-300 ${
            isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total de Relatórios</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.totalReports}</p>
            <p className="text-sm text-green-600 font-medium">+3 este mês</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`card group hover:shadow-xl transition-all duration-300 ${
            isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <Activity className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Relatórios Gerados</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.generatedReports}</p>
            <p className="text-sm text-blue-600 font-medium">{((stats.generatedReports / stats.totalReports) * 100).toFixed(1)}% do total</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`card group hover:shadow-xl transition-all duration-300 ${
            isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total de Visualizações</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.totalViews}</p>
            <p className="text-sm text-green-600 font-medium">Média: {stats.avgViews} por relatório</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`card group hover:shadow-xl transition-all duration-300 ${
            isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Download className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total de Downloads</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.totalDownloads}</p>
            <p className="text-sm text-green-600 font-medium">+15% este mês</p>
          </div>
        </motion.div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`p-4 rounded-lg border transition-colors duration-300 ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Tipo</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className={`w-full px-3 py-2 rounded border text-sm ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="all">Todos</option>
                <option value="financial">Financeiro</option>
                <option value="projects">Projetos</option>
                <option value="clients">Clientes</option>
                <option value="performance">Performance</option>
                <option value="operational">Operacional</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className={`w-full px-3 py-2 rounded border text-sm ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="all">Todos</option>
                <option value="generated">Gerado</option>
                <option value="generating">Gerando</option>
                <option value="scheduled">Agendado</option>
                <option value="failed">Falhou</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Prioridade</label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className={`w-full px-3 py-2 rounded border text-sm ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="all">Todas</option>
                <option value="critical">Crítica</option>
                <option value="high">Alta</option>
                <option value="medium">Média</option>
                <option value="low">Baixa</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Frequência</label>
              <select
                value={frequencyFilter}
                onChange={(e) => setFrequencyFilter(e.target.value)}
                className={`w-full px-3 py-2 rounded border text-sm ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="all">Todas</option>
                <option value="daily">Diário</option>
                <option value="weekly">Semanal</option>
                <option value="monthly">Mensal</option>
                <option value="quarterly">Trimestral</option>
                <option value="yearly">Anual</option>
                <option value="on_demand">Sob Demanda</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Ordenar por</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`w-full px-3 py-2 rounded border text-sm ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="lastGenerated">Última Geração</option>
                <option value="title">Título</option>
                <option value="priority">Prioridade</option>
                <option value="views">Visualizações</option>
                <option value="downloads">Downloads</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Ordem</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className={`w-full px-3 py-2 rounded border text-sm ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="desc">Decrescente</option>
                <option value="asc">Crescente</option>
              </select>
            </div>
          </div>
        </motion.div>
      )}

      {/* Content based on view mode */}
      {viewMode === 'reports' && (
        <div className="space-y-4">
          {filteredReports.map((report, index) => {
            const TypeIcon = getTypeIcon(report.type);
            
            return (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`card hover:shadow-lg transition-all duration-300 ${
                  isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-r ${getTypeColor(report.type)}`}>
                      <TypeIcon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{report.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(report.status)}`}>
                          {getStatusLabel(report.status)}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(report.priority)}`}>
                          {getPriorityLabel(report.priority)}
                        </span>
                        {report.automated && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                          }`}>
                            Automático
                          </span>
                        )}
                      </div>
                      
                      <p className={`text-sm mb-2 transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{report.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>{report.category}</span>
                        
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>• {getFrequencyLabel(report.frequency)}</span>
                        
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>• {report.format.toUpperCase()}</span>
                        
                        {report.size && (
                          <span className={`transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>• {report.size}</span>
                        )}
                        
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>• Última geração: {formatDateTime(report.lastGenerated)}</span>
                      </div>
                      
                      {report.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {report.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className={`text-xs px-2 py-1 rounded-full ${
                              isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                            }`}>
                              {tag}
                            </span>
                          ))}
                          {report.tags.length > 3 && (
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                            }`}>
                              +{report.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right text-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Eye className="w-4 h-4" />
                        <span>{report.views}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>{report.downloads}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          isDark
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          isDark
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2 rounded-lg transition-colors duration-300 ${
                          isDark
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                      
                      {report.status === 'failed' && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {viewMode === 'templates' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => {
            const TypeIcon = getTypeIcon(template.type);
            
            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card hover:shadow-lg transition-all duration-300 ${
                  isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-r ${getTypeColor(template.type)}`}>
                    <TypeIcon className="w-6 h-6 text-white" />
                  </div>
                  {template.popular && (
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isDark ? 'bg-yellow-900/50 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      <Star className="w-3 h-3 inline mr-1" />
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{template.name}</h3>
                
                <p className={`text-sm mb-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{template.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className={`text-sm font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>Campos Inclusos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {template.fields.map((field, fieldIndex) => (
                        <span key={fieldIndex} className={`text-xs px-2 py-1 rounded-full ${
                          isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm">
                      {template.customizable ? (
                        <span className={`text-green-600 ${
                          isDark ? 'text-green-400' : 'text-green-600'
                        }`}>
                          <Settings className="w-4 h-4 inline mr-1" />
                          Customizável
                        </span>
                      ) : (
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          Padrão
                        </span>
                      )}
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
                    >
                      Usar Template
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {viewMode === 'analytics' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`card ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className={`font-semibold text-lg mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Relatórios por Tipo</h3>
            <div className="h-64 flex items-center justify-center">
              <p className={`text-gray-500 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>Gráfico de distribuição por tipo seria exibido aqui</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`card ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className={`font-semibold text-lg mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Visualizações vs Downloads</h3>
            <div className="h-64 flex items-center justify-center">
              <p className={`text-gray-500 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>Gráfico de visualizações vs downloads seria exibido aqui</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`card lg:col-span-2 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className={`font-semibold text-lg mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Tendência de Geração de Relatórios</h3>
            <div className="h-64 flex items-center justify-center">
              <p className={`text-gray-500 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>Gráfico de linha da tendência seria exibido aqui</p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Empty State */}
      {viewMode === 'reports' && filteredReports.length === 0 && (
        <div className={`text-center py-12 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">Nenhum relatório encontrado</h3>
          <p>Tente ajustar os filtros ou criar um novo relatório.</p>
        </div>
      )}
    </div>
  );
};

export default Reports;