import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye,
  TrendingUp
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useStudyRequests } from '../../context/StudyRequestContext';

const Requests: React.FC = () => {
  const { isDark } = useTheme();
  const { requests, updateRequestStatus } = useStudyRequests();

  const getRequestStatusColor = (status: string) => {
    const lightColors = {
      'pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'reviewed': 'bg-blue-100 text-blue-800 border-blue-200',
      'approved': 'bg-green-100 text-green-800 border-green-200',
      'rejected': 'bg-red-100 text-red-800 border-red-200',
      'default': 'bg-gray-100 text-gray-800 border-gray-200'
    };
    
    const darkColors = {
      'pending': 'bg-yellow-900/80 text-yellow-200 border-yellow-600',
      'reviewed': 'bg-blue-900/80 text-blue-200 border-blue-600',
      'approved': 'bg-green-900/80 text-green-200 border-green-600',
      'rejected': 'bg-red-900/80 text-red-200 border-red-600',
      'default': 'bg-gray-700/80 text-gray-200 border-gray-500'
    };
    
    const colors = isDark ? darkColors : lightColors;
    return colors[status as keyof typeof colors] || colors.default;
  };

  const getRequestStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'Pendente';
      case 'reviewed': return 'Em Análise';
      case 'approved': return 'Aprovado';
      case 'rejected': return 'Rejeitado';
      default: return 'Desconhecido';
    }
  };

  const handleStatusChange = (requestId: string, newStatus: 'pending' | 'reviewed' | 'approved' | 'rejected') => {
    updateRequestStatus(requestId, newStatus);
  };

  const stats = [
    {
      title: 'Total de Solicitações',
      value: requests.length.toString(),
      change: '+12%',
      icon: Mail,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Pendentes',
      value: requests.filter(r => r.status === 'pending').length.toString(),
      change: '+8%',
      icon: Clock,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Aprovadas',
      value: requests.filter(r => r.status === 'approved').length.toString(),
      change: '+25%',
      icon: CheckCircle,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Em Análise',
      value: requests.filter(r => r.status === 'reviewed').length.toString(),
      change: '+5%',
      icon: Eye,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card group hover:shadow-xl transition-all duration-300 ${
                isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className={`text-sm font-medium mb-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{stat.title}</p>
                <p className={`text-3xl font-bold mb-1 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{stat.value}</p>
                <p className="text-sm text-green-600 font-medium">{stat.change} este mês</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Requests List */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Solicitações de Estudos</h3>
            <p className={`transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Gerencie as solicitações recebidas</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Total: {requests.length} solicitações
            </span>
          </div>
        </div>

        {requests.length === 0 ? (
          <div className="text-center py-16">
            <Mail className={`w-16 h-16 mx-auto mb-4 transition-colors duration-300 ${
              isDark ? 'text-gray-600' : 'text-gray-400'
            }`} />
            <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Nenhuma solicitação encontrada</h3>
            <p className={`max-w-md mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Quando você receber solicitações de estudos elétricos, elas aparecerão aqui.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {requests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`border rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                  isDark 
                    ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-700/50' 
                    : 'border-gray-200 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className={`text-lg font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {request.companyName}
                      </h4>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border transition-colors duration-300 ${
                        getRequestStatusColor(request.status)
                      }`}>
                        {getRequestStatusLabel(request.status)}
                      </span>
                    </div>
                    
                    <div className={`flex items-center gap-4 text-sm mb-3 transition-colors duration-300 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {request.corporateEmail}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {request.submittedAt.toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                        isDark 
                          ? 'bg-blue-900/50 text-blue-300' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {request.projectType}
                      </span>
                    </div>
                    
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {request.projectDescription}
                    </p>
                  </div>
                </div>
                
                <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${
                  isDark ? 'border-gray-700' : 'border-gray-100'
                }`}>
                  <div className="flex items-center gap-2">
                    {request.status === 'pending' && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleStatusChange(request.id, 'reviewed')}
                          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                            isDark
                              ? 'bg-blue-900/50 text-blue-300 hover:bg-blue-800/50'
                              : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                          }`}
                        >
                          <Eye className="w-3 h-3" />
                          Analisar
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleStatusChange(request.id, 'approved')}
                          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                            isDark
                              ? 'bg-green-900/50 text-green-300 hover:bg-green-800/50'
                              : 'bg-green-100 text-green-800 hover:bg-green-200'
                          }`}
                        >
                          <CheckCircle className="w-3 h-3" />
                          Aprovar
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleStatusChange(request.id, 'rejected')}
                          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                            isDark
                              ? 'bg-red-900/50 text-red-300 hover:bg-red-800/50'
                              : 'bg-red-100 text-red-800 hover:bg-red-200'
                          }`}
                        >
                          <XCircle className="w-3 h-3" />
                          Rejeitar
                        </motion.button>
                      </>
                    )}
                    {request.status === 'reviewed' && (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleStatusChange(request.id, 'approved')}
                          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                            isDark
                              ? 'bg-green-900/50 text-green-300 hover:bg-green-800/50'
                              : 'bg-green-100 text-green-800 hover:bg-green-200'
                          }`}
                        >
                          <CheckCircle className="w-3 h-3" />
                          Aprovar
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleStatusChange(request.id, 'rejected')}
                          className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                            isDark
                              ? 'bg-red-900/50 text-red-300 hover:bg-red-800/50'
                              : 'bg-red-100 text-red-800 hover:bg-red-200'
                          }`}
                        >
                          <XCircle className="w-3 h-3" />
                          Rejeitar
                        </motion.button>
                      </>
                    )}
                  </div>
                  
                  <div className={`text-xs transition-colors duration-300 ${
                    isDark ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    ID: {request.id}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Requests;