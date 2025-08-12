import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type?: 'organization' | 'service' | 'article' | 'breadcrumb';
  data?: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type = 'organization', data }) => {
  const getSchemaData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NEXO Estudos Elétricos",
          "alternateName": ["NEXO", "Nexo Estudos Elétricos", "Nexo Consultoria Elétrica"],
          "url": "https://roodlemos.github.io/EstudosN/",
          "logo": "https://roodlemos.github.io/EstudosN/src/assets/images/iLogo1.svg",
          "description": "NEXO é o nexo entre inovação e expertise em estudos elétricos para o setor energético brasileiro. Consultoria especializada em geração, transmissão e distribuição de energia elétrica.",
          "foundingDate": "2024",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Eng. Luiz Carlos Berrini, 1681, Salas 111 e 112",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "04571-011",
            "addressCountry": "BR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-99999-9999",
            "contactType": "customer service",
            "availableLanguage": ["Portuguese", "English", "Spanish"]
          },
          "sameAs": [
            "https://linkedin.com/company/nexo-estudos-eletricos",
            "https://instagram.com/nexoestudoseletricos"
          ],
          "keywords": "nexo, estudos elétricos, consultoria elétrica, energia renovável, transmissão, distribuição, setor elétrico brasileiro, nexo energia",
          "serviceArea": {
            "@type": "Country",
            "name": "Brazil"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços NEXO",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Estudos de Geração Renovável",
                  "description": "NEXO oferece estudos especializados em energia renovável, criando o nexo entre sustentabilidade e viabilidade técnica."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Análises de Transmissão",
                  "description": "Estudos de fluxo de potência e estabilidade, estabelecendo o nexo entre eficiência e segurança no sistema elétrico."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consultoria em Distribuição",
                  "description": "NEXO conecta soluções inovadoras para redes de distribuição e qualidade de energia."
                }
              }
            ]
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "NEXO Estudos Elétricos - Consultoria Especializada",
          "description": "NEXO é o nexo entre conhecimento técnico e soluções práticas em estudos elétricos para o setor energético brasileiro.",
          "provider": {
            "@type": "Organization",
            "name": "NEXO Estudos Elétricos"
          },
          "areaServed": "Brazil",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços NEXO",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Nexo Energia Renovável",
                  "category": "Estudos de Viabilidade"
                }
              }
            ]
          },
          "keywords": "nexo, estudos elétricos, consultoria, energia, transmissão, distribuição, renovável"
        };

      case 'breadcrumb':
        return {
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
              "name": "Serviços",
              "item": "https://roodlemos.github.io/EstudosN/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Sobre NEXO",
              "item": "https://roodlemos.github.io/EstudosN/#about"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Contato",
              "item": "https://roodlemos.github.io/EstudosN/#contact"
            }
          ]
        };

      default:
        return data || {};
    }
  };

  const schemaData = getSchemaData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;