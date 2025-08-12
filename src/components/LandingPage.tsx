import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Zap, 
  Users, 
  Award, 
  Target, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Menu,
  X,
  Eye,
  Heart,
  Database,
  Clock,
  Globe,
  Lightbulb,
  Settings,
  Linkedin
} from 'lucide-react'
import { svgs } from '../assets';
import ElectricalPanorama from './ElectricalPanorama';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useStudyRequests } from '../context/StudyRequestContext';
import { sendStudyRequestEmail } from '../services/emailService';

const LandingPage: React.FC = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const { addRequest } = useStudyRequests();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  
  // Estado do formulário
  const [formData, setFormData] = useState({
    companyName: '',
    corporateEmail: '',
    projectType: '',
    projectDescription: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Função para scroll suave até o formulário
  const scrollToForm = () => {
    const formElement = document.getElementById('formulario-estudo')
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  // Função para lidar com mudanças no formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Função para validar o formulário
  const validateForm = () => {
    if (!formData.companyName.trim()) {
      setSubmitMessage('Por favor, preencha o nome da empresa.')
      return false
    }
    if (!formData.corporateEmail.trim()) {
      setSubmitMessage('Por favor, preencha o email corporativo.')
      return false
    }
    if (!formData.projectType) {
      setSubmitMessage('Por favor, selecione o tipo de projeto.')
      return false
    }
    if (!formData.projectDescription.trim()) {
      setSubmitMessage('Por favor, descreva o projeto.')
      return false
    }
    
    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.corporateEmail)) {
      setSubmitMessage('Por favor, insira um email válido.')
      return false
    }
    
    return true
  }

  // Função para enviar solicitação de estudo
  const handleRequestStudy = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Adicionar à dashboard
      addRequest(formData)
      
      // Enviar email
      const emailSent = await sendStudyRequestEmail(formData)
      
      if (emailSent) {
        setSubmitMessage('Solicitação enviada com sucesso! Entraremos em contato em breve.')
        setFormData({
          companyName: '',
          corporateEmail: '',
          projectType: '',
          projectDescription: ''
        })
      } else {
        setSubmitMessage('Solicitação salva, mas houve um problema no envio do email. Nossa equipe foi notificada.')
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error)
      setSubmitMessage('Erro ao enviar solicitação. Tente novamente ou entre em contato conosco.')
    } finally {
      setIsSubmitting(false)
      
      // Limpar mensagem após 5 segundos
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }
  }

  // Função para agendar reunião via WhatsApp
  const handleScheduleMeeting = () => {
    const message = `Olá! Gostaria de agendar uma reunião para discutir um projeto.

Empresa: ${formData.companyName || 'Não informado'}
Email: ${formData.corporateEmail || 'Não informado'}
Tipo de Projeto: ${formData.projectType || 'Não informado'}
Descrição: ${formData.projectDescription || 'Não informado'}

Aguardo retorno para agendarmos!`

    const whatsappUrl = `https://wa.me/5531972281758?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicos', 'sobre', 'contato']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          activeSection === 'inicio' 
            ? 'bg-transparent backdrop-blur-sm' 
            : isDark 
              ? 'bg-gray-800/95 backdrop-blur-lg shadow-lg border-b border-gray-700'
              : 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div className="h-6 flex items-center justify-center">
                <img src={svgs.nexoLogo} alt="NEXO Logo" className="h-6 w-auto" />
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {[
                { name: t.nav.home, href: '#inicio' },
                { name: t.nav.services, href: '#servicos' },
                { name: t.nav.about, href: '#sobre' },
                { name: t.nav.contact, href: '#contato' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className={`transition-all duration-300 font-medium relative group ${
                    activeSection === 'inicio'
                      ? 'text-white hover:text-blue-300'
                      : isDark
                        ? 'text-gray-300 hover:text-blue-400'
                        : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSelector />
              <Link to="/login">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Portal Admin
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  activeSection === 'inicio'
                    ? 'text-white hover:bg-white/10'
                    : isDark
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden mt-6 pb-6 pt-6 transition-all duration-300 ${
                activeSection === 'inicio'
                  ? 'bg-black/20 backdrop-blur-md border-t border-white/20'
                  : isDark
                    ? 'bg-gray-800/95 backdrop-blur-md border-t border-gray-700'
                    : 'bg-white/95 backdrop-blur-md border-t border-gray-100'
              }`}
            >
              {[
                { name: t.nav.home, href: '#inicio' },
                { name: t.nav.services, href: '#servicos' },
                { name: t.nav.about, href: '#sobre' },
                { name: t.nav.contact, href: '#contato' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block py-3 font-medium transition-colors duration-300 ${
                    activeSection === 'inicio'
                      ? 'text-white hover:text-blue-300'
                      : isDark
                        ? 'text-gray-300 hover:text-blue-400'
                        : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className={`mt-4 pt-4 border-t ${
                activeSection === 'inicio'
                  ? 'border-white/20'
                  : isDark
                    ? 'border-gray-700'
                    : 'border-gray-200'
              }`}>
                <LanguageSelector />
              </div>
              <Link to="/login" className="block mt-4">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl">
                  Portal Admin
                </button>
              </Link>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Panoramic Video Background */}
        <ElectricalPanorama />
        
        {/* Overlay - Expanded to match panorama coverage */}
        <div className="absolute inset-0 bg-black/40" style={{ width: '120vw', height: '120vh', left: '-10vw', top: '-10vh' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-orange-900/30" style={{ width: '120vw', height: '120vh', left: '-10vw', top: '-10vh' }}></div>
        
        {/* Decorative SVG */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none" style={{ width: '120vw', height: '120vh' }}>
          <img src={svgs.electricalGridAnimated} alt="Electrical Grid" className="w-full h-full object-contain" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex justify-center items-center min-h-[70vh]">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-8 text-center max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                  <Zap className="w-4 h-4" />
                  Consultoria Especializada no SIN
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">{t.hero.title}</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                    {t.hero.subtitle}
                  </span>
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  {t.hero.description}
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex justify-center"
              >
                <motion.button 
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  {t.hero.requestStudyBtn}
                  <ArrowRight size={20} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              {t.services.badge}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t.services.title}
              <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                {t.services.subtitle}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Oferecemos consultoria especializada para todos os segmentos do setor elétrico brasileiro
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: t.services.items.renewable.title,
                description: t.services.items.renewable.description,
                icon: Zap,
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: t.services.items.transmission.title,
                description: t.services.items.transmission.description,
                icon: Settings,
                color: 'from-green-500 to-green-600'
              },
              {
                title: t.services.items.distribution.title,
                description: t.services.items.distribution.description,
                icon: Clock,
                color: 'from-purple-500 to-purple-600'
              },
              {
                title: t.services.items.consulting.title,
                description: t.services.items.consulting.description,
                icon: Database,
                color: 'from-orange-500 to-orange-600'
              }
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
               >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Users className="w-4 h-4" />
                  {t.about.badge}
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  {t.about.title}
                  <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                    {t.about.subtitle}
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  {t.about.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Globe, title: 'Atuação Nacional', desc: 'Presença em todo território brasileiro' },
                  { icon: Award, title: '15+ Anos', desc: 'De experiência consolidada' },
                  { icon: Users, title: 'Equipe Especializada', desc: 'Engenheiros multidisciplinares' },
                  { icon: Lightbulb, title: 'Inovação', desc: 'Soluções técnicas avançadas' }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center"
                  >
                    <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Nossos Valores
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: t.about.mission.title,
                    content: t.about.mission.content,
                    color: 'from-blue-600 to-blue-800'
                  },
                  {
                    icon: Eye,
                    title: t.about.vision.title,
                    content: t.about.vision.content,
                    color: 'from-orange-500 to-orange-700'
                  },
                  {
                    icon: Heart,
                    title: t.about.values.title,
                    content: t.about.values.content,
                    color: 'from-green-600 to-green-800'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gradient-to-r ${value.color} rounded-2xl p-6 text-white`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold">{value.title}</h4>
                    </div>
                    <p className="leading-relaxed opacity-90">{value.content}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Phone className="w-4 h-4" />
              {t.contact.badge}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t.contact.title}
              <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                {t.contact.subtitle}
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.contact.description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {t.contact.info.title}
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: t.contact.info.phone,
                    content: '+55 (31) 9 7228-1758',
                    link: 'tel:+5531972281758',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    icon: Mail,
                    title: t.contact.info.email,
                    content: 'estudos@nexoestudos.com.br',
                    link: 'mailto:estudos@nexoestudos.com.br',
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    icon: MapPin,
                    title: t.contact.info.location,
                    content: 'São Paulo, SP - Brasil',
                    link: '#',
                    color: 'from-orange-500 to-orange-600'
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mr-6`}>
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-lg">{contact.title}</div>
                      <div className="text-gray-600 dark:text-gray-300">{contact.content}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              id="formulario-estudo"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-600"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {t.contact.form.title}
              </h3>
              
              <form onSubmit={handleRequestStudy} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      {t.contact.form.companyName}
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white"
                      placeholder={t.contact.form.companyName}
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      {t.contact.form.corporateEmail}
                    </label>
                    <input
                      type="email"
                      name="corporateEmail"
                      value={formData.corporateEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white"
                      placeholder={t.contact.form.corporateEmail}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    {t.contact.form.projectType}
                  </label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white"
                    disabled={isSubmitting}
                  >
                    <option value="">{t.contact.form.projectTypeOptions.select}</option>
                    <option value={t.contact.form.projectTypeOptions.renewable}>{t.contact.form.projectTypeOptions.renewable}</option>
                    <option value={t.contact.form.projectTypeOptions.transmission}>{t.contact.form.projectTypeOptions.transmission}</option>
                    <option value={t.contact.form.projectTypeOptions.distribution}>{t.contact.form.projectTypeOptions.distribution}</option>
                    <option value={t.contact.form.projectTypeOptions.others}>{t.contact.form.projectTypeOptions.others}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    {t.contact.form.projectDescription}
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 dark:bg-gray-700 focus:bg-white dark:focus:bg-gray-600 text-gray-900 dark:text-white resize-none"
                    placeholder={t.contact.form.projectDescriptionPlaceholder}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {/* Mensagem de feedback */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center font-medium ${
                      submitMessage.includes('sucesso') 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-700'
                    }`}
                  >
                    {submitMessage}
                  </motion.div>
                )}
                
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                    } text-white`}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? 'Enviando...' : t.contact.form.requestStudyBtn}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={handleScheduleMeeting}
                    disabled={isSubmitting}
                    className={`font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                    } text-white`}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {t.contact.form.scheduleMeetingBtn}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 flex items-center justify-center">
                  <img src={svgs.nexoLogo} alt="NEXO Logo" className="h-12 w-auto" />
                </div>
              </div>
              <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
                Consultoria brasileira especializada no Sistema Interligado Nacional, 
                oferecendo soluções técnicas de excelência.
              </p>
              <div className="flex space-x-4 mt-6">
                <motion.a
                  href="https://www.linkedin.com/company/nexo-estudos-el%C3%A9tricos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Serviços</h4>
              <ul className="space-y-3 text-gray-400 dark:text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Estudos de Acesso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Relatórios R2</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modelagem Renovável</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Análise de Ocorrências</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Empresa</h4>
              <ul className="space-y-3 text-gray-400 dark:text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog Técnico</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Suporte</h4>
              <ul className="space-y-3 text-gray-400 dark:text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-300 mb-4 md:mb-0">
              &copy; 2024. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-gray-400 dark:text-gray-300">
              <span className="cursor-pointer hover:text-white transition-colors">🇧🇷 PT</span>
              <span className="cursor-pointer hover:text-white transition-colors">🇺🇸 EN</span>
              <span className="cursor-pointer hover:text-white transition-colors">🇪🇸 ES</span>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/5531972281758?text=Olá! Gostaria de solicitar um estudo elétrico."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106"/>
        </svg>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {t.whatsapp.tooltip}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </motion.a>
    </div>
  )
}

export default LandingPage