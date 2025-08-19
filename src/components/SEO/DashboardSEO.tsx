import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

interface DashboardSEOProps {
  section: string;
  sectionLabel: string;
  sectionDescription: string;
}

const DashboardSEO: React.FC<DashboardSEOProps> = ({
  section,
  sectionLabel,
  sectionDescription
}) => {
  const { language } = useLanguage();

  // SEO content based on dashboard section
  const getSEOContent = () => {
    const baseTitle = 'NEXO Estudos Elétricos - Dashboard';
    const baseDescription = 'Sistema de gestão NEXO para estudos elétricos e consultoria energética.';
    
    const sectionSEO = {
      overview: {
        title: `${baseTitle} - Visão Geral`,
        description: 'Dashboard principal do NEXO com estatísticas, métricas e resumo executivo dos estudos elétricos em andamento.',
        keywords: 'nexo dashboard, visão geral estudos elétricos, métricas energia, estatísticas projetos elétricos'
      },
      requests: {
        title: `${baseTitle} - Solicitações`,
        description: 'Gerenciamento de solicitações de estudos elétricos no sistema NEXO. Acompanhe pedidos, aprovações e status.',
        keywords: 'nexo solicitações, pedidos estudos elétricos, gestão solicitações energia, aprovações projetos'
      },
      kanban: {
        title: `${baseTitle} - Kanban`,
        description: 'Quadro Kanban NEXO para gestão visual de projetos elétricos. Organize workflows e acompanhe progresso.',
        keywords: 'nexo kanban, gestão projetos elétricos, workflow energia, organização estudos'
      },
      projects: {
        title: `${baseTitle} - Projetos`,
        description: 'Gestão completa de projetos elétricos no NEXO. Acompanhe cronogramas, recursos e entregas.',
        keywords: 'nexo projetos, gestão projetos elétricos, cronograma estudos, recursos energia'
      },
      clients: {
        title: `${baseTitle} - Clientes`,
        description: 'Gestão de relacionamento com clientes NEXO. Histórico, contratos e comunicação centralizada.',
        keywords: 'nexo clientes, crm energia, relacionamento clientes elétricos, gestão contratos'
      },
      financial: {
        title: `${baseTitle} - Financeiro`,
        description: 'Controle financeiro NEXO para estudos elétricos. Orçamentos, faturamento e análise de custos.',
        keywords: 'nexo financeiro, orçamento estudos elétricos, faturamento energia, custos projetos'
      },
      reports: {
        title: `${baseTitle} - Relatórios`,
        description: 'Relatórios e análises NEXO para estudos elétricos. Insights, métricas e documentação técnica.',
        keywords: 'nexo relatórios, análises estudos elétricos, métricas energia, documentação técnica'
      },
      calendar: {
        title: `${baseTitle} - Calendário`,
        description: 'Agenda NEXO para estudos elétricos. Cronograma de projetos, reuniões e prazos importantes.',
        keywords: 'nexo calendário, agenda estudos elétricos, cronograma projetos, prazos energia'
      },
      settings: {
        title: `${baseTitle} - Configurações`,
        description: 'Configurações do sistema NEXO. Personalize preferências, usuários e integrações.',
        keywords: 'nexo configurações, settings dashboard, preferências sistema, configuração usuários'
      }
    };

    return sectionSEO[section as keyof typeof sectionSEO] || {
      title: `${baseTitle} - ${sectionLabel}`,
      description: sectionDescription,
      keywords: `nexo ${section}, ${sectionLabel.toLowerCase()}, estudos elétricos`
    };
  };

  const seoContent = getSEOContent();
  const canonicalUrl = `https://roodlemos.github.io/EstudosN/dashboard#${section}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoContent.title}</title>
      <meta name="title" content={seoContent.title} />
      <meta name="description" content={seoContent.description} />
      <meta name="keywords" content={seoContent.keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seoContent.title} />
      <meta property="og:description" content={seoContent.description} />
      <meta property="og:image" content="https://roodlemos.github.io/EstudosN/src/assets/images/logo_nexo_branca.svg" />
      <meta property="og:site_name" content="NEXO Estudos Elétricos" />
      <meta property="og:locale" content={language === 'pt-BR' ? 'pt_BR' : language === 'en-US' ? 'en_US' : 'es_ES'} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={seoContent.title} />
      <meta property="twitter:description" content={seoContent.description} />
      <meta property="twitter:image" content="https://roodlemos.github.io/EstudosN/src/assets/images/logo_nexo_branca.svg" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="NEXO Estudos Elétricos" />
      <meta name="publisher" content="NEXO Estudos Elétricos" />
      <meta name="application-name" content="NEXO Dashboard" />
      <meta name="theme-color" content="#3B82F6" />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/src/assets/images/logo_nexo_branca.svg" as="image" type="image/svg+xml" />
      
      {/* DNS Prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Structured Data for Dashboard Section */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "NEXO Dashboard",
          "description": seoContent.description,
          "url": canonicalUrl,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "provider": {
            "@type": "Organization",
            "name": "NEXO Estudos Elétricos",
            "url": "https://roodlemos.github.io/EstudosN/"
          },
          "featureList": [
            "Gestão de Estudos Elétricos",
            "Dashboard Analítico",
            "Controle de Projetos",
            "Relatórios Técnicos",
            "CRM Integrado"
          ],
          "screenshot": "https://roodlemos.github.io/EstudosN/src/assets/images/dashboard-screenshot.png",
          "softwareVersion": "2.0.0",
          "dateModified": new Date().toISOString().split('T')[0]
        })}
      </script>
      
      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "NEXO",
              "item": "https://roodlemos.github.io/EstudosN/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Dashboard",
              "item": "https://roodlemos.github.io/EstudosN/dashboard"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": sectionLabel,
              "item": canonicalUrl
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default DashboardSEO;