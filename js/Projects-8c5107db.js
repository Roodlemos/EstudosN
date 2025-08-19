import { u as useTheme, r as reactExports, j as jsxRuntimeExports, S as Search, m as motion, B as BarChart3, F as FileText, D as DollarSign, c as CheckCircle, b as MapPin, f as Calendar, Z as Zap } from './index-cbf67d0a.js';
import { F as Filter } from './filter-58480b03.js';
import { P as Plus } from './plus-e0e0b30e.js';
import { B as Briefcase } from './briefcase-69d4b94e.js';
import { T as TrendingUp } from './trending-up-18267d52.js';
import { A as Activity } from './activity-d4f55b48.js';
import { U as User } from './user-40149387.js';
import { B as Building } from './building-7632479e.js';

const Projects = () => {
  const { isDark } = useTheme();
  const [projects, setProjects] = reactExports.useState([
    {
      id: 1,
      name: "Usina Solar Fotovoltaica 50MW",
      client: "EcoEnergy Brasil",
      type: "solar",
      status: "inprogress",
      priority: "high",
      startDate: "2024-01-15",
      endDate: "2024-06-30",
      budget: 25e5,
      spent: 12e5,
      progress: 65,
      team: [
        { name: "João Silva", role: "Gerente de Projeto", avatar: "JS", color: "bg-blue-500" },
        { name: "Maria Santos", role: "Engenheira Elétrica", avatar: "MS", color: "bg-green-500" },
        { name: "Pedro Costa", role: "Analista Técnico", avatar: "PC", color: "bg-purple-500" }
      ],
      location: "Bahia, Brasil",
      description: "Desenvolvimento completo de usina solar fotovoltaica com capacidade de 50MW, incluindo estudos de viabilidade, projeto executivo e acompanhamento da construção.",
      tags: ["Solar", "Renovável", "Grande Porte"],
      lastUpdate: "2024-12-15",
      documents: 45,
      tasks: { total: 120, completed: 78, pending: 42 }
    },
    {
      id: 2,
      name: "Sistema Elétrico Industrial",
      client: "Metalúrgica São Paulo",
      type: "industrial",
      status: "review",
      priority: "medium",
      startDate: "2024-02-01",
      endDate: "2024-04-15",
      budget: 85e4,
      spent: 72e4,
      progress: 90,
      team: [
        { name: "Ana Oliveira", role: "Engenheira Sênior", avatar: "AO", color: "bg-red-500" },
        { name: "Carlos Lima", role: "Técnico Especialista", avatar: "CL", color: "bg-yellow-500" }
      ],
      location: "São Paulo, SP",
      description: "Modernização completa do sistema elétrico industrial, incluindo subestação, quadros de distribuição e sistema de automação.",
      tags: ["Industrial", "Automação", "Modernização"],
      lastUpdate: "2024-12-14",
      documents: 32,
      tasks: { total: 85, completed: 76, pending: 9 }
    },
    {
      id: 3,
      name: "Shopping Center Elétrico",
      client: "Shopping Metropolitano",
      type: "commercial",
      status: "completed",
      priority: "low",
      startDate: "2023-10-01",
      endDate: "2024-01-30",
      budget: 12e5,
      spent: 115e4,
      progress: 100,
      team: [
        { name: "Roberto Silva", role: "Coordenador", avatar: "RS", color: "bg-indigo-500" },
        { name: "Fernanda Costa", role: "Engenheira", avatar: "FC", color: "bg-pink-500" }
      ],
      location: "Rio de Janeiro, RJ",
      description: "Projeto elétrico completo para shopping center, incluindo iluminação, climatização e sistemas de segurança.",
      tags: ["Comercial", "Iluminação", "Climatização"],
      lastUpdate: "2024-01-30",
      documents: 28,
      tasks: { total: 95, completed: 95, pending: 0 }
    },
    {
      id: 4,
      name: "Condomínio Residencial",
      client: "Construtora Horizonte",
      type: "residential",
      status: "planning",
      priority: "medium",
      startDate: "2024-03-01",
      endDate: "2024-08-15",
      budget: 45e4,
      spent: 0,
      progress: 15,
      team: [
        { name: "Lucas Pereira", role: "Projetista", avatar: "LP", color: "bg-teal-500" }
      ],
      location: "Belo Horizonte, MG",
      description: "Projeto elétrico para condomínio residencial com 200 unidades, incluindo infraestrutura comum e individual.",
      tags: ["Residencial", "Condomínio", "Infraestrutura"],
      lastUpdate: "2024-12-10",
      documents: 8,
      tasks: { total: 60, completed: 9, pending: 51 }
    }
  ]);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [typeFilter, setTypeFilter] = reactExports.useState("all");
  const [priorityFilter, setPriorityFilter] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("name");
  const [sortOrder, setSortOrder] = reactExports.useState("asc");
  const [viewMode, setViewMode] = reactExports.useState("grid");
  const [selectedProject, setSelectedProject] = reactExports.useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = reactExports.useState(false);
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const getFilteredProjects = () => {
    let filtered = projects;
    if (searchTerm) {
      filtered = filtered.filter(
        (project) => project.name.toLowerCase().includes(searchTerm.toLowerCase()) || project.client.toLowerCase().includes(searchTerm.toLowerCase()) || project.location.toLowerCase().includes(searchTerm.toLowerCase()) || project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (statusFilter !== "all") {
      filtered = filtered.filter((project) => project.status === statusFilter);
    }
    if (typeFilter !== "all") {
      filtered = filtered.filter((project) => project.type === typeFilter);
    }
    if (priorityFilter !== "all") {
      filtered = filtered.filter((project) => project.priority === priorityFilter);
    }
    filtered.sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case "name":
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case "client":
          aValue = a.client.toLowerCase();
          bValue = b.client.toLowerCase();
          break;
        case "budget":
          aValue = a.budget;
          bValue = b.budget;
          break;
        case "progress":
          aValue = a.progress;
          bValue = b.progress;
          break;
        case "endDate":
          aValue = new Date(a.endDate).getTime();
          bValue = new Date(b.endDate).getTime();
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }
      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
    return filtered;
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "planning":
        return isDark ? "bg-gray-900/80 text-gray-200" : "bg-gray-100 text-gray-800";
      case "inprogress":
        return isDark ? "bg-blue-900/80 text-blue-200" : "bg-blue-100 text-blue-800";
      case "review":
        return isDark ? "bg-yellow-900/80 text-yellow-200" : "bg-yellow-100 text-yellow-800";
      case "completed":
        return isDark ? "bg-green-900/80 text-green-200" : "bg-green-100 text-green-800";
      case "onhold":
        return isDark ? "bg-red-900/80 text-red-200" : "bg-red-100 text-red-800";
      default:
        return isDark ? "bg-gray-700/80 text-gray-200" : "bg-gray-100 text-gray-800";
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case "planning":
        return "Planejamento";
      case "inprogress":
        return "Em Andamento";
      case "review":
        return "Revisão";
      case "completed":
        return "Concluído";
      case "onhold":
        return "Pausado";
      default:
        return "Desconhecido";
    }
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return isDark ? "bg-red-900/80 text-red-200" : "bg-red-100 text-red-800";
      case "medium":
        return isDark ? "bg-yellow-900/80 text-yellow-200" : "bg-yellow-100 text-yellow-800";
      case "low":
        return isDark ? "bg-green-900/80 text-green-200" : "bg-green-100 text-green-800";
      default:
        return isDark ? "bg-gray-700/80 text-gray-200" : "bg-gray-100 text-gray-800";
    }
  };
  const getTypeIcon = (type) => {
    switch (type) {
      case "solar":
        return Zap;
      case "industrial":
        return Building;
      case "commercial":
        return Briefcase;
      case "residential":
        return User;
      default:
        return Activity;
    }
  };
  const getTypeColor = (type) => {
    switch (type) {
      case "solar":
        return "bg-yellow-500";
      case "industrial":
        return "bg-blue-500";
      case "commercial":
        return "bg-purple-500";
      case "residential":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };
  const isOverdue = (endDate, status) => {
    return new Date(endDate) < /* @__PURE__ */ new Date() && status !== "completed";
  };
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };
  const filteredProjects = getFilteredProjects();
  const stats = {
    total: projects.length,
    active: projects.filter((p) => p.status === "inprogress").length,
    completed: projects.filter((p) => p.status === "completed").length,
    overdue: projects.filter((p) => isOverdue(p.endDate, p.status)).length,
    totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
    totalSpent: projects.reduce((sum, p) => sum + p.spent, 0)
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-2xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Projetos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gerencie todos os seus projetos em um só lugar" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: `w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Buscar projetos...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: `pl-10 pr-4 py-2 rounded-lg border transition-colors duration-300 ${isDark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400" : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"}`
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
            onClick: () => setShowFilters(!showFilters),
            className: `flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-300 ${isDark ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "w-4 h-4" }),
              "Filtros"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 border rounded-lg p-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => setViewMode("grid"),
              className: `p-2 rounded transition-colors duration-300 ${viewMode === "grid" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(BarChart3, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => setViewMode("list"),
              className: `p-2 rounded transition-colors duration-300 ${viewMode === "list" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
            className: "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              "Novo Projeto"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: `card group hover:shadow-xl transition-all duration-300 ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Total de Projetos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.total }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 font-medium", children: "+2 este mês" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: `card group hover:shadow-xl transition-all duration-300 ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Projetos Ativos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.active }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-600 font-medium", children: [
                Math.round(stats.active / stats.total * 100),
                "% do total"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: `card group hover:shadow-xl transition-all duration-300 ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Orçamento Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: formatCurrency(stats.totalBudget) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-600 font-medium", children: [
                Math.round(stats.totalSpent / stats.totalBudget * 100),
                "% executado"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3 },
          className: `card group hover:shadow-xl transition-all duration-300 ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Taxa de Conclusão" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: [
                Math.round(stats.completed / stats.total * 100),
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-600 font-medium", children: [
                stats.completed,
                " concluídos"
              ] })
            ] })
          ]
        }
      )
    ] }),
    showFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        exit: { opacity: 0, height: 0 },
        className: `p-4 rounded-lg border transition-colors duration-300 ${isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: statusFilter,
                onChange: (e) => setStatusFilter(e.target.value),
                className: `w-full px-3 py-2 rounded border text-sm ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Todos" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "planning", children: "Planejamento" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "inprogress", children: "Em Andamento" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "review", children: "Revisão" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Concluído" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "onhold", children: "Pausado" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Tipo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: typeFilter,
                onChange: (e) => setTypeFilter(e.target.value),
                className: `w-full px-3 py-2 rounded border text-sm ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Todos" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "solar", children: "Solar" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "industrial", children: "Industrial" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "commercial", children: "Comercial" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "residential", children: "Residencial" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Prioridade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: priorityFilter,
                onChange: (e) => setPriorityFilter(e.target.value),
                className: `w-full px-3 py-2 rounded border text-sm ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Todas" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: "Alta" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "medium", children: "Média" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: "Baixa" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Ordenar por" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: sortBy,
                onChange: (e) => setSortBy(e.target.value),
                className: `w-full px-3 py-2 rounded border text-sm ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "Nome" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "client", children: "Cliente" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "budget", children: "Orçamento" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "progress", children: "Progresso" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "endDate", children: "Data de Entrega" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Ordem" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: sortOrder,
                onChange: (e) => setSortOrder(e.target.value),
                className: `w-full px-3 py-2 rounded border text-sm ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "asc", children: "Crescente" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "desc", children: "Decrescente" })
                ]
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: viewMode === "grid" ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4", children: filteredProjects.map((project, index) => {
      const TypeIcon = getTypeIcon(project.type);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1 },
          className: `card group hover:shadow-xl transition-all duration-300 cursor-pointer ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"} ${viewMode === "list" ? "flex items-center gap-6" : ""}`,
          onClick: () => openProjectModal(project),
          children: viewMode === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 ${getTypeColor(project.type)} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg leading-tight transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: project.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: project.client })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`, children: getStatusLabel(project.status) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${getPriorityColor(project.priority)}`, children: project.priority === "high" ? "Alta" : project.priority === "medium" ? "Média" : "Baixa" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: `w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`, children: project.location })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: `w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`, children: [
                  formatDate(project.startDate),
                  " - ",
                  formatDate(project.endDate)
                ] }),
                isOverdue(project.endDate, project.status) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full", children: "Atrasado" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: `w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`, children: formatCurrency(project.budget) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Progresso" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  project.progress,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full rounded-full h-2 ${isDark ? "bg-gray-600" : "bg-gray-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-blue-500 h-2 rounded-full transition-all duration-300",
                  style: { width: `${project.progress}%` }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tags.map((tag, tagIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-800"}`, children: tag }, tagIndex)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex -space-x-2", children: [
                project.team.slice(0, 3).map((member, memberIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-white text-xs font-medium border-2 ${isDark ? "border-gray-700" : "border-white"}`,
                    title: `${member.name} - ${member.role}`,
                    children: member.avatar
                  },
                  memberIndex
                )),
                project.team.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border-2 ${isDark ? "bg-gray-600 text-gray-300 border-gray-700" : "bg-gray-200 text-gray-600 border-white"}`, children: [
                  "+",
                  project.team.length - 3
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-gray-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: project.documents })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-4 h-4 text-gray-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400", children: [
                    project.tasks.completed,
                    "/",
                    project.tasks.total
                  ] })
                ] })
              ] })
            ] })
          ] }) : (
            // List View
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 ${getTypeColor(project.type)} rounded-xl flex items-center justify-center shadow-lg`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: project.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    project.client,
                    " • ",
                    project.location
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Progresso" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: [
                    project.progress,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Orçamento" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: formatCurrency(project.budget) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Entrega" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: formatDate(project.endDate) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-3 py-1 rounded-full ${getStatusColor(project.status)}`, children: getStatusLabel(project.status) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-3 py-1 rounded-full ${getPriorityColor(project.priority)}`, children: project.priority === "high" ? "Alta" : project.priority === "medium" ? "Média" : "Baixa" })
                ] })
              ] })
            ] })
          )
        },
        project.id
      );
    }) }),
    filteredProjects.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center py-12 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-16 h-16 mx-auto mb-4 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium mb-2", children: "Nenhum projeto encontrado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tente ajustar os filtros ou criar um novo projeto." })
    ] })
  ] });
};

export { Projects as default };
