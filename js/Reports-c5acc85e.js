import { d as createLucideIcon$1, u as useTheme, r as reactExports, j as jsxRuntimeExports, S as Search, m as motion, F as FileText, c as CheckCircle, E as Eye, n as Settings, U as Users, D as DollarSign } from './index-cbf67d0a.js';
import { F as Filter } from './filter-58480b03.js';
import { T as TrendingUp } from './trending-up-18267d52.js';
import { A as Activity } from './activity-d4f55b48.js';
import { S as Star } from './star-62ab9bdd.js';
import { B as Briefcase } from './briefcase-69d4b94e.js';

/**
 * lucide-react v0.0.1 - ISC
 */


const Download = createLucideIcon$1("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const RefreshCw = createLucideIcon$1("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Share2 = createLucideIcon$1("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  [
    "line",
    { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }
  ],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
]);

const Reports = () => {
  const { isDark } = useTheme();
  const [reports, setReports] = reactExports.useState([
    {
      id: 1,
      title: "Relatório Financeiro Mensal",
      description: "Análise completa das receitas, despesas e lucros do mês",
      type: "financial",
      category: "Financeiro",
      status: "generated",
      lastGenerated: "2024-12-15T10:30:00",
      nextScheduled: "2025-01-15T10:30:00",
      frequency: "monthly",
      format: "pdf",
      size: "2.4 MB",
      recipients: ["financeiro@empresa.com", "diretoria@empresa.com"],
      tags: ["Financeiro", "Mensal", "Receitas", "Despesas"],
      priority: "high",
      automated: true,
      views: 45,
      downloads: 12
    },
    {
      id: 2,
      title: "Performance de Projetos",
      description: "Acompanhamento do progresso e performance dos projetos ativos",
      type: "projects",
      category: "Projetos",
      status: "generated",
      lastGenerated: "2024-12-14T16:45:00",
      nextScheduled: "2024-12-21T16:45:00",
      frequency: "weekly",
      format: "excel",
      size: "1.8 MB",
      recipients: ["projetos@empresa.com", "gerencia@empresa.com"],
      tags: ["Projetos", "Performance", "Semanal"],
      priority: "medium",
      automated: true,
      views: 32,
      downloads: 8
    },
    {
      id: 3,
      title: "Análise de Clientes",
      description: "Relatório detalhado sobre satisfação e engajamento dos clientes",
      type: "clients",
      category: "Clientes",
      status: "generating",
      lastGenerated: "2024-12-10T09:15:00",
      frequency: "monthly",
      format: "pdf",
      recipients: ["comercial@empresa.com", "atendimento@empresa.com"],
      tags: ["Clientes", "Satisfação", "Engajamento"],
      priority: "medium",
      automated: true,
      views: 28,
      downloads: 6
    },
    {
      id: 4,
      title: "Dashboard Executivo",
      description: "Visão geral dos KPIs e métricas principais da empresa",
      type: "performance",
      category: "Executivo",
      status: "generated",
      lastGenerated: "2024-12-15T08:00:00",
      nextScheduled: "2024-12-16T08:00:00",
      frequency: "daily",
      format: "pdf",
      size: "3.2 MB",
      recipients: ["ceo@empresa.com", "diretoria@empresa.com"],
      tags: ["Executivo", "KPIs", "Diário"],
      priority: "critical",
      automated: true,
      views: 67,
      downloads: 23
    },
    {
      id: 5,
      title: "Relatório Operacional",
      description: "Análise das operações diárias e eficiência dos processos",
      type: "operational",
      category: "Operacional",
      status: "scheduled",
      lastGenerated: "2024-12-12T14:20:00",
      nextScheduled: "2024-12-19T14:20:00",
      frequency: "weekly",
      format: "excel",
      size: "2.1 MB",
      recipients: ["operacoes@empresa.com", "supervisao@empresa.com"],
      tags: ["Operacional", "Processos", "Eficiência"],
      priority: "medium",
      automated: true,
      views: 19,
      downloads: 4
    },
    {
      id: 6,
      title: "Análise de Custos por Projeto",
      description: "Detalhamento dos custos e margens de cada projeto",
      type: "financial",
      category: "Custos",
      status: "failed",
      lastGenerated: "2024-12-13T11:30:00",
      frequency: "on_demand",
      format: "csv",
      recipients: ["financeiro@empresa.com", "projetos@empresa.com"],
      tags: ["Custos", "Projetos", "Margens"],
      priority: "high",
      automated: false,
      views: 15,
      downloads: 3
    }
  ]);
  const [templates, setTemplates] = reactExports.useState([
    {
      id: 1,
      name: "Relatório Financeiro Básico",
      description: "Template padrão para relatórios financeiros",
      type: "financial",
      fields: ["Receitas", "Despesas", "Lucro Líquido", "Fluxo de Caixa"],
      customizable: true,
      popular: true
    },
    {
      id: 2,
      name: "Dashboard de Projetos",
      description: "Visão geral do status e progresso dos projetos",
      type: "projects",
      fields: ["Status", "Progresso", "Orçamento", "Prazo", "Equipe"],
      customizable: true,
      popular: true
    },
    {
      id: 3,
      name: "Análise de Performance",
      description: "Métricas de performance e KPIs principais",
      type: "performance",
      fields: ["KPIs", "Metas", "Resultados", "Tendências"],
      customizable: true,
      popular: false
    },
    {
      id: 4,
      name: "Relatório de Clientes",
      description: "Informações detalhadas sobre clientes e relacionamento",
      type: "clients",
      fields: ["Satisfação", "Retenção", "Valor Lifetime", "Segmentação"],
      customizable: true,
      popular: true
    },
    {
      id: 5,
      name: "Relatório Operacional",
      description: "Análise das operações e processos internos",
      type: "operational",
      fields: ["Eficiência", "Produtividade", "Qualidade", "Recursos"],
      customizable: false,
      popular: false
    }
  ]);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [typeFilter, setTypeFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [priorityFilter, setPriorityFilter] = reactExports.useState("all");
  const [frequencyFilter, setFrequencyFilter] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("lastGenerated");
  const [sortOrder, setSortOrder] = reactExports.useState("desc");
  const [viewMode, setViewMode] = reactExports.useState("reports");
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const getFilteredReports = () => {
    let filtered = reports;
    if (searchTerm) {
      filtered = filtered.filter(
        (report) => report.title.toLowerCase().includes(searchTerm.toLowerCase()) || report.description.toLowerCase().includes(searchTerm.toLowerCase()) || report.category.toLowerCase().includes(searchTerm.toLowerCase()) || report.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (typeFilter !== "all") {
      filtered = filtered.filter((report) => report.type === typeFilter);
    }
    if (statusFilter !== "all") {
      filtered = filtered.filter((report) => report.status === statusFilter);
    }
    if (priorityFilter !== "all") {
      filtered = filtered.filter((report) => report.priority === priorityFilter);
    }
    if (frequencyFilter !== "all") {
      filtered = filtered.filter((report) => report.frequency === frequencyFilter);
    }
    filtered.sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case "lastGenerated":
          aValue = new Date(a.lastGenerated).getTime();
          bValue = new Date(b.lastGenerated).getTime();
          break;
        case "title":
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case "priority":
          const priorityOrder = { "critical": 4, "high": 3, "medium": 2, "low": 1 };
          aValue = priorityOrder[a.priority];
          bValue = priorityOrder[b.priority];
          break;
        case "views":
          aValue = a.views;
          bValue = b.views;
          break;
        case "downloads":
          aValue = a.downloads;
          bValue = b.downloads;
          break;
        default:
          aValue = new Date(a.lastGenerated).getTime();
          bValue = new Date(b.lastGenerated).getTime();
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
      case "generated":
        return isDark ? "bg-green-900/80 text-green-200" : "bg-green-100 text-green-800";
      case "generating":
        return isDark ? "bg-blue-900/80 text-blue-200" : "bg-blue-100 text-blue-800";
      case "scheduled":
        return isDark ? "bg-yellow-900/80 text-yellow-200" : "bg-yellow-100 text-yellow-800";
      case "failed":
        return isDark ? "bg-red-900/80 text-red-200" : "bg-red-100 text-red-800";
      default:
        return isDark ? "bg-gray-700/80 text-gray-200" : "bg-gray-100 text-gray-800";
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case "generated":
        return "Gerado";
      case "generating":
        return "Gerando";
      case "scheduled":
        return "Agendado";
      case "failed":
        return "Falhou";
      default:
        return "Desconhecido";
    }
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return isDark ? "bg-red-900/80 text-red-200" : "bg-red-100 text-red-800";
      case "high":
        return isDark ? "bg-orange-900/80 text-orange-200" : "bg-orange-100 text-orange-800";
      case "medium":
        return isDark ? "bg-yellow-900/80 text-yellow-200" : "bg-yellow-100 text-yellow-800";
      case "low":
        return isDark ? "bg-green-900/80 text-green-200" : "bg-green-100 text-green-800";
      default:
        return isDark ? "bg-gray-700/80 text-gray-200" : "bg-gray-100 text-gray-800";
    }
  };
  const getPriorityLabel = (priority) => {
    switch (priority) {
      case "critical":
        return "Crítica";
      case "high":
        return "Alta";
      case "medium":
        return "Média";
      case "low":
        return "Baixa";
      default:
        return "Desconhecida";
    }
  };
  const getFrequencyLabel = (frequency) => {
    switch (frequency) {
      case "daily":
        return "Diário";
      case "weekly":
        return "Semanal";
      case "monthly":
        return "Mensal";
      case "quarterly":
        return "Trimestral";
      case "yearly":
        return "Anual";
      case "on_demand":
        return "Sob Demanda";
      default:
        return "Desconhecido";
    }
  };
  const getTypeIcon = (type) => {
    switch (type) {
      case "financial":
        return DollarSign;
      case "projects":
        return Briefcase;
      case "clients":
        return Users;
      case "performance":
        return TrendingUp;
      case "operational":
        return Settings;
      default:
        return FileText;
    }
  };
  const getTypeColor = (type) => {
    switch (type) {
      case "financial":
        return "from-green-500 to-green-600";
      case "projects":
        return "from-blue-500 to-blue-600";
      case "clients":
        return "from-purple-500 to-purple-600";
      case "performance":
        return "from-orange-500 to-orange-600";
      case "operational":
        return "from-gray-500 to-gray-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };
  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString("pt-BR");
  };
  const filteredReports = getFilteredReports();
  const stats = {
    totalReports: reports.length,
    generatedReports: reports.filter((r) => r.status === "generated").length,
    scheduledReports: reports.filter((r) => r.status === "scheduled").length,
    failedReports: reports.filter((r) => r.status === "failed").length,
    automatedReports: reports.filter((r) => r.automated).length,
    totalViews: reports.reduce((sum, r) => sum + r.views, 0),
    totalDownloads: reports.reduce((sum, r) => sum + r.downloads, 0),
    avgViews: Math.round(reports.reduce((sum, r) => sum + r.views, 0) / reports.length)
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-2xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Relatórios" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gerencie e analise todos os seus relatórios" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: `w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Buscar relatórios...",
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
              onClick: () => setViewMode("reports"),
              className: `px-3 py-2 rounded text-sm transition-colors duration-300 ${viewMode === "reports" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: "Relatórios"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => setViewMode("templates"),
              className: `px-3 py-2 rounded text-sm transition-colors duration-300 ${viewMode === "templates" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: "Templates"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => setViewMode("analytics"),
              className: `px-3 py-2 rounded text-sm transition-colors duration-300 ${viewMode === "analytics" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: "Análises"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4" }),
              "Novo Relatório"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Total de Relatórios" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.totalReports }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 font-medium", children: "+3 este mês" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-5 h-5 text-blue-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Relatórios Gerados" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.generatedReports }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-600 font-medium", children: [
                (stats.generatedReports / stats.totalReports * 100).toFixed(1),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Total de Visualizações" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.totalViews }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-600 font-medium", children: [
                "Média: ",
                stats.avgViews,
                " por relatório"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Total de Downloads" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.totalDownloads }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 font-medium", children: "+15% este mês" })
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
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4", children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "financial", children: "Financeiro" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "projects", children: "Projetos" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "clients", children: "Clientes" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "performance", children: "Performance" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "operational", children: "Operacional" })
                ]
              }
            )
          ] }),
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "generated", children: "Gerado" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "generating", children: "Gerando" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "scheduled", children: "Agendado" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "failed", children: "Falhou" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "critical", children: "Crítica" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "high", children: "Alta" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "medium", children: "Média" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "low", children: "Baixa" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Frequência" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: frequencyFilter,
                onChange: (e) => setFrequencyFilter(e.target.value),
                className: `w-full px-3 py-2 rounded border text-sm ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Todas" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "daily", children: "Diário" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "weekly", children: "Semanal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "monthly", children: "Mensal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "quarterly", children: "Trimestral" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "yearly", children: "Anual" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "on_demand", children: "Sob Demanda" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "lastGenerated", children: "Última Geração" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "title", children: "Título" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "priority", children: "Prioridade" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "views", children: "Visualizações" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "downloads", children: "Downloads" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "desc", children: "Decrescente" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "asc", children: "Crescente" })
                ]
              }
            )
          ] })
        ] })
      }
    ),
    viewMode === "reports" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredReports.map((report, index) => {
      const TypeIcon = getTypeIcon(report.type);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          className: `card hover:shadow-lg transition-all duration-300 ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-r ${getTypeColor(report.type)}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: report.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${getStatusColor(report.status)}`, children: getStatusLabel(report.status) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${getPriorityColor(report.priority)}`, children: getPriorityLabel(report.priority) }),
                  report.automated && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-800"}`, children: "Automático" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm mb-2 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: report.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: report.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    "• ",
                    getFrequencyLabel(report.frequency)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    "• ",
                    report.format.toUpperCase()
                  ] }),
                  report.size && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    "• ",
                    report.size
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    "• Última geração: ",
                    formatDateTime(report.lastGenerated)
                  ] })
                ] }),
                report.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 mt-2", children: [
                  report.tags.slice(0, 3).map((tag, tagIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`, children: tag }, tagIndex)),
                  report.tags.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`, children: [
                    "+",
                    report.tags.length - 3
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: report.views })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: report.downloads })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: `p-2 rounded-lg transition-colors duration-300 ${isDark ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: `p-2 rounded-lg transition-colors duration-300 ${isDark ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: `p-2 rounded-lg transition-colors duration-300 ${isDark ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "w-4 h-4" })
                  }
                ),
                report.status === "failed" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: "p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4" })
                  }
                )
              ] })
            ] })
          ] })
        },
        report.id
      );
    }) }),
    viewMode === "templates" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: templates.map((template, index) => {
      const TypeIcon = getTypeIcon(template.type);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1 },
          className: `card hover:shadow-lg transition-all duration-300 ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-r ${getTypeColor(template.type)}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { className: "w-6 h-6 text-white" }) }),
              template.popular && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-yellow-900/50 text-yellow-300" : "bg-yellow-100 text-yellow-800"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 inline mr-1" }),
                "Popular"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg mb-2 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: template.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm mb-4 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: template.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Campos Inclusos:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: template.fields.map((field, fieldIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-800"}`, children: field }, fieldIndex)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 text-sm", children: template.customizable ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-green-600 ${isDark ? "text-green-400" : "text-green-600"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { className: "w-4 h-4 inline mr-1" }),
                  "Customizável"
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Padrão" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.button,
                  {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm",
                    children: "Usar Template"
                  }
                )
              ] })
            ] })
          ]
        },
        template.id
      );
    }) }),
    viewMode === "analytics" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: `card ${isDark ? "bg-gray-800" : "bg-white"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg mb-4 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Relatórios por Tipo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-gray-500 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gráfico de distribuição por tipo seria exibido aqui" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.1 },
          className: `card ${isDark ? "bg-gray-800" : "bg-white"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg mb-4 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Visualizações vs Downloads" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-gray-500 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gráfico de visualizações vs downloads seria exibido aqui" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2 },
          className: `card lg:col-span-2 ${isDark ? "bg-gray-800" : "bg-white"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg mb-4 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Tendência de Geração de Relatórios" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-gray-500 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gráfico de linha da tendência seria exibido aqui" }) })
          ]
        }
      )
    ] }),
    viewMode === "reports" && filteredReports.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center py-12 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-16 h-16 mx-auto mb-4 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium mb-2", children: "Nenhum relatório encontrado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tente ajustar os filtros ou criar um novo relatório." })
    ] })
  ] });
};

export { Reports as default };
