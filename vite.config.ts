import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/EstudosN/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    target: 'esnext',
    cssCodeSplit: true,
    // Fix for GitHub Pages MIME type issues
    rollupOptions: {
      output: {
        format: 'es',
        // Ensure proper file extensions for modules
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
          // Advanced code splitting for better caching and loading
          manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react'],
          // Dashboard chunks - separate each major component
          'dashboard-core': ['./src/components/Dashboard.tsx'],
          'dashboard-overview': ['./src/components/Dashboard/Overview.tsx'],
          'dashboard-kanban': ['./src/components/Dashboard/KanbanBoard.tsx'],
          'dashboard-projects': ['./src/components/Dashboard/Projects.tsx'],
          'dashboard-clients': ['./src/components/Dashboard/Clients.tsx'],
          'dashboard-financial': ['./src/components/Dashboard/Financial.tsx'],
          'dashboard-reports': ['./src/components/Dashboard/Reports.tsx'],
          'dashboard-calendar': ['./src/components/Dashboard/Calendar.tsx'],
          'dashboard-settings': ['./src/components/Dashboard/Settings.tsx']
        }
      },
    },
    // Performance optimizations
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
  },
  server: {
    port: 3000,
    open: true
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  // Enable CSS code splitting
  css: {
    devSourcemap: false,
    modules: {
      localsConvention: 'camelCase'
    }
  }
})