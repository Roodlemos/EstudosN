import { r as reactExports, u as useTheme, j as jsxRuntimeExports, m as motion, a as useStudyRequests, B as BarChart3, M as Mail, b as MapPin, C as Clock } from './index-cbf67d0a.js';
import { A as Activity } from './activity-d4f55b48.js';
import { T as TrendingUp } from './trending-up-18267d52.js';
import { F as Filter } from './filter-58480b03.js';
import { P as Plus } from './plus-e0e0b30e.js';

class CacheManager {
  cache = /* @__PURE__ */ new Map();
  defaultTTL = 5 * 60 * 1e3;
  // 5 minutes default
  /**
   * Set data in cache with optional TTL
   */
  set(key, data, ttl) {
    const timestamp = Date.now();
    const timeToLive = ttl || this.defaultTTL;
    this.cache.set(key, {
      data,
      timestamp,
      ttl: timeToLive
    });
  }
  /**
   * Get data from cache if not expired
   */
  get(key) {
    const cached = this.cache.get(key);
    if (!cached) {
      return null;
    }
    const now = Date.now();
    const isExpired = now - cached.timestamp > cached.ttl;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }
    return cached.data;
  }
  /**
   * Check if key exists and is not expired
   */
  has(key) {
    return this.get(key) !== null;
  }
  /**
   * Remove specific key from cache
   */
  delete(key) {
    return this.cache.delete(key);
  }
  /**
   * Clear all cache
   */
  clear() {
    this.cache.clear();
  }
  /**
   * Clean expired entries
   */
  cleanup() {
    const now = Date.now();
    for (const [key, value] of this.cache.entries()) {
      const isExpired = now - value.timestamp > value.ttl;
      if (isExpired) {
        this.cache.delete(key);
      }
    }
  }
  /**
   * Get cache statistics
   */
  getStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}
const cache = new CacheManager();
setInterval(() => {
  cache.cleanup();
}, 10 * 60 * 1e3);
const CACHE_KEYS = {
  DASHBOARD_STATS: "dashboard_stats",
  RECENT_PROJECTS: "recent_projects",
  USER_PROFILE: "user_profile",
  NOTIFICATIONS: "notifications",
  STUDY_REQUESTS: "study_requests",
  CLIENTS: "clients",
  FINANCIAL_DATA: "financial_data",
  REPORTS: "reports",
  CALENDAR_EVENTS: "calendar_events"
};

