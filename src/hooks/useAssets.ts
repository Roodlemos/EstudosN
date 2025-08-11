import { useState, useEffect } from 'react'
import { criticalAssets } from '../assets'

interface AssetLoadingState {
  isLoading: boolean
  loadedAssets: string[]
  failedAssets: string[]
  progress: number
}

export const useAssets = (assetPaths?: string[]) => {
  const [loadingState, setLoadingState] = useState<AssetLoadingState>({
    isLoading: true,
    loadedAssets: [],
    failedAssets: [],
    progress: 0
  })

  useEffect(() => {
    const assetsToLoad = assetPaths || criticalAssets
    
    const loadAssets = async () => {
      setLoadingState(prev => ({ ...prev, isLoading: true }))
      
      const loadPromises = assetsToLoad.map(async (assetPath) => {
        try {
          // Simulate loading for different asset types
          if (assetPath.includes('.mp4') || assetPath.includes('.webm')) {
            return new Promise((resolve, reject) => {
              const video = document.createElement('video')
              video.onloadeddata = () => {
                setLoadingState(prev => ({
                  ...prev,
                  loadedAssets: [...prev.loadedAssets, assetPath],
                  progress: ((prev.loadedAssets.length + 1) / assetsToLoad.length) * 100
                }))
                resolve(assetPath)
              }
              video.onerror = () => {
                setLoadingState(prev => ({
                  ...prev,
                  failedAssets: [...prev.failedAssets, assetPath],
                  progress: ((prev.loadedAssets.length + prev.failedAssets.length + 1) / assetsToLoad.length) * 100
                }))
                reject(new Error(`Failed to load video: ${assetPath}`))
              }
              video.src = assetPath
            })
          } else if (assetPath.includes('.jpg') || assetPath.includes('.png') || assetPath.includes('.webp') || assetPath.includes('.svg')) {
            return new Promise((resolve, reject) => {
              const img = new Image()
              img.onload = () => {
                setLoadingState(prev => ({
                  ...prev,
                  loadedAssets: [...prev.loadedAssets, assetPath],
                  progress: ((prev.loadedAssets.length + 1) / assetsToLoad.length) * 100
                }))
                resolve(assetPath)
              }
              img.onerror = () => {
                setLoadingState(prev => ({
                  ...prev,
                  failedAssets: [...prev.failedAssets, assetPath],
                  progress: ((prev.loadedAssets.length + prev.failedAssets.length + 1) / assetsToLoad.length) * 100
                }))
                reject(new Error(`Failed to load image: ${assetPath}`))
              }
              img.src = assetPath
            })
          } else {
            // For other assets (fonts, etc.), just mark as loaded
            setLoadingState(prev => ({
              ...prev,
              loadedAssets: [...prev.loadedAssets, assetPath],
              progress: ((prev.loadedAssets.length + 1) / assetsToLoad.length) * 100
            }))
            return Promise.resolve(assetPath)
          }
        } catch (error) {
          setLoadingState(prev => ({
            ...prev,
            failedAssets: [...prev.failedAssets, assetPath],
            progress: ((prev.loadedAssets.length + prev.failedAssets.length + 1) / assetsToLoad.length) * 100
          }))
          throw error
        }
      })

      try {
        await Promise.allSettled(loadPromises)
      } catch (error) {
        console.warn('Some assets failed to load:', error)
      } finally {
        setLoadingState(prev => ({ ...prev, isLoading: false }))
      }
    }

    loadAssets()
  }, [assetPaths])

  return loadingState
}

// Hook for getting asset URLs with fallbacks
export const useAssetUrl = (assetPath: string, fallback?: string) => {
  const [url, setUrl] = useState<string>(fallback || '')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkAsset = async () => {
      try {
        // Check if asset exists
        const response = await fetch(assetPath, { method: 'HEAD' })
        if (response.ok) {
          setUrl(assetPath)
          setIsLoaded(true)
        } else if (fallback) {
          setUrl(fallback)
          setIsLoaded(true)
        }
      } catch (error) {
        if (fallback) {
          setUrl(fallback)
          setIsLoaded(true)
        }
        console.warn(`Asset not found: ${assetPath}`, error)
      }
    }

    checkAsset()
  }, [assetPath, fallback])

  return { url, isLoaded }
}