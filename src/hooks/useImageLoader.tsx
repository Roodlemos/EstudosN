import { useState, useEffect, useCallback } from 'react';

interface UseImageLoaderOptions {
  placeholder?: string;
  fallback?: string;
  lazy?: boolean;
  threshold?: number;
}

interface UseImageLoaderReturn {
  src: string;
  isLoading: boolean;
  hasError: boolean;
  retry: () => void;
}

/**
 * Custom hook for optimized image loading with lazy loading support
 */
export const useImageLoader = (
  imageSrc: string,
  options: UseImageLoaderOptions = {}
): UseImageLoaderReturn => {
  const {
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNhcnJlZ2FuZG8uLi48L3RleHQ+PC9zdmc+',
    fallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI0VGNDQ0NCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVycm8gYW8gY2FycmVnYXI8L3RleHQ+PC9zdmc+',
    lazy = true,
    threshold = 0.1
  } = options;

  const [src, setSrc] = useState(placeholder);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(!lazy);

  // Preload image function
  const preloadImage = useCallback((imageUrl: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        setSrc(imageUrl);
        setIsLoading(false);
        setHasError(false);
        resolve();
      };
      
      img.onerror = () => {
        setSrc(fallback);
        setIsLoading(false);
        setHasError(true);
        reject(new Error(`Failed to load image: ${imageUrl}`));
      };
      
      img.src = imageUrl;
    });
  }, [fallback]);

  // Retry function
  const retry = useCallback(() => {
    setIsLoading(true);
    setHasError(false);
    setSrc(placeholder);
    preloadImage(imageSrc).catch(() => {
      // Error already handled in preloadImage
    });
  }, [imageSrc, placeholder, preloadImage]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    // Create a temporary element to observe
    const tempElement = document.createElement('div');
    observer.observe(tempElement);

    return () => {
      observer.disconnect();
    };
  }, [lazy, shouldLoad, threshold]);

  // Load image when shouldLoad becomes true
  useEffect(() => {
    if (!shouldLoad || !imageSrc) return;

    setIsLoading(true);
    preloadImage(imageSrc).catch(() => {
      // Error already handled in preloadImage
    });
  }, [shouldLoad, imageSrc, preloadImage]);

  return {
    src,
    isLoading,
    hasError,
    retry
  };
};

/**
 * Component wrapper for optimized image loading
 */
export const OptimizedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  fallback?: string;
  lazy?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}> = ({
  src: imageSrc,
  alt,
  className = '',
  placeholder,
  fallback,
  lazy = true,
  onLoad,
  onError
}) => {
  const { src, isLoading, hasError, retry } = useImageLoader(imageSrc, {
    placeholder,
    fallback,
    lazy
  });

  useEffect(() => {
    if (!isLoading && !hasError && onLoad) {
      onLoad();
    }
    if (hasError && onError) {
      onError();
    }
  }, [isLoading, hasError, onLoad, onError]);

  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-70' : 'opacity-100'
        }`}
        loading={lazy ? 'lazy' : 'eager'}
      />
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        </div>
      )}
      
      {/* Error state with retry button */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
          <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <button
            onClick={retry}
            className="text-xs px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      )}
    </div>
  );
};

export default useImageLoader;