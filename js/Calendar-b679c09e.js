import { d as createLucideIcon$1, u as useTheme, r as reactExports, j as jsxRuntimeExports, S as Search, m as motion, f as Calendar$1, c as CheckCircle, U as Users, A as AlertCircle, o as Bell, C as Clock, b as MapPin, F as FileText } from './index-cbf67d0a.js';
import { F as Filter } from './filter-58480b03.js';
import { P as Plus } from './plus-e0e0b30e.js';
import { P as PenSquare } from './pen-square-90daf80f.js';
import { B as Building } from './building-7632479e.js';
import { U as User } from './user-40149387.js';
import { B as Briefcase } from './briefcase-69d4b94e.js';

/**
 * lucide-react v0.0.1 - ISC
 */


const ChevronLeft = createLucideIcon$1("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const ChevronRight = createLucideIcon$1("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Repeat = createLucideIcon$1("Repeat", [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Video = createLucideIcon$1("Video", [
  ["path", { d: "m22 8-6 4 6 4V8Z", key: "50v9me" }],
  [
    "rect",
    {
      width: "14",
      height: "12",
      x: "2",
      y: "6",
      rx: "2",
      ry: "2",
      key: "1rqjg6"
    }
  ]
]);

const Calendar = () => {
  const { isDark } = useTheme();
  const [events, setEvents] = reactExports.useState([
    {
      id: 1,
      title: "Reunião com Cliente - EcoEnergy Brasil",
      description: "Apresentação do projeto de usina solar fotovoltaica",
      type: "client",
      priority: "high",
      status: "confirmed",
      startDate: "2024-12-16T09:00:00",
      endDate: "2024-12-16T10:30:00",
      allDay: false,
      location: "Sala de Reuniões 1",
      isOnline: false,
      attendees: ["joao.silva@empresa.com", "maria.santos@ecoenergy.com", "pedro.oliveira@ecoenergy.com"],
      organizer: "joao.silva@empresa.com",
      reminders: [15, 60],
      recurring: false,
      tags: ["Cliente", "Projeto", "Solar"],
      notes: "Levar apresentação atualizada e propostas de cronograma"
    },
    {
      id: 2,
      title: "Deadline - Relatório Técnico Shopping Center",
      description: "Entrega do relatório técnico do projeto elétrico",
      type: "deadline",
      priority: "critical",
      status: "scheduled",
      startDate: "2024-12-17T17:00:00",
      endDate: "2024-12-17T17:00:00",
      allDay: false,
      isOnline: false,
      attendees: ["carlos.engenheiro@empresa.com", "ana.coordenadora@empresa.com"],
      organizer: "sistema@empresa.com",
      reminders: [60, 1440],
      // 1 hour and 1 day before
      recurring: false,
      tags: ["Deadline", "Relatório", "Shopping"],
      notes: "Revisar todos os cálculos antes da entrega"
    },
    {
      id: 3,
      title: "Treinamento - Novas Normas ABNT",
      description: "Capacitação sobre as novas normas técnicas da ABNT",
      type: "training",
      priority: "medium",
      status: "confirmed",
      startDate: "2024-12-18T14:00:00",
      endDate: "2024-12-18T17:00:00",
      allDay: false,
      location: "Auditório Principal",
      isOnline: true,
      meetingLink: "https://meet.google.com/abc-defg-hij",
      attendees: ["equipe.tecnica@empresa.com"],
      organizer: "rh@empresa.com",
      reminders: [30],
      recurring: false,
      tags: ["Treinamento", "ABNT", "Normas"],
      notes: "Material será disponibilizado após o treinamento"
    },
    {
      id: 4,
      title: "Reunião Semanal de Projetos",
      description: "Acompanhamento do status de todos os projetos ativos",
      type: "meeting",
      priority: "medium",
      status: "confirmed",
      startDate: "2024-12-19T10:00:00",
      endDate: "2024-12-19T11:00:00",
      allDay: false,
      location: "Sala de Reuniões 2",
      isOnline: false,
      attendees: ["gerencia@empresa.com", "coordenadores@empresa.com"],
      organizer: "gerencia@empresa.com",
      reminders: [15],
      recurring: true,
      recurringPattern: "weekly",
      tags: ["Reunião", "Projetos", "Semanal"],
      notes: "Preparar relatório de status de cada projeto"
    },
    {
      id: 5,
      title: "Visita Técnica - Metalúrgica São Paulo",
      description: "Inspeção do sistema elétrico para modernização",
      type: "project",
      priority: "high",
      status: "scheduled",
      startDate: "2024-12-20T08:00:00",
      endDate: "2024-12-20T16:00:00",
      allDay: false,
      location: "Metalúrgica São Paulo - Rua Industrial, 123",
      isOnline: false,
      attendees: ["engenheiro.senior@empresa.com", "tecnico.especialista@empresa.com"],
      organizer: "projetos@empresa.com",
      reminders: [60, 1440],
      recurring: false,
      tags: ["Visita", "Técnica", "Industrial"],
      notes: "Levar equipamentos de medição e EPIs"
    },
    {
      id: 6,
      title: "Apresentação de Resultados - Diretoria",
      description: "Apresentação dos resultados financeiros do trimestre",
      type: "meeting",
      priority: "critical",
      status: "confirmed",
      startDate: "2024-12-21T15:00:00",
      endDate: "2024-12-21T16:30:00",
      allDay: false,
      location: "Sala da Diretoria",
      isOnline: false,
      attendees: ["diretoria@empresa.com", "financeiro@empresa.com", "comercial@empresa.com"],
      organizer: "ceo@empresa.com",
      reminders: [30, 120],
      recurring: false,
      tags: ["Diretoria", "Resultados", "Financeiro"],
      notes: "Preparar slides com gráficos e projeções para 2025"
    },
    {
      id: 7,
      title: "Manutenção Preventiva - Sistemas",
      description: "Manutenção preventiva dos sistemas de TI",
      type: "personal",
      priority: "low",
      status: "scheduled",
      startDate: "2024-12-22T02:00:00",
      endDate: "2024-12-22T06:00:00",
      allDay: false,
      isOnline: false,
      attendees: ["ti@empresa.com"],
      organizer: "ti@empresa.com",
      reminders: [1440],
      // 1 day before
      recurring: true,
      recurringPattern: "monthly",
      tags: ["Manutenção", "TI", "Sistemas"],
      notes: "Sistemas ficarão indisponíveis durante a manutenção"
    }
  ]);
  const [currentDate, setCurrentDate] = reactExports.useState(/* @__PURE__ */ new Date());
  const [viewMode, setViewMode] = reactExports.useState("month");
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [typeFilter, setTypeFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [priorityFilter, setPriorityFilter] = reactExports.useState("all");
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const [selectedEvent, setSelectedEvent] = reactExports.useState(null);
  const [showEventModal, setShowEventModal] = reactExports.useState(false);
  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return isDark ? "bg-green-900/80 text-green-200" : "bg-green-100 text-green-800";
      case "scheduled":
        return isDark ? "bg-blue-900/80 text-blue-200" : "bg-blue-100 text-blue-800";
      case "cancelled":
        return isDark ? "bg-red-900/80 text-red-200" : "bg-red-100 text-red-800";
      case "completed":
        return isDark ? "bg-gray-700/80 text-gray-200" : "bg-gray-100 text-gray-800";
      default:
        return isDark ? "bg-gray-700/80 text-gray-200" : "bg-gray-100 text-gray-800";
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case "confirmed":
        return "Confirmado";
      case "scheduled":
        return "Agendado";
      case "cancelled":
        return "Cancelado";
      case "completed":
        return "Concluído";
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
  const getTypeColor = (type) => {
    switch (type) {
      case "meeting":
        return "from-blue-500 to-blue-600";
      case "project":
        return "from-green-500 to-green-600";
      case "deadline":
        return "from-red-500 to-red-600";
      case "personal":
        return "from-purple-500 to-purple-600";
      case "client":
        return "from-orange-500 to-orange-600";
      case "training":
        return "from-indigo-500 to-indigo-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };
  const getTypeIcon = (type) => {
    switch (type) {
      case "meeting":
        return Users;
      case "project":
        return Briefcase;
      case "deadline":
        return AlertCircle;
      case "personal":
        return User;
      case "client":
        return Building;
      case "training":
        return FileText;
      default:
        return Calendar$1;
    }
  };
  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };
  const getFilteredEvents = () => {
    let filtered = events;
    if (searchTerm) {
      filtered = filtered.filter(
        (event) => event.title.toLowerCase().includes(searchTerm.toLowerCase()) || event.description.toLowerCase().includes(searchTerm.toLowerCase()) || event.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (typeFilter !== "all") {
      filtered = filtered.filter((event) => event.type === typeFilter);
    }
    if (statusFilter !== "all") {
      filtered = filtered.filter((event) => event.status === statusFilter);
    }
    if (priorityFilter !== "all") {
      filtered = filtered.filter((event) => event.priority === priorityFilter);
    }
    return filtered.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  };
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };
  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setDate(newDate.getDate() - 7);
    } else {
      newDate.setDate(newDate.getDate() + 7);
    }
    setCurrentDate(newDate);
  };
  const navigateDay = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setDate(newDate.getDate() - 1);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }
    setCurrentDate(newDate);
  };
  const goToToday = () => {
    setCurrentDate(/* @__PURE__ */ new Date());
  };
  const filteredEvents = getFilteredEvents();
  const stats = {
    totalEvents: events.length,
    confirmedEvents: events.filter((e) => e.status === "confirmed").length,
    scheduledEvents: events.filter((e) => e.status === "scheduled").length,
    upcomingEvents: events.filter((e) => new Date(e.startDate) > /* @__PURE__ */ new Date()).length,
    todayEvents: events.filter((e) => {
      const eventDate = new Date(e.startDate).toDateString();
      const today = (/* @__PURE__ */ new Date()).toDateString();
      return eventDate === today;
    }).length,
    recurringEvents: events.filter((e) => e.recurring).length,
    onlineEvents: events.filter((e) => e.isOnline).length,
    criticalEvents: events.filter((e) => e.priority === "critical").length
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-2xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Calendário" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gerencie seus eventos e compromissos" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: `w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Buscar eventos...",
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
              onClick: () => setViewMode("month"),
              className: `px-3 py-2 rounded text-sm transition-colors duration-300 ${viewMode === "month" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: "Mês"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => setViewMode("week"),
              className: `px-3 py-2 rounded text-sm transition-colors duration-300 ${viewMode === "week" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: "Semana"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => setViewMode("day"),
              className: `px-3 py-2 rounded text-sm transition-colors duration-300 ${viewMode === "day" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: "Dia"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => setViewMode("agenda"),
              className: `px-3 py-2 rounded text-sm transition-colors duration-300 ${viewMode === "agenda" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: "Agenda"
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
              "Novo Evento"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: "w-5 h-5 text-blue-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Eventos Hoje" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.todayEvents }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-blue-600 font-medium", children: [
                "Próximos: ",
                stats.upcomingEvents
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
          transition: { delay: 0.1 },
          className: `card group hover:shadow-xl transition-all duration-300 ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Eventos Confirmados" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.confirmedEvents }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-green-600 font-medium", children: [
                (stats.confirmedEvents / stats.totalEvents * 100).toFixed(1),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat, { className: "w-5 h-5 text-purple-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Eventos Online" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.onlineEvents }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-purple-600 font-medium", children: [
                "Recorrentes: ",
                stats.recurringEvents
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AlertCircle, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-5 h-5 text-red-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Eventos Críticos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.criticalEvents }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-600 font-medium", children: "Requer atenção especial" })
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
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "meeting", children: "Reunião" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "project", children: "Projeto" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "deadline", children: "Prazo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "personal", children: "Pessoal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "client", children: "Cliente" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "training", children: "Treinamento" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", children: "Confirmado" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "scheduled", children: "Agendado" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "Cancelado" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Concluído" })
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              onClick: goToToday,
              className: "w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: "w-4 h-4 inline mr-2" }),
                "Ir para Hoje"
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          onClick: () => {
            if (viewMode === "month")
              navigateMonth("prev");
            else if (viewMode === "week")
              navigateWeek("prev");
            else if (viewMode === "day")
              navigateDay("prev");
          },
          className: `p-2 rounded-lg transition-colors duration-300 ${isDark ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: `text-xl font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: [
        viewMode === "month" && currentDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" }),
        viewMode === "week" && `Semana de ${currentDate.toLocaleDateString("pt-BR")}`,
        viewMode === "day" && currentDate.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
        viewMode === "agenda" && "Agenda de Eventos"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          onClick: () => {
            if (viewMode === "month")
              navigateMonth("next");
            else if (viewMode === "week")
              navigateWeek("next");
            else if (viewMode === "day")
              navigateDay("next");
          },
          className: `p-2 rounded-lg transition-colors duration-300 ${isDark ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" })
        }
      )
    ] }) }),
    viewMode === "agenda" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredEvents.map((event, index) => {
      const TypeIcon = getTypeIcon(event.type);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          className: `card hover:shadow-lg transition-all duration-300 cursor-pointer ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
          onClick: () => {
            setSelectedEvent(event);
            setShowEventModal(true);
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-r ${getTypeColor(event.type)}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypeIcon, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: event.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`, children: getStatusLabel(event.status) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${getPriorityColor(event.priority)}`, children: getPriorityLabel(event.priority) }),
                  event.recurring && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-purple-900/50 text-purple-300" : "bg-purple-100 text-purple-800"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Repeat, { className: "w-3 h-3 inline mr-1" }),
                    "Recorrente"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm mb-2 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: event.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                    event.allDay ? "Dia todo" : `${formatTime(event.startDate)} - ${formatTime(event.endDate)}`
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: "w-4 h-4" }),
                    formatDate(event.startDate)
                  ] }),
                  event.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4" }),
                    event.location
                  ] }),
                  event.isOnline && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 transition-colors duration-300 ${isDark ? "text-blue-400" : "text-blue-600"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { className: "w-4 h-4" }),
                    "Online"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center gap-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4" }),
                    event.attendees.length,
                    " participantes"
                  ] })
                ] }),
                event.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 mt-2", children: [
                  event.tags.slice(0, 3).map((tag, tagIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`, children: tag }, tagIndex)),
                  event.tags.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`, children: [
                    "+",
                    event.tags.length - 3
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              event.reminders.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: `w-5 h-5 ${isDark ? "text-yellow-400" : "text-yellow-600"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.button,
                {
                  whileHover: { scale: 1.05 },
                  whileTap: { scale: 0.95 },
                  className: `p-2 rounded-lg transition-colors duration-300 ${isDark ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                  onClick: (e) => {
                    e.stopPropagation();
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenSquare, { className: "w-4 h-4" })
                }
              )
            ] })
          ] })
        },
        event.id
      );
    }) }),
    viewMode !== "agenda" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `card h-96 flex items-center justify-center ${isDark ? "bg-gray-800" : "bg-white"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: `w-16 h-16 mx-auto mb-4 opacity-50 ${isDark ? "text-gray-400" : "text-gray-600"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: `text-lg font-medium mb-2 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: [
        "Visualização de ",
        viewMode === "month" ? "Mês" : viewMode === "week" ? "Semana" : "Dia"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Esta visualização será implementada em breve." })
    ] }) }),
    viewMode === "agenda" && filteredEvents.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center py-12 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar$1, { className: "w-16 h-16 mx-auto mb-4 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium mb-2", children: "Nenhum evento encontrado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tente ajustar os filtros ou criar um novo evento." })
    ] })
  ] });
};

export { Calendar as default };
