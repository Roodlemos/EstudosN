import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Filter,
  Clock,
  MapPin,
  Users,
  Video,
  Phone,
  Mail,
  FileText,
  AlertCircle,
  CheckCircle,
  User,
  Building,
  Briefcase,
  Zap,
  Settings,
  Eye,
  Edit,
  Trash2,
  Copy,
  Share2,
  Bell,
  BellOff,
  Repeat,
  Grid,
  List,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

interface CalendarEvent {
  id: number;
  title: string;
  description: string;
  type: 'meeting' | 'project' | 'deadline' | 'personal' | 'client' | 'training';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'scheduled' | 'confirmed' | 'cancelled' | 'completed';
  startDate: string;
  endDate: string;
  allDay: boolean;
  location?: string;
  isOnline: boolean;
  meetingLink?: string;
  attendees: string[];
  organizer: string;
  reminders: number[]; // minutes before event
  recurring: boolean;
  recurringPattern?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  tags: string[];
  notes?: string;
  attachments?: string[];
}

const Calendar: React.FC = () => {
  const { isDark } = useTheme();
  
  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: 1,
      title: 'Reunião com Cliente - EcoEnergy Brasil',
      description: 'Apresentação do projeto de usina solar fotovoltaica',
      type: 'client',
      priority: 'high',
      status: 'confirmed',
      startDate: '2024-12-16T09:00:00',
      endDate: '2024-12-16T10:30:00',
      allDay: false,
      location: 'Sala de Reuniões 1',
      isOnline: false,
      attendees: ['joao.silva@empresa.com', 'maria.santos@ecoenergy.com', 'pedro.oliveira@ecoenergy.com'],
      organizer: 'joao.silva@empresa.com',
      reminders: [15, 60],
      recurring: false,
      tags: ['Cliente', 'Projeto', 'Solar'],
      notes: 'Levar apresentação atualizada e propostas de cronograma'
    },
    {
      id: 2,
      title: 'Deadline - Relatório Técnico Shopping Center',
      description: 'Entrega do relatório técnico do projeto elétrico',
      type: 'deadline',
      priority: 'critical',
      status: 'scheduled',
      startDate: '2024-12-17T17:00:00',
      endDate: '2024-12-17T17:00:00',
      allDay: false,
      isOnline: false,
      attendees: ['carlos.engenheiro@empresa.com', 'ana.coordenadora@empresa.com'],
      organizer: 'sistema@empresa.com',
      reminders: [60, 1440], // 1 hour and 1 day before
      recurring: false,
      tags: ['Deadline', 'Relatório', 'Shopping'],
      notes: 'Revisar todos os cálculos antes da entrega'
    },
    {
      id: 3,
      title: 'Treinamento - Novas Normas ABNT',
      description: 'Capacitação sobre as novas normas técnicas da ABNT',
      type: 'training',
      priority: 'medium',
      status: 'confirmed',
      startDate: '2024-12-18T14:00:00',
      endDate: '2024-12-18T17:00:00',
      allDay: false,
      location: 'Auditório Principal',
      isOnline: true,
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      attendees: ['equipe.tecnica@empresa.com'],
      organizer: 'rh@empresa.com',
      reminders: [30],
      recurring: false,
      tags: ['Treinamento', 'ABNT', 'Normas'],
      notes: 'Material será disponibilizado após o treinamento'
    },
    {
      id: 4,
      title: 'Reunião Semanal de Projetos',
      description: 'Acompanhamento do status de todos os projetos ativos',
      type: 'meeting',
      priority: 'medium',
      status: 'confirmed',
      startDate: '2024-12-19T10:00:00',
      endDate: '2024-12-19T11:00:00',
      allDay: false,
      location: 'Sala de Reuniões 2',
      isOnline: false,
      attendees: ['gerencia@empresa.com', 'coordenadores@empresa.com'],
      organizer: 'gerencia@empresa.com',
      reminders: [15],
      recurring: true,
      recurringPattern: 'weekly',
      tags: ['Reunião', 'Projetos', 'Semanal'],
      notes: 'Preparar relatório de status de cada projeto'
    },
    {
      id: 5,
      title: 'Visita Técnica - Metalúrgica São Paulo',
      description: 'Inspeção do sistema elétrico para modernização',
      type: 'project',
      priority: 'high',
      status: 'scheduled',
      startDate: '2024-12-20T08:00:00',
      endDate: '2024-12-20T16:00:00',
      allDay: false,
      location: 'Metalúrgica São Paulo - Rua Industrial, 123',
      isOnline: false,
      attendees: ['engenheiro.senior@empresa.com', 'tecnico.especialista@empresa.com'],
      organizer: 'projetos@empresa.com',
      reminders: [60, 1440],
      recurring: false,
      tags: ['Visita', 'Técnica', 'Industrial'],
      notes: 'Levar equipamentos de medição e EPIs'
    },
    {
      id: 6,
      title: 'Apresentação de Resultados - Diretoria',
      description: 'Apresentação dos resultados financeiros do trimestre',
      type: 'meeting',
      priority: 'critical',
      status: 'confirmed',
      startDate: '2024-12-21T15:00:00',
      endDate: '2024-12-21T16:30:00',
      allDay: false,
      location: 'Sala da Diretoria',
      isOnline: false,
      attendees: ['diretoria@empresa.com', 'financeiro@empresa.com', 'comercial@empresa.com'],
      organizer: 'ceo@empresa.com',
      reminders: [30, 120],
      recurring: false,
      tags: ['Diretoria', 'Resultados', 'Financeiro'],
      notes: 'Preparar slides com gráficos e projeções para 2025'
    },
    {
      id: 7,
      title: 'Manutenção Preventiva - Sistemas',
      description: 'Manutenção preventiva dos sistemas de TI',
      type: 'personal',
      priority: 'low',
      status: 'scheduled',
      startDate: '2024-12-22T02:00:00',
      endDate: '2024-12-22T06:00:00',
      allDay: false,
      isOnline: false,
      attendees: ['ti@empresa.com'],
      organizer: 'ti@empresa.com',
      reminders: [1440], // 1 day before
      recurring: true,
      recurringPattern: 'monthly',
      tags: ['Manutenção', 'TI', 'Sistemas'],
      notes: 'Sistemas ficarão indisponíveis durante a manutenção'
    }
  ]);
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day' | 'agenda'>('month');
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [showEventModal, setShowEventModal] = useState(false);

  // Helper functions
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      case 'scheduled': return isDark ? 'bg-blue-900/80 text-blue-200' : 'bg-blue-100 text-blue-800';
      case 'cancelled': return isDark ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800';
      case 'completed': return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmado';
      case 'scheduled': return 'Agendado';
      case 'cancelled': return 'Cancelado';
      case 'completed': return 'Concluído';
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'meeting': return 'from-blue-500 to-blue-600';
      case 'project': return 'from-green-500 to-green-600';
      case 'deadline': return 'from-red-500 to-red-600';
      case 'personal': return 'from-purple-500 to-purple-600';
      case 'client': return 'from-orange-500 to-orange-600';
      case 'training': return 'from-indigo-500 to-indigo-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'meeting': return Users;
      case 'project': return Briefcase;
      case 'deadline': return AlertCircle;
      case 'personal': return User;
      case 'client': return Building;
      case 'training': return FileText;
      default: return CalendarIcon;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'meeting': return 'Reunião';
      case 'project': return 'Projeto';
      case 'deadline': return 'Prazo';
      case 'personal': return 'Pessoal';
      case 'client': return 'Cliente';
      case 'training': return 'Treinamento';
      default: return 'Evento';
    }
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  // Filter events
  const getFilteredEvents = () => {
    let filtered = events;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Type filter
    if (typeFilter !== 'all') {
      filtered = filtered.filter(event => event.type === typeFilter);
    }
    
    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(event => event.status === statusFilter);
    }
    
    // Priority filter
    if (priorityFilter !== 'all') {
      filtered = filtered.filter(event => event.priority === priorityFilter);
    }
    
    return filtered.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  };

  // Navigation functions
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setCurrentDate(newDate);
  };

  const navigateDay = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setDate(newDate.getDate() - 1);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const filteredEvents = getFilteredEvents();

  // Calculate statistics
  const stats = {
    totalEvents: events.length,
    confirmedEvents: events.filter(e => e.status === 'confirmed').length,
    scheduledEvents: events.filter(e => e.status === 'scheduled').length,
    upcomingEvents: events.filter(e => new Date(e.startDate) > new Date()).length,
    todayEvents: events.filter(e => {
      const eventDate = new Date(e.startDate).toDateString();
      const today = new Date().toDateString();
      return eventDate === today;
    }).length,
    recurringEvents: events.filter(e => e.recurring).length,
    onlineEvents: events.filter(e => e.isOnline).length,
    criticalEvents: events.filter(e => e.priority === 'critical').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Calendário</h2>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Gerencie seus eventos e compromissos</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Buscar eventos..."
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
              onClick={() => setViewMode('month')}
              className={`px-3 py-2 rounded text-sm transition-colors duration-300 ${
                viewMode === 'month'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mês
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('week')}
              className={`px-3 py-2 rounded text-sm transition-colors duration-300 ${
                viewMode === 'week'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Semana
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('day')}
              className={`px-3 py-2 rounded text-sm transition-colors duration-300 ${
                viewMode === 'day'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Dia
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('agenda')}
              className={`px-3 py-2 rounded text-sm transition-colors duration-300 ${
                viewMode === 'agenda'
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Agenda
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <Plus className="w-4 h-4" />
            Novo Evento
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
              <CalendarIcon className="w-6 h-6 text-white" />
            </div>
            <CalendarIcon className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Eventos Hoje</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.todayEvents}</p>
            <p className="text-sm text-blue-600 font-medium">Próximos: {stats.upcomingEvents}</p>
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
            <Users className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Eventos Confirmados</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.confirmedEvents}</p>
            <p className="text-sm text-green-600 font-medium">{((stats.confirmedEvents / stats.totalEvents) * 100).toFixed(1)}% do total</p>
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
              <Video className="w-6 h-6 text-white" />
            </div>
            <Repeat className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Eventos Online</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.onlineEvents}</p>
            <p className="text-sm text-purple-600 font-medium">Recorrentes: {stats.recurringEvents}</p>
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
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <Bell className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Eventos Críticos</p>
            <p className={`text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{stats.criticalEvents}</p>
            <p className="text-sm text-red-600 font-medium">Requer atenção especial</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <option value="meeting">Reunião</option>
                <option value="project">Projeto</option>
                <option value="deadline">Prazo</option>
                <option value="personal">Pessoal</option>
                <option value="client">Cliente</option>
                <option value="training">Treinamento</option>
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
                <option value="confirmed">Confirmado</option>
                <option value="scheduled">Agendado</option>
                <option value="cancelled">Cancelado</option>
                <option value="completed">Concluído</option>
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
            
            <div className="flex items-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={goToToday}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
              >
                <CalendarIcon className="w-4 h-4 inline mr-2" />
                Ir para Hoje
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (viewMode === 'month') navigateMonth('prev');
              else if (viewMode === 'week') navigateWeek('prev');
              else if (viewMode === 'day') navigateDay('prev');
            }}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isDark
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <h3 className={`text-xl font-semibold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {viewMode === 'month' && currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            {viewMode === 'week' && `Semana de ${currentDate.toLocaleDateString('pt-BR')}`}
            {viewMode === 'day' && currentDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            {viewMode === 'agenda' && 'Agenda de Eventos'}
          </h3>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (viewMode === 'month') navigateMonth('next');
              else if (viewMode === 'week') navigateWeek('next');
              else if (viewMode === 'day') navigateDay('next');
            }}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              isDark
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Calendar Content */}
      {viewMode === 'agenda' && (
        <div className="space-y-4">
          {filteredEvents.map((event, index) => {
            const TypeIcon = getTypeIcon(event.type);
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`card hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                }`}
                onClick={() => {
                  setSelectedEvent(event);
                  setShowEventModal(true);
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-r ${getTypeColor(event.type)}`}>
                      <TypeIcon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{event.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
                          {getStatusLabel(event.status)}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(event.priority)}`}>
                          {getPriorityLabel(event.priority)}
                        </span>
                        {event.recurring && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            isDark ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-100 text-purple-800'
                          }`}>
                            <Repeat className="w-3 h-3 inline mr-1" />
                            Recorrente
                          </span>
                        )}
                      </div>
                      
                      <p className={`text-sm mb-2 transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>{event.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className={`flex items-center gap-1 transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Clock className="w-4 h-4" />
                          {event.allDay ? 'Dia todo' : `${formatTime(event.startDate)} - ${formatTime(event.endDate)}`}
                        </span>
                        
                        <span className={`flex items-center gap-1 transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <CalendarIcon className="w-4 h-4" />
                          {formatDate(event.startDate)}
                        </span>
                        
                        {event.location && (
                          <span className={`flex items-center gap-1 transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </span>
                        )}
                        
                        {event.isOnline && (
                          <span className={`flex items-center gap-1 transition-colors duration-300 ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            <Video className="w-4 h-4" />
                            Online
                          </span>
                        )}
                        
                        <span className={`flex items-center gap-1 transition-colors duration-300 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Users className="w-4 h-4" />
                          {event.attendees.length} participantes
                        </span>
                      </div>
                      
                      {event.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {event.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className={`text-xs px-2 py-1 rounded-full ${
                              isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                            }`}>
                              {tag}
                            </span>
                          ))}
                          {event.tags.length > 3 && (
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                            }`}>
                              +{event.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {event.reminders.length > 0 && (
                      <Bell className={`w-5 h-5 ${
                        isDark ? 'text-yellow-400' : 'text-yellow-600'
                      }`} />
                    )}
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        isDark
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle edit event
                      }}
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Other view modes placeholder */}
      {viewMode !== 'agenda' && (
        <div className={`card h-96 flex items-center justify-center ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="text-center">
            <CalendarIcon className={`w-16 h-16 mx-auto mb-4 opacity-50 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`} />
            <h3 className={`text-lg font-medium mb-2 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Visualização de {viewMode === 'month' ? 'Mês' : viewMode === 'week' ? 'Semana' : 'Dia'}</h3>
            <p className={`transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>Esta visualização será implementada em breve.</p>
          </div>
        </div>
      )}

      {/* Empty State */}
      {viewMode === 'agenda' && filteredEvents.length === 0 && (
        <div className={`text-center py-12 ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <CalendarIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-2">Nenhum evento encontrado</h3>
          <p>Tente ajustar os filtros ou criar um novo evento.</p>
        </div>
      )}
    </div>
  );
};

export default Calendar;