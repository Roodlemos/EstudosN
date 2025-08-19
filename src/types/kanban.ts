export interface KanbanCard {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'review' | 'done' | string;
  priority: 'high' | 'medium' | 'low';
  assignees: Array<{
    name: string;
    avatar: string;
    color: string;
  }>;
  tags: string[];
  dueDate: string;
  comments: Array<{
    id: string;
    user: string;
    avatar: string;
    text: string;
    createdAt: string;
  }>;
  attachments: number;
  progress: number;
  createdAt: string;
  updatedAt: string;
  checklist?: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
}

export interface KanbanColumn {
  id: string;
  title: string;
  wip: number; // Work in Progress limit (0 means no limit)
  color: string;
  icon: string;
}

export interface KanbanUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  color: string;
  role: 'admin' | 'member' | 'viewer';
}

export interface KanbanActivity {
  id: string;
  cardId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  action: 'created' | 'updated' | 'moved' | 'commented' | 'attached' | 'assigned' | 'removed';
  details?: string;
  timestamp: string;
}

export interface KanbanNotification {
  id: string;
  userId: string;
  cardId?: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

export interface KanbanFilter {
  search: string;
  priorities: string[];
  assignees: string[];
  tags: string[];
  dueDateRange?: {
    start: string;
    end: string;
  };
  sortBy: 'priority' | 'dueDate' | 'title' | 'assignee';
  sortDirection: 'asc' | 'desc';
}