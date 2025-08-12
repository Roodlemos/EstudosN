import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import LandingPage from './components/LandingPage'
import LoginPanel from './components/LoginPanel'
import Dashboard from './components/Dashboard'
import AssetLoader from './components/AssetLoader'
import SEOHead from './components/SEO/SEOHead'
import SchemaMarkup from './components/SEO/SchemaMarkup'
import { AuthProvider } from './context/AuthContext'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { StudyRequestProvider } from './context/StudyRequestContext'
import { Analytics } from './utils/analytics'

function App() {
  // Initialize Analytics (replace with your actual GA4 Measurement ID)
  // Analytics.init('G-XXXXXXXXXX');

  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <StudyRequestProvider>
              <AssetLoader>
                {/* Global SEO Configuration */}
                <SEOHead />
                <SchemaMarkup type="organization" />
                <SchemaMarkup type="breadcrumb" />
                
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPanel />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Routes>
                </div>
              </AssetLoader>
            </StudyRequestProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App