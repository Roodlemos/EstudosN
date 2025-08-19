import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { KanbanCard, KanbanColumn, KanbanUser } from '../types/kanban';

interface KanbanContextType {
  cards: KanbanCard[];
  columns: KanbanColumn[];
  users: KanbanUser[];
  selectedCard: KanbanCard | null;
  isCardModalOpen: boolean;
  isNewCardModalOpen: boolean;
  isDeleteModalOpen: boolean;
  cardToDelete: KanbanCard | null;
  searchQuery: string;
  filterPriority: string[];
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  notifications: Array<{
    id: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    read: boolean;
    createdAt: string;
  }>;
  
  // Card Actions
  addCard: (card: Omit<KanbanCard, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateCard: (card: KanbanCard) => void;
  deleteCard: (cardId: string) => void;
  moveCard: (cardId: string, sourceColumn: string, destinationColumn: string, newIndex?: number) => void;
  duplicateCard: (cardId: string) => void;
  archiveCard: (cardId: string) => void;
  
  // Column Actions
  addColumn: (column: Omit<KanbanColumn, 'id'>) => void;
  updateColumn: (column: KanbanColumn) => void;
  deleteColumn: (columnId: string) => void;
  
  // Modal Actions
  openCardModal: (card: KanbanCard) => void;
  closeCardModal: () => void;
  openNewCardModal: () => void;
  closeNewCardModal: () => void;
  openDeleteModal: (card: KanbanCard) => void;
  closeDeleteModal: () => void;
  
  // Filter Actions
  setSearchQuery: (query: string) => void;
  toggleFilterPriority: (priority: string) => void;
  setSortBy: (sortBy: string) => void;
  toggleSortDirection: () => void;
  
  // User Actions
  addUser: (user: Omit<KanbanUser, 'id'>) => void;
  updateUser: (user: KanbanUser) => void;
  deleteUser: (userId: string) => void;
  
  // Notification Actions
  addNotification: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
  markNotificationAsRead: (notificationId: string) => void;
  clearNotifications: () => void;
}

const KanbanContext = createContext<KanbanContextType | undefined>(undefined);

export const useKanban = () => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error('useKanban must be used within a KanbanProvider');
  }
  return context;
};

interface KanbanProviderProps {
  children: ReactNode;
}

