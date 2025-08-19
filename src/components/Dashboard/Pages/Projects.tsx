import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Plus,
  User,
  Calendar,
  MapPin,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Star,
  Users,
  Briefcase,
  Building,
  Zap,
  Activity,
  BarChart3,
  PieChart,
  FileText,
  Settings
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

interface Project {
  id: number;
  name: string;
  client: string;
  type: 'solar' | 'industrial' | 'commercial' | 'residential';
  status: 'planning' | 'inprogress' | 'review' | 'completed' | 'onhold';
  priority: 'high' | 'medium' | 'low';
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
  progress: number;
  team: Array<{ name: string; role: string; avatar: string; color: string }>;
  location: string;
  description: string;
  tags: string[];
  lastUpdate: string;
  documents: number;
  tasks: {
    total: number;
    completed: number;
    pending: number;
  };
}

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: 'Usina Solar Fotovoltaica 50MW',
      client: 'EcoEnergy Brasil',
      type: 'solar',
      status: 'inprogress',
      priority: 'high',
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      budget: 2500000,
      spent: 1200000,
      progress: 65,
      team: [
        { name: 'João Silva', role: 'Gerente de Projeto', avatar: 'JS', color: 'bg-blue-500' },
        { name: 'Maria Santos', role: 'Engenheira Elétrica', avatar: 'MS', color: 'bg-green-500' },
        { name: 'Pedro Costa', role: 'Analista Técnico', avatar: 'PC', color: 'bg-purple-500' }
      ],
      location: 'Bahia, Brasil',
      description: 'Desenvolvimento completo de usina solar fotovoltaica com capacidade de 50MW, incluindo estudos de viabilidade, projeto executivo e acompanhamento da construção.',
      tags: ['Solar', 'Renovável', 'Grande Porte'],
      lastUpdate: '2024-12-15',
      documents: 45,
      tasks: { total: 120, completed: 78, pending: 42 }
    },
    {
      id: 2,
      name: 'Sistema Elétrico Industrial',
      client: 'Metalúrgica São Paulo',
      type: 'industrial',
      status: 'review',
      priority: 'medium',
      startDate: '2024-02-01',
      endDate: '2024-04-15',
      budget: 850000,
      spent: 720000,
      progress: 90,
      team: [
        { name: 'Ana Oliveira', role: 'Engenheira Sênior', avatar: 'AO', color: 'bg-red-500' },
        { name: 'Carlos Lima', role: 'Técnico Especialista', avatar: 'CL', color: 'bg-yellow-500' }
      ],
      location: 'São Paulo, SP',
      description: 'Modernização completa do sistema elétrico industrial, incluindo subestação, quadros de distribuição e sistema de automação.',
      tags: ['Industrial', 'Automação', 'Modernização'],
      lastUpdate: '2024-12-14',
      documents: 32,
      tasks: { total: 85, completed: 76, pending: 9 }
    },
    {
      id: 3,
      name: 'Shopping Center Elétrico',
      client: 'Shopping Metropolitano',
      type: 'commercial',
      status: 'completed',
      priority: 'low',
      startDate: '2023-10-01',
      endDate: '2024-01-30',
      budget: 1200000,
      spent: 1150000,
      progress: 100,
      team: [
        { name: 'Roberto Silva', role: 'Coordenador', avatar: 'RS', color: 'bg-indigo-500' },
        { name: 'Fernanda Costa', role: 'Engenheira', avatar: 'FC', color: 'bg-pink-500' }
      ],
      location: 'Rio de Janeiro, RJ',
      description: 'Projeto elétrico completo para shopping center, incluindo iluminação, climatização e sistemas de segurança.',
      tags: ['Comercial', 'Iluminação', 'Climatização'],
      lastUpdate: '2024-01-30',
      documents: 28,
      tasks: { total: 95, completed: 95, pending: 0 }
    },
    {
      id: 4,
      name: 'Condomínio Residencial',
      client: 'Construtora Horizonte',
      type: 'residential',
      status: 'planning',
      priority: 'medium',
      startDate: '2024-03-01',
      endDate: '2024-08-15',
      budget: 450000,
      spent: 0,
      progress: 15,
      team: [
        { name: 'Lucas Pereira', role: 'Projetista', avatar: 'LP', color: 'bg-teal-500' }
      ],
      location: 'Belo Horizonte, MG',
      description: 'Projeto elétrico para condomínio residencial com 200 unidades, incluindo infraestrutura comum e individual.',
      tags: ['Residencial', 'Condomínio', 'Infraestrutura'],
      lastUpdate: '2024-12-10',
      documents: 8,
      tasks: { total: 60, completed: 9, pending: 51 }
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort projects
  const getFilteredProjects = () => {
    let filtered = projects;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(project => project.status === statusFilter);
    }
    
    // Type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(project => project.type === typeFilter);
    }
    
    // Priority filter
    if (priorityFilter !== 'all') {
      filtered = filtered.filter(project => project.priority === priorityFilter);
    }
    
    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'client':
          aValue = a.client.toLowerCase();
          bValue = b.client.toLowerCase();
          break;
        case 'budget':
          aValue = a.budget;
          bValue = b.budget;
          break;
        case 'progress':
          aValue = a.progress;
          bValue = b.progress;
          break;
        case 'endDate':
          aValue = new Date(a.endDate).getTime();
          bValue = new Date(b.endDate).getTime();
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
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
      case 'planning': return isDark ? 'bg-gray-900/80 text-gray-200' : 'bg-gray-100 text-gray-800';
      case 'inprogress': return isDark ? 'bg-blue-900/80 text-blue-200' : 'bg-blue-100 text-blue-800';
      case 'review': return isDark ? 'bg-yellow-900/80 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'completed': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      case 'onhold': return isDark ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'planning': return 'Planejamento';
      case 'inprogress': return 'Em Andamento';
      case 'review': return 'Revisão';
      case 'completed': return 'Concluído';
      case 'onhold': return 'Pausado';
      default: return 'Desconhecido';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return isDark ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800';
      case 'medium': return isDark ? 'bg-yellow-900/80 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'low': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'solar': return Zap;
      case 'industrial': return Building;
      case 'commercial': return Briefcase;
      case 'residential': return User;
      default: return Activity;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'solar': return 'bg-yellow-500';
      case 'industrial': return 'bg-blue-500';
      case 'commercial': return 'bg-purple-500';
      case 'residential': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const isOverdue = (endDate: string, status: string) => {
    return new Date(endDate) < new Date() && status !== 'completed';
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsProjectModalOpen(false);
  };

  const filteredProjects = getFilteredProjects();

  // Statistics
  const stats = {
    total: projects.length,
    active: projects.filter(p => p.status === 'inprogress').length,
    completed: projects.filter(p => p.status === 'completed').length,
    overdue: projects.filter(p => isOverdue(p.endDate, p.status)).length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
    totalSpent: projects.reduce((sum, p) => sum + p.spent, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Projetos</h2>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Gerencie todos os seus projetos em um só lugar</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Buscar projetos..."
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
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors duration-300 ${
                viewMode === 'grid'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors duration-300 ${
                viewMode === 'list'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FileText className="w-4 h-4" />
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <Plus className="w-4 h-4" />
            Novo Projeto
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
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total de Projetos</p>
            <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.total}</p>
            <p className="text-sm text-green-600 font-medium">+2 este mês</p>
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
              <Activity className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Projetos Ativos</p>
            <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.active}</p>
            <p className="text-sm text-green-600 font-medium">{Math.round((stats.active / stats.total) * 100)}% do total</p>
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
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Orçamento Total</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{formatCurrency(stats.totalBudget)}</p>
            <p className="text-sm text-green-600 font-medium">{Math.round((stats.totalSpent / stats.totalBudget) * 100)}% executado</p>
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
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Taxa de Conclusão</p>
            <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{Math.round((stats.completed / stats.total) * 100)}%</p>
            <p className="text-sm text-green-600 font-medium">{stats.completed} concluídos</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
                <option value="planning">Planejamento</option>
                <option value="inprogress">Em Andamento</option>
                <option value="review">Revisão</option>
                <option value="completed">Concluído</option>
                <option value="onhold">Pausado</option>
              </select>
            </div>
            
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
                <option value="solar">Solar</option>
                <option value="industrial">Industrial</option>
                <option value="commercial">Comercial</option>
                <option value="residential">Residencial</option>
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
                <option value="high">Alta</option>
                <option value="medium">Média</option>
                <option value="low">Baixa</option>
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
                <option value="name">Nome</option>
                <option value="client">Cliente</option>
                <option value="budget">Orçamento</option>
                <option value="progress">Progresso</option>
                <option value="endDate">Data de Entrega</option>
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
                <option value="asc">Crescente</option>
                <option value="desc">Decrescente</option>
              </select>
            </div>
          </div>
        </motion.div>
      )}

      {/* Projects Grid/List */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredProjects.map((project, index) => {
          const TypeIcon = getTypeIcon(project.type);
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card group hover:shadow-xl transition-all duration-300 cursor-pointer ${
                isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
              } ${viewMode === 'list' ? 'flex items-center gap-6' : ''}`}
              onClick={() => openProjectModal(project)}
            >
              {viewMode === 'grid' ? (
                <>
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${getTypeColor(project.type)} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <TypeIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold text-lg leading-tight transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{project.name}</h3>
                        <p className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>{project.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                        {getStatusLabel(project.status)}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(project.priority)}`}>
                        {project.priority === 'high' ? 'Alta' : project.priority === 'medium' ? 'Média' : 'Baixa'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{project.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className={`w-4 h-4 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                      {isOverdue(project.endDate, project.status) && (
                        <span className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full">Atrasado</span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <DollarSign className={`w-4 h-4 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{formatCurrency(project.budget)}</span>
                    </div>
                  </div>
                  
                  {/* Progress */}
                  <div className="mb-4">
                    <div className={`flex items-center justify-between text-sm mb-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <span>Progresso</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      isDark ? 'bg-gray-600' : 'bg-gray-200'
                    }`}>
                      <div 
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                        style={{width: `${project.progress}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`text-xs px-2 py-1 rounded-full ${
                        isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Team and Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 3).map((member, memberIndex) => (
                        <div 
                          key={memberIndex}
                          className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-medium border-2 ${
                            isDark ? 'border-gray-700' : 'border-white'
                          }`}
                          title={`${member.name} - ${member.role}`}
                        >
                          {member.avatar}
                        </div>
                      ))}
                      {project.team.length > 3 && (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border-2 ${
                          isDark 
                            ? 'bg-gray-600 text-gray-300 border-gray-700' 
                            : 'bg-gray-200 text-gray-600 border-white'
                        }`}>
                          +{project.team.length - 3}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{project.documents}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{project.tasks.completed}/{project.tasks.total}</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // List View
                <>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${getTypeColor(project.type)} rounded-xl flex items-center justify-center shadow-lg`}>
                      <TypeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{project.name}</h3>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{project.client} • {project.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className={`text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>Progresso</p>
                      <p className={`text-lg font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{project.progress}%</p>
                    </div>
                    
                    <div className="text-center">
                      <p className={`text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>Orçamento</p>
                      <p className={`text-lg font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{formatCurrency(project.budget)}</p>
                    </div>
                    
                    <div className="text-center">
                      <p className={`text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>Entrega</p>
                      <p className={`text-lg font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{formatDate(project.endDate)}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                        {getStatusLabel(project.status)}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full ${getPriorityColor(project.priority)}`}>
                        {project.priority === 'high' ? 'Alta' : project.priority === 'medium' ? 'Média' : 'Baixa'}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className={`text-center py-12 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">Nenhum projeto encontrado</h3>
          <p>Tente ajustar os filtros ou criar um novo projeto.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;