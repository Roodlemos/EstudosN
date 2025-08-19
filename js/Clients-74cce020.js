import { u as useTheme, r as reactExports, j as jsxRuntimeExports, S as Search, m as motion, B as BarChart3, F as FileText, U as Users, c as CheckCircle, D as DollarSign, M as Mail, P as Phone, b as MapPin, G as Globe, f as Calendar, l as Award } from './index-cbf67d0a.js';
import { F as Filter } from './filter-58480b03.js';
import { P as Plus } from './plus-e0e0b30e.js';
import { T as TrendingUp } from './trending-up-18267d52.js';
import { S as Star } from './star-62ab9bdd.js';
import { A as Activity } from './activity-d4f55b48.js';
import { U as User } from './user-40149387.js';
import { B as Building } from './building-7632479e.js';

const Clients = () => {
  const { isDark } = useTheme();
  const [clients, setClients] = reactExports.useState([
    {
      id: 1,
      name: "Carlos Eduardo Silva",
      company: "EcoEnergy Brasil Ltda",
      email: "carlos@ecoenergy.com.br",
      phone: "(11) 99999-1234",
      address: "Av. Paulista, 1000",
      city: "São Paulo",
      state: "SP",
      type: "company",
      status: "active",
      priority: "high",
      registrationDate: "2023-01-15",
      lastContact: "2024-12-10",
      totalProjects: 8,
      activeProjects: 3,
      totalRevenue: 25e5,
      averageProjectValue: 312500,
      satisfactionScore: 4.8,
      tags: ["Energia Solar", "Grande Cliente", "Renovável"],
      notes: "Cliente estratégico com foco em energia renovável. Sempre pontual nos pagamentos.",
      website: "https://ecoenergy.com.br",
      industry: "Energia",
      companySize: "Grande"
    },
    {
      id: 2,
      name: "Maria Santos Oliveira",
      company: "Metalúrgica São Paulo S.A.",
      email: "maria.santos@metalurgica.com.br",
      phone: "(11) 98888-5678",
      address: "Rua Industrial, 500",
      city: "São Paulo",
      state: "SP",
      type: "company",
      status: "active",
      priority: "medium",
      registrationDate: "2023-03-20",
      lastContact: "2024-12-08",
      totalProjects: 5,
      activeProjects: 2,
      totalRevenue: 18e5,
      averageProjectValue: 36e4,
      satisfactionScore: 4.5,
      tags: ["Industrial", "Automação", "Metalúrgica"],
      notes: "Especializada em projetos industriais complexos. Boa parceria comercial.",
      website: "https://metalurgicasp.com.br",
      industry: "Metalúrgica",
      companySize: "Média"
    },
    {
      id: 3,
      name: "Roberto Lima Costa",
      company: "Shopping Metropolitano",
      email: "roberto@shoppingmetro.com.br",
      phone: "(21) 97777-9012",
      address: "Av. das Américas, 3000",
      city: "Rio de Janeiro",
      state: "RJ",
      type: "company",
      status: "active",
      priority: "low",
      registrationDate: "2023-06-10",
      lastContact: "2024-11-25",
      totalProjects: 3,
      activeProjects: 0,
      totalRevenue: 12e5,
      averageProjectValue: 4e5,
      satisfactionScore: 4.2,
      tags: ["Comercial", "Shopping", "Iluminação"],
      notes: "Cliente do setor comercial. Projetos focados em eficiência energética.",
      website: "https://shoppingmetro.com.br",
      industry: "Varejo",
      companySize: "Grande"
    },
    {
      id: 4,
      name: "Ana Paula Ferreira",
      company: "Construtora Horizonte",
      email: "ana@horizonteconstrutora.com.br",
      phone: "(31) 96666-3456",
      address: "Rua dos Construtores, 200",
      city: "Belo Horizonte",
      state: "MG",
      type: "company",
      status: "prospect",
      priority: "medium",
      registrationDate: "2024-02-15",
      lastContact: "2024-12-05",
      totalProjects: 1,
      activeProjects: 1,
      totalRevenue: 45e4,
      averageProjectValue: 45e4,
      satisfactionScore: 4,
      tags: ["Construção", "Residencial", "Novo Cliente"],
      notes: "Novo cliente em fase de prospecção. Potencial para projetos residenciais.",
      website: "https://horizonteconstrutora.com.br",
      industry: "Construção",
      companySize: "Média"
    },
    {
      id: 5,
      name: "João Pedro Santos",
      company: "Pessoa Física",
      email: "joao.santos@email.com",
      phone: "(11) 95555-7890",
      address: "Rua das Flores, 123",
      city: "São Paulo",
      state: "SP",
      type: "individual",
      status: "active",
      priority: "low",
      registrationDate: "2024-01-20",
      lastContact: "2024-11-30",
      totalProjects: 2,
      activeProjects: 0,
      totalRevenue: 85e3,
      averageProjectValue: 42500,
      satisfactionScore: 4.7,
      tags: ["Pessoa Física", "Residencial", "Solar"],
      notes: "Cliente pessoa física interessado em energia solar residencial.",
      industry: "Residencial",
      companySize: "Individual"
    },
    {
      id: 6,
      name: "Prefeitura Municipal",
      company: "Prefeitura de Santos",
      email: "projetos@santos.sp.gov.br",
      phone: "(13) 94444-1122",
      address: "Praça Mauá, 1",
      city: "Santos",
      state: "SP",
      type: "government",
      status: "active",
      priority: "high",
      registrationDate: "2023-08-01",
      lastContact: "2024-12-12",
      totalProjects: 4,
      activeProjects: 2,
      totalRevenue: 32e5,
      averageProjectValue: 8e5,
      satisfactionScore: 4.6,
      tags: ["Governo", "Público", "Iluminação Pública"],
      notes: "Cliente governamental com projetos de iluminação pública e eficiência energética.",
      website: "https://santos.sp.gov.br",
      industry: "Governo",
      companySize: "Grande"
    }
  ]);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [typeFilter, setTypeFilter] = reactExports.useState("all");
  const [priorityFilter, setPriorityFilter] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("name");
  const [sortOrder, setSortOrder] = reactExports.useState("asc");
  const [viewMode, setViewMode] = reactExports.useState("grid");
  const [selectedClient, setSelectedClient] = reactExports.useState(null);
  const [isClientModalOpen, setIsClientModalOpen] = reactExports.useState(false);
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const getFilteredClients = () => {
    let filtered = clients;
    if (searchTerm) {
      filtered = filtered.filter(
        (client) => client.name.toLowerCase().includes(searchTerm.toLowerCase()) || client.company.toLowerCase().includes(searchTerm.toLowerCase()) || client.email.toLowerCase().includes(searchTerm.toLowerCase()) || client.city.toLowerCase().includes(searchTerm.toLowerCase()) || client.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (statusFilter !== "all") {
      filtered = filtered.filter((client) => client.status === statusFilter);
    }
    if (typeFilter !== "all") {
      filtered = filtered.filter((client) => client.type === typeFilter);
    }
    if (priorityFilter !== "all") {
      filtered = filtered.filter((client) => client.priority === priorityFilter);
    }
    filtered.sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case "name":
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case "company":
          aValue = a.company.toLowerCase();
          bValue = b.company.toLowerCase();
          break;
        case "totalRevenue":
          aValue = a.totalRevenue;
          bValue = b.totalRevenue;
          break;
        case "satisfactionScore":
          aValue = a.satisfactionScore;
          bValue = b.satisfactionScore;
          break;
        case "registrationDate":
          aValue = new Date(a.registrationDate).getTime();
          bValue = new Date(b.registrationDate).getTime();
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
      case "active":
        return isDark ? "bg-green-900/80 text-green-200" : "bg-green-100 text-green-800";
      case "inactive":
        return isDark ? "bg-gray-900/80 text-gray-200" : "bg-gray-100 text-gray-800";
      case "prospect":
        return isDark ? "bg-blue-900/80 text-blue-200" : "bg-blue-100 text-blue-800";
      case "blocked":
        return isDark ? "bg-red-900/80 text-red-200" : "bg-red-100 text-red-800";
      default:
        return isDark ? "bg-gray-700/80 text-gray-200" : "bg-gray-100 text-gray-800";
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case "active":
        return "Ativo";
      case "inactive":
        return "Inativo";
      case "prospect":
        return "Prospecto";
      case "blocked":
        return "Bloqueado";
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
      case "individual":
        return User;
      case "company":
        return Building;
      case "government":
        return Award;
      default:
        return User;
    }
  };
  const getTypeColor = (type) => {
    switch (type) {
      case "individual":
        return "bg-blue-500";
      case "company":
        return "bg-purple-500";
      case "government":
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
  const getInitials = (name) => {
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  };
  const openClientModal = (client) => {
    setSelectedClient(client);
    setIsClientModalOpen(true);
  };
  const filteredClients = getFilteredClients();
  const stats = {
    total: clients.length,
    active: clients.filter((c) => c.status === "active").length,
    prospects: clients.filter((c) => c.status === "prospect").length,
    totalRevenue: clients.reduce((sum, c) => sum + c.totalRevenue, 0),
    averageSatisfaction: clients.reduce((sum, c) => sum + c.satisfactionScore, 0) / clients.length,
    activeProjects: clients.reduce((sum, c) => sum + c.activeProjects, 0)
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-2xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Clientes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gerencie seu relacionamento com clientes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: `w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Buscar clientes...",
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
              "Novo Cliente"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Total de Clientes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.total }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Clientes Ativos" }),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Receita Total" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: formatCurrency(stats.totalRevenue) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 font-medium", children: "+15% este ano" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Satisfação Média" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: stats.averageSatisfaction.toFixed(1) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 font-medium", children: "Excelente qualidade" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "active", children: "Ativo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "inactive", children: "Inativo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "prospect", children: "Prospecto" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "blocked", children: "Bloqueado" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "individual", children: "Pessoa Física" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "company", children: "Empresa" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "government", children: "Governo" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "company", children: "Empresa" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "totalRevenue", children: "Receita" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "satisfactionScore", children: "Satisfação" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "registrationDate", children: "Data de Cadastro" })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: viewMode === "grid" ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4", children: filteredClients.map((client, index) => {
      getTypeIcon(client.type);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1 },
          className: `card group hover:shadow-xl transition-all duration-300 cursor-pointer ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"} ${viewMode === "list" ? "flex items-center gap-6" : ""}`,
          onClick: () => openClientModal(client),
          children: viewMode === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 ${getTypeColor(client.type)} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`, children: client.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: client.avatar, alt: client.name, className: "w-full h-full rounded-xl object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold text-sm", children: getInitials(client.name) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg leading-tight transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: client.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: client.company })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${getStatusColor(client.status)}`, children: getStatusLabel(client.status) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${getPriorityColor(client.priority)}`, children: client.priority === "high" ? "Alta" : client.priority === "medium" ? "Média" : "Baixa" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: `w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`, children: client.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: `w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`, children: client.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: `w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`, children: [
                  client.city,
                  ", ",
                  client.state
                ] })
              ] }),
              client.website && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: `w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: client.website,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-sm text-blue-600 hover:text-blue-800 transition-colors",
                    onClick: (e) => e.stopPropagation(),
                    children: "Website"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: client.totalProjects }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Projetos" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: formatCurrency(client.totalRevenue) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Receita" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Satisfação" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-yellow-500 fill-current" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: client.satisfactionScore.toFixed(1) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full rounded-full h-2 ${isDark ? "bg-gray-600" : "bg-gray-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "bg-yellow-500 h-2 rounded-full transition-all duration-300",
                  style: { width: `${client.satisfactionScore / 5 * 100}%` }
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
              client.tags.slice(0, 3).map((tag, tagIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-800"}`, children: tag }, tagIndex)),
              client.tags.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`, children: [
                "+",
                client.tags.length - 3
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-gray-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-400", children: [
                  "Desde ",
                  formatDate(client.registrationDate)
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4 text-gray-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-400", children: [
                  client.activeProjects,
                  " ativos"
                ] })
              ] })
            ] })
          ] }) : (
            // List View
            /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 ${getTypeColor(client.type)} rounded-xl flex items-center justify-center shadow-lg`, children: client.avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: client.avatar, alt: client.name, className: "w-full h-full rounded-xl object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-semibold text-sm", children: getInitials(client.name) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: client.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    client.company,
                    " • ",
                    client.city,
                    ", ",
                    client.state
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Projetos" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: client.totalProjects })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Receita" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: formatCurrency(client.totalRevenue) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Satisfação" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-yellow-500 fill-current" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`, children: client.satisfactionScore.toFixed(1) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-3 py-1 rounded-full ${getStatusColor(client.status)}`, children: getStatusLabel(client.status) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-3 py-1 rounded-full ${getPriorityColor(client.priority)}`, children: client.priority === "high" ? "Alta" : client.priority === "medium" ? "Média" : "Baixa" })
                ] })
              ] })
            ] })
          )
        },
        client.id
      );
    }) }),
    filteredClients.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center py-12 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-16 h-16 mx-auto mb-4 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium mb-2", children: "Nenhum cliente encontrado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tente ajustar os filtros ou cadastrar um novo cliente." })
    ] })
  ] });
};

export { Clients as default };
