import { useState, useCallback, useMemo, useEffect } from 'react';
import { dashboardSections } from '../components/Dashboard';

// Custom hook for Dashboard state management and optimization
export const useDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Optimized section change handler
  const handleSectionChange = useCallback(async (sectionId: string) => {
    if (sectionId === activeSection) return;
    
    setIsLoading(true);
    
    // Preload component and simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 150));
    
    setActiveSection(sectionId);
    setIsLoading(false);
    
    // Update document title and meta description for SEO
    const section = dashboardSections.find(s => s.id === sectionId);
    if (section) {
      document.title = `${section.label} - Dashboard | NEXO Estudos Elétricos`;
      
      // Update meta description dynamically
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${section.description} - Sistema NEXO de gestão de estudos elétricos.`);
      }
      
      // Update canonical URL
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `https://roodlemos.github.io/EstudosN/dashboard#${sectionId}`);
      }
    }
  }, [activeSection]);

  // Optimized toggle handlers with useCallback
  const handleSidebarToggle = useCallback(() => {
    setSidebarCollapsed(prev => !prev);
    
    // Save sidebar state to localStorage for persistence
    localStorage.setItem('nexo-sidebar-collapsed', (!sidebarCollapsed).toString());
  }, [sidebarCollapsed]);

  const handleNotificationToggle = useCallback(() => {
    setShowNotifications(prev => !prev);
    // Close user menu if open
    if (showUserMenu) setShowUserMenu(false);
  }, [showUserMenu]);

  const handleUserMenuToggle = useCallback(() => {
    setShowUserMenu(prev => !prev);
    // Close notifications if open
    if (showNotifications) setShowNotifications(false);
  }, [showNotifications]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  // Memoized filtered sections
  const filteredSections = useMemo(() => 
    dashboardSections.filter(section =>
      section.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.description.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]
  );

  // Get current section info
  const currentSection = useMemo(() => 
    dashboardSections.find(section => section.id === activeSection),
    [activeSection]
  );

  // Close dropdowns when clicking outside
  const handleOutsideClick = useCallback((event: MouseEvent, refs: React.RefObject<HTMLElement>[]) => {
    const clickedOutside = refs.every(ref => 
      ref.current && !ref.current.contains(event.target as Node)
    );
    
    if (clickedOutside) {
      setShowNotifications(false);
      setShowUserMenu(false);
    }
  }, []);

  // Load sidebar state from localStorage on mount
  useEffect(() => {
    const savedSidebarState = localStorage.getItem('nexo-sidebar-collapsed');
    if (savedSidebarState) {
      setSidebarCollapsed(savedSidebarState === 'true');
    }
  }, []);

  // Preload next likely components based on user behavior
  useEffect(() => {
    const preloadComponents = async () => {
      // Preload commonly accessed components after overview
      if (activeSection === 'overview') {
        // Preload requests and kanban as they're commonly accessed next
        import('../components/Dashboard/Pages/Requests');
        import('../components/Dashboard/Kanban/KanbanBoard');
      }
    };

    const timer = setTimeout(preloadComponents, 1000);
    return () => clearTimeout(timer);
  }, [activeSection]);

  return {
    // State
    activeSection,
    sidebarCollapsed,
    searchTerm,
    showNotifications,
    showUserMenu,
    isLoading,
    
    // Computed values
    filteredSections,
    currentSection,
    
    // Handlers
    handleSectionChange,
    handleSidebarToggle,
    handleNotificationToggle,
    handleUserMenuToggle,
    handleSearchChange,
    handleOutsideClick,
    
    // Setters (for direct state updates if needed)
    setActiveSection,
    setSidebarCollapsed,
    setSearchTerm,
    setShowNotifications,
    setShowUserMenu,
    setIsLoading
  };
};

export default useDashboard;