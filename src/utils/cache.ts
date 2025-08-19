// Simple in-memory cache with TTL (Time To Live) support
class CacheManager {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  private defaultTTL = 5 * 60 * 1000; // 5 minutes default

  /**
   * Set data in cache with optional TTL
   */
  set(key: string, data: any, ttl?: number): void {
    const timestamp = Date.now();
    const timeToLive = ttl || this.defaultTTL;
    
    this.cache.set(key, {
      data,
      timestamp,
      ttl: timeToLive
    });
  }

  /**
   * Get data from cache if not expired
   */
  get(key: string): any | null {
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }

    const now = Date.now();
    const isExpired = (now - cached.timestamp) > cached.ttl;

    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  /**
   * Check if key exists and is not expired
   */
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  /**
   * Remove specific key from cache
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Clear all cache
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Clean expired entries
   */
  cleanup(): void {
    const now = Date.now();
    
    for (const [key, value] of this.cache.entries()) {
      const isExpired = (now - value.timestamp) > value.ttl;
      if (isExpired) {
        this.cache.delete(key);
      }
    }
  }

  /**
   * Get cache statistics
   */
  getStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}

// Create singleton instance
export const cache = new CacheManager();

// Auto cleanup every 10 minutes
setInterval(() => {
  cache.cleanup();
}, 10 * 60 * 1000);

// Cache keys constants for consistency
export const CACHE_KEYS = {
  DASHBOARD_STATS: 'dashboard_stats',
  RECENT_PROJECTS: 'recent_projects',
  USER_PROFILE: 'user_profile',
  NOTIFICATIONS: 'notifications',
  STUDY_REQUESTS: 'study_requests',
  CLIENTS: 'clients',
  FINANCIAL_DATA: 'financial_data',
  REPORTS: 'reports',
  CALENDAR_EVENTS: 'calendar_events'
} as const;

// Helper function for async data fetching with cache
export const fetchWithCache = async <T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl?: number
): Promise<T> => {
  // Try to get from cache first
  const cached = cache.get(key);
  if (cached) {
    return cached;
  }

  // Fetch new data
  try {
    const data = await fetchFn();
    cache.set(key, data, ttl);
    return data;
  } catch (error) {
    console.error(`Error fetching data for key ${key}:`, error);
    throw error;
  }
};

// Helper for invalidating related cache entries
export const invalidateCache = (pattern: string): void => {
  const keys = cache.getStats().keys;
  const keysToDelete = keys.filter(key => key.includes(pattern));
  
  keysToDelete.forEach(key => cache.delete(key));
};

export default cache;