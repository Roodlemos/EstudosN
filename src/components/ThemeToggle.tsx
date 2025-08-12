import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface ThemeToggleProps {
  className?: string
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative p-2 rounded-xl transition-all duration-300
        ${isDark 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
        ${className}
      `}
      aria-label={`Alternar para tema ${isDark ? 'claro' : 'escuro'}`}
      title={`Alternar para tema ${isDark ? 'claro' : 'escuro'}`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10
        }}
      >
        {isDark ? (
          <Moon size={20} className="text-blue-400" />
        ) : (
          <Sun size={20} className="text-yellow-500" />
        )}
      </motion.div>
      
      {/* Indicador visual de transição */}
      <motion.div
        className={`
          absolute inset-0 rounded-xl border-2 transition-all duration-300
          ${isDark 
            ? 'border-blue-500/20 shadow-lg shadow-blue-500/10' 
            : 'border-yellow-500/20 shadow-lg shadow-yellow-500/10'
          }
        `}
        initial={false}
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
        key={theme} // Força re-render na mudança de tema
      />
    </motion.button>
  )
}

export default ThemeToggle