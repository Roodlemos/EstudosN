import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface PreloaderProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  showMessage?: boolean;
}

const Preloader: React.FC<PreloaderProps> = memo(({ 
  message = 'Carregando...', 
  size = 'md',
  showMessage = true 
}) => {
  const { isDark } = useTheme();

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerSizeClasses = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${containerSizeClasses[size]}`}>
      {/* Animated spinner */}
      <motion.div
        className={`${sizeClasses[size]} border-2 border-transparent rounded-full`}
        style={{
          borderTopColor: isDark ? '#3B82F6' : '#2563EB',
          borderRightColor: isDark ? '#1D4ED8' : '#1E40AF'
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Loading dots animation */}
      <div className="flex gap-1">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              isDark ? 'bg-blue-400' : 'bg-blue-600'
            }`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: index * 0.2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
      
      {/* Loading message */}
      {showMessage && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-sm font-medium ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
});

Preloader.displayName = 'Preloader';

export default Preloader;