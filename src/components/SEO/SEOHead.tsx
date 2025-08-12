import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  section?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = '/src/assets/images/iLogo1.svg',
  url = 'https://roodlemos.github.io/EstudosN/',
  type = 'website',
  section = 'home'
}) => {
  const { language: currentLang } = useLanguage();

  // Default SEO values optimized for "nexo" keyword
  const defaultTitle = 'NEXO Estudos Elétricos - O Nexo da Inovação no Setor Energético';
  const defaultDescription = 'NEXO é o nexo entre expertise e inovação em estudos elétricos. Consultoria especializada em geração renovável, transmissão e distribuição de energia no Brasil. Conecte-se com o nexo da excelência técnica.';
  const defaultKeywords = 'nexo, nexo estudos elétricos, nexo energia, nexo consultoria, estudos elétricos, consultoria elétrica, energia renovável, transmissão energia, distribuição energia, setor elétrico brasileiro, nexo inovação, nexo expertise, conexão energia, nexo sustentabilidade';

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const fullUrl = url + (section !== 'home' ? `#${section}` : '');

  // Language-specific optimizations
  const getLanguageSpecificContent = () => {
    switch (currentLang) {
      case 'en-US':
        return {
          title: 'NEXO Electrical Studies - The Nexus of Innovation in Energy Sector',
          description: 'NEXO is the nexus between expertise and innovation in electrical studies. Specialized consulting in renewable generation, transmission and distribution in Brazil. Connect with the nexus of technical excellence.',
          keywords: 'nexo, nexus, electrical studies, energy consulting, renewable energy, power transmission, energy distribution, brazilian electrical sector, nexus innovation, nexus expertise, energy connection'
        };
      case 'es':
        return {
          title: 'NEXO Estudios Eléctricos - El Nexo de la Innovación en el Sector Energético',
          description: 'NEXO es el nexo entre experiencia e innovación en estudios eléctricos. Consultoría especializada en generación renovable, transmisión y distribución en Brasil. Conéctate con el nexo de la excelencia técnica.',
          keywords: 'nexo, estudios eléctricos, consultoría energética, energía renovable, transmisión energía, distribución energía, sector eléctrico brasileño, nexo innovación, nexo experiencia, conexión energía'
        };
      default:
        return {
          title: seoTitle,
          description: seoDescription,
          keywords: seoKeywords
        };
    }
  };

  const langContent = getLanguageSpecificContent();

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{langContent.title}</title>
      <meta name="title" content={langContent.title} />
      <meta name="description" content={langContent.description} />
      <meta name="keywords" content={langContent.keywords} />
      <meta name="author" content="NEXO Estudos Elétricos" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={currentLang} />
      <meta property="og:locale" content={currentLang === 'pt-BR' ? 'pt_BR' : currentLang === 'en-US' ? 'en_US' : 'es_ES'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={langContent.title} />
      <meta property="og:description" content={langContent.description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="NEXO Estudos Elétricos - Logo" />
      <meta property="og:site_name" content="NEXO Estudos Elétricos" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={langContent.title} />
      <meta property="twitter:description" content={langContent.description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content="NEXO Estudos Elétricos - O Nexo da Inovação" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content="NEXO" />
      <meta name="apple-mobile-web-app-title" content="NEXO" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Alternate Language URLs */}
      <link rel="alternate" hrefLang="pt-br" href={`${url}?lang=pt-BR`} />
      <link rel="alternate" hrefLang="en-us" href={`${url}?lang=en-US`} />
      <link rel="alternate" hrefLang="es" href={`${url}?lang=es`} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Structured Data for Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "NEXO Estudos Elétricos",
          "alternateName": "NEXO",
          "url": url,
          "description": langContent.description,
          "inLanguage": currentLang,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${url}?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "keywords": langContent.keywords,
          "mainEntity": {
            "@type": "Organization",
            "name": "NEXO Estudos Elétricos",
            "description": "O nexo entre inovação e expertise no setor elétrico brasileiro"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;