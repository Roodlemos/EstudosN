import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Plus,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  CreditCard,
  Wallet,
  PieChart,
  BarChart3,
  ArrowUpRight,
  ArrowDownLeft,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Receipt,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  Target,
  Activity,
  Briefcase,
  Building,
  User
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface Transaction {
  id: number;
  type: 'income' | 'expense';
  category: string;
  description: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'cancelled';
  paymentMethod: 'cash' | 'credit' | 'debit' | 'transfer' | 'pix';
  client?: string;
  project?: string;
  invoice?: string;
  tags: string[];
  notes?: string;
}

interface Budget {
  id: number;
  category: string;
  budgeted: number;
  spent: number;
  period: 'monthly' | 'quarterly' | 'yearly';
  status: 'on_track' | 'warning' | 'exceeded';
}

const Financial: React.FC = () => {
  const { isDark } = useTheme();
  
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      type: 'income',
      category: 'Projetos',
      description: 'Pagamento - Usina Solar 50MW',
      amount: 500000,
      date: '2024-12-15',
      status: 'completed',
      paymentMethod: 'transfer',
      client: 'EcoEnergy Brasil',
      project: 'Usina Solar Fotovoltaica 50MW',
      invoice: 'INV-2024-001',
      tags: ['Solar', 'Projeto', 'Pagamento'],
      notes: 'Primeira parcela do projeto de usina solar'
    },
    {
      id: 2,
      type: 'expense',
      category: 'Equipamentos',
      description: 'Compra de Software de Simulação',
      amount: 15000,
      date: '2024-12-14',
      status: 'completed',
      paymentMethod: 'credit',
      tags: ['Software', 'Equipamento', 'Tecnologia'],
      notes: 'Licença anual do software de simulação elétrica'
    },
    {
      id: 3,
      type: 'income',
      category: 'Consultoria',
      description: 'Consultoria Técnica - Metalúrgica SP',
      amount: 25000,
      date: '2024-12-13',
      status: 'completed',
      paymentMethod: 'pix',
      client: 'Metalúrgica São Paulo',
      tags: ['Consultoria', 'Industrial'],
      notes: 'Consultoria para modernização do sistema elétrico'
    },
    {
      id: 4,
      type: 'expense',
      category: 'Pessoal',
      description: 'Salários - Dezembro 2024',
      amount: 45000,
      date: '2024-12-01',
      status: 'completed',
      paymentMethod: 'transfer',
      tags: ['Salário', 'Pessoal', 'Mensal'],
      notes: 'Folha de pagamento mensal da equipe'
    },
    {
      id: 5,
      type: 'income',
      category: 'Projetos',
      description: 'Projeto Shopping Center - Parcela Final',
      amount: 180000,
      date: '2024-12-10',
      status: 'pending',
      paymentMethod: 'transfer',
      client: 'Shopping Metropolitano',
      project: 'Shopping Center Elétrico',
      invoice: 'INV-2024-002',
      tags: ['Comercial', 'Projeto', 'Final'],
      notes: 'Parcela final do projeto do shopping center'
    },
    {
      id: 6,
      type: 'expense',
      category: 'Operacional',
      description: 'Aluguel do Escritório',
      amount: 8000,
      date: '2024-12-05',
      status: 'completed',
      paymentMethod: 'transfer',
      tags: ['Aluguel', 'Escritório', 'Mensal'],
      notes: 'Aluguel mensal do escritório'
    },
    {
      id: 7,
      type: 'expense',
      category: 'Marketing',
      description: 'Campanha Digital - Google Ads',
      amount: 3500,
      date: '2024-12-08',
      status: 'completed',
      paymentMethod: 'credit',
      tags: ['Marketing', 'Digital', 'Publicidade'],
      notes: 'Investimento em marketing digital para captação de clientes'
    },
    {
      id: 8,
      type: 'income',
      category: 'Projetos',
      description: 'Estudo de Viabilidade - Governo Santos',
      amount: 120000,
      date: '2024-12-12',
      status: 'completed',
      paymentMethod: 'transfer',
      client: 'Prefeitura de Santos',
      tags: ['Governo', 'Estudo', 'Público'],
      notes: 'Estudo de viabilidade para iluminação pública'
    }
  ]);
  
  const [budgets, setBudgets] = useState<Budget[]>([
    {
      id: 1,
      category: 'Pessoal',
      budgeted: 50000,
      spent: 45000,
      period: 'monthly',
      status: 'on_track'
    },
    {
      id: 2,
      category: 'Equipamentos',
      budgeted: 20000,
      spent: 15000,
      period: 'monthly',
      status: 'on_track'
    },
    {
      id: 3,
      category: 'Operacional',
      budgeted: 15000,
      spent: 11500,
      period: 'monthly',
      status: 'on_track'
    },
    {
      id: 4,
      category: 'Marketing',
      budgeted: 5000,
      spent: 3500,
      period: 'monthly',
      status: 'on_track'
    }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateRange, setDateRange] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [viewMode, setViewMode] = useState<'transactions' | 'budget' | 'analytics'>('transactions');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort transactions
  const getFilteredTransactions = () => {
    let filtered = transactions;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(transaction => 
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (transaction.client && transaction.client.toLowerCase().includes(searchTerm.toLowerCase())) ||
        transaction.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(transaction => transaction.type === typeFilter);
    }
    
    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(transaction => transaction.category === categoryFilter);
    }
    
    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(transaction => transaction.status === statusFilter);
    }
    
    // Date range filter
    if (dateRange !== 'all') {
      const now = new Date();
      const filterDate = new Date();
      
      switch (dateRange) {
        case 'today':
          filterDate.setHours(0, 0, 0, 0);
          break;
        case 'week':
          filterDate.setDate(now.getDate() - 7);
          break;
        case 'month':
          filterDate.setMonth(now.getMonth() - 1);
          break;
        case 'quarter':
          filterDate.setMonth(now.getMonth() - 3);
          break;
        case 'year':
          filterDate.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      filtered = filtered.filter(transaction => new Date(transaction.date) >= filterDate);
    }
    
    // Sort
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
        case 'amount':
          aValue = a.amount;
          bValue = b.amount;
          break;
        case 'description':
          aValue = a.description.toLowerCase();
          bValue = b.description.toLowerCase();
          break;
        case 'category':
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        default:
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
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
      case 'completed': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      case 'pending': return isDark ? 'bg-yellow-900/80 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return isDark ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Concluído';
      case 'pending': return 'Pendente';
      case 'cancelled': return 'Cancelado';
      default: return 'Desconhecido';
    }
  };

  const getPaymentMethodLabel = (method: string) => {
    switch (method) {
      case 'cash': return 'Dinheiro';
      case 'credit': return 'Cartão de Crédito';
      case 'debit': return 'Cartão de Débito';
      case 'transfer': return 'Transferência';
      case 'pix': return 'PIX';
      default: return 'Outro';
    }
  };

  const getBudgetStatus = (budget: Budget) => {
    const percentage = (budget.spent / budget.budgeted) * 100;
    if (percentage > 100) return 'exceeded';
    if (percentage > 80) return 'warning';
    return 'on_track';
  };

  const getBudgetStatusColor = (status: string) => {
    switch (status) {
      case 'on_track': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      case 'warning': return isDark ? 'bg-yellow-900/80 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'exceeded': return isDark ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
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

  const filteredTransactions = getFilteredTransactions();

  // Calculate statistics
  const stats = {
    totalIncome: transactions.filter(t => t.type === 'income' && t.status === 'completed').reduce((sum, t) => sum + t.amount, 0),
    totalExpenses: transactions.filter(t => t.type === 'expense' && t.status === 'completed').reduce((sum, t) => sum + t.amount, 0),
    pendingIncome: transactions.filter(t => t.type === 'income' && t.status === 'pending').reduce((sum, t) => sum + t.amount, 0),
    pendingExpenses: transactions.filter(t => t.type === 'expense' && t.status === 'pending').reduce((sum, t) => sum + t.amount, 0),
    totalBudget: budgets.reduce((sum, b) => sum + b.budgeted, 0),
    totalSpent: budgets.reduce((sum, b) => sum + b.spent, 0)
  };

  const netIncome = stats.totalIncome - stats.totalExpenses;
  const budgetUtilization = (stats.totalSpent / stats.totalBudget) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Financeiro</h2>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Controle completo das suas finanças</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Buscar transações..."
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
              onClick={() => setViewMode('transactions')}
              className={`px-3 py-2 rounded text-sm transition-colors duration-300 ${
                viewMode === 'transactions'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Transações
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('budget')}
              className={`px-3 py-2 rounded text-sm transition-colors duration-300 ${
                viewMode === 'budget'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Orçamento
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
            <Plus className="w-4 h-4" />
            Nova Transação
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
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Receitas</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{formatCurrency(stats.totalIncome)}</p>
            <p className="text-sm text-green-600 font-medium">+12% este mês</p>
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
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <ArrowDownLeft className="w-6 h-6 text-white" />
            </div>
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Despesas</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{formatCurrency(stats.totalExpenses)}</p>
            <p className="text-sm text-red-600 font-medium">+5% este mês</p>
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
            <div className={`w-12 h-12 bg-gradient-to-r ${netIncome >= 0 ? 'from-blue-500 to-blue-600' : 'from-orange-500 to-orange-600'} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Wallet className="w-6 h-6 text-white" />
            </div>
            {netIncome >= 0 ? <TrendingUp className="w-5 h-5 text-green-500" /> : <TrendingDown className="w-5 h-5 text-red-500" />}
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Lucro Líquido</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{formatCurrency(netIncome)}</p>
            <p className={`text-sm font-medium ${netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {netIncome >= 0 ? 'Positivo' : 'Negativo'}
            </p>
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
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Target className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Uso do Orçamento</p>
            <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{budgetUtilization.toFixed(1)}%</p>
            <p className="text-sm text-green-600 font-medium">Dentro do planejado</p>
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
                <option value="income">Receitas</option>
                <option value="expense">Despesas</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Categoria</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className={`w-full px-3 py-2 rounded border text-sm ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="all">Todas</option>
                <option value="Projetos">Projetos</option>
                <option value="Consultoria">Consultoria</option>
                <option value="Equipamentos">Equipamentos</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Operacional">Operacional</option>
                <option value="Marketing">Marketing</option>
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
                <option value="completed">Concluído</option>
                <option value="pending">Pendente</option>
                <option value="cancelled">Cancelado</option>
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Período</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className={`w-full px-3 py-2 rounded border text-sm ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="all">Todos</option>
                <option value="today">Hoje</option>
                <option value="week">Última Semana</option>
                <option value="month">Último Mês</option>
                <option value="quarter">Último Trimestre</option>
                <option value="year">Último Ano</option>
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
                <option value="date">Data</option>
                <option value="amount">Valor</option>
                <option value="description">Descrição</option>
                <option value="category">Categoria</option>
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
      {viewMode === 'transactions' && (
        <div className="space-y-4">
          {filteredTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`card hover:shadow-lg transition-all duration-300 ${
                isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                    transaction.type === 'income' 
                      ? 'bg-gradient-to-r from-green-500 to-green-600' 
                      : 'bg-gradient-to-r from-red-500 to-red-600'
                  }`}>
                    {transaction.type === 'income' ? (
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    ) : (
                      <ArrowDownLeft className="w-6 h-6 text-white" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{transaction.description}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(transaction.status)}`}>
                        {getStatusLabel(transaction.status)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <span className={`transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{transaction.category}</span>
                      
                      {transaction.client && (
                        <span className={`transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>• {transaction.client}</span>
                      )}
                      
                      <span className={`transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>• {getPaymentMethodLabel(transaction.paymentMethod)}</span>
                      
                      <span className={`transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>• {formatDate(transaction.date)}</span>
                    </div>
                    
                    {transaction.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {transaction.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className={`text-xs px-2 py-1 rounded-full ${
                            isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {tag}
                          </span>
                        ))}
                        {transaction.tags.length > 3 && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                          }`}>
                            +{transaction.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-right">
                  <p className={`text-xl font-bold ${
                    transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                  </p>
                  
                  {transaction.invoice && (
                    <p className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>{transaction.invoice}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {viewMode === 'budget' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {budgets.map((budget, index) => {
            const percentage = (budget.spent / budget.budgeted) * 100;
            const status = getBudgetStatus(budget);
            
            return (
              <motion.div
                key={budget.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card hover:shadow-lg transition-all duration-300 ${
                  isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{budget.category}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full ${getBudgetStatusColor(status)}`}>
                    {status === 'on_track' ? 'No Prazo' : status === 'warning' ? 'Atenção' : 'Excedido'}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Orçado</span>
                    <span className={`font-semibold transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{formatCurrency(budget.budgeted)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Gasto</span>
                    <span className={`font-semibold transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{formatCurrency(budget.spent)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Restante</span>
                    <span className={`font-semibold ${
                      budget.budgeted - budget.spent >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>{formatCurrency(budget.budgeted - budget.spent)}</span>
                  </div>
                  
                  <div>
                    <div className={`flex items-center justify-between text-sm mb-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <span>Utilização</span>
                      <span>{percentage.toFixed(1)}%</span>
                    </div>
                    <div className={`w-full rounded-full h-3 ${
                      isDark ? 'bg-gray-600' : 'bg-gray-200'
                    }`}>
                      <div 
                        className={`h-3 rounded-full transition-all duration-300 ${
                          status === 'on_track' ? 'bg-green-500' : 
                          status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{width: `${Math.min(percentage, 100)}%`}}
                      ></div>
                    </div>
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
            }`}>Receitas vs Despesas</h3>
            <div className="h-64 flex items-center justify-center">
              <p className={`text-gray-500 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>Gráfico de receitas vs despesas seria exibido aqui</p>
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
            }`}>Distribuição por Categoria</h3>
            <div className="h-64 flex items-center justify-center">
              <p className={`text-gray-500 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>Gráfico de pizza das categorias seria exibido aqui</p>
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
            }`}>Fluxo de Caixa Mensal</h3>
            <div className="h-64 flex items-center justify-center">
              <p className={`text-gray-500 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>Gráfico de linha do fluxo de caixa seria exibido aqui</p>
            </div>
          </motion.div>
        </div>
      )}

      {/* Empty State */}
      {viewMode === 'transactions' && filteredTransactions.length === 0 && (
        <div className={`text-center py-12 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <Receipt className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">Nenhuma transação encontrada</h3>
          <p>Tente ajustar os filtros ou adicionar uma nova transação.</p>
        </div>
      )}
    </div>
  );
};

export default Financial;