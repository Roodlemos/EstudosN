import { u as useTheme, a as useStudyRequests, M as Mail, C as Clock, c as CheckCircle, E as Eye, j as jsxRuntimeExports, m as motion, X as XCircle } from './index-cbf67d0a.js';
import { T as TrendingUp } from './trending-up-18267d52.js';

const Requests = () => {
  const { isDark } = useTheme();
  const { requests, updateRequestStatus } = useStudyRequests();
  const getRequestStatusColor = (status) => {
    const lightColors = {
      "pending": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "reviewed": "bg-blue-100 text-blue-800 border-blue-200",
      "approved": "bg-green-100 text-green-800 border-green-200",
      "rejected": "bg-red-100 text-red-800 border-red-200",
      "default": "bg-gray-100 text-gray-800 border-gray-200"
    };
    const darkColors = {
      "pending": "bg-yellow-900/80 text-yellow-200 border-yellow-600",
      "reviewed": "bg-blue-900/80 text-blue-200 border-blue-600",
      "approved": "bg-green-900/80 text-green-200 border-green-600",
      "rejected": "bg-red-900/80 text-red-200 border-red-600",
      "default": "bg-gray-700/80 text-gray-200 border-gray-500"
    };
    const colors = isDark ? darkColors : lightColors;
    return colors[status] || colors.default;
  };
  const getRequestStatusLabel = (status) => {
    switch (status) {
      case "pending":
        return "Pendente";
      case "reviewed":
        return "Em Análise";
      case "approved":
        return "Aprovado";
      case "rejected":
        return "Rejeitado";
      default:
        return "Desconhecido";
    }
  };
  const handleStatusChange = (requestId, newStatus) => {
    updateRequestStatus(requestId, newStatus);
  };
  const stats = [
    {
      title: "Total de Solicitações",
      value: requests.length.toString(),
      change: "+12%",
      icon: Mail,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Pendentes",
      value: requests.filter((r) => r.status === "pending").length.toString(),
      change: "+8%",
      icon: Clock,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Aprovadas",
      value: requests.filter((r) => r.status === "approved").length.toString(),
      change: "+25%",
      icon: CheckCircle,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Em Análise",
      value: requests.filter((r) => r.status === "reviewed").length.toString(),
      change: "+5%",
      icon: Eye,
      color: "from-purple-500 to-purple-600"
    }
  ];
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xl font-bold mb-1 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Solicitações de Estudos" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-600"}`, children: "Gerencie as solicitações recebidas" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
              "Total: ",
              requests.length,
              " solicitações"
            ] }) })
          ] }),
          requests.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: `w-16 h-16 mx-auto mb-4 transition-colors duration-300 ${isDark ? "text-gray-600" : "text-gray-400"}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Nenhuma solicitação encontrada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `max-w-md mx-auto transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Quando você receber solicitações de estudos elétricos, elas aparecerão aqui." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: requests.map((request, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1 * index },
              className: `border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${isDark ? "border-gray-700 bg-gray-800/50 hover:bg-gray-700/50" : "border-gray-200 bg-white hover:bg-gray-50"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `text-lg font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: request.companyName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex px-2 py-1 text-xs font-medium rounded-full border transition-colors duration-300 ${getRequestStatusColor(request.status)}`, children: getRequestStatusLabel(request.status) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-4 text-sm mb-3 transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                      request.corporateEmail
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
                      request.submittedAt.toLocaleDateString("pt-BR")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex px-2 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${isDark ? "bg-blue-900/50 text-blue-300" : "bg-blue-100 text-blue-800"}`, children: request.projectType }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm leading-relaxed transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: request.projectDescription })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between pt-4 border-t transition-colors duration-300 ${isDark ? "border-gray-700" : "border-gray-100"}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    request.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.button,
                        {
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          onClick: () => handleStatusChange(request.id, "reviewed"),
                          className: `flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${isDark ? "bg-blue-900/50 text-blue-300 hover:bg-blue-800/50" : "bg-blue-100 text-blue-800 hover:bg-blue-200"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                            "Analisar"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.button,
                        {
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          onClick: () => handleStatusChange(request.id, "approved"),
                          className: `flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${isDark ? "bg-green-900/50 text-green-300 hover:bg-green-800/50" : "bg-green-100 text-green-800 hover:bg-green-200"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-3 h-3" }),
                            "Aprovar"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.button,
                        {
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          onClick: () => handleStatusChange(request.id, "rejected"),
                          className: `flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${isDark ? "bg-red-900/50 text-red-300 hover:bg-red-800/50" : "bg-red-100 text-red-800 hover:bg-red-200"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(XCircle, { className: "w-3 h-3" }),
                            "Rejeitar"
                          ]
                        }
                      )
                    ] }),
                    request.status === "reviewed" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.button,
                        {
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          onClick: () => handleStatusChange(request.id, "approved"),
                          className: `flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${isDark ? "bg-green-900/50 text-green-300 hover:bg-green-800/50" : "bg-green-100 text-green-800 hover:bg-green-200"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "w-3 h-3" }),
                            "Aprovar"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.button,
                        {
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          onClick: () => handleStatusChange(request.id, "rejected"),
                          className: `flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${isDark ? "bg-red-900/50 text-red-300 hover:bg-red-800/50" : "bg-red-100 text-red-800 hover:bg-red-200"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(XCircle, { className: "w-3 h-3" }),
                            "Rejeitar"
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-xs transition-colors duration-300 ${isDark ? "text-gray-500" : "text-gray-400"}`, children: [
                    "ID: ",
                    request.id
                  ] })
                ] })
              ]
            },
            request.id
          )) })
        ]
      }
    )
  ] });
};

export { Requests as default };
