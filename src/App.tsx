import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPanel from './components/LoginPanel'
import Dashboard from './components/Dashboard'
import AssetLoader from './components/AssetLoader'
import { AuthProvider } from './context/AuthContext'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { StudyRequestProvider } from './context/StudyRequestContext'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <StudyRequestProvider>
            <AssetLoader>
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
  )
}

export default App