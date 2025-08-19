import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Plus,
  User,
  Building,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Star,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Users,
  Briefcase,
  Activity,
  BarChart3,
  PieChart,
  FileText,
  Settings,
  Globe,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface Client {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  type: 'individual' | 'company' | 'government';
  status: 'active' | 'inactive' | 'prospect' | 'blocked';
  priority: 'high' | 'medium' | 'low';
  registrationDate: string;
  lastContact: string;
  totalProjects: number;
  activeProjects: number;
  totalRevenue: number;
  averageProjectValue: number;
  satisfactionScore: number;
  tags: string[];
  notes: string;
  avatar?: string;
  website?: string;
  industry?: string;
  companySize?: string;
}

const Clients: React.FC = () => {
  const { isDark } = useTheme();
  
  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: 'Carlos Eduardo Silva',
      company: 'EcoEnergy Brasil Ltda',
      email: 'carlos@ecoenergy.com.br',
      phone: '(11) 99999-1234',
      address: 'Av. Paulista, 1000',
      city: 'São Paulo',
      state: 'SP',
      type: 'company',
      status: 'active',
      priority: 'high',
      registrationDate: '2023-01-15',
      lastContact: '2024-12-10',
      totalProjects: 8,
      activeProjects: 3,
      totalRevenue: 2500000,
      averageProjectValue: 312500,
      satisfactionScore: 4.8,
      tags: ['Energia Solar', 'Grande Cliente', 'Renovável'],
      notes: 'Cliente estratégico com foco em energia renovável. Sempre pontual nos pagamentos.',
      website: 'https://ecoenergy.com.br',
      industry: 'Energia',
      companySize: 'Grande'
    },
    {
      id: 2,
      name: 'Maria Santos Oliveira',
      company: 'Metalúrgica São Paulo S.A.',
      email: 'maria.santos@metalurgica.com.br',
      phone: '(11) 98888-5678',
      address: 'Rua Industrial, 500',
      city: 'São Paulo',
      state: 'SP',
      type: 'company',
      status: 'active',
      priority: 'medium',
      registrationDate: '2023-03-20',
      lastContact: '2024-12-08',
      totalProjects: 5,
      activeProjects: 2,
      totalRevenue: 1800000,
      averageProjectValue: 360000,
      satisfactionScore: 4.5,
      tags: ['Industrial', 'Automação', 'Metalúrgica'],
      notes: 'Especializada em projetos industriais complexos. Boa parceria comercial.',
      website: 'https://metalurgicasp.com.br',
      industry: 'Metalúrgica',
      companySize: 'Média'
    },
    {
      id: 3,
      name: 'Roberto Lima Costa',
      company: 'Shopping Metropolitano',
      email: 'roberto@shoppingmetro.com.br',
      phone: '(21) 97777-9012',
      address: 'Av. das Américas, 3000',
      city: 'Rio de Janeiro',
      state: 'RJ',
      type: 'company',
      status: 'active',
      priority: 'low',
      registrationDate: '2023-06-10',
      lastContact: '2024-11-25',
      totalProjects: 3,
      activeProjects: 0,
      totalRevenue: 1200000,
      averageProjectValue: 400000,
      satisfactionScore: 4.2,
      tags: ['Comercial', 'Shopping', 'Iluminação'],
      notes: 'Cliente do setor comercial. Projetos focados em eficiência energética.',
      website: 'https://shoppingmetro.com.br',
      industry: 'Varejo',
      companySize: 'Grande'
    },
    {
      id: 4,
      name: 'Ana Paula Ferreira',
      company: 'Construtora Horizonte',
      email: 'ana@horizonteconstrutora.com.br',
      phone: '(31) 96666-3456',
      address: 'Rua dos Construtores, 200',
      city: 'Belo Horizonte',
      state: 'MG',
      type: 'company',
      status: 'prospect',
      priority: 'medium',
      registrationDate: '2024-02-15',
      lastContact: '2024-12-05',
      totalProjects: 1,
      activeProjects: 1,
      totalRevenue: 450000,
      averageProjectValue: 450000,
      satisfactionScore: 4.0,
      tags: ['Construção', 'Residencial', 'Novo Cliente'],
      notes: 'Novo cliente em fase de prospecção. Potencial para projetos residenciais.',
      website: 'https://horizonteconstrutora.com.br',
      industry: 'Construção',
      companySize: 'Média'
    },
    {
      id: 5,
      name: 'João Pedro Santos',
      company: 'Pessoa Física',
      email: 'joao.santos@email.com',
      phone: '(11) 95555-7890',
      address: 'Rua das Flores, 123',
      city: 'São Paulo',
      state: 'SP',
      type: 'individual',
      status: 'active',
      priority: 'low',
      registrationDate: '2024-01-20',
      lastContact: '2024-11-30',
      totalProjects: 2,
      activeProjects: 0,
      totalRevenue: 85000,
      averageProjectValue: 42500,
      satisfactionScore: 4.7,
      tags: ['Pessoa Física', 'Residencial', 'Solar'],
      notes: 'Cliente pessoa física interessado em energia solar residencial.',
      industry: 'Residencial',
      companySize: 'Individual'
    },
    {
      id: 6,
      name: 'Prefeitura Municipal',
      company: 'Prefeitura de Santos',
      email: 'projetos@santos.sp.gov.br',
      phone: '(13) 94444-1122',
      address: 'Praça Mauá, 1',
      city: 'Santos',
      state: 'SP',
      type: 'government',
      status: 'active',
      priority: 'high',
      registrationDate: '2023-08-01',
      lastContact: '2024-12-12',
      totalProjects: 4,
      activeProjects: 2,
      totalRevenue: 3200000,
      averageProjectValue: 800000,
      satisfactionScore: 4.6,
      tags: ['Governo', 'Público', 'Iluminação Pública'],
      notes: 'Cliente governamental com projetos de iluminação pública e eficiência energética.',
      website: 'https://santos.sp.gov.br',
      industry: 'Governo',
      companySize: 'Grande'
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort clients
  const getFilteredClients = () => {
    let filtered = clients;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(client => 
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(client => client.status === statusFilter);
    }
    
    // Type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(client => client.type === typeFilter);
    }
    
    // Priority filter
    if (priorityFilter !== 'all') {
      filtered = filtered.filter(client => client.priority === priorityFilter);
    }
    
    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'company':
          aValue = a.company.toLowerCase();
          bValue = b.company.toLowerCase();
          break;
        case 'totalRevenue':
          aValue = a.totalRevenue;
          bValue = b.totalRevenue;
          break;
        case 'satisfactionScore':
          aValue = a.satisfactionScore;
          bValue = b.satisfactionScore;
          break;
        case 'registrationDate':
          aValue = new Date(a.registrationDate).getTime();
          bValue = new Date(b.registrationDate).getTime();
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
      case 'active': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      case 'inactive': return isDark ? 'bg-gray-900/80 text-gray-200' : 'bg-gray-100 text-gray-800';
      case 'prospect': return isDark ? 'bg-blue-900/80 text-blue-200' : 'bg-blue-100 text-blue-800';
      case 'blocked': return isDark ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Ativo';
      case 'inactive': return 'Inativo';
      case 'prospect': return 'Prospecto';
      case 'blocked': return 'Bloqueado';
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
      case 'individual': return User;
      case 'company': return Building;
      case 'government': return Award;
      default: return User;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'individual': return 'bg-blue-500';
      case 'company': return 'bg-purple-500';
      case 'government': return 'bg-green-500';
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

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const openClientModal = (client: Client) => {
    setSelectedClient(client);
    setIsClientModalOpen(true);
  };

  const closeClientModal = () => {
    setSelectedClient(null);
    setIsClientModalOpen(false);
  };

  const filteredClients = getFilteredClients();

  // Statistics
  const stats = {
    total: clients.length,
    active: clients.filter(c => c.status === 'active').length,
    prospects: clients.filter(c => c.status === 'prospect').length,
    totalRevenue: clients.reduce((sum, c) => sum + c.totalRevenue, 0),
    averageSatisfaction: clients.reduce((sum, c) => sum + c.satisfactionScore, 0) / clients.length,
    activeProjects: clients.reduce((sum, c) => sum + c.activeProjects, 0)
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Clientes</h2>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Gerencie seu relacionamento com clientes</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Buscar clientes..."
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
            Novo Cliente
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
              <Users className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total de Clientes</p>
            <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.total}</p>
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
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Clientes Ativos</p>
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
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Receita Total</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{formatCurrency(stats.totalRevenue)}</p>
            <p className="text-sm text-green-600 font-medium">+15% este ano</p>
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
              <Star className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Satisfação Média</p>
            <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.averageSatisfaction.toFixed(1)}</p>
            <p className="text-sm text-green-600 font-medium">Excelente qualidade</p>
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
                <option value="active">Ativo</option>
                <option value="inactive">Inativo</option>
                <option value="prospect">Prospecto</option>
                <option value="blocked">Bloqueado</option>
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
                <option value="individual">Pessoa Física</option>
                <option value="company">Empresa</option>
                <option value="government">Governo</option>
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
                <option value="company">Empresa</option>
                <option value="totalRevenue">Receita</option>
                <option value="satisfactionScore">Satisfação</option>
                <option value="registrationDate">Data de Cadastro</option>
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

      {/* Clients Grid/List */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredClients.map((client, index) => {
          const TypeIcon = getTypeIcon(client.type);
          
          return (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card group hover:shadow-xl transition-all duration-300 cursor-pointer ${
                isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
              } ${viewMode === 'list' ? 'flex items-center gap-6' : ''}`}
              onClick={() => openClientModal(client)}
            >
              {viewMode === 'grid' ? (
                <>
                  {/* Client Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${getTypeColor(client.type)} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {client.avatar ? (
                          <img src={client.avatar} alt={client.name} className="w-full h-full rounded-xl object-cover" />
                        ) : (
                          <span className="text-white font-semibold text-sm">{getInitials(client.name)}</span>
                        )}
                      </div>
                      <div>
                        <h3 className={`font-semibold text-lg leading-tight transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{client.name}</h3>
                        <p className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>{client.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(client.status)}`}>
                        {getStatusLabel(client.status)}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(client.priority)}`}>
                        {client.priority === 'high' ? 'Alta' : client.priority === 'medium' ? 'Média' : 'Baixa'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Client Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Mail className={`w-4 h-4 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{client.email}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className={`w-4 h-4 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{client.phone}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className={`w-4 h-4 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>{client.city}, {client.state}</span>
                    </div>
                    
                    {client.website && (
                      <div className="flex items-center gap-2">
                        <Globe className={`w-4 h-4 ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`} />
                        <a 
                          href={client.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Website
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <p className={`text-lg font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{client.totalProjects}</p>
                      <p className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>Projetos</p>
                    </div>
                    <div className="text-center">
                      <p className={`text-lg font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{formatCurrency(client.totalRevenue)}</p>
                      <p className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>Receita</p>
                    </div>
                  </div>
                  
                  {/* Satisfaction Score */}
                  <div className="mb-4">
                    <div className={`flex items-center justify-between text-sm mb-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <span>Satisfação</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{client.satisfactionScore.toFixed(1)}</span>
                      </div>
                    </div>
                    <div className={`w-full rounded-full h-2 ${
                      isDark ? 'bg-gray-600' : 'bg-gray-200'
                    }`}>
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-300" 
                        style={{width: `${(client.satisfactionScore / 5) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {client.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className={`text-xs px-2 py-1 rounded-full ${
                        isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {tag}
                      </span>
                    ))}
                    {client.tags.length > 3 && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                      }`}>
                        +{client.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-400">Desde {formatDate(client.registrationDate)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-400">{client.activeProjects} ativos</span>
                    </div>
                  </div>
                </>
              ) : (
                // List View
                <>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${getTypeColor(client.type)} rounded-xl flex items-center justify-center shadow-lg`}>
                      {client.avatar ? (
                        <img src={client.avatar} alt={client.name} className="w-full h-full rounded-xl object-cover" />
                      ) : (
                        <span className="text-white font-semibold text-sm">{getInitials(client.name)}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{client.name}</h3>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{client.company} • {client.city}, {client.state}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className={`text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>Projetos</p>
                      <p className={`text-lg font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{client.totalProjects}</p>
                    </div>
                    
                    <div className="text-center">
                      <p className={`text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>Receita</p>
                      <p className={`text-lg font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{formatCurrency(client.totalRevenue)}</p>
                    </div>
                    
                    <div className="text-center">
                      <p className={`text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>Satisfação</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <p className={`text-lg font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{client.satisfactionScore.toFixed(1)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(client.status)}`}>
                        {getStatusLabel(client.status)}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full ${getPriorityColor(client.priority)}`}>
                        {client.priority === 'high' ? 'Alta' : client.priority === 'medium' ? 'Média' : 'Baixa'}
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
      {filteredClients.length === 0 && (
        <div className={`text-center py-12 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">Nenhum cliente encontrado</h3>
          <p>Tente ajustar os filtros ou cadastrar um novo cliente.</p>
        </div>
      )}
    </div>
  );
};

export default Clients;