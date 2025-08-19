import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Edit, 
  Trash2, 
  Save,
  Calendar,
  Flag,
  Users,
  CheckSquare,
  FileText,
  AlertCircle
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
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState<KanbanCard | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  
  useEffect(() => {
    if (card) {
      setEditedCard(JSON.parse(JSON.stringify(card)));
    }
  }, [card]);

  if (!card || !editedCard) return null;

  const handleSaveChanges = () => {
    if (editedCard) {
      onUpdate(editedCard);
      setIsEditing(false);
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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`w-full max-w-4xl max-h-[95vh] overflow-hidden rounded-2xl shadow-2xl border ${
          isDark ? 'bg-gray-900/95 text-white border-gray-700/50' : 'bg-white/95 text-gray-900 border-gray-200/50'
        } backdrop-blur-xl`}
      >
        {/* Header */}
        <div className={`relative p-6 border-b ${
          isDark ? 'border-gray-700/30 bg-gradient-to-br from-gray-800/80 via-gray-800/60 to-gray-900/80' : 'border-gray-200/30 bg-gradient-to-br from-white/80 via-gray-50/60 to-white/80'
        } backdrop-blur-md`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex-1 relative z-10">
              {/* Título */}
              {isEditing ? (
                <input
                  type="text"
                  value={editedCard.title}
                  onChange={(e) => setEditedCard({ ...editedCard, title: e.target.value })}
                  className={`w-full text-2xl font-bold px-4 py-3 rounded-xl border-2 border-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-lg ${
                    isDark ? 'bg-gray-800/80 text-white placeholder-gray-400' : 'bg-white/80 text-gray-900 placeholder-gray-500'
                  } backdrop-blur-sm`}
                  placeholder="Título do card..."
                  autoFocus
                />
              ) : (
                <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{card.title}</h1>
              )}
              
              {/* Informações principais */}
               <div className="flex flex-wrap items-center gap-3">
                 <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border ${getStatusColor(card.status)} transition-all duration-300 hover:scale-105`}>
                   <div className={`w-3 h-3 rounded-full shadow-sm ${
                     card.status === 'todo' ? 'bg-gray-500' :
                     card.status === 'in_progress' ? 'bg-blue-500' :
                     card.status === 'review' ? 'bg-yellow-500' :
                     'bg-green-500'
                   }`} />
                   <span>{getStatusLabel(card.status)}</span>
                 </div>
                 <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border ${getPriorityColor(card.priority)} transition-all duration-300 hover:scale-105`}>
                   <Flag className={`w-4 h-4 ${
                     card.priority === 'high' ? 'text-red-600' :
                     card.priority === 'medium' ? 'text-yellow-600' :
                     'text-green-600'
                   }`} />
                   <span>{getPriorityLabel(card.priority)}</span>
                 </div>
                 {card.dueDate && (
                   <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium ${
                     isOverdue(card.dueDate) 
                       ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' 
                       : isDueSoon(card.dueDate) 
                       ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                       : isDark ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-100 text-gray-700'
                   }`}>
                     <Calendar className="w-3 h-3" />
                     <span>{formatDate(card.dueDate)}</span>
                     {isOverdue(card.dueDate) && <span className="text-xs bg-red-600 text-white px-1.5 py-0.5 rounded ml-1">!</span>}
                     {isDueSoon(card.dueDate) && <span className="text-xs bg-yellow-600 text-white px-1.5 py-0.5 rounded ml-1">⚠</span>}
                   </div>
                 )}
               </div>
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              {isEditing ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSaveChanges}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl backdrop-blur-sm border border-blue-500/20"
                  >
                    <Save className="w-4 h-4" />
                    <span>Salvar</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsEditing(false);
                      setEditedCard(JSON.parse(JSON.stringify(card)));
                    }}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border ${
                      isDark ? 'bg-gray-800/80 hover:bg-gray-700/80 text-white border-gray-600/50' : 'bg-gray-100/80 hover:bg-gray-200/80 text-gray-700 border-gray-300/50'
                    }`}
                  >
                    <span>Cancelar</span>
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsEditing(true)}
                    className={`p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border ${
                      isDark ? 'bg-gray-800/80 hover:bg-gray-700/80 text-blue-400 border-gray-600/50 hover:border-blue-500/50' : 'bg-white/80 hover:bg-gray-50/80 text-blue-600 border-gray-300/50 hover:border-blue-400/50'
                    }`}
                    title="Editar card"
                  >
                    <Edit className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowConfirmDelete(true)}
                    className="p-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-red-500/20"
                    title="Deletar card"
                  >
                    <Trash2 className="w-5 h-5" />
                  </motion.button>
                </>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className={`p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border ${
                  isDark ? 'bg-gray-800/80 hover:bg-gray-700/80 text-gray-400 hover:text-white border-gray-600/50' : 'bg-white/80 hover:bg-gray-50/80 text-gray-600 hover:text-gray-900 border-gray-300/50'
                }`}
                title="Fechar modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Conteúdo */}
         <div className="flex-1 overflow-y-auto">
           <div className="p-6 space-y-8">
          {/* Descrição */}
           <div className={`rounded-2xl border transition-all duration-300 ${
             isDark ? 'bg-gray-800/50 border-gray-700/50' : 'bg-white/50 border-gray-200/50'
           } backdrop-blur-sm`}>
             <div className="p-6">
               <div className="flex items-center gap-3 mb-4">
                 <div className={`p-3 rounded-xl shadow-lg ${
                   isDark ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white' : 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                 }`}>
                   <FileText className="w-5 h-5" />
                 </div>
                 <h3 className={`text-xl font-bold ${
                   isDark ? 'text-white' : 'text-gray-900'
                 }`}>
                   Descrição
                 </h3>
               </div>
            
            {isEditing ? (
              <textarea
                value={editedCard.description}
                onChange={(e) => setEditedCard({ ...editedCard, description: e.target.value })}
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                  isDark ? 'bg-gray-800/80 text-white border-gray-600/50 focus:border-blue-500 placeholder-gray-400' : 'bg-white/80 text-gray-900 border-gray-300/50 focus:border-blue-500 placeholder-gray-500'
                } backdrop-blur-sm shadow-sm focus:shadow-md`}
                placeholder="Descreva os detalhes do cartão..."
              />
            ) : (
              <div className={`prose prose-sm ${isDark ? 'prose-invert' : ''} max-w-none p-4 rounded-xl border-2 backdrop-blur-sm shadow-sm transition-all duration-300 ${
                 isDark ? 'bg-gray-800/80 border-gray-600/50 text-gray-200' : 'bg-white/80 border-gray-300/50 text-gray-700'
               }`}>
                 <ReactMarkdown>{card.description || '*Sem descrição disponível*'}</ReactMarkdown>
               </div>
            )}
          </div>
          
          {/* Responsáveis */}
           <div className={`p-6 rounded-xl border-2 backdrop-blur-sm shadow-sm transition-all duration-300 ${
             isDark ? 'bg-gray-800/80 border-gray-600/50' : 'bg-white/80 border-gray-300/50'
           }`}>
             <div className="flex items-center gap-3 mb-4">
               <div className={`p-2 rounded-xl shadow-lg backdrop-blur-sm ${
                 isDark ? 'bg-green-900/50 text-green-400 border border-green-700/50' : 'bg-green-100/80 text-green-600 border border-green-200/50'
               }`}>
                 <Users className="w-5 h-5" />
               </div>
               <h3 className={`text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent`}>
                 Responsáveis
               </h3>
             </div>
             <div className="flex flex-wrap gap-3">
               {card.assignees.map((assignee, index) => (
                 <div 
                   key={index} 
                   className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                     isDark ? 'bg-gray-700/80 border-gray-600/50 hover:bg-gray-600/80' : 'bg-white/90 border-gray-300/50 hover:bg-gray-50/90'
                   }`}
                 >
                   <div className={`w-8 h-8 rounded-full ${assignee.color} flex items-center justify-center text-white text-xs font-bold`}>
                     {assignee.avatar}
                   </div>
                   <span className="text-sm font-medium">{assignee.name}</span>
                 </div>
               ))}
             </div>
           </div>
          
          {/* Checklist */}
           {editedCard.checklist && editedCard.checklist.length > 0 && (
             <div className={`p-6 rounded-xl border-2 backdrop-blur-sm shadow-sm transition-all duration-300 ${
               isDark ? 'bg-gray-800/80 border-gray-600/50' : 'bg-white/80 border-gray-300/50'
             }`}>
               <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-3">
                   <div className={`p-2 rounded-xl shadow-lg backdrop-blur-sm ${
                     isDark ? 'bg-purple-900/50 text-purple-400 border border-purple-700/50' : 'bg-purple-100/80 text-purple-600 border border-purple-200/50'
                   }`}>
                     <CheckSquare className="w-5 h-5" />
                   </div>
                   <h3 className={`text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent`}>
                     Checklist
                   </h3>
                 </div>
                 <div className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border transition-all duration-300 ${
                   isDark ? 'bg-purple-900/50 text-purple-300 border-purple-700/50' : 'bg-purple-100/80 text-purple-700 border-purple-200/50'
                 }`}>
                   {editedCard.checklist.filter(item => item.completed).length}/{editedCard.checklist.length}
                 </div>
               </div>
              
              {/* Barra de progresso */}
               <div className="mb-6">
                 <div className={`w-full rounded-full h-3 overflow-hidden shadow-inner backdrop-blur-sm ${
                   isDark ? 'bg-gray-700/80 border border-gray-600/50' : 'bg-gray-200/80 border border-gray-300/50'
                 }`}>
                   <div 
                     className="bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 h-3 transition-all duration-700 ease-out shadow-sm" 
                     style={{width: `${editedCard.progress || 0}%`}}
                   ></div>
                 </div>
                 <div className="flex justify-between items-center mt-3">
                   <span className={`text-sm font-medium ${
                     isDark ? 'text-gray-300' : 'text-gray-600'
                   }`}>
                     Progresso
                   </span>
                   <span className={`text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent`}>
                     {editedCard.progress || 0}%
                   </span>
                 </div>
               </div>
              
              {/* Itens da checklist */}
               <div className="space-y-4">
                 {editedCard.checklist.map(item => (
                   <motion.div 
                     key={item.id}
                     whileHover={{ scale: 1.02, y: -2 }}
                     whileTap={{ scale: 0.98 }}
                     className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 backdrop-blur-sm shadow-lg hover:shadow-xl ${
                       item.completed
                         ? isDark ? 'bg-green-900/30 border-green-700/50 hover:bg-green-900/40' : 'bg-green-50/80 border-green-300/50 hover:bg-green-100/80'
                         : isDark ? 'bg-gray-700/80 border-gray-600/50 hover:bg-gray-600/80' : 'bg-white/90 border-gray-300/50 hover:bg-gray-50/90'
                     }`}
                     onClick={() => handleToggleChecklistItem(item.id)}
                   >
                     <div className={`flex-shrink-0 w-7 h-7 rounded-xl border-2 flex items-center justify-center transition-all duration-300 shadow-sm ${
                       item.completed 
                         ? 'bg-gradient-to-br from-green-500 to-emerald-600 border-green-500 shadow-md' 
                         : isDark ? 'border-gray-500 hover:border-gray-400 bg-gray-800/50' : 'border-gray-400 hover:border-gray-500 bg-white/50'
                     }`}>
                       {item.completed && <CheckSquare className="w-4 h-4 text-white" />}
                     </div>
                     <span className={`flex-1 text-sm font-medium transition-all duration-300 ${
                       item.completed 
                         ? isDark ? 'line-through text-gray-400 opacity-75' : 'line-through text-gray-500 opacity-75'
                         : isDark ? 'text-gray-100' : 'text-gray-800'
                     }`}>
                       {item.text}
                     </span>
                   </motion.div>
                 ))}
               </div>
            </div>
          )}
        </div>
        
        {/* Modal de confirmação de exclusão */}
        {showConfirmDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`w-full max-w-md p-8 rounded-2xl shadow-2xl border-2 backdrop-blur-md ${
                isDark ? 'bg-gray-800/90 text-white border-gray-600/50' : 'bg-white/90 text-gray-900 border-gray-300/50'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-red-100/80 border border-red-200/50 backdrop-blur-sm">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">Confirmar exclusão</h3>
              </div>
              <p className={`mb-8 text-base leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>Tem certeza que deseja excluir este cartão? Esta ação não pode ser desfeita.</p>
              <div className="flex justify-end gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowConfirmDelete(false)}
                  className={`px-6 py-3 rounded-xl font-semibold shadow-lg backdrop-blur-sm border-2 transition-all duration-300 ${
                    isDark ? 'bg-gray-700/80 hover:bg-gray-600/80 border-gray-600/50 text-gray-200' : 'bg-gray-200/80 hover:bg-gray-300/80 border-gray-300/50 text-gray-700'
                  }`}
                >
                  Cancelar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onDelete(card);
                    setShowConfirmDelete(false);
                  }}
                  className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg border-2 border-red-500/50 backdrop-blur-sm transition-all duration-300"
                >
                  Excluir
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default KanbanCardModal;