const Preloader = reactExports.memo(({
  message = "Carregando...",
  size = "md",
  showMessage = true
}) => {
  const { isDark } = useTheme();
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };
  const containerSizeClasses = {
    sm: "gap-2",
    md: "gap-3",
    lg: "gap-4"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col items-center justify-center ${containerSizeClasses[size]}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: `${sizeClasses[size]} border-2 border-transparent rounded-full`,
        style: {
          borderTopColor: isDark ? "#3B82F6" : "#2563EB",
          borderRightColor: isDark ? "#1D4ED8" : "#1E40AF"
        },
        animate: { rotate: 360 },
        transition: {
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: [0, 1, 2].map((index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: `w-1.5 h-1.5 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-600"}`,
        animate: {
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        },
        transition: {
          duration: 0.8,
          repeat: Infinity,
          delay: index * 0.2,
          ease: "easeInOut"
        }
      },
      index
    )) }),
    showMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`,
        children: message
      }
    )
  ] });
});
Preloader.displayName = "Preloader";

const Overview = reactExports.memo(() => {
  const { isDark } = useTheme();
  const { requests } = useStudyRequests();
  const [isLoading, setIsLoading] = reactExports.useState(false);
  reactExports.useState(null);
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value);
  };
  const stats = reactExports.useMemo(() => {
    const cachedStats = cache.get(CACHE_KEYS.DASHBOARD_STATS);
    if (cachedStats)
      return cachedStats;
    const calculatedStats = [
      {
        id: 1,
        title: "Estudos em Análise",
        value: requests?.filter((r) => r.status === "reviewed")?.length?.toString() || "0",
        change: "+8%",
        icon: BarChart3,
        color: "from-blue-500 to-blue-600",
        trend: "up"
      },
      {
        id: 2,
        title: "Solicitações Pendentes",
        value: requests?.filter((r) => r.status === "pending")?.length?.toString() || "0",
        change: "+12%",
        icon: Mail,
        color: "from-orange-500 to-orange-600",
        trend: "up"
      },
      {
        id: 3,
        title: "Estudos Aprovados",
        value: requests?.filter((r) => r.status === "approved")?.length?.toString() || "0",
        change: "+5%",
        icon: Activity,
        color: "from-green-500 to-green-600",
        trend: "up"
      },
      {
        id: 4,
        title: "Receita Mensal",
        value: formatCurrency(125e3),
        change: "+15%",
        icon: TrendingUp,
        color: "from-purple-500 to-purple-600",
        trend: "up"
      }
    ];
    cache.set(CACHE_KEYS.DASHBOARD_STATS, calculatedStats, 2 * 60 * 1e3);
    return calculatedStats;
  }, [requests]);
  const recentProjects = reactExports.useMemo(() => {
    const cachedProjects = cache.get(CACHE_KEYS.RECENT_PROJECTS);
    if (cachedProjects)
      return cachedProjects;
    const mockProjects = [
      {
        id: 1,
        name: "Estudo de Acesso - Usina Solar Horizonte",
        client: "Energia Renovável Ltda.",
        status: "Em Andamento",
        progress: 75,
        deadline: "2024-12-30",
        priority: "Alta",
        location: "São Paulo, SP"
      },
      {
        id: 2,
        name: "Análise de Fluxo de Potência - Indústria XYZ",
        client: "Indústria XYZ S.A.",
        status: "Revisão",
        progress: 90,
        deadline: "2024-12-25",
        priority: "Média",
        location: "Rio de Janeiro, RJ"
      },
      {
        id: 3,
        name: "Estudo de Curto-Circuito - Shopping Center",
        client: "Shopping Center ABC",
        status: "Concluído",
        progress: 100,
        deadline: "2024-12-20",
        priority: "Baixa",
        location: "Belo Horizonte, MG"
      }
    ];
    cache.set(CACHE_KEYS.RECENT_PROJECTS, mockProjects, 5 * 60 * 1e3);
    return mockProjects;
  }, []);
  const getStatusColor = reactExports.useMemo(() => (status) => {
    switch (status) {
      case "Concluído":
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Em Andamento":
      case "in_progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Revisão":
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  }, []);
  const getPriorityColor = reactExports.useMemo(() => (priority) => {
    switch (priority) {
      case "Alta":
      case "high":
        return "text-red-600 dark:text-red-400";
      case "Média":
      case "medium":
        return "text-yellow-600 dark:text-yellow-400";
      case "Baixa":
      case "low":
        return "text-green-600 dark:text-green-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  }, []);
  reactExports.useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsLoading(false);
    };
    loadData();
  }, []);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Preloader, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
        children: stats.map((stat, index) => {
          const Icon = stat.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              className: `card group hover:shadow-xl transition-all duration-300 ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-white" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: stat.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stat.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-600 font-medium", children: [
                    stat.change,
                    " este mês"
                  ] })
                ] })
              ]
            },
            index
          );
        })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.4 },
        className: "card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Estudos Recentes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Acompanhe o progresso dos seus projetos" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className: "btn-outline flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "w-4 h-4" }),
                    "Filtrar"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.button,
                {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className: "btn-primary flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
                    "Novo Estudo"
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden rounded-xl border transition-colors duration-300 ${isDark ? "border-gray-700" : "border-gray-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: `transition-colors duration-300 ${isDark ? "bg-gray-800" : "bg-gray-50"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: `px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Projeto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: `px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Cliente" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: `px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: `px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Progresso" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: `px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Prazo" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: `divide-y transition-colors duration-300 ${isDark ? "bg-gray-800 divide-gray-700" : "bg-white divide-gray-100"}`, children: recentProjects.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.tr,
              {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.1 * index },
                className: `transition-colors cursor-pointer ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: project.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1 text-xs transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-500"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
                      project.location
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-sm font-medium transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: project.client }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${getStatusColor(project.status)}`, children: project.status }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex-1 rounded-full h-2 transition-colors duration-300 ${isDark ? "bg-gray-700" : "bg-gray-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "bg-blue-500 h-2 rounded-full transition-all duration-300",
                        style: { width: `${project.progress}%` }
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm font-medium min-w-[3rem] transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: [
                      project.progress,
                      "%"
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1 text-sm transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                      new Date(project.deadline).toLocaleDateString("pt-BR")
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-xs font-medium ${getPriorityColor(project.priority)}`, children: [
                      project.priority,
                      " prioridade"
                    ] })
                  ] })
                ]
              },
              project.id
            )) })
          ] }) })
        ]
      }
    )
  ] });
});
Overview.displayName = "Overview";

export { Overview as default };
