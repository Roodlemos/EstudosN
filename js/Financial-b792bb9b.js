import { d as createLucideIcon$1, u as useTheme, r as reactExports, j as jsxRuntimeExports, S as Search, m as motion, T as Target } from './index-cbf67d0a.js';
import { F as Filter } from './filter-58480b03.js';
import { P as Plus } from './plus-e0e0b30e.js';
import { T as TrendingUp } from './trending-up-18267d52.js';

/**
 * lucide-react v0.0.1 - ISC
 */


const ArrowDownLeft = createLucideIcon$1("ArrowDownLeft", [
  ["path", { d: "M17 7 7 17", key: "15tmo1" }],
  ["path", { d: "M17 17H7V7", key: "1org7z" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const ArrowUpRight = createLucideIcon$1("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Receipt = createLucideIcon$1("Receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
      key: "wqdwcb"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17V7", key: "pyj7ub" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const TrendingDown = createLucideIcon$1("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Wallet = createLucideIcon$1("Wallet", [
  ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4", key: "195gfw" }],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5", key: "195n9w" }],
  ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z", key: "vllfpd" }]
]);

const Financial = () => {
  const { isDark } = useTheme();
  const [transactions, setTransactions] = reactExports.useState([
    {
      id: 1,
      type: "income",
      category: "Projetos",
      description: "Pagamento - Usina Solar 50MW",
      amount: 5e5,
      date: "2024-12-15",
      status: "completed",
      paymentMethod: "transfer",
      client: "EcoEnergy Brasil",
      project: "Usina Solar Fotovoltaica 50MW",
      invoice: "INV-2024-001",
      tags: ["Solar", "Projeto", "Pagamento"],
      notes: "Primeira parcela do projeto de usina solar"
    },
    {
      id: 2,
      type: "expense",
      category: "Equipamentos",
      description: "Compra de Software de Simulação",
      amount: 15e3,
      date: "2024-12-14",
      status: "completed",
      paymentMethod: "credit",
      tags: ["Software", "Equipamento", "Tecnologia"],
      notes: "Licença anual do software de simulação elétrica"
    },
    {
      id: 3,
      type: "income",
      category: "Consultoria",
      description: "Consultoria Técnica - Metalúrgica SP",
      amount: 25e3,
      date: "2024-12-13",
      status: "completed",
      paymentMethod: "pix",
      client: "Metalúrgica São Paulo",
      tags: ["Consultoria", "Industrial"],
      notes: "Consultoria para modernização do sistema elétrico"
    },
    {
      id: 4,
      type: "expense",
      category: "Pessoal",
      description: "Salários - Dezembro 2024",
      amount: 45e3,
      date: "2024-12-01",
      status: "completed",
      paymentMethod: "transfer",
      tags: ["Salário", "Pessoal", "Mensal"],
      notes: "Folha de pagamento mensal da equipe"
    },
    {
      id: 5,
      type: "income",
      category: "Projetos",
      description: "Projeto Shopping Center - Parcela Final",
      amount: 18e4,
      date: "2024-12-10",
      status: "pending",
      paymentMethod: "transfer",
      client: "Shopping Metropolitano",
      project: "Shopping Center Elétrico",
      invoice: "INV-2024-002",
      tags: ["Comercial", "Projeto", "Final"],
      notes: "Parcela final do projeto do shopping center"
    },
    {
      id: 6,
      type: "expense",
      category: "Operacional",
      description: "Aluguel do Escritório",
      amount: 8e3,
      date: "2024-12-05",
      status: "completed",
      paymentMethod: "transfer",
      tags: ["Aluguel", "Escritório", "Mensal"],
      notes: "Aluguel mensal do escritório"
    },
    {
      id: 7,
      type: "expense",
      category: "Marketing",
      description: "Campanha Digital - Google Ads",
      amount: 3500,
      date: "2024-12-08",
      status: "completed",
      paymentMethod: "credit",
      tags: ["Marketing", "Digital", "Publicidade"],
      notes: "Investimento em marketing digital para captação de clientes"
    },
    {
      id: 8,
      type: "income",
      category: "Projetos",
      description: "Estudo de Viabilidade - Governo Santos",
      amount: 12e4,
      date: "2024-12-12",
      status: "completed",
      paymentMethod: "transfer",
      client: "Prefeitura de Santos",
      tags: ["Governo", "Estudo", "Público"],
      notes: "Estudo de viabilidade para iluminação pública"
    }
  ]);
  const [budgets, setBudgets] = reactExports.useState([
    {
      id: 1,
      category: "Pessoal",
      budgeted: 5e4,
      spent: 45e3,
      period: "monthly",
      status: "on_track"
    },
    {
      id: 2,
      category: "Equipamentos",
      budgeted: 2e4,
      spent: 15e3,
      period: "monthly",
      status: "on_track"
    },
    {
      id: 3,
      category: "Operacional",
      budgeted: 15e3,
      spent: 11500,
      period: "monthly",
      status: "on_track"
    },
    {
      id: 4,
      category: "Marketing",
      budgeted: 5e3,
      spent: 3500,
      period: "monthly",
      status: "on_track"
    }
  ]);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [typeFilter, setTypeFilter] = reactExports.useState("all");
  const [categoryFilter, setCategoryFilter] = reactExports.useState("all");
  const [statusFilter, setStatusFilter] = reactExports.useState("all");
  const [dateRange, setDateRange] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("date");
  const [sortOrder, setSortOrder] = reactExports.useState("desc");
  const [viewMode, setViewMode] = reactExports.useState("transactions");
  const [showFilters, setShowFilters] = reactExports.useState(false);
  const getFilteredTransactions = () => {
    let filtered = transactions;
    if (searchTerm) {
      filtered = filtered.filter(
        (transaction) => transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) || transaction.category.toLowerCase().includes(searchTerm.toLowerCase()) || transaction.client && transaction.client.toLowerCase().includes(searchTerm.toLowerCase()) || transaction.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    if (typeFilter !== "all") {
      filtered = filtered.filter((transaction) => transaction.type === typeFilter);
    }
    if (categoryFilter !== "all") {
      filtered = filtered.filter((transaction) => transaction.category === categoryFilter);
    }
    if (statusFilter !== "all") {
      filtered = filtered.filter((transaction) => transaction.status === statusFilter);
    }
    if (dateRange !== "all") {
      const now = /* @__PURE__ */ new Date();
      const filterDate = /* @__PURE__ */ new Date();
      switch (dateRange) {
        case "today":
          filterDate.setHours(0, 0, 0, 0);
          break;
        case "week":
          filterDate.setDate(now.getDate() - 7);
          break;
        case "month":
          filterDate.setMonth(now.getMonth() - 1);
          break;
        case "quarter":
          filterDate.setMonth(now.getMonth() - 3);
          break;
        case "year":
          filterDate.setFullYear(now.getFullYear() - 1);
          break;
      }
      filtered = filtered.filter((transaction) => new Date(transaction.date) >= filterDate);
    }
    filtered.sort((a, b) => {
      let aValue, bValue;
      switch (sortBy) {
        case "date":
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
        case "amount":
          aValue = a.amount;
          bValue = b.amount;
          break;
        case "description":
          aValue = a.description.toLowerCase();
          bValue = b.description.toLowerCase();
          break;
        case "category":
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        default:
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
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
      case "completed":
        return isDark ? "bg-green-900/80 text-green-200" : "bg-green-100 text-green-800";
      case "pending":
        return isDark ? "bg-yellow-900/80 text-yellow-200" : "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return isDark ? "bg-red-900/80 text-red-200" : "bg-red-100 text-red-800";
      default:
        return isDark ? "bg-gray-700/80 text-gray-200" : "bg-gray-100 text-gray-800";
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case "completed":
        return "Concluído";
      case "pending":
        return "Pendente";
      case "cancelled":
        return "Cancelado";
      default:
        return "Desconhecido";
    }
  };
  const getPaymentMethodLabel = (method) => {
    switch (method) {
      case "cash":
        return "Dinheiro";
      case "credit":
        return "Cartão de Crédito";
      case "debit":
        return "Cartão de Débito";
      case "transfer":
        return "Transferência";
      case "pix":
        return "PIX";
      default:
        return "Outro";
    }
  };
  const getBudgetStatus = (budget) => {
    const percentage = budget.spent / budget.budgeted * 100;
    if (percentage > 100)
      return "exceeded";
    if (percentage > 80)
      return "warning";
    return "on_track";
  };
  const getBudgetStatusColor = (status) => {
    switch (status) {
      case "on_track":
        return isDark ? "bg-green-900/80 text-green-200" : "bg-green-100 text-green-800";
      case "warning":
        return isDark ? "bg-yellow-900/80 text-yellow-200" : "bg-yellow-100 text-yellow-800";
      case "exceeded":
        return isDark ? "bg-red-900/80 text-red-200" : "bg-red-100 text-red-800";
      default:
        return isDark ? "bg-gray-700/80 text-gray-200" : "bg-gray-100 text-gray-800";
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
  const filteredTransactions = getFilteredTransactions();
  const stats = {
    totalIncome: transactions.filter((t) => t.type === "income" && t.status === "completed").reduce((sum, t) => sum + t.amount, 0),
    totalExpenses: transactions.filter((t) => t.type === "expense" && t.status === "completed").reduce((sum, t) => sum + t.amount, 0),
    pendingIncome: transactions.filter((t) => t.type === "income" && t.status === "pending").reduce((sum, t) => sum + t.amount, 0),
    pendingExpenses: transactions.filter((t) => t.type === "expense" && t.status === "pending").reduce((sum, t) => sum + t.amount, 0),
    totalBudget: budgets.reduce((sum, b) => sum + b.budgeted, 0),
    totalSpent: budgets.reduce((sum, b) => sum + b.spent, 0)
  };
  const netIncome = stats.totalIncome - stats.totalExpenses;
  const budgetUtilization = stats.totalSpent / stats.totalBudget * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-2xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Financeiro" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Controle completo das suas finanças" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: `w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-400" : "text-gray-500"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Buscar transações...",
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
              onClick: () => setViewMode("transactions"),
              className: `px-3 py-2 rounded text-sm transition-colors duration-300 ${viewMode === "transactions" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: "Transações"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => setViewMode("budget"),
              className: `px-3 py-2 rounded text-sm transition-colors duration-300 ${viewMode === "budget" ? isDark ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900" : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`,
              children: "Orçamento"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
              "Nova Transação"
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Receitas" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: formatCurrency(stats.totalIncome) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 font-medium", children: "+12% este mês" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-5 h-5 text-red-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Despesas" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: formatCurrency(stats.totalExpenses) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-600 font-medium", children: "+5% este mês" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 bg-gradient-to-r ${netIncome >= 0 ? "from-blue-500 to-blue-600" : "from-orange-500 to-orange-600"} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "w-6 h-6 text-white" }) }),
              netIncome >= 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-5 h-5 text-red-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Lucro Líquido" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-2xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: formatCurrency(netIncome) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium ${netIncome >= 0 ? "text-green-600" : "text-red-600"}`, children: netIncome >= 0 ? "Positivo" : "Negativo" })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-green-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mb-1 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Uso do Orçamento" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-3xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: [
                budgetUtilization.toFixed(1),
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-green-600 font-medium", children: "Dentro do planejado" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "income", children: "Receitas" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "expense", children: "Despesas" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Categoria" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: categoryFilter,
                onChange: (e) => setCategoryFilter(e.target.value),
                className: `w-full px-3 py-2 rounded border text-sm ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Todas" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Projetos", children: "Projetos" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Consultoria", children: "Consultoria" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Equipamentos", children: "Equipamentos" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Pessoal", children: "Pessoal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Operacional", children: "Operacional" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Marketing", children: "Marketing" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "completed", children: "Concluído" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pending", children: "Pendente" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "cancelled", children: "Cancelado" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Período" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: dateRange,
                onChange: (e) => setDateRange(e.target.value),
                className: `w-full px-3 py-2 rounded border text-sm ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Todos" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "today", children: "Hoje" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "week", children: "Última Semana" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "month", children: "Último Mês" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "quarter", children: "Último Trimestre" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "year", children: "Último Ano" })
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date", children: "Data" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "amount", children: "Valor" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "description", children: "Descrição" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "category", children: "Categoria" })
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
    viewMode === "transactions" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: filteredTransactions.map((transaction, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: index * 0.05 },
        className: `card hover:shadow-lg transition-all duration-300 ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${transaction.type === "income" ? "bg-gradient-to-r from-green-500 to-green-600" : "bg-gradient-to-r from-red-500 to-red-600"}`, children: transaction.type === "income" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-6 h-6 text-white" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: transaction.description }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${getStatusColor(transaction.status)}`, children: getStatusLabel(transaction.status) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: transaction.category }),
                transaction.client && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                  "• ",
                  transaction.client
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                  "• ",
                  getPaymentMethodLabel(transaction.paymentMethod)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                  "• ",
                  formatDate(transaction.date)
                ] })
              ] }),
              transaction.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 mt-2", children: [
                transaction.tags.slice(0, 3).map((tag, tagIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-800"}`, children: tag }, tagIndex)),
                transaction.tags.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-xs px-2 py-1 rounded-full ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-600"}`, children: [
                  "+",
                  transaction.tags.length - 3
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-xl font-bold ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`, children: [
              transaction.type === "income" ? "+" : "-",
              formatCurrency(transaction.amount)
            ] }),
            transaction.invoice && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: transaction.invoice })
          ] })
        ] })
      },
      transaction.id
    )) }),
    viewMode === "budget" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: budgets.map((budget, index) => {
      const percentage = budget.spent / budget.budgeted * 100;
      const status = getBudgetStatus(budget);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1 },
          className: `card hover:shadow-lg transition-all duration-300 ${isDark ? "hover:bg-gray-700/50" : "hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: budget.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs px-3 py-1 rounded-full ${getBudgetStatusColor(status)}`, children: status === "on_track" ? "No Prazo" : status === "warning" ? "Atenção" : "Excedido" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Orçado" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: formatCurrency(budget.budgeted) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gasto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: formatCurrency(budget.spent) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Restante" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold ${budget.budgeted - budget.spent >= 0 ? "text-green-600" : "text-red-600"}`, children: formatCurrency(budget.budgeted - budget.spent) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Utilização" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    percentage.toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full rounded-full h-3 ${isDark ? "bg-gray-600" : "bg-gray-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `h-3 rounded-full transition-all duration-300 ${status === "on_track" ? "bg-green-500" : status === "warning" ? "bg-yellow-500" : "bg-red-500"}`,
                    style: { width: `${Math.min(percentage, 100)}%` }
                  }
                ) })
              ] })
            ] })
          ]
        },
        budget.id
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg mb-4 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Receitas vs Despesas" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-gray-500 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gráfico de receitas vs despesas seria exibido aqui" }) })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg mb-4 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Distribuição por Categoria" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-gray-500 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gráfico de pizza das categorias seria exibido aqui" }) })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `font-semibold text-lg mb-4 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Fluxo de Caixa Mensal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-gray-500 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gráfico de linha do fluxo de caixa seria exibido aqui" }) })
          ]
        }
      )
    ] }),
    viewMode === "transactions" && filteredTransactions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-center py-12 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-16 h-16 mx-auto mb-4 opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium mb-2", children: "Nenhuma transação encontrada" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Tente ajustar os filtros ou adicionar uma nova transação." })
    ] })
  ] });
};

export { Financial as default };
