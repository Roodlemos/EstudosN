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
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Eye,
  Heart,
  FileText,
  Database,
  AlertTriangle,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  Lightbulb,
  Settings,
  BarChart3
} from 'lucide-react'
import { svgs, icons, videos } from '../assets';
import ElectricalPanorama from './ElectricalPanorama';

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

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
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          activeSection === 'inicio' 
            ? 'bg-transparent backdrop-blur-sm' 
            : 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={svgs.nexoLogo} alt="NEXO Logo" className="w-10 h-10" />
              </div>
              <div className={`text-2xl font-bold transition-all duration-300 ${
                activeSection === 'inicio'
                  ? 'text-white'
                  : 'bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent'
              }`}>
                NEXO Estudos Elétricos
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {[
                { name: 'Início', href: '#inicio' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Sobre', href: '#sobre' },
                { name: 'Contato', href: '#contato' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className={`transition-all duration-300 font-medium relative group ${
                    activeSection === 'inicio'
                      ? 'text-white hover:text-blue-300'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
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
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${
                activeSection === 'inicio' ? 'text-white' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
                  : 'border-t border-gray-100'
              }`}
            >
              {[
                { name: 'Início', href: '#inicio' },
                { name: 'Serviços', href: '#servicos' },
                { name: 'Sobre', href: '#sobre' },
                { name: 'Contato', href: '#contato' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block py-3 font-medium transition-colors duration-300 ${
                    activeSection === 'inicio'
                      ? 'text-white hover:text-blue-300'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
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
                  <span className="text-white">Estudos Elétricos</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                    de Excelência
                  </span>
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Somos uma consultoria brasileira especializada no Sistema Interligado Nacional, 
                  oferecendo estudos elétricos com viés prático, customizados e tecnicamente consistentes.
                </p>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="flex justify-center"
              >
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  Solicitar Estudo
                  <ArrowRight size={20} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              Nossos Serviços
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Soluções Completas em
              <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Estudos Elétricos
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos consultoria especializada para todos os segmentos do setor elétrico brasileiro
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Estudos para Projetos Básicos',
                description: 'Estudos associados ao Projeto Básico de Empreendimentos da Rede Básica, solicitados pelo ONS',
                iconSvg: icons.electricalStudies,
                color: 'from-blue-500 to-blue-600',
                features: ['Projeto Básico', 'Rede Básica', 'Solicitações ONS']
              },
              {
                title: 'Estudos de Acesso',
                description: 'Estudos necessários para a emissão de Parecer de Acesso para integração à Rede Básica',
                iconSvg: icons.powerAnalysis,
                color: 'from-green-500 to-green-600',
                features: ['Parecer de Acesso', 'Geração Renovável', 'Integração SIN']
              },
              {
                title: 'Estudos Pré-operacionais',
                description: 'Estudos para a integração de instalações à Rede Básica, na fase pré-operacional',
                icon: Clock,
                color: 'from-purple-500 to-purple-600',
                features: ['Integração Rede Básica', 'Fase pré-operacional', 'Comissionamento']
              },
              {
                title: 'Estudos para Relatórios R2',
                description: 'Estudos necessários para a emissão dos relatórios técnicos referentes às novas instalações',
                icon: Database,
                color: 'from-orange-500 to-orange-600',
                features: ['Relatório R2', 'Alternativa de referência', 'Novas instalações']
              },
              {
                title: 'Cadastramento SGBDIT',
                description: 'Cadastramento dos equipamentos de pátio e sistemas de proteção nas bases do ONS',
                iconSvg: icons.protectionSystems,
                color: 'from-red-500 to-red-600',
                features: ['Equipamentos de pátio', 'Sistemas de proteção', 'Base ONS']
              },
              {
                title: 'Modelagem de Usinas Renováveis',
                description: 'Modelagem de usinas renováveis para estudos de transitórios eletromagnéticos',
                icon: Zap,
                color: 'from-yellow-500 to-yellow-600',
                features: ['Transitórios eletromagnéticos', 'Controle centralizado', 'Inversores']
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {service.iconSvg ? (
                    <img src={service.iconSvg} alt={service.title} className="w-8 h-8" />
                  ) : (
                    <service.icon className="w-8 h-8 text-white" />
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Users className="w-4 h-4" />
                  Quem Somos
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Expertise Brasileira em
                  <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                    Estudos Elétricos
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  A NEXO Estudos Elétricos é uma consultoria brasileira especializada no Sistema Interligado Nacional, 
                  com atuação nacional e experiência consolidada no mercado de estudos elétricos.
                </p>
                
                <p>
                  Nascemos do sonho de engenheiros do setor, que atuaram nos setores de geração, transmissão e distribuição 
                  e que entendem a necessidade de elaboração de estudos elétricos com viés prático, customizados para cada 
                  aplicação e embasados em modelos apropriados e tecnicamente consistentes.
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
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-6 text-center"
                  >
                    <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Nossos Valores
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: 'MISSÃO',
                    content: 'Prestar serviços de engenharia consultiva para os agentes do setor elétrico brasileiro, provendo análises técnicas consistentes e na medida exata da necessidade do cliente.',
                    color: 'from-blue-600 to-blue-800'
                  },
                  {
                    icon: Eye,
                    title: 'VISÃO',
                    content: 'Ser referência em estudos para o setor elétrico brasileiro, superando a expectativa dos nossos clientes, com portfólio variado de serviços e profissionais qualificados.',
                    color: 'from-orange-500 to-orange-700'
                  },
                  {
                    icon: Heart,
                    title: 'VALORES',
                    content: 'Excelência técnica, transparência, ética profissional, compromisso com prazos e rigor científico em todas as nossas análises e recomendações.',
                    color: 'from-green-600 to-green-800'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
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
      <section id="contato" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Phone className="w-4 h-4" />
              Entre em Contato
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Vamos Conversar Sobre
              <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Seu Projeto
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para ajudar você a alcançar seus objetivos no setor elétrico brasileiro
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: 'Telefone',
                    content: '+55 (11) 9999-9999',
                    link: 'tel:+5511999999999',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'contato@nexoestudos.com.br',
                    link: 'mailto:contato@nexoestudos.com.br',
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    icon: MapPin,
                    title: 'Localização',
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
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center mr-6`}>
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">{contact.title}</div>
                      <div className="text-gray-600">{contact.content}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Solicite seu Estudo
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Nome da Empresa
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Corporativo
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Email corporativo"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Tipo de Projeto
                  </label>
                  <select className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white">
                    <option>Selecione o tipo de projeto</option>
                    <option>Geração Renovável</option>
                    <option>Transmissão</option>
                    <option>Distribuição</option>
                    <option>Outros</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Descrição do Projeto
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Descreva seu projeto e necessidades específicas"
                  ></textarea>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar Estudo
                  </motion.button>
                  <motion.button
                    type="button"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Agendar Reunião
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src={svgs.nexoLogo} alt="NEXO Logo" className="w-10 h-10" />
                </div>
                <div className="text-xl font-bold">NEXO Estudos Elétricos</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Consultoria brasileira especializada no Sistema Interligado Nacional, 
                oferecendo soluções técnicas de excelência.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Serviços</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Estudos de Acesso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Relatórios R2</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modelagem Renovável</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Análise de Ocorrências</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Empresa</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog Técnico</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-lg">Suporte</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2024 NEXO Estudos Elétricos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-gray-400">
              <span className="cursor-pointer hover:text-white transition-colors">🇧🇷 PT</span>
              <span className="cursor-pointer hover:text-white transition-colors">🇺🇸 EN</span>
              <span className="cursor-pointer hover:text-white transition-colors">🇪🇸 ES</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage