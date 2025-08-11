// Assets configuration and exports
// This file centralizes all asset imports for better organization

// Images
export const images = {
  // Company logos and branding
  logo: '/src/assets/images/nexo-logo.png',
  logoWhite: '/src/assets/images/nexo-logo-white.png',
  
  // Hero section images
  heroBackground: '/src/assets/images/electrical-grid-hero.jpg',
  electricalTowers: '/src/assets/images/electrical-towers.jpg',
  
  // Service images
  studiesImage: '/src/assets/images/electrical-studies.jpg',
  protectionImage: '/src/assets/images/protection-systems.jpg',
  analysisImage: '/src/assets/images/power-analysis.jpg',
  
  // About section
  teamImage: '/src/assets/images/team-photo.jpg',
  officeImage: '/src/assets/images/office-building.jpg',
}

// Videos
export const videos = {
  electricalPanorama: '/src/assets/videos/electrical-panorama.svg',
  heroBackground: '/src/assets/videos/electrical-grid-background.mp4',
  heroBackgroundWebm: '/src/assets/videos/electrical-grid-background.webm',
  companyPresentation: '/src/assets/videos/company-presentation.mp4',
}

// SVGs
export const svgs = {
  electricalGrid: '/src/assets/svgs/electrical-grid.svg',
  powerLines: '/src/assets/svgs/power-lines.svg',
  transformer: '/src/assets/svgs/transformer.svg',
  electricalSymbols: '/src/assets/svgs/electrical-symbols.svg',
  electricalGridAnimated: '/src/assets/svgs/electrical-grid-animated.svg',
  nexoLogo: '/src/assets/svgs/nexo-logo.svg'
}

// Icons
export const icons = {
  electricalStudies: '/src/assets/icons/electrical-studies.svg',
  protectionSystems: '/src/assets/icons/protection-systems.svg',
  powerAnalysis: '/src/assets/icons/power-analysis.svg'
}

// Fonts
export const fonts = {
  primary: '/src/assets/fonts/Inter-Variable.woff2',
  secondary: '/src/assets/fonts/Poppins-Variable.woff2',
}

// Asset utility functions
export const getAssetPath = (category: string, name: string): string => {
  return `/src/assets/${category}/${name}`
}

export const preloadAssets = async (assetPaths: string[]): Promise<void> => {
  const promises = assetPaths.map(path => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      
      if (path.includes('.mp4') || path.includes('.webm')) {
        link.as = 'video'
      } else if (path.includes('.jpg') || path.includes('.png') || path.includes('.webp')) {
        link.as = 'image'
      } else if (path.includes('.woff') || path.includes('.woff2')) {
        link.as = 'font'
        link.crossOrigin = 'anonymous'
      }
      
      link.href = path
      link.onload = () => resolve(path)
      link.onerror = () => reject(new Error(`Failed to preload ${path}`))
      
      document.head.appendChild(link)
    })
  })
  
  await Promise.all(promises)
}

// Critical assets to preload
export const criticalAssets = [
  svgs.nexoLogo,
  svgs.electricalGridAnimated,
  videos.electricalPanorama,
  icons.electricalStudies,
  icons.protectionSystems,
  icons.powerAnalysis
]