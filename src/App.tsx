import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPanel from './components/LoginPanel'
import Dashboard from './components/Dashboard'
import AssetLoader from './components/AssetLoader'
import { AuthProvider } from './context/AuthContext'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AssetLoader>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPanel />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </AssetLoader>
      </AuthProvider>
    </LanguageProvider>
  )
}

export default App