import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Flag, 
  Clock, 
  AlertCircle, 
  CheckCircle, 
  User, 
  Calendar, 
  MessageSquare, 
  Paperclip, 
  Eye, 
  EyeOff, 
  Palette, 
  Check, 
  X, 
  ChevronDown, 
  Users, 
  Tag, 
  TrendingUp, 
  BarChart3, 
  Activity, 
  Target, 
  Zap 
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { useKanban } from '../../../context/KanbanContext';
import { KanbanCard, KanbanColumn } from '../../../types/kanban';
import KanbanCardModal from './KanbanCardModal';
import NewKanbanCardModal from './NewKanbanCardModal';

const KanbanBoard: React.FC = () => {
  const { isDark } = useTheme();
  const { 
    cards, 
    columns, 
    addCard, 
    updateCard, 
    deleteCard, 
    addColumn, 
    deleteColumn 
  } = useKanban();

  // Estados locais
  const [selectedCard, setSelectedCard] = useState<KanbanCard | null>(null);
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [newCardColumnId, setNewCardColumnId] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterAssignee, setFilterAssignee] = useState('all');
  const [showColumnMenu, setShowColumnMenu] = useState<{ [key: string]: boolean }>({});
  const [editingColumn, setEditingColumn] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [columnToDelete, setColumnToDelete] = useState<string | null>(null);
  const [customColors, setCustomColors] = useState<{ [key: string]: string }>({});
  const [showColorPicker, setShowColorPicker] = useState<{ [key: string]: boolean }>({});
  const [customColorInput, setCustomColorInput] = useState<{ [key: string]: string }>({});
  const [showStats, setShowStats] = useState(false);

  // Filtros de cards
  const filteredCards = useMemo(() => {
    return cards.filter(card => {
      const matchesSearch = !searchTerm || 
                          card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          card.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPriority = filterPriority === 'all' || card.priority === filterPriority;
      const matchesAssignee = filterAssignee === 'all' || card.assignees.some(assignee => assignee.name === filterAssignee);
      
      return matchesSearch && matchesPriority && matchesAssignee;
    });
  }, [cards, searchTerm, filterPriority, filterAssignee]);

  // Handlers
  const handleCardClick = useCallback((card: KanbanCard) => {
    setSelectedCard(card);
  }, []);

  const handleAddCard = useCallback((columnId: string) => {
    setNewCardColumnId(columnId);
    setIsNewCardModalOpen(true);
  }, []);

  const handleColumnEdit = useCallback((columnId: string, newTitle: string) => {
    // TODO: Implement updateColumn function
    setEditingColumn(null);
    setEditingTitle('');
  }, []);

  const handleDeleteColumn = useCallback(() => {
    if (columnToDelete) {
      deleteColumn(columnToDelete);
      setColumnToDelete(null);
    }
  }, [columnToDelete, deleteColumn]);

  const applyCustomColor = useCallback((columnId: string) => {
    const color = customColorInput[columnId];
    if (color && /^#[0-9A-F]{6}$/i.test(color)) {
      setCustomColors(prev => ({ ...prev, [columnId]: color }));
      setShowColorPicker(prev => ({ ...prev, [columnId]: false }));
    }
  }, [customColorInput]);

  const getColumnCards = useCallback((columnId: string) => {
    return filteredCards.filter(card => card.status === columnId);
  }, [filteredCards]);

  const getStatusConfig = useCallback((status: string) => {
    const configs = {
      todo: { title: 'A Fazer', color: 'bg-gray-500', icon: Flag },
      in_progress: { title: 'Em Andamento', color: 'bg-blue-500', icon: Clock },
      review: { title: 'Revisão', color: 'bg-yellow-500', icon: AlertCircle },
      done: { title: 'Concluído', color: 'bg-green-500', icon: CheckCircle }
    };
    return configs[status as keyof typeof configs] || { title: status, color: 'bg-gray-500', icon: Flag };
  }, []);

  const isCardDueSoon = useCallback((dueDate: string) => {
    if (!dueDate) return false;
    const due = new Date(dueDate);
    const now = new Date();
    const diffTime = due.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 3 && diffDays > 0;
  }, []);

  return (
    <div className="space-y-6">
      {/* Filtros e Busca */}
      <div className={`p-4 rounded-2xl border transition-all duration-300 ${
        isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
      } backdrop-blur-sm`}>
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-3 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar cards..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 rounded-xl border transition-colors ${
                  isDark 
                    ? 'bg-gray-700/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500/50' 
                    : 'bg-white/50 border-gray-300/50 text-gray-900 placeholder-gray-500 focus:border-blue-500/50'
                } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              />
            </div>
            
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className={`px-4 py-2 rounded-xl border transition-colors ${
                isDark 
                  ? 'bg-gray-700/50 border-gray-600/50 text-white focus:border-blue-500/50' 
                  : 'bg-white/50 border-gray-300/50 text-gray-900 focus:border-blue-500/50'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            >
              <option value="all">Todas as Prioridades</option>
              <option value="high">Alta</option>
              <option value="medium">Média</option>
              <option value="low">Baixa</option>
            </select>
          </div>
          
          <button
            onClick={() => setShowStats(!showStats)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
              isDark 
                ? 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30' 
                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            {showStats ? 'Ocultar Stats' : 'Ver Stats'}
          </button>
        </div>
      </div>

      {/* Estatísticas */}
      <AnimatePresence>
        {showStats && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`p-6 rounded-2xl border ${
              isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
            } backdrop-blur-sm`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {columns.map((column) => {
                const columnCards = getColumnCards(column.id);
                const statusConfig = getStatusConfig(column.id);
                const IconComponent = statusConfig.icon;
                
                return (
                  <motion.div
                    key={column.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border ${
                      isDark ? 'bg-gray-700/30 border-gray-600/30' : 'bg-white/30 border-gray-200/30'
                    } backdrop-blur-sm`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg ${statusConfig.color}`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className={`font-semibold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{statusConfig.title}</h4>
                        <p className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>{columnCards.length} cards</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Alta prioridade</span>
                        <span className={`font-medium ${
                          isDark ? 'text-red-400' : 'text-red-600'
                        }`}>{columnCards.filter(c => c.priority === 'high').length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Vencendo hoje</span>
                        <span className={`font-medium ${
                          isDark ? 'text-yellow-400' : 'text-yellow-600'
                        }`}>{columnCards.filter(c => isCardDueSoon(c.dueDate)).length}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Kanban Board */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6 min-w-max" style={{ minWidth: `${columns.length * 320}px` }}>
          {columns.map((column) => {
            const cards = getColumnCards(column.id);
            const statusConfig = getStatusConfig(column.id);
            const IconComponent = statusConfig.icon;
            const customColor = customColors[column.id];
            
            return (
              <motion.div
                key={column.id}
                layout
                className="w-80 flex-shrink-0"
              >
                {/* Column Header */}
                <div className={`p-4 rounded-t-2xl border-t border-l border-r transition-all duration-300 ${
                  isDark ? 'bg-gray-800/60 border-gray-700/60' : 'bg-white/60 border-gray-200/60'
                } backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        customColor ? '' : statusConfig.color
                      }`} style={customColor ? { backgroundColor: customColor } : {}}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      
                      {editingColumn === column.id ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={editingTitle}
                            onChange={(e) => setEditingTitle(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                handleColumnEdit(column.id, editingTitle);
                              }
                            }}
                            className={`px-2 py-1 text-sm rounded border ${
                              isDark 
                                ? 'bg-gray-700 border-gray-600 text-white' 
                                : 'bg-white border-gray-300 text-gray-900'
                            }`}
                            autoFocus
                          />
                          <button
                            onClick={() => handleColumnEdit(column.id, editingTitle)}
                            className="p-1 text-green-600 hover:bg-green-100 rounded"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setEditingColumn(null);
                              setEditingTitle('');
                            }}
                            className="p-1 text-red-600 hover:bg-red-100 rounded"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div>
                          <h3 className={`font-semibold ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>{statusConfig.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-sm ${
                              isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>{cards.length} cards</span>
                            {column.wip > 0 && (
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                cards.length > column.wip
                                  ? 'bg-red-100 text-red-600'
                                  : 'bg-blue-100 text-blue-600'
                              }`}>
                                WIP: {cards.length}/{column.wip}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAddCard(column.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          isDark 
                            ? 'hover:bg-gray-700/50 text-gray-400 hover:text-white' 
                            : 'hover:bg-gray-100/50 text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      
                      <div className="relative">
                        <button
                          onClick={() => setShowColumnMenu(prev => ({ 
                            ...prev, 
                            [column.id]: !prev[column.id] 
                          }))}
                          className={`p-2 rounded-lg transition-colors ${
                            isDark 
                              ? 'hover:bg-gray-700/50 text-gray-400 hover:text-white' 
                              : 'hover:bg-gray-100/50 text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                        
                        <AnimatePresence>
                          {showColumnMenu[column.id] && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className={`absolute right-0 top-full mt-2 w-48 rounded-xl border shadow-lg z-10 ${
                                isDark 
                                  ? 'bg-gray-800 border-gray-700' 
                                  : 'bg-white border-gray-200'
                              } backdrop-blur-sm`}
                            >
                              <div className="p-2">
                                <button
                                  onClick={() => {
                                    setEditingColumn(column.id);
                                    setEditingTitle(statusConfig.title);
                                    setShowColumnMenu(prev => ({ ...prev, [column.id]: false }));
                                  }}
                                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                                    isDark 
                                      ? 'hover:bg-gray-700/50 text-gray-300' 
                                      : 'hover:bg-gray-100/50 text-gray-700'
                                  }`}
                                >
                                  <Edit className="w-4 h-4" />
                                  Editar título
                                </button>
                                
                                <button
                                  onClick={() => {
                                    setShowColorPicker(prev => ({ 
                                      ...prev, 
                                      [column.id]: !prev[column.id] 
                                    }));
                                    setShowColumnMenu(prev => ({ ...prev, [column.id]: false }));
                                  }}
                                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                                    isDark 
                                      ? 'hover:bg-gray-700/50 text-gray-300' 
                                      : 'hover:bg-gray-100/50 text-gray-700'
                                  }`}
                                >
                                  <Palette className="w-4 h-4" />
                                  Cor personalizada
                                </button>
                                
                                <button
                                  onClick={() => {
                                    setColumnToDelete(column.id);
                                    setShowColumnMenu(prev => ({ ...prev, [column.id]: false }));
                                  }}
                                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  Excluir coluna
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {showColorPicker[column.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder="#FF5733"
                            value={customColorInput[column.id] || ''}
                            onChange={(e) => setCustomColorInput(prev => ({ 
                              ...prev, 
                              [column.id]: e.target.value 
                            }))}
                            className={`flex-1 px-3 py-2 text-sm rounded border ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-white' 
                                : 'bg-white border-gray-300 text-gray-900'
                            }`}
                          />
                          <button
                            onClick={() => applyCustomColor(column.id)}
                            className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                          >
                            Aplicar
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Column Content */}
                <div className={`flex-1 p-4 space-y-4 min-h-[300px] max-h-[calc(100vh-280px)] transition-all duration-300 rounded-b-2xl overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 ${
                  isDark ? 'bg-gray-800/40' : 'bg-gray-50/40'
                } backdrop-blur-sm border-l border-r border-b ${
                  isDark ? 'border-gray-700/60' : 'border-gray-200/60'
                }`}>
                  {cards.map((card) => (
                    <motion.div
                      key={card.id}
                      layout
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCardClick(card)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                        isDark 
                          ? 'bg-gray-700/50 border-gray-600/50 hover:bg-gray-700/70 hover:border-gray-500/50' 
                          : 'bg-white/70 border-gray-200/50 hover:bg-white/90 hover:border-gray-300/50'
                      } backdrop-blur-sm shadow-lg hover:shadow-xl ${
                        isCardDueSoon(card.dueDate) ? 'ring-2 ring-yellow-400/50' : ''
                      } ${
                        card.dueDate && new Date(card.dueDate) < new Date() && card.status !== 'done' 
                          ? 'ring-2 ring-red-400/50' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className={`font-semibold text-sm leading-tight ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{card.title}</h4>
                        
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                          card.priority === 'high' 
                            ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                            : card.priority === 'medium'
                            ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                          {card.priority === 'high' ? 'Alta' : card.priority === 'medium' ? 'Média' : 'Baixa'}
                        </div>
                      </div>
                      
                      {card.description && (
                        <p className={`text-sm mb-3 line-clamp-2 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>{card.description}</p>
                      )}
                      
                      {card.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {card.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className={`px-2 py-1 text-xs rounded-full ${
                                isDark 
                                  ? 'bg-blue-900/30 text-blue-400 border border-blue-700/30' 
                                  : 'bg-blue-100 text-blue-600 border border-blue-200'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                          {card.tags.length > 3 && (
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-600'
                            }`}>
                              +{card.tags.length - 3}
                            </span>
                          )}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          {card.assignees.length > 0 && (
                            <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                              isDark ? 'bg-gray-600/50 text-gray-300' : 'bg-gray-100 text-gray-600'
                            }`}>
                              <User className="w-3 h-3" />
                              <span>{card.assignees?.[0]?.name || 'Unassigned'}</span>
                            </div>
                          )}
                          
                          {card.dueDate && (
                            <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                              isCardDueSoon(card.dueDate)
                                ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                                : new Date(card.dueDate) < new Date() && card.status !== 'done'
                                ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                                : isDark ? 'bg-gray-600/50 text-gray-300' : 'bg-gray-100 text-gray-600'
                            }`}>
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(card.dueDate).toLocaleDateString('pt-BR')}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {card.comments.length > 0 && (
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3 text-gray-400" />
                              <span className="text-gray-400">{card.comments.length}</span>
                            </div>
                          )}
                          
                          {card.attachments > 0 && (
                            <div className="flex items-center gap-1">
                              <Paperclip className="w-3 h-3 text-gray-400" />
                              <span className="text-gray-400">{card.attachments}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {selectedCard && (
          <KanbanCardModal
            card={selectedCard}
            onClose={() => setSelectedCard(null)}
            onUpdate={updateCard}
            onDelete={(card) => deleteCard(card.id)}
            onDuplicate={(cardId) => console.log('Duplicate card:', cardId)}
            onArchive={(cardId) => console.log('Archive card:', cardId)}
          />
        )}
        
        {isNewCardModalOpen && (
          <NewKanbanCardModal
            onClose={() => setIsNewCardModalOpen(false)}
            onAdd={addCard}
            columns={columns}
            users={[]}
            preselectedColumn={newCardColumnId}
          />
        )}
        
        {columnToDelete && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className={`p-6 rounded-2xl border max-w-md w-full mx-4 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Confirmar Exclusão</h3>
              <p className={`mb-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>Tem certeza que deseja excluir esta coluna? Esta ação não pode ser desfeita.</p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setColumnToDelete(null)}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    isDark 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleDeleteColumn}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors"
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KanbanBoard;