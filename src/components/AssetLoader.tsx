import React from 'react'
import { motion } from 'framer-motion'
import { useAssets } from '../hooks/useAssets'
import { svgs } from '../assets'

interface AssetLoaderProps {
  children: React.ReactNode
  showProgress?: boolean
}

const AssetLoader: React.FC<AssetLoaderProps> = ({ children, showProgress = true }) => {
  const { isLoading, progress, loadedAssets, failedAssets } = useAssets()

  if (!isLoading) {
    return <>{children}</>
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-900 flex items-center justify-center z-50">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img src={svgs.nexoLogo} alt="NEXO Logo" className="w-20 h-20" />
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-bold text-white">NEXO</h1>
          <p className="text-blue-200">Estudos Elétricos</p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          {/* Progress Bar */}
          {showProgress && (
            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-orange-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Progress Text */}
          {showProgress && (
            <p className="text-white/80 text-sm">
              Carregando recursos... {Math.round(progress)}%
            </p>
          )}

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white/60 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Debug Info (only in development) */}
        {false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xs text-white/60 space-y-1"
          >
            <p>Carregados: {loadedAssets.length}</p>
            {failedAssets.length > 0 && (
              <p className="text-red-300">Falhas: {failedAssets.length}</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AssetLoader