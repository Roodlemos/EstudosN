// Google Analytics 4 Configuration for NEXO Estudos Elétricos
// Enhanced SEO tracking and user behavior analysis

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export class Analytics {
  private static gtag: any;
  private static isInitialized = false;

  static init(measurementId: string) {
    if (typeof window === 'undefined' || this.isInitialized) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    this.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    this.gtag('js', new Date());
    this.gtag('config', measurementId, {
      page_title: 'NEXO Estudos Elétricos',
      page_location: window.location.href,
      custom_map: {
        'custom_parameter_1': 'nexo_keyword_tracking'
      }
    });

    this.isInitialized = true;
  }

  static trackEvent(event: AnalyticsEvent) {
    if (!this.gtag) return;
    
    this.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      custom_parameter_1: 'nexo_interaction'
    });
  }

  static trackPageView(pageName: string) {
    if (!this.gtag) return;
    
    this.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: `NEXO - ${pageName}`,
      page_location: window.location.href,
      custom_parameter_1: 'nexo_page_view'
    });
  }

  static trackSearch(searchTerm: string) {
    if (!this.gtag) return;
    
    this.gtag('event', 'search', {
      search_term: searchTerm,
      event_category: 'nexo_search',
      custom_parameter_1: 'nexo_keyword_search'
    });
  }

  static trackContactForm(formType: string) {
    if (!this.gtag) return;
    
    this.gtag('event', 'form_submit', {
      event_category: 'nexo_contact',
      event_label: formType,
      custom_parameter_1: 'nexo_lead_generation'
    });
  }
}

// SEO-focused event tracking helpers
export const trackNexoInteraction = (action: string, details?: string) => {
  Analytics.trackEvent({
    action,
    category: 'nexo_engagement',
    label: details || 'nexo_estudos_eletricos'
  });
};

export const trackServiceInterest = (serviceType: string) => {
  Analytics.trackEvent({
    action: 'service_interest',
    category: 'nexo_services',
    label: `nexo_${serviceType}`
  });
};

export const trackDownload = (resourceName: string) => {
  Analytics.trackEvent({
    action: 'download',
    category: 'nexo_resources',
    label: `nexo_${resourceName}`
  });
};

// Declare global gtag for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}