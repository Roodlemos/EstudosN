import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Edit, 
  Trash2, 
  Copy, 
  Archive, 
  Clock, 
  User, 
  Tag, 
  Paperclip, 
  MessageSquare,
  CheckSquare,
  Save,
  Plus,
  AlertCircle,
  Calendar,
  Flag,
  Eye,
  Users,
  Activity,
  FileText,
  Link,
  Image,
  MoreHorizontal,
  ChevronDown,
  Star,
  Bell,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import ReactMarkdown from 'react-markdown';
import { KanbanCard } from '../../../types/kanban';

interface KanbanCardModalProps {
  card: KanbanCard;
  onClose: () => void;
  onUpdate: (card: KanbanCard) => void;
  onDelete: (card: KanbanCard) => void;
  onDuplicate: (cardId: string) => void;
  onArchive: (cardId: string) => void;
}

const KanbanCardModal: React.FC<KanbanCardModalProps> = ({
  card,
  onClose,
  onUpdate,
  onDelete,
  onDuplicate,
  onArchive
}) => {
  const { isDark } = useTheme();
  const [newComment, setNewComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState<KanbanCard | null>(null);
  const [newChecklistItem, setNewChecklistItem] = useState('');
  const [newTag, setNewTag] = useState('');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [showDates, setShowDates] = useState(false);
  const [isWatching, setIsWatching] = useState(false);
  const [showDescription, setShowDescription] = useState(true);
  
  useEffect(() => {
    if (card) {
      setEditedCard(JSON.parse(JSON.stringify(card)));
    }
  }, [card]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.actions-menu')) {
        setShowActions(false);
      }
    };

    if (showActions) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showActions]);

  if (!card || !editedCard) return null;

  const handleAddComment = () => {
    if (newComment.trim()) {
      // Adicionar comentário (funcionalidade a ser implementada)
      console.log('Comentário adicionado:', newComment.trim());
      setNewComment('');
    }
  };

  const handleSaveChanges = () => {
    if (editedCard) {
      onUpdate(editedCard);
      setIsEditing(false);
    }
  };

  const handleAddChecklistItem = () => {
    if (newChecklistItem.trim() && editedCard) {
      const updatedCard = {
        ...editedCard,
        checklist: [
          ...(editedCard.checklist || []),
          { id: Date.now(), text: newChecklistItem.trim(), completed: false }
        ]
      };
      setEditedCard(updatedCard);
      setNewChecklistItem('');
    }
  };

  const handleToggleChecklistItem = (itemId: number) => {
    if (editedCard) {
      const updatedChecklist = editedCard.checklist?.map(item => 
        item.id === itemId ? { ...item, completed: !item.completed } : item
      );
      
      const updatedCard = {
        ...editedCard,
        checklist: updatedChecklist,
        progress: calculateProgress(updatedChecklist || [])
      };
      
      setEditedCard(updatedCard);
      
      if (!isEditing) {
        onUpdate(updatedCard);
      }
    }
  };

  const calculateProgress = (checklist: Array<{id: number, text: string, completed: boolean}>) => {
    if (!checklist.length) return 0;
    const completedItems = checklist.filter(item => item.completed).length;
    return Math.round((completedItems / checklist.length) * 100);
  };

  const handleAddTag = () => {
    if (newTag.trim() && editedCard && !editedCard.tags.includes(newTag.trim())) {
      const updatedCard = {
        ...editedCard,
        tags: [...editedCard.tags, newTag.trim()]
      };
      setEditedCard(updatedCard);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    if (editedCard) {
      const updatedCard = {
        ...editedCard,
        tags: editedCard.tags.filter(tag => tag !== tagToRemove)
      };
      setEditedCard(updatedCard);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const formatDateTime = (dateTimeString: string) => {
    return new Date(dateTimeString).toLocaleString('pt-BR');
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

  const getPriorityColor = (priority: string) => {
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

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'Alta';
      case 'medium': return 'Média';
      case 'low': return 'Baixa';
      default: return 'Desconhecida';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Card Header */}
        <div className={`p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* Card Title */}
              <div className="mb-4">
                {isEditing ? (
                  <input
                    type="text"
                    value={editedCard.title}
                    onChange={(e) => setEditedCard({ ...editedCard, title: e.target.value })}
                    className={`w-full text-2xl font-bold px-3 py-2 rounded-lg border-2 border-blue-500 focus:outline-none ${
                      isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
                    }`}
                    autoFocus
                  />
                ) : (
                  <h1 
                    className="text-2xl font-bold cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors"
                    onClick={() => setIsEditing(true)}
                  >
                    {card.title}
                  </h1>
                )}
              </div>
              
              {/* Card Meta Info */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusColor(card.status)}`}>
                    {getStatusLabel(card.status)}
                  </span>
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${getPriorityColor(card.priority)}`}>
                    <Flag className="w-3 h-3 inline mr-1" />
                    {getPriorityLabel(card.priority)}
                  </span>
                </div>
                
                {/* Due Date */}
                <div className={`flex items-center gap-1 text-sm px-3 py-1 rounded-lg ${
                  isOverdue(card.dueDate) 
                    ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200' 
                    : isDueSoon(card.dueDate) 
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200'
                    : isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  <Calendar className="w-4 h-4" />
                  {isEditing ? (
                    <input
                      type="date"
                      value={editedCard.dueDate.split('T')[0]}
                      onChange={(e) => setEditedCard({ ...editedCard, dueDate: e.target.value })}
                      className={`bg-transparent border-none focus:outline-none ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  ) : (
                    <>
                      <span>{formatDate(card.dueDate)}</span>
                      {isOverdue(card.dueDate) && <span className="font-medium ml-1">• Atrasado</span>}
                      {isDueSoon(card.dueDate) && <span className="font-medium ml-1">• Próximo</span>}
                    </>
                  )}
                </div>
                
                {/* Watch Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsWatching(!isWatching)}
                  className={`flex items-center gap-1 text-sm px-3 py-1 rounded-lg transition-colors ${
                    isWatching 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200'
                      : isDark ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  {isWatching ? 'Observando' : 'Observar'}
                </motion.button>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {isEditing ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSaveChanges}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <Save className="w-4 h-4 inline mr-2" />
                    Salvar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsEditing(false);
                      setEditedCard(JSON.parse(JSON.stringify(card)));
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                  >
                    Cancelar
                  </motion.button>
                </>
              ) : (
                <>
                  {/* Actions Menu */}
                  <div className="relative actions-menu">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowActions(!showActions)}
                      className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </motion.button>
                    
                    {showActions && (
                      <div className={`absolute right-0 top-full mt-2 w-48 rounded-lg shadow-lg border z-50 ${
                        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                      }`}>
                        <div className="py-2">
                          <button
                            onClick={() => {
                              setIsEditing(true);
                              setShowActions(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2`}
                          >
                            <Edit className="w-4 h-4" />
                            Editar cartão
                          </button>
                          <button
                            onClick={() => {
                              onDuplicate(card.id);
                              setShowActions(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2`}
                          >
                            <Copy className="w-4 h-4" />
                            Duplicar
                          </button>
                          <button
                            onClick={() => {
                              onArchive(card.id);
                              setShowActions(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-yellow-600`}
                          >
                            <Archive className="w-4 h-4" />
                            Arquivar
                          </button>
                          <hr className={`my-2 ${isDark ? 'border-gray-700' : 'border-gray-200'}`} />
                          <button
                            onClick={() => {
                              setShowConfirmDelete(true);
                              setShowActions(false);
                            }}
                            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 text-red-600`}
                          >
                            <Trash2 className="w-4 h-4" />
                            Excluir
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Card Info Bar */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {/* Status */}
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  card.status === 'todo' ? 'bg-gray-400' :
                  card.status === 'in_progress' ? 'bg-blue-500' :
                  card.status === 'review' ? 'bg-yellow-500' :
                  'bg-green-500'
                }`} />
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {getStatusLabel(card.status)}
                </span>
              </div>
              
              {/* Priority */}
              <div className="flex items-center gap-2">
                <Flag className={`w-4 h-4 ${
                  card.priority === 'high' ? 'text-red-500' :
                  card.priority === 'medium' ? 'text-yellow-500' :
                  'text-green-500'
                }`} />
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {getPriorityLabel(card.priority)}
                </span>
              </div>
              
              {/* Due Date */}
              {card.dueDate && (
                <div className={`flex items-center gap-2 px-2 py-1 rounded text-sm ${
                  isOverdue(card.dueDate) ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                  isDueSoon(card.dueDate) ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                }`}>
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(card.dueDate)}</span>
                  {isOverdue(card.dueDate) && <span className="font-semibold">ATRASADO</span>}
                  {isDueSoon(card.dueDate) && <span className="font-semibold">EM BREVE</span>}
                </div>
              )}
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <FileText className="w-5 h-5 inline mr-2" />
                  Descrição
                </h3>
                {!isEditing && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowDescription(!showDescription)}
                    className={`p-1 rounded ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${showDescription ? 'rotate-180' : ''}`} />
                  </motion.button>
                )}
              </div>
              
              {showDescription && (
                <div>
                  {isEditing ? (
                    <textarea
                      value={editedCard.description}
                      onChange={(e) => setEditedCard({ ...editedCard, description: e.target.value })}
                      rows={6}
                      className={`w-full px-3 py-2 rounded-lg ${
                        isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                      }`}
                      placeholder="Descrição detalhada do cartão..."
                    />
                  ) : (
                    <div className={`prose ${isDark ? 'prose-invert' : ''} max-w-none`}>
                      <ReactMarkdown>{card.description}</ReactMarkdown>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Checklist */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <CheckSquare className="w-5 h-5 inline mr-2" />
                  Checklist
                </h3>
                {editedCard.checklist && editedCard.checklist.length > 0 && (
                  <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {editedCard.checklist.filter(item => item.completed).length}/{editedCard.checklist.length} concluídos
                  </span>
                )}
              </div>
              
              {/* Progress Bar */}
              {editedCard.checklist && editedCard.checklist.length > 0 && (
                <div className="mb-3">
                  <div className={`w-full rounded-full h-1.5 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="bg-blue-500 h-1.5 rounded-full transition-all duration-300" 
                      style={{width: `${editedCard.progress || 0}%`}}
                    ></div>
                  </div>
                </div>
              )}
              
              {/* Checklist Items */}
              <div className="space-y-2">
                {editedCard.checklist && editedCard.checklist.map(item => (
                  <div 
                    key={item.id} 
                    className={`flex items-start gap-2 p-2 rounded-lg ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-100'}`}
                  >
                    <div 
                      className={`flex-shrink-0 w-5 h-5 rounded border cursor-pointer flex items-center justify-center ${item.completed ? (isDark ? 'bg-blue-600 border-blue-600' : 'bg-blue-500 border-blue-500') : (isDark ? 'border-gray-600' : 'border-gray-300')}`}
                      onClick={() => handleToggleChecklistItem(item.id)}
                    >
                      {item.completed && <CheckSquare className="w-4 h-4 text-white" />}
                    </div>
                    <span className={`text-sm ${item.completed ? (isDark ? 'line-through text-gray-500' : 'line-through text-gray-400') : ''}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
                
                {/* Add New Checklist Item */}
                {isEditing && (
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="text"
                      value={newChecklistItem}
                      onChange={(e) => setNewChecklistItem(e.target.value)}
                      placeholder="Adicionar item..."
                      className={`flex-1 px-3 py-2 text-sm rounded-lg ${
                        isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                      }`}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddChecklistItem()}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleAddChecklistItem}
                      className={`p-2 rounded-lg ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.button>
                  </div>
                )}
                
                {!isEditing && (!editedCard.checklist || editedCard.checklist.length === 0) && (
                  <p className={`text-sm italic ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Nenhum item na checklist</p>
                )}
              </div>
            </div>
            
            {/* Comments */}
            <div className="mb-6">
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Comentários
              </h3>
              
              <div className="space-y-4 mb-4">
                {card.comments.length > 0 ? (
                  card.comments.map((comment) => (
                    <div 
                      key={comment.id} 
                      className={`p-3 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                            {comment.user?.split(' ').map(name => name[0]).join('') || 'U'}
                          </div>
                          <span className="font-medium">{comment.user || 'Usuário'}</span>
                        </div>
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {formatDateTime(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-sm">{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <p className={`text-sm italic ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Nenhum comentário</p>
                )}
              </div>
              
              {/* Add Comment */}
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                  U
                </div>
                <div className="flex-1">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Adicionar comentário..."
                    rows={3}
                    className={`w-full px-3 py-2 text-sm rounded-lg mb-2 ${
                      isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddComment}
                    disabled={!newComment.trim()}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${newComment.trim() ? (isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white') : (isDark ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed')}`}
                  >
                    Comentar
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Sidebar */}
          <div className={`w-80 border-l p-6 space-y-6 ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50/50'}`}>
            {/* Assignees */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Users className="w-5 h-5 inline mr-2" />
                Responsáveis
              </h3>
              <div className="space-y-2">
                {card.assignees.map((assignee, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-2 p-2 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'}`}
                  >
                    <div className={`w-8 h-8 rounded-full ${assignee.color} flex items-center justify-center text-white text-sm font-medium`}>
                      {assignee.avatar}
                    </div>
                    <span>{assignee.name}</span>
                  </div>
                ))}
                
                {isEditing && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 w-full p-2 rounded-lg text-sm ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                  >
                    <User className="w-4 h-4" />
                    Adicionar responsável
                  </motion.button>
                )}
              </div>
            </div>
            
            {/* Tags */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Tag className="w-5 h-5 inline mr-2" />
                Etiquetas
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {editedCard.tags.map((tag, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                  >
                    <span>{tag}</span>
                    {isEditing && (
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => handleRemoveTag(tag)}
                      />
                    )}
                  </div>
                ))}
              </div>
              
              {isEditing && (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Nova etiqueta..."
                    className={`flex-1 px-3 py-2 text-sm rounded-lg ${
                      isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                    }`}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddTag}
                    className={`p-2 rounded-lg ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
              )}
            </div>
            
            {/* Attachments */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Paperclip className="w-5 h-5 inline mr-2" />
                Anexos
              </h3>
              <div className="space-y-2">
                {card.attachments > 0 ? (
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{card.attachments} anexos</p>
                ) : (
                  <p className={`text-sm italic ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Nenhum anexo</p>
                )}
                
                {isEditing && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 w-full p-2 rounded-lg text-sm ${isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
                  >
                    <Paperclip className="w-4 h-4" />
                    Adicionar anexo
                  </motion.button>
                )}
              </div>
            </div>
            
            {/* Activity */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <Activity className="w-5 h-5 inline mr-2" />
                Atividade
              </h3>
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span>Criado em:</span>
                  <span>{formatDate(card.createdAt)}</span>
                </div>
                <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span>Atualizado em:</span>
                  <span>{formatDate(card.updatedAt)}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Actions */}
          <div className={`w-64 border-l p-4 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
            <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              ADICIONAR AO CARTÃO
            </h3>
            
            <div className="space-y-2">
              {/* Members */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowMembers(!showMembers)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Membros</span>
              </motion.button>
              
              {/* Labels */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowLabels(!showLabels)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Tag className="w-4 h-4" />
                <span className="text-sm font-medium">Etiquetas</span>
              </motion.button>
              
              {/* Checklist */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {}}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                <CheckSquare className="w-4 h-4" />
                <span className="text-sm font-medium">Checklist</span>
              </motion.button>
              
              {/* Dates */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowDates(!showDates)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Datas</span>
              </motion.button>
              
              {/* Attachments */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {}}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Paperclip className="w-4 h-4" />
                <span className="text-sm font-medium">Anexo</span>
              </motion.button>
            </div>
            
            <h3 className={`text-sm font-semibold mb-4 mt-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              AÇÕES
            </h3>
            
            <div className="space-y-2">
              {/* Move */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {}}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm font-medium">Mover</span>
              </motion.button>
              
              {/* Copy */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onDuplicate(card.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Copy className="w-4 h-4" />
                <span className="text-sm font-medium">Copiar</span>
              </motion.button>
              
              {/* Watch */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsWatching(!isWatching)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  isWatching 
                    ? (isDark ? 'bg-blue-900/50 hover:bg-blue-800/50 text-blue-300' : 'bg-blue-100 hover:bg-blue-200 text-blue-700')
                    : (isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700')
                }`}
              >
                {isWatching ? <Bell className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span className="text-sm font-medium">{isWatching ? 'Observando' : 'Observar'}</span>
              </motion.button>
              
              {/* Archive */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onArchive(card.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  isDark ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
              >
                <Archive className="w-4 h-4" />
                <span className="text-sm font-medium">Arquivar</span>
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Delete Confirmation Modal */}
        {showConfirmDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div 
              className={`w-full max-w-md p-6 rounded-lg shadow-xl ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4 text-red-500">
                <AlertCircle className="w-6 h-6" />
                <h3 className="text-lg font-bold">Confirmar exclusão</h3>
              </div>
              <p className="mb-6">Tem certeza que deseja excluir este cartão? Esta ação não pode ser desfeita.</p>
              <div className="flex justify-end gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowConfirmDelete(false)}
                  className={`px-4 py-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  Cancelar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onDelete(card);
                    setShowConfirmDelete(false);
                  }}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
                >
                  Excluir
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default KanbanCardModal;