import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Database,
  Key,
  Mail,
  Phone,
  MapPin,
  Building,
  Users,
  Save,
  Eye,
  EyeOff,
  Check,
  X,
  AlertTriangle,
  Info,
  Moon,
  Sun,
  Monitor,
  Volume2,
  VolumeX
} from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';

const Settings: React.FC = () => {
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false
  });

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'appearance', label: 'Aparência', icon: Palette },
    { id: 'system', label: 'Sistema', icon: SettingsIcon }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Configurações</h2>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>Gerencie suas preferências e configurações</p>
        </div>
      </div>

      {/* Tabs */}
      <div className={`border-b transition-colors duration-300 ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <nav className="flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                  activeTab === tab.id
                    ? isDark
                      ? 'border-blue-400 text-blue-400'
                      : 'border-blue-600 text-blue-600'
                    : isDark
                      ? 'border-transparent text-gray-400 hover:text-gray-300'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      <div className={`rounded-lg border transition-colors duration-300 ${
        isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        {activeTab === 'profile' && (
          <div className="p-6 space-y-6">
            <h3 className={`text-lg font-semibold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Informações do Perfil</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Nome Completo</label>
                <input
                  type="text"
                  defaultValue="João Silva"
                  className={`w-full px-3 py-2 border rounded-lg transition-colors duration-300 ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Email</label>
                <input
                  type="email"
                  defaultValue="joao@exemplo.com"
                  className={`w-full px-3 py-2 border rounded-lg transition-colors duration-300 ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Salvar Alterações
              </motion.button>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="p-6 space-y-6">
            <h3 className={`text-lg font-semibold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Preferências de Notificação</h3>
            
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {key === 'email' && <Mail className="w-5 h-5 text-blue-500" />}
                    {key === 'push' && <Bell className="w-5 h-5 text-green-500" />}
                    {key === 'sms' && <Phone className="w-5 h-5 text-purple-500" />}
                    <div>
                      <p className={`font-medium transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {key === 'email' && 'Notificações por Email'}
                        {key === 'push' && 'Notificações Push'}
                        {key === 'sms' && 'Notificações por SMS'}
                      </p>
                      <p className={`text-sm transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {key === 'email' && 'Receba atualizações por email'}
                        {key === 'push' && 'Notificações no navegador'}
                        {key === 'sms' && 'Mensagens de texto importantes'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? 'bg-blue-600' : isDark ? 'bg-gray-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="p-6 space-y-6">
            <h3 className={`text-lg font-semibold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Configurações de Segurança</h3>
            
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Nova Senha</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full px-3 py-2 pr-10 border rounded-lg transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                      isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appearance' && (
          <div className="p-6 space-y-6">
            <h3 className={`text-lg font-semibold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Configurações de Aparência</h3>
            
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Tema</label>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                    <Sun className="w-4 h-4" />
                    Claro
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                    <Moon className="w-4 h-4" />
                    Escuro
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                    <Monitor className="w-4 h-4" />
                    Sistema
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'system' && (
          <div className="p-6 space-y-6">
            <h3 className={`text-lg font-semibold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Configurações do Sistema</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className={`font-medium transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Backup Automático</p>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>Fazer backup dos dados automaticamente</p>
                  </div>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;