import { d as createLucideIcon$1, u as useTheme, r as reactExports, j as jsxRuntimeExports, m as motion, M as Mail, o as Bell, P as Phone, p as EyeOff, E as Eye, q as Sun, s as Moon, t as Database, n as Settings$1 } from './index-cbf67d0a.js';
import { S as Save, P as Palette } from './save-ca457704.js';
import { U as User } from './user-40149387.js';

/**
 * lucide-react v0.0.1 - ISC
 */


const Monitor = createLucideIcon$1("Monitor", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }
  ],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);

/**
 * lucide-react v0.0.1 - ISC
 */


const Shield = createLucideIcon$1("Shield", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", key: "3xmgem" }]
]);

const Settings = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = reactExports.useState("profile");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [notifications, setNotifications] = reactExports.useState({
    email: true,
    push: false,
    sms: false
  });
  const tabs = [
    { id: "profile", label: "Perfil", icon: User },
    { id: "notifications", label: "Notificações", icon: Bell },
    { id: "security", label: "Segurança", icon: Shield },
    { id: "appearance", label: "Aparência", icon: Palette },
    { id: "system", label: "Sistema", icon: Settings$1 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-2xl font-bold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Configurações" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Gerencie suas preferências e configurações" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `border-b transition-colors duration-300 ${isDark ? "border-gray-700" : "border-gray-200"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex space-x-8", children: tabs.map((tab) => {
      const Icon = tab.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab(tab.id),
          className: `flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${activeTab === tab.id ? isDark ? "border-blue-400 text-blue-400" : "border-blue-600 text-blue-600" : isDark ? "border-transparent text-gray-400 hover:text-gray-300" : "border-transparent text-gray-500 hover:text-gray-700"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
            tab.label
          ]
        },
        tab.id
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-lg border transition-colors duration-300 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`, children: [
      activeTab === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Informações do Perfil" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Nome Completo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                defaultValue: "João Silva",
                className: `w-full px-3 py-2 border rounded-lg transition-colors duration-300 ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                defaultValue: "joao@exemplo.com",
                className: `w-full px-3 py-2 border rounded-lg transition-colors duration-300 ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
            className: "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
              "Salvar Alterações"
            ]
          }
        ) })
      ] }),
      activeTab === "notifications" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Preferências de Notificação" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: Object.entries(notifications).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            key === "email" && /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-blue-500" }),
            key === "push" && /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-5 h-5 text-green-500" }),
            key === "sms" && /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-purple-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: [
                key === "email" && "Notificações por Email",
                key === "push" && "Notificações Push",
                key === "sms" && "Notificações por SMS"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: [
                key === "email" && "Receba atualizações por email",
                key === "push" && "Notificações no navegador",
                key === "sms" && "Mensagens de texto importantes"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setNotifications((prev) => ({ ...prev, [key]: !value })),
              className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${value ? "bg-blue-600" : isDark ? "bg-gray-600" : "bg-gray-200"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${value ? "translate-x-6" : "translate-x-1"}`
                }
              )
            }
          )
        ] }, key)) })
      ] }),
      activeTab === "security" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Configurações de Segurança" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Nova Senha" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: showPassword ? "text" : "password",
                className: `w-full px-3 py-2 pr-10 border rounded-lg transition-colors duration-300 ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setShowPassword(!showPassword),
                className: `absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`,
                children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
              }
            )
          ] })
        ] }) })
      ] }),
      activeTab === "appearance" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Configurações de Aparência" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `block text-sm font-medium mb-2 transition-colors duration-300 ${isDark ? "text-gray-300" : "text-gray-700"}`, children: "Tema" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-2 px-4 py-2 border rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4" }),
              "Claro"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-2 px-4 py-2 border rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" }),
              "Escuro"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-2 px-4 py-2 border rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "w-4 h-4" }),
              "Sistema"
            ] })
          ] })
        ] }) })
      ] }),
      activeTab === "system" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-semibold transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Configurações do Sistema" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "w-5 h-5 text-blue-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-medium transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"}`, children: "Backup Automático" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm transition-colors duration-300 ${isDark ? "text-gray-400" : "text-gray-600"}`, children: "Fazer backup dos dados automaticamente" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" }) })
        ] }) })
      ] })
    ] })
  ] });
};

export { Settings as default };
