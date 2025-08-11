import React from 'react';
import { motion } from 'framer-motion';

const ElectricalPanorama: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ minWidth: '100vw', minHeight: '100vh' }}>
      {/* Animated Background Layers */}
      <div className="absolute inset-0 w-full h-full" style={{ minWidth: '120vw', minHeight: '120vh', left: '-10vw', top: '-10vh' }}>
        {/* Sky Gradient */}
        <div className="absolute inset-0" style={{ width: '120vw', height: '120vh' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700"></div>
          {/* Radial gradient overlay for uniform lighting */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-700/30 via-blue-800/20 to-transparent" style={{
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.3) 0%, rgba(30, 64, 175, 0.2) 40%, rgba(30, 58, 138, 0.1) 70%, transparent 100%)'
          }}></div>
          {/* Side lighting enhancement */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.15) 0%, transparent 20%, transparent 80%, rgba(59, 130, 246, 0.15) 100%)'
          }}></div>
        </div>
        
        {/* Moving Clouds */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-0 w-96 h-32 bg-white/10 rounded-full blur-xl"
            animate={{ x: [-100, 2000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-20 left-0 w-64 h-24 bg-white/5 rounded-full blur-lg"
            animate={{ x: [-80, 1800] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          />
          <motion.div
            className="absolute top-32 left-0 w-80 h-28 bg-white/8 rounded-full blur-xl"
            animate={{ x: [-120, 2200] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: 10 }}
          />
        </div>
        
        {/* Mountain Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-3/5" style={{ width: '120vw', left: '-10vw' }}>
          <svg width="100%" height="100%" viewBox="0 0 1400 500" preserveAspectRatio="none">
            <polygon 
              points="0,500 0,200 150,150 300,180 450,120 600,160 750,100 900,140 1050,90 1200,130 1400,110 1400,500"
              fill="rgba(31, 41, 55, 0.9)"
            />
            <polygon 
              points="0,500 0,250 200,200 400,230 600,180 800,220 1000,160 1200,200 1400,180 1400,500"
              fill="rgba(31, 41, 55, 0.7)"
            />
            <polygon 
              points="0,500 0,350 300,320 600,340 900,300 1200,330 1400,310 1400,500"
              fill="rgba(31, 41, 55, 0.5)"
            />
          </svg>
        </div>
        
        {/* Transmission Lines */}
        <div className="absolute inset-0" style={{ width: '120vw', left: '-10vw' }}>
          {/* Tower 1 */}
          <motion.div
            className="absolute"
            style={{ left: '5%', top: '40%' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg width="60" height="200" viewBox="0 0 60 200">
              <polygon points="30,0 25,180 35,180" fill="#6b7280" />
              <polygon points="10,40 50,40 45,50 15,50" fill="#6b7280" />
              <polygon points="15,80 45,80 40,90 20,90" fill="#6b7280" />
              <polygon points="20,120 40,120 35,130 25,130" fill="#6b7280" />
              
              {/* Animated Power Lines */}
              <motion.line
                x1="10" y1="45" x2="200" y2="35"
                stroke="#fbbf24" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.line
                x1="10" y1="85" x2="200" y2="75"
                stroke="#fbbf24" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
              <motion.line
                x1="10" y1="125" x2="200" y2="115"
                stroke="#fbbf24" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.4 }}
              />
            </svg>
          </motion.div>
          
          {/* Tower 2 */}
          <motion.div
            className="absolute"
            style={{ left: '30%', top: '35%' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <svg width="60" height="240" viewBox="0 0 60 240">
              <polygon points="30,0 25,220 35,220" fill="#6b7280" />
              <polygon points="10,50 50,50 45,60 15,60" fill="#6b7280" />
              <polygon points="15,100 45,100 40,110 20,110" fill="#6b7280" />
              <polygon points="20,150 40,150 35,160 25,160" fill="#6b7280" />
            </svg>
          </motion.div>
          
          {/* Tower 3 */}
          <motion.div
            className="absolute"
            style={{ left: '60%', top: '38%' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <svg width="60" height="220" viewBox="0 0 60 220">
              <polygon points="30,0 25,200 35,200" fill="#6b7280" />
              <polygon points="10,45 50,45 45,55 15,55" fill="#6b7280" />
              <polygon points="15,90 45,90 40,100 20,100" fill="#6b7280" />
              <polygon points="20,135 40,135 35,145 25,145" fill="#6b7280" />
            </svg>
          </motion.div>
          
          {/* Tower 4 */}
          <motion.div
            className="absolute"
            style={{ left: '85%', top: '32%' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <svg width="60" height="260" viewBox="0 0 60 260">
              <polygon points="30,0 25,240 35,240" fill="#6b7280" />
              <polygon points="10,55 50,55 45,65 15,65" fill="#6b7280" />
              <polygon points="15,110 45,110 40,120 20,120" fill="#6b7280" />
              <polygon points="20,165 40,165 35,175 25,175" fill="#6b7280" />
            </svg>
          </motion.div>
          
          {/* Tower 5 - Additional tower for better coverage */}
          <motion.div
            className="absolute"
            style={{ left: '95%', top: '45%' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            <svg width="50" height="180" viewBox="0 0 50 180">
              <polygon points="25,0 20,160 30,160" fill="#6b7280" />
              <polygon points="8,35 42,35 38,45 12,45" fill="#6b7280" />
              <polygon points="12,70 38,70 34,80 16,80" fill="#6b7280" />
              <polygon points="16,105 34,105 30,115 20,115" fill="#6b7280" />
            </svg>
          </motion.div>
        </div>
        
        {/* Substation */}
        <motion.div
          className="absolute"
          style={{ right: '5%', bottom: '20%' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          <svg width="200" height="100" viewBox="0 0 200 100">
            <rect x="0" y="0" width="200" height="100" fill="rgba(107, 114, 128, 0.8)" rx="5" />
            <rect x="10" y="10" width="180" height="80" fill="none" stroke="#9ca3af" strokeWidth="2" />
            
            {/* Equipment */}
            <rect x="20" y="20" width="30" height="60" fill="#6b7280" />
            <rect x="60" y="25" width="25" height="50" fill="#6b7280" />
            <rect x="95" y="20" width="35" height="60" fill="#6b7280" />
            <rect x="140" y="25" width="25" height="50" fill="#6b7280" />
            <rect x="175" y="20" width="15" height="60" fill="#6b7280" />
            
            {/* Animated Status Lights */}
            <motion.circle
              cx="35" cy="15" r="3" fill="#ef4444"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="72" cy="15" r="3" fill="#22c55e"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.circle
              cx="112" cy="15" r="3" fill="#3b82f6"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <motion.circle
              cx="152" cy="15" r="3" fill="#f59e0b"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        </motion.div>
        
        {/* Floating Energy Particles */}
        <div className="absolute inset-0" style={{ width: '120vw', left: '-10vw' }}>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -40, -20],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Lightning Effects */}
        <div className="absolute inset-0" style={{ width: '120vw', left: '-10vw' }}>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 15}%`,
                top: `${40 + Math.random() * 20}%`,
              }}
            >
              <motion.svg width="30" height="60" viewBox="0 0 30 60">
                <motion.path
                  d="M15,0 L10,20 L20,20 L5,60 L25,25 L15,25 Z"
                  fill="#fbbf24"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                  }}
                />
              </motion.svg>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Side Elements */}
        <div className="absolute inset-0" style={{ width: '120vw', left: '-10vw' }}>
          {/* Left side electrical pole with lighting */}
          <motion.div
            className="absolute"
            style={{ left: '2%', top: '50%' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ duration: 1.5, delay: 2.5 }}
          >
            <svg width="40" height="150" viewBox="0 0 40 150">
              <polygon points="20,0 18,140 22,140" fill="#4b5563" />
              <polygon points="5,30 35,30 32,35 8,35" fill="#4b5563" />
              <polygon points="8,60 32,60 29,65 11,65" fill="#4b5563" />
              {/* Glowing light */}
              <motion.circle
                cx="20" cy="25" r="8" fill="rgba(251, 191, 36, 0.3)"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.circle
                cx="20" cy="25" r="4" fill="#fbbf24"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </svg>
          </motion.div>
          
          {/* Right side electrical pole with lighting */}
          <motion.div
            className="absolute"
            style={{ right: '2%', top: '55%' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ duration: 1.5, delay: 2.8 }}
          >
            <svg width="40" height="150" viewBox="0 0 40 150">
              <polygon points="20,0 18,140 22,140" fill="#4b5563" />
              <polygon points="5,30 35,30 32,35 8,35" fill="#4b5563" />
              <polygon points="8,60 32,60 29,65 11,65" fill="#4b5563" />
              {/* Glowing light */}
              <motion.circle
                cx="20" cy="25" r="8" fill="rgba(251, 191, 36, 0.3)"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              />
              <motion.circle
                cx="20" cy="25" r="4" fill="#fbbf24"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              />
            </svg>
          </motion.div>
          
          {/* Side ambient lighting */}
          <div className="absolute left-0 top-0 w-32 h-full" style={{
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)'
          }}></div>
          <div className="absolute right-0 top-0 w-32 h-full" style={{
            background: 'linear-gradient(270deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)'
          }}></div>
        </div>
        
        {/* Atmospheric Overlay */}
        <div className="absolute inset-0" style={{ width: '120vw', height: '120vh' }}>
          {/* Subtle bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
          {/* Ambient lighting overlay */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(30, 58, 138, 0.05) 60%, rgba(30, 58, 138, 0.1) 100%)'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalPanorama;