import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Plus,
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
  TrendingUp,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { useKanban } from '../../../context/KanbanContext';
import KanbanCardModal from './KanbanCardModal';
import NewKanbanCardModal from './NewKanbanCardModal';
import DeleteConfirmationModal from '../Modals/DeleteConfirmationModal';

// Interface KanbanCard já está definida em src/types/kanban.ts

const KanbanBoard: React.FC = () => {
  const { isDark } = useTheme();
  const {
    // Estados
    cards,
    columns,
    users,
    selectedCard,
    isCardModalOpen,
    isNewCardModalOpen,
    isDeleteModalOpen,
    cardToDelete,
    searchQuery,
    filterPriority,
    sortBy,
    sortDirection,
    
    // Ações de cartões
    addCard,
    updateCard,
    deleteCard,
    moveCard,
    duplicateCard,
    archiveCard,
    
    // Ações de modais
    openCardModal,
    closeCardModal,
    openNewCardModal,
    closeNewCardModal,
    openDeleteModal,
    closeDeleteModal,
    
    // Ações de filtros
    setSearchQuery,
    toggleFilterPriority,
    setSortBy,
    toggleSortDirection
  } = useKanban();
  
  // Estados locais adicionais
  const [draggedCard, setDraggedCard] = useState<KanbanCard | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Funções para manipulação de arrastar e soltar
  const handleDragStart = (card: KanbanCard) => {
    setDraggedCard(card);
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    if (draggedCard) {
      moveCard(draggedCard.id, draggedCard.status, status);
      setDraggedCard(null);
    }
  };

  // Kanban Functions já definidas no contexto KanbanContext

  const getFilteredCards = () => {
    let filtered = cards;
    
    // Filtrar por termo de busca
    if (searchQuery) {
      filtered = filtered.filter(card => 
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Filtrar por prioridade
    if (filterPriority.length > 0) {
      filtered = filtered.filter(card => filterPriority.includes(card.priority));
    }
    
    // Ordenar
    return filtered.sort((a, b) => {
      let comparison = 0;
      
      if (sortBy === 'priority') {
        const priorityValues = { high: 3, medium: 2, low: 1 };
        comparison = priorityValues[b.priority as keyof typeof priorityValues] - priorityValues[a.priority as keyof typeof priorityValues];
      } else if (sortBy === 'dueDate') {
        const dateA = a.dueDate ? new Date(a.dueDate).getTime() : Number.MAX_SAFE_INTEGER;
        const dateB = b.dueDate ? new Date(b.dueDate).getTime() : Number.MAX_SAFE_INTEGER;
        comparison = dateA - dateB;
      } else if (sortBy === 'title') {
        comparison = a.title.localeCompare(b.title);
      } else if (sortBy === 'assignee') {
        comparison = a.assignees[0]?.name.localeCompare(b.assignees[0]?.name || '');
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  };

  const getCardsByStatus = (status: string) => {
    return getFilteredCards().filter(card => card.status === status);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getPriorityBg = (priority: string) => {
    switch (priority) {
      case 'high': return isDark ? 'bg-red-900/80 text-red-200' : 'bg-red-100 text-red-800';
      case 'medium': return isDark ? 'bg-yellow-900/80 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'low': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'todo': return isDark ? 'bg-gray-900/80 text-gray-200' : 'bg-gray-100 text-gray-800';
      case 'in_progress': return isDark ? 'bg-blue-900/80 text-blue-200' : 'bg-blue-100 text-blue-800';
      case 'review': return isDark ? 'bg-yellow-900/80 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'done': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'todo': return 'A Fazer';
      case 'in_progress': return 'Em Andamento';
      case 'review': return 'Revisão';
      case 'done': return 'Concluído';
      default: return 'Desconhecido';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date();
  };

  const isDueSoon = (dueDate: string) => {
    const due = new Date(dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 3 && diffDays > 0;
  };

  return (
    <>
      <div className="space-y-6">
        {/* Kanban Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Fluxo de Trabalho</h2>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Gerencie seus projetos com eficiência</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Buscar cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
        </div>
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
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <label className={`text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Prioridade:</label>
              <select
                value={kanbanFilter}
                onChange={(e) => setKanbanFilter(e.target.value)}
                className={`px-3 py-1 rounded border text-sm ${
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
            
            <div className="flex items-center gap-2">
              <label className={`text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>Ordenar por:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`px-3 py-1 rounded border text-sm ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="priority">Prioridade</option>
                <option value="dueDate">Data de Vencimento</option>
                <option value="title">Título</option>
                <option value="assignee">Responsável</option>
              </select>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className={`flex items-center gap-1 px-3 py-1 rounded border text-sm ${
                isDark
                  ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
                  : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}
            >
              {sortOrder === 'asc' ? <ArrowRight className="w-3 h-3" /> : <ArrowLeft className="w-3 h-3" />}
              {sortOrder === 'asc' ? 'Crescente' : 'Decrescente'}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {columns.map((column) => {
          const statusConfig = {
            todo: { title: 'A Fazer', color: 'bg-gray-500', icon: Flag },
            in_progress: { title: 'Em Andamento', color: 'bg-blue-500', icon: Clock },
            review: { title: 'Revisão', color: 'bg-yellow-500', icon: AlertCircle },
            done: { title: 'Concluído', color: 'bg-green-500', icon: CheckCircle }
          }[column.id] || { title: column.title, color: 'bg-gray-500', icon: Flag };
          
          const Icon = statusConfig.icon;
          const cards = getCardsByStatus(column.id);
          
          return (
            <div key={column.id} className="flex flex-col">
              {/* Column Header */}
              <div className={`flex items-center justify-between p-4 rounded-t-lg border-b-2 transition-colors duration-300 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${statusConfig.color}`}></div>
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{column.title || statusConfig.title}</h3>
                  <span className={`text-sm px-2 py-1 rounded-full transition-colors duration-300 ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                  }`}>{cards.length}{column.wip > 0 ? `/${column.wip}` : ''}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => openNewCardModal()}
                  className={`p-1 rounded transition-colors duration-300 ${
                    isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
              </div>
              
              {/* Column Content */}
              <div 
                className={`flex-1 p-4 space-y-3 min-h-[500px] transition-colors duration-300 ${
                  isDark ? 'bg-gray-800/50' : 'bg-gray-50/50'
                }`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, column.id)}
              >
                {cards.map((card) => (
                  <motion.div
                    key={card.id}
                    draggable
                    onDragStart={() => handleDragStart(card)}
                    onClick={() => openCardModal(card)}
                    className={`${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} rounded-lg border p-4 cursor-pointer transition-all duration-300 hover:shadow-md ${
                      draggedCard?.id === card.id ? 'opacity-50' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-3">
                      <h4 className={`font-semibold text-sm leading-tight transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{card.title}</h4>
                      <div className="flex items-center gap-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${getPriorityBg(card.priority)}`}>
                          {card.priority === 'high' ? 'Alta' : card.priority === 'medium' ? 'Média' : 'Baixa'}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle more options
                          }}
                          className={`p-1 rounded transition-colors duration-300 ${
                            isDark ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                          }`}
                        >
                          <MoreHorizontal className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </div>
                    
                    {/* Card Description */}
                    <p className={`text-xs mb-3 line-clamp-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{card.description}</p>
                    
                    {/* Progress Bar */}
                    {card.progress !== undefined && card.progress > 0 && (
                      <div className="mb-3">
                        <div className={`flex items-center justify-between text-xs mb-1 ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <span>Progresso</span>
                          <span>{card.progress}%</span>
                        </div>
                        <div className={`w-full rounded-full h-1.5 ${
                          isDark ? 'bg-gray-600' : 'bg-gray-200'
                        }`}>
                          <div 
                            className="bg-blue-500 h-1.5 rounded-full transition-all duration-300" 
                            style={{width: `${card.progress}%`}}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Tags */}
                    {card.tags && card.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {card.tags.map((tag, index) => (
                          <span key={index} className={`text-xs px-2 py-1 rounded-full ${
                            isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Due Date */}
                    {card.dueDate && (
                      <div className={`flex items-center gap-1 text-xs mb-3 ${
                        isOverdue(card.dueDate) 
                          ? 'text-red-600' 
                          : isDueSoon(card.dueDate) 
                          ? 'text-yellow-600' 
                          : isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Clock className="w-3 h-3" />
                        <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300 ${
                          isOverdue(card.dueDate) ? 'text-red-600' : isDueSoon(card.dueDate) ? 'text-yellow-600' : ''
                        }`}>
                          {formatDate(card.dueDate)}
                        </span>
                        {isOverdue(card.dueDate) && <span className="text-red-600 font-medium">Atrasado</span>}
                        {isDueSoon(card.dueDate) && <span className="text-yellow-600 font-medium">Próximo</span>}
                      </div>
                    )}
                    
                    {/* Card Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {card.comments && card.comments.length > 0 && (
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-400">{card.comments.length}</span>
                          </div>
                        )}
                        {card.attachments > 0 && (
                          <div className="flex items-center gap-1">
                            <Paperclip className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-400">{card.attachments}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Assignees */}
                      {card.assignees && card.assignees.length > 0 && (
                        <div className="flex -space-x-2">
                          {card.assignees.slice(0, 3).map((assignee, index) => (
                            <div 
                              key={index}
                              className={`w-6 h-6 rounded-full ${assignee.color} flex items-center justify-center text-white text-xs font-medium border-2 ${
                                isDark ? 'border-gray-700' : 'border-white'
                              }`}
                              title={assignee.name}
                            >
                              {assignee.avatar}
                            </div>
                          ))}
                          {card.assignees.length > 3 && (
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium border-2 ${
                              isDark 
                                ? 'bg-gray-600 text-gray-300 border-gray-700' 
                                : 'bg-gray-200 text-gray-600 border-white'
                            }`}>
                              +{card.assignees.length - 3}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Kanban Stats */}
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
              <Flag className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total de Cards</p>
            <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{getFilteredCards().length}</p>
            <p className="text-sm text-green-600 font-medium">+{getFilteredCards().filter(card => {
              const createdDate = new Date(card.createdAt);
              const thirtyDaysAgo = new Date();
              thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
              return createdDate >= thirtyDaysAgo;
            }).length} este mês</p>
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
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Concluídos</p>
            <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{getCardsByStatus('done').length}</p>
            <p className="text-sm text-green-600 font-medium">100% qualidade</p>
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
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Próximos ao Prazo</p>
            <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{getFilteredCards().filter(card => isDueSoon(card.dueDate)).length}</p>
            <p className="text-sm text-green-600 font-medium">Atenção necessária</p>
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
              <Users className="w-6 h-6 text-white" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Colaboradores Ativos</p>
            <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>{[...new Set(getFilteredCards().flatMap(card => card.assignees.map(a => a.name)))].length}</p>
            <p className="text-sm text-green-600 font-medium">100% engajamento</p>
          </div>
        </motion.div>
      </div>
      </div>

      {/* Modais do Kanban */}
    {isCardModalOpen && selectedCard && (
      <KanbanCardModal 
        card={selectedCard} 
        onClose={closeCardModal} 
        onUpdate={updateCard}
        onDelete={() => openDeleteModal(selectedCard)}
        onDuplicate={duplicateCard}
        onArchive={archiveCard}
      />
    )}

    {isNewCardModalOpen && (
      <NewKanbanCardModal 
        onClose={closeNewCardModal} 
        onAdd={addCard} 
        columns={columns}
        users={users}
      />
    )}

    {isDeleteModalOpen && cardToDelete && (
      <DeleteConfirmationModal 
        onClose={closeDeleteModal} 
        onConfirm={() => {
          deleteCard(cardToDelete.id);
          closeDeleteModal();
        }}
        title="Excluir Cartão"
        message={`Tem certeza que deseja excluir o cartão "${cardToDelete.title}"? Esta ação não pode ser desfeita.`}
      />
    )}
    </>
  );
};

export default KanbanBoard;