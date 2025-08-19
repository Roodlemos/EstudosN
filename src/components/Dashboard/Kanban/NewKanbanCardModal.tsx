import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Save, 
  Plus, 
  User, 
  Tag, 
  Clock,
  CheckSquare
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { KanbanCard, KanbanColumn, KanbanUser } from '../../../types/kanban';

interface NewKanbanCardModalProps {
  onClose: () => void;
  onAdd: (card: Omit<KanbanCard, 'id' | 'createdAt' | 'updatedAt'>) => void;
  columns: KanbanColumn[];
  users: KanbanUser[];
}

const NewKanbanCardModal: React.FC<NewKanbanCardModalProps> = ({
  onClose,
  onAdd,
  columns,
  users
}) => {
  const { isDark } = useTheme();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedColumn, setSelectedColumn] = useState(columns[0]?.id || '');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [checklist, setChecklist] = useState<Array<{id: number, text: string, completed: boolean}>>([]);
  const [newChecklistItem, setNewChecklistItem] = useState('');
  
  // Get column status based on selected column (the column ID is the status)
  const columnStatus = selectedColumn || 'todo';
  
  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };
  
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  const handleAddChecklistItem = () => {
    if (newChecklistItem.trim()) {
      setChecklist([
        ...checklist,
        { id: Date.now(), text: newChecklistItem.trim(), completed: false }
      ]);
      setNewChecklistItem('');
    }
  };
  
  const handleRemoveChecklistItem = (itemId: number) => {
    setChecklist(checklist.filter(item => item.id !== itemId));
  };
  
  const handleSubmit = () => {
    if (!title.trim()) return;
    
    const newCard: Omit<KanbanCard, 'id' | 'createdAt' | 'updatedAt'> = {
      title: title.trim(),
      description: description.trim(),
      status: columnStatus as KanbanCard['status'],
      priority,
      assignees: [{ name: 'Usuário Atual', avatar: 'UA', color: 'bg-blue-500' }],
      tags,
      dueDate: endDate || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      comments: [],
      attachments: 0,
      progress: 0,
      checklist
    };
    
    onAdd(newCard);
    resetForm();
    onClose();
  };
  
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPriority('medium');
    setStartDate('');
    setEndDate('');
    setTags([]);
    setNewTag('');
    setChecklist([]);
    setNewChecklistItem('');
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
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'todo': return isDark ? 'bg-gray-900/80 text-gray-200' : 'bg-gray-100 text-gray-800';
      case 'in_progress': return isDark ? 'bg-blue-900/80 text-blue-200' : 'bg-blue-100 text-blue-800';
      case 'review': return isDark ? 'bg-yellow-900/80 text-yellow-200' : 'bg-yellow-100 text-yellow-800';
      case 'done': return isDark ? 'bg-green-900/80 text-green-200' : 'bg-green-100 text-green-800';
      default: return isDark ? 'bg-gray-700/80 text-gray-200' : 'bg-gray-100 text-gray-800';
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
        className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">Novo Cartão</h2>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(columnStatus)}`}>
                {getStatusLabel(columnStatus)}
              </span>
            </div>
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
        
        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Título *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título do cartão"
              className={`w-full px-3 py-2 rounded-lg ${
                isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'
              }`}
              required
            />
          </div>
          
          {/* Description */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Descrição
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição detalhada do cartão (suporta Markdown)"
              rows={4}
              className={`w-full px-3 py-2 rounded-lg ${
                isDark ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
          
          {/* Column & Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Coluna
              </label>
              <select
                value={selectedColumn}
                onChange={(e) => setSelectedColumn(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                {columns.map((column) => (
                  <option key={column.id} value={column.id}>
                    {column.title}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Prioridade
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as 'high' | 'medium' | 'low')}
                className={`w-full px-3 py-2 rounded-lg ${
                  isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                }`}
              >
                <option value="high">Alta</option>
                <option value="medium">Média</option>
                <option value="low">Baixa</option>
              </select>
            </div>
          </div>
          
          {/* Start Date & End Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Data de Início
              </label>
              <div className="flex items-center gap-2">
                <Clock className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className={`flex-1 px-3 py-2 rounded-lg ${
                    isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                />
              </div>
            </div>
            
            <div>
              <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Data de Término
              </label>
              <div className="flex items-center gap-2">
                <Clock className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className={`flex-1 px-3 py-2 rounded-lg ${
                    isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  }`}
                />
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Etiquetas
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                    isDark ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  <span>{tag}</span>
                  <X 
                    className="w-3 h-3 cursor-pointer" 
                    onClick={() => handleRemoveTag(tag)}
                  />
                </div>
              ))}
            </div>
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
          </div>
          
          {/* Checklist */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Checklist
            </label>
            <div className="space-y-2 mb-2">
              {checklist.map((item) => (
                <div 
                  key={item.id} 
                  className={`flex items-center justify-between p-2 rounded-lg ${
                    isDark ? 'bg-gray-700/50' : 'bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                  <X 
                    className={`w-4 h-4 cursor-pointer ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`} 
                    onClick={() => handleRemoveChecklistItem(item.id)}
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newChecklistItem}
                onChange={(e) => setNewChecklistItem(e.target.value)}
                placeholder="Novo item..."
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
          </div>
          
          {/* Assignees */}
          <div>
            <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Responsáveis
            </label>
            <div className="flex items-center gap-2 p-2 rounded-lg mb-2 ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'}">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium">
                UA
              </div>
              <span>Usuário Atual</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 w-full p-2 rounded-lg text-sm ${
                isDark ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              <User className="w-4 h-4" />
              Adicionar responsável
            </motion.button>
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className={`p-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} flex justify-end gap-3`}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className={`px-4 py-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Cancelar
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={!title.trim()}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              title.trim() 
                ? (isDark ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white')
                : (isDark ? 'bg-gray-700 text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-gray-400 cursor-not-allowed')
            }`}
          >
            <Save className="w-4 h-4" />
            Criar Cartão
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NewKanbanCardModal;