export interface Translation {
  // Navigation
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    requestStudy: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    requestStudyBtn: string;
    learnMoreBtn: string;
  };
  
  // Services Section
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      renewable: {
        title: string;
        description: string;
      };
      transmission: {
        title: string;
        description: string;
      };
      distribution: {
        title: string;
        description: string;
      };
      consulting: {
        title: string;
        description: string;
      };
    };
  };
  
  // About Section
  about: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    stats: {
      projects: string;
      clients: string;
      experience: string;
      team: string;
    };
    mission: {
      title: string;
      content: string;
    };
    vision: {
      title: string;
      content: string;
    };
    values: {
      title: string;
      content: string;
    };
  };
  
  // Contact Section
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    info: {
      title: string;
      phone: string;
      email: string;
      location: string;
    };
    form: {
      title: string;
      companyName: string;
      corporateEmail: string;
      projectType: string;
      projectTypeOptions: {
        select: string;
        renewable: string;
        transmission: string;
        distribution: string;
        others: string;
      };
      projectDescription: string;
      projectDescriptionPlaceholder: string;
      requestStudyBtn: string;
      scheduleMeetingBtn: string;
    };
  };
  
  // WhatsApp
  whatsapp: {
    tooltip: string;
    message: string;
  };
}

export const translations: Record<string, Translation> = {
  'pt-BR': {
    nav: {
      home: 'Início',
      services: 'Serviços',
      about: 'Sobre',
      contact: 'Contato',
      requestStudy: 'Solicitar Estudo'
    },
    hero: {
      title: 'NEXO Estudos Elétricos de Excelência',
      subtitle: 'O nexo entre inovação e expertise no setor energético brasileiro',
      description: 'A NEXO conecta soluções técnicas especializadas em geração, transmissão e distribuição de energia elétrica, criando o nexo perfeito entre rigor científico e inovação tecnológica.',
      requestStudyBtn: 'Solicitar Estudo',
      learnMoreBtn: 'Saiba Mais'
    },
    services: {
      badge: 'Nossos Serviços',
      title: 'Soluções Especializadas',
      subtitle: 'em Engenharia Elétrica',
      items: {
        renewable: {
          title: 'Geração Renovável',
          description: 'Estudos de viabilidade, conexão e operação de usinas solares, eólicas e outras fontes renováveis.'
        },
        transmission: {
          title: 'Transmissão',
          description: 'Análises de fluxo de potência, estabilidade e planejamento de sistemas de transmissão.'
        },
        distribution: {
          title: 'Distribuição',
          description: 'Estudos de redes de distribuição, qualidade de energia e eficiência energética.'
        },
        consulting: {
          title: 'Consultoria Técnica',
          description: 'Assessoria especializada em regulamentação, tarifação e aspectos técnicos do setor elétrico.'
        }
      }
    },
    about: {
      badge: 'Sobre a NEXO',
      title: 'O Nexo da Excelência Técnica',
      subtitle: 'e Inovação no Setor Elétrico',
      description: 'A NEXO é o nexo entre expertise e inovação em estudos elétricos para o setor energético brasileiro, combinando conhecimento técnico especializado com as mais modernas ferramentas de análise.',
      stats: {
        projects: 'Projetos Realizados',
        clients: 'Clientes Atendidos',
        experience: 'Anos de Experiência',
        team: 'Especialistas'
      },
      mission: {
        title: 'MISSÃO',
        content: 'A NEXO tem como missão ser o nexo entre conhecimento técnico e soluções práticas, fornecendo estudos elétricos de alta qualidade que contribuam para o desenvolvimento sustentável do setor energético brasileiro.'
      },
      vision: {
        title: 'VISÃO',
        content: 'Ser reconhecida como o principal nexo de referência nacional em estudos elétricos, impulsionando a transição energética e criando conexões inovadoras no sistema elétrico brasileiro.'
      },
      values: {
        title: 'VALORES',
        content: 'Excelência técnica, transparência, ética profissional, compromisso com prazos e rigor científico em todas as nossas análises e recomendações.'
      }
    },
    contact: {
      badge: 'Entre em Contato',
      title: 'Vamos Conversar Sobre',
      subtitle: 'Seu Projeto',
      description: 'Estamos prontos para ajudar você a alcançar seus objetivos no setor elétrico brasileiro',
      info: {
        title: 'Informações de Contato',
        phone: 'Telefone',
        email: 'Email',
        location: 'Localização'
      },
      form: {
        title: 'Solicite seu Estudo',
        companyName: 'Nome da Empresa',
        corporateEmail: 'Email Corporativo',
        projectType: 'Tipo de Projeto',
        projectTypeOptions: {
          select: 'Selecione o tipo de projeto',
          renewable: 'Geração Renovável',
          transmission: 'Transmissão',
          distribution: 'Distribuição',
          others: 'Outros'
        },
        projectDescription: 'Descrição do Projeto',
        projectDescriptionPlaceholder: 'Descreva seu projeto e necessidades específicas',
        requestStudyBtn: 'Solicitar Estudo',
        scheduleMeetingBtn: 'Agendar Reunião'
      }
    },
    whatsapp: {
      tooltip: 'Fale conosco no WhatsApp',
      message: 'Olá! Gostaria de solicitar um estudo elétrico.'
    }
  },
  
  'en-US': {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      requestStudy: 'Request Study'
    },
    hero: {
      title: 'NEXO - Excellence in Electrical Studies',
      subtitle: 'The nexus between innovation and expertise in the Brazilian energy sector',
      description: 'NEXO connects specialized technical solutions in electrical power generation, transmission and distribution, creating the perfect nexus between scientific rigor and technological innovation.',
      requestStudyBtn: 'Request Study',
      learnMoreBtn: 'Learn More'
    },
    services: {
      badge: 'Our Services',
      title: 'Specialized Solutions',
      subtitle: 'in Electrical Engineering',
      items: {
        renewable: {
          title: 'Renewable Generation',
          description: 'Feasibility, connection and operation studies for solar, wind and other renewable energy plants.'
        },
        transmission: {
          title: 'Transmission',
          description: 'Power flow analysis, stability and transmission system planning studies.'
        },
        distribution: {
          title: 'Distribution',
          description: 'Distribution network studies, power quality and energy efficiency analysis.'
        },
        consulting: {
          title: 'Technical Consulting',
          description: 'Specialized advisory in regulation, tariffs and technical aspects of the electrical sector.'
        }
      }
    },
    about: {
      badge: 'About NEXO',
      title: 'The Nexus of Technical Excellence',
      subtitle: 'and Innovation in the Electrical Sector',
      description: 'NEXO is the nexus between expertise and innovation in electrical studies for the Brazilian energy sector, combining specialized technical knowledge with the most modern analysis tools.',
      stats: {
        projects: 'Completed Projects',
        clients: 'Clients Served',
        experience: 'Years of Experience',
        team: 'Specialists'
      },
      mission: {
        title: 'MISSION',
        content: 'NEXO\'s mission is to be the nexus between technical knowledge and practical solutions, providing high-quality electrical studies that contribute to the sustainable development of the Brazilian energy sector.'
      },
      vision: {
        title: 'VISION',
        content: 'To be recognized as the main nexus of national reference in electrical studies, driving the energy transition and creating innovative connections in the Brazilian electrical system.'
      },
      values: {
        title: 'VALUES',
        content: 'Technical excellence, transparency, professional ethics, commitment to deadlines and scientific rigor in all our analyses and recommendations.'
      }
    },
    contact: {
      badge: 'Get in Touch',
      title: 'Let\'s Talk About',
      subtitle: 'Your Project',
      description: 'We are ready to help you achieve your goals in the Brazilian electrical sector',
      info: {
        title: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        location: 'Location'
      },
      form: {
        title: 'Request Your Study',
        companyName: 'Company Name',
        corporateEmail: 'Corporate Email',
        projectType: 'Project Type',
        projectTypeOptions: {
          select: 'Select project type',
          renewable: 'Renewable Generation',
          transmission: 'Transmission',
          distribution: 'Distribution',
          others: 'Others'
        },
        projectDescription: 'Project Description',
        projectDescriptionPlaceholder: 'Describe your project and specific needs',
        requestStudyBtn: 'Request Study',
        scheduleMeetingBtn: 'Schedule Meeting'
      }
    },
    whatsapp: {
      tooltip: 'Contact us on WhatsApp',
      message: 'Hello! I would like to request an electrical study.'
    }
  },
  
  'es': {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Acerca de',
      contact: 'Contacto',
      requestStudy: 'Solicitar Estudio'
    },
    hero: {
      title: 'NEXO - Estudios Eléctricos de Excelencia',
      subtitle: 'El nexo entre innovación y experiencia en el sector energético brasileño',
      description: 'NEXO conecta soluciones técnicas especializadas en generación, transmisión y distribución de energía eléctrica, creando el nexo perfecto entre rigor científico e innovación tecnológica.',
      requestStudyBtn: 'Solicitar Estudio',
      learnMoreBtn: 'Saber Más'
    },
    services: {
      badge: 'Nuestros Servicios',
      title: 'Soluciones Especializadas',
      subtitle: 'en Ingeniería Eléctrica',
      items: {
        renewable: {
          title: 'Generación Renovable',
          description: 'Estudios de viabilidad, conexión y operación de plantas solares, eólicas y otras fuentes renovables.'
        },
        transmission: {
          title: 'Transmisión',
          description: 'Análisis de flujo de potencia, estabilidad y planificación de sistemas de transmisión.'
        },
        distribution: {
          title: 'Distribución',
          description: 'Estudios de redes de distribución, calidad de energía y eficiencia energética.'
        },
        consulting: {
          title: 'Consultoría Técnica',
          description: 'Asesoría especializada en regulación, tarifas y aspectos técnicos del sector eléctrico.'
        }
      }
    },
    about: {
      badge: 'Acerca de NEXO',
      title: 'El Nexo de la Excelencia Técnica',
      subtitle: 'e Innovación en el Sector Eléctrico',
      description: 'NEXO es el nexo entre experiencia e innovación en estudios eléctricos para el sector energético brasileño, combinando conocimiento técnico especializado con las herramientas de análisis más modernas.',
      stats: {
        projects: 'Proyectos Realizados',
        clients: 'Clientes Atendidos',
        experience: 'Años de Experiencia',
        team: 'Especialistas'
      },
      mission: {
        title: 'MISIÓN',
        content: 'La misión de NEXO es ser el nexo entre conocimiento técnico y soluciones prácticas, proporcionando estudios eléctricos de alta calidad que contribuyan al desarrollo sostenible del sector energético brasileño.'
      },
      vision: {
        title: 'VISIÓN',
        content: 'Ser reconocida como el principal nexo de referencia nacional en estudios eléctricos, impulsando la transición energética y creando conexiones innovadoras en el sistema eléctrico brasileño.'
      },
      values: {
        title: 'VALORES',
        content: 'Excelencia técnica, transparencia, ética profesional, compromiso con plazos y rigor científico en todos nuestros análisis y recomendaciones.'
      }
    },
    contact: {
      badge: 'Ponte en Contacto',
      title: 'Hablemos Sobre',
      subtitle: 'Tu Proyecto',
      description: 'Estamos listos para ayudarte a alcanzar tus objetivos en el sector eléctrico brasileño',
      info: {
        title: 'Información de Contacto',
        phone: 'Teléfono',
        email: 'Email',
        location: 'Ubicación'
      },
      form: {
        title: 'Solicita tu Estudio',
        companyName: 'Nombre de la Empresa',
        corporateEmail: 'Email Corporativo',
        projectType: 'Tipo de Proyecto',
        projectTypeOptions: {
          select: 'Selecciona el tipo de proyecto',
          renewable: 'Generación Renovable',
          transmission: 'Transmisión',
          distribution: 'Distribución',
          others: 'Otros'
        },
        projectDescription: 'Descripción del Proyecto',
        projectDescriptionPlaceholder: 'Describe tu proyecto y necesidades específicas',
        requestStudyBtn: 'Solicitar Estudio',
        scheduleMeetingBtn: 'Programar Reunión'
      }
    },
    whatsapp: {
      tooltip: 'Contáctanos en WhatsApp',
      message: '¡Hola! Me gustaría solicitar un estudio eléctrico.'
    }
  }
};

export const languages = [
  {
    code: 'pt-BR',
    name: 'Português',
    flag: '🇧🇷'
  },
  {
    code: 'en-US',
    name: 'English',
    flag: '🇺🇸'
  },
  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸'
  }
];