export const KanbanProvider: React.FC<KanbanProviderProps> = ({ children }) => {
  // State for cards
  const [cards, setCards] = useState<KanbanCard[]>([
    {
      id: '1',
      title: 'Implementar autenticação',
      description: 'Adicionar sistema de login com OAuth e JWT',
      status: 'todo',
      priority: 'high',
      assignees: [
        { name: 'Ana Silva', avatar: 'AS', color: 'bg-purple-500' },
        { name: 'João Costa', avatar: 'JC', color: 'bg-green-500' }
      ],
      tags: ['backend', 'segurança'],
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      comments: [
        { id: '1', user: 'Ana Silva', avatar: 'AS', text: 'Vamos usar Auth0?', createdAt: new Date().toISOString() }
      ],
      attachments: 2,
      progress: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      checklist: [
        { id: 1, text: 'Configurar Auth0', completed: false },
        { id: 2, text: 'Implementar JWT', completed: false },
        { id: 3, text: 'Testar fluxo de login', completed: false }
      ]
    },
    {
      id: '2',
      title: 'Design da página inicial',
      description: 'Criar wireframes e mockups para a landing page',
      status: 'in_progress',
      priority: 'medium',
      assignees: [
        { name: 'Maria Souza', avatar: 'MS', color: 'bg-pink-500' }
      ],
      tags: ['design', 'ui/ux'],
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      comments: [],
      attachments: 5,
      progress: 60,
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
      checklist: [
        { id: 1, text: 'Wireframes desktop', completed: true },
        { id: 2, text: 'Wireframes mobile', completed: true },
        { id: 3, text: 'Mockups desktop', completed: false },
        { id: 4, text: 'Mockups mobile', completed: false },
        { id: 5, text: 'Aprovação do cliente', completed: false }
      ]
    },
    {
      id: '3',
      title: 'Otimizar consultas SQL',
      description: 'Melhorar performance das consultas principais',
      status: 'review',
      priority: 'high',
      assignees: [
        { name: 'Pedro Alves', avatar: 'PA', color: 'bg-blue-500' }
      ],
      tags: ['backend', 'performance'],
      dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      comments: [
        { id: '1', user: 'Pedro Alves', avatar: 'PA', text: 'Adicionei índices nas tabelas principais', createdAt: new Date().toISOString() },
        { id: '2', user: 'Ana Silva', avatar: 'AS', text: 'Vamos precisar de mais testes de carga', createdAt: new Date().toISOString() }
      ],
      attachments: 1,
      progress: 100,
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
      checklist: [
        { id: 1, text: 'Analisar queries lentas', completed: true },
        { id: 2, text: 'Adicionar índices', completed: true },
        { id: 3, text: 'Testar performance', completed: true }
      ]
    },
    {
      id: '4',
      title: 'Implementar testes automatizados',
      description: 'Configurar Jest e criar testes unitários',
      status: 'done',
      priority: 'medium',
      assignees: [
        { name: 'João Costa', avatar: 'JC', color: 'bg-green-500' }
      ],
      tags: ['testes', 'qualidade'],
      dueDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      comments: [],
      attachments: 0,
      progress: 100,
      createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      checklist: [
        { id: 1, text: 'Configurar Jest', completed: true },
        { id: 2, text: 'Criar testes unitários', completed: true },
        { id: 3, text: 'Integrar com CI/CD', completed: true }
      ]
    }
  ]);
  
  // State for columns
  const [columns, setColumns] = useState<KanbanColumn[]>([
    {
      id: 'todo',
      title: 'A Fazer',
      wip: 5,
      color: 'gray',
      icon: 'CircleCheck'
    },
    {
      id: 'in_progress',
      title: 'Em Andamento',
      wip: 3,
      color: 'blue',
      icon: 'Clock'
    },
    {
      id: 'review',
      title: 'Revisão',
      wip: 3,
      color: 'yellow',
      icon: 'Eye'
    },
    {
      id: 'done',
      title: 'Concluído',
      wip: 0, // 0 means no limit
      color: 'green',
      icon: 'CheckCircle'
    }
  ]);
  
  // State for users
  const [users, setUsers] = useState<KanbanUser[]>([
    {
      id: '1',
      name: 'Ana Silva',
      email: 'ana.silva@exemplo.com',
      avatar: 'AS',
      color: 'bg-purple-500',
      role: 'admin'
    },
    {
      id: '2',
      name: 'João Costa',
      email: 'joao.costa@exemplo.com',
      avatar: 'JC',
      color: 'bg-green-500',
      role: 'member'
    },
    {
      id: '3',
      name: 'Maria Souza',
      email: 'maria.souza@exemplo.com',
      avatar: 'MS',
      color: 'bg-pink-500',
      role: 'member'
    },
    {
      id: '4',
      name: 'Pedro Alves',
      email: 'pedro.alves@exemplo.com',
      avatar: 'PA',
      color: 'bg-blue-500',
      role: 'member'
    }
  ]);
  
  // Modal states
  const [selectedCard, setSelectedCard] = useState<KanbanCard | null>(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [cardToDelete, setCardToDelete] = useState<KanbanCard | null>(null);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPriority, setFilterPriority] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('dueDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Notifications state
  const [notifications, setNotifications] = useState<Array<{
    id: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    read: boolean;
    createdAt: string;
  }>>([]);
  
  // Card Actions
  const addCard = (card: Omit<KanbanCard, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newCard: KanbanCard = {
      ...card,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setCards([...cards, newCard]);
    addNotification(`Cartão "${newCard.title}" criado com sucesso`, 'success');
  };
  
  const updateCard = (updatedCard: KanbanCard) => {
    setCards(cards.map(card => 
      card.id === updatedCard.id ? { ...updatedCard, updatedAt: new Date().toISOString() } : card
    ));
    addNotification(`Cartão "${updatedCard.title}" atualizado`, 'info');
  };
  
  const deleteCard = (cardId: string) => {
    const cardToDelete = cards.find(card => card.id === cardId);
    if (cardToDelete) {
      setCards(cards.filter(card => card.id !== cardId));
      addNotification(`Cartão "${cardToDelete.title}" excluído`, 'warning');
    }
  };
  
  const moveCard = (cardId: string, sourceColumn: string, destinationColumn: string, newIndex?: number) => {
    const cardToMove = cards.find(card => card.id === cardId);
    if (cardToMove) {
      // Check if destination column has WIP limit
      const destColumn = columns.find(col => col.id === destinationColumn);
      const cardsInDestColumn = cards.filter(card => card.status === destinationColumn);
      
      if (destColumn && destColumn.wip > 0 && cardsInDestColumn.length >= destColumn.wip && sourceColumn !== destinationColumn) {
        addNotification(`Limite de WIP atingido na coluna ${destColumn.title}`, 'error');
        return;
      }
      
      const updatedCard = {
        ...cardToMove,
        status: destinationColumn,
        updatedAt: new Date().toISOString()
      };
      
      setCards(cards.map(card => card.id === cardId ? updatedCard : card));
      addNotification(
        `Cartão "${cardToMove.title}" movido para ${columns.find(col => col.id === destinationColumn)?.title}`,
        'info'
      );
    }
  };
  
  const duplicateCard = (cardId: string) => {
    const cardToDuplicate = cards.find(card => card.id === cardId);
    if (cardToDuplicate) {
      const newCard: KanbanCard = {
        ...cardToDuplicate,
        id: Date.now().toString(),
        title: `${cardToDuplicate.title} (cópia)`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      setCards([...cards, newCard]);
      addNotification(`Cartão "${cardToDuplicate.title}" duplicado`, 'success');
    }
  };
  
  const archiveCard = (cardId: string) => {
    // In a real app, you might move this to an 'archived' status or collection
    const cardToArchive = cards.find(card => card.id === cardId);
    if (cardToArchive) {
      setCards(cards.filter(card => card.id !== cardId));
      addNotification(`Cartão "${cardToArchive.title}" arquivado`, 'info');
    }
  };
  
  // Column Actions
  const addColumn = (column: Omit<KanbanColumn, 'id'>) => {
    const newColumn: KanbanColumn = {
      ...column,
      id: column.title.toLowerCase().replace(/\s+/g, '_')
    };
    
    setColumns([...columns, newColumn]);
    addNotification(`Coluna "${newColumn.title}" criada`, 'success');
  };
  
  const updateColumn = (updatedColumn: KanbanColumn) => {
    setColumns(columns.map(column => 
      column.id === updatedColumn.id ? updatedColumn : column
    ));
    addNotification(`Coluna "${updatedColumn.title}" atualizada`, 'info');
  };
  
  const deleteColumn = (columnId: string) => {
    const columnToDelete = columns.find(column => column.id === columnId);
    if (columnToDelete) {
      // Check if there are cards in this column
      const cardsInColumn = cards.filter(card => card.status === columnId);
      if (cardsInColumn.length > 0) {
        addNotification(`Não é possível excluir a coluna "${columnToDelete.title}" porque ela contém cartões`, 'error');
        return;
      }
      
      setColumns(columns.filter(column => column.id !== columnId));
      addNotification(`Coluna "${columnToDelete.title}" excluída`, 'warning');
    }
  };
  
  // Modal Actions
  const openCardModal = (card: KanbanCard) => {
    setSelectedCard(card);
    setIsCardModalOpen(true);
  };
  
  const closeCardModal = () => {
    setIsCardModalOpen(false);
    setTimeout(() => setSelectedCard(null), 300); // Delay to allow animation
  };
  
  const openNewCardModal = () => {
    setIsNewCardModalOpen(true);
  };
  
  const closeNewCardModal = () => {
    setIsNewCardModalOpen(false);
  };
  
  const openDeleteModal = (card: KanbanCard) => {
    setCardToDelete(card);
    setIsDeleteModalOpen(true);
  };
  
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTimeout(() => setCardToDelete(null), 300); // Delay to allow animation
  };
  
  // Filter Actions
  const toggleFilterPriority = (priority: string) => {
    setFilterPriority(prev => 
      prev.includes(priority) 
        ? prev.filter(p => p !== priority)
        : [...prev, priority]
    );
  };
  
  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };
  
  // User Actions
  const addUser = (user: Omit<KanbanUser, 'id'>) => {
    const newUser: KanbanUser = {
      ...user,
      id: Date.now().toString()
    };
    
    setUsers([...users, newUser]);
    addNotification(`Usuário "${newUser.name}" adicionado`, 'success');
  };
  
  const updateUser = (updatedUser: KanbanUser) => {
    setUsers(users.map(user => 
      user.id === updatedUser.id ? updatedUser : user
    ));
    addNotification(`Usuário "${updatedUser.name}" atualizado`, 'info');
  };
  
  const deleteUser = (userId: string) => {
    const userToDelete = users.find(user => user.id === userId);
    if (userToDelete) {
      // Check if user is assigned to any cards
      const userAssigned = cards.some(card => 
        card.assignees.some(assignee => assignee.name === userToDelete.name)
      );
      
      if (userAssigned) {
        addNotification(`Não é possível excluir o usuário "${userToDelete.name}" porque ele está atribuído a cartões`, 'error');
        return;
      }
      
      setUsers(users.filter(user => user.id !== userId));
      addNotification(`Usuário "${userToDelete.name}" excluído`, 'warning');
    }
  };
  
  // Notification Actions
  const addNotification = (message: string, type: 'info' | 'success' | 'warning' | 'error') => {
    const newNotification = {
      id: Date.now().toString(),
      message,
      type,
      read: false,
      createdAt: new Date().toISOString()
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 5000);
  };
  
  const markNotificationAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    );
  };
  
  const clearNotifications = () => {
    setNotifications([]);
  };
  
  // Provide the context value
  const contextValue: KanbanContextType = {
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
    notifications,
    
    // Card Actions
    addCard,
    updateCard,
    deleteCard,
    moveCard,
    duplicateCard,
    archiveCard,
    
    // Column Actions
    addColumn,
    updateColumn,
    deleteColumn,
    
    // Modal Actions
    openCardModal,
    closeCardModal,
    openNewCardModal,
    closeNewCardModal,
    openDeleteModal,
    closeDeleteModal,
    
    // Filter Actions
    setSearchQuery,
    toggleFilterPriority,
    setSortBy,
    toggleSortDirection,
    
    // User Actions
    addUser,
    updateUser,
    deleteUser,
    
    // Notification Actions
    addNotification,
    markNotificationAsRead,
    clearNotifications
  };
  
  return (
    <KanbanContext.Provider value={contextValue}>
      {children}
    </KanbanContext.Provider>
  );
};