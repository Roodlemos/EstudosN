import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { languages } from '../i18n/translations';

const LanguageSelector: React.FC = memo(() => {
  const { language, setLanguage } = useLanguage();
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = useCallback((langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
  }, [setLanguage]);

  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        onClick={toggleDropdown}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
          isDark 
            ? 'bg-gray-700/80 hover:bg-gray-600/80 text-gray-200 border border-gray-600/50' 
            : 'bg-white/90 hover:bg-white text-gray-700 border border-gray-200/50 shadow-sm'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden md:block text-sm font-medium">{currentLanguage?.name}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full right-0 mt-2 rounded-xl shadow-2xl overflow-hidden z-50 min-w-[160px] ${
              isDark 
                ? 'bg-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-100'
            }`}
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                  language === lang.code 
                    ? isDark 
                      ? 'bg-blue-900/50 text-blue-300' 
                      : 'bg-blue-50 text-blue-600'
                    : isDark 
                      ? 'text-gray-200 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                }`}
                whileHover={{ 
                  backgroundColor: language === lang.code 
                    ? isDark ? '#1e3a8a80' : '#dbeafe' 
                    : isDark ? '#374151' : '#f9fafb' 
                }}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {language === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`ml-auto w-2 h-2 rounded-full ${
                      isDark ? 'bg-blue-400' : 'bg-blue-600'
                    }`}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

LanguageSelector.displayName = 'LanguageSelector';

export default LanguageSelector;