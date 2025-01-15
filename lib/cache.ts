const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 1000 * 60 * 5 // 5分钟

export function getCachedData<T>(key: string): T | null {
  const cached = cache.get(key)
  if (!cached) return null

  if (Date.now() - cached.timestamp > CACHE_DURATION) {
    cache.delete(key)
    return null
  }

  return cached.data as T
}

export function setCachedData(key: string, data: any): void {
  cache.set(key, {
    data,
    timestamp: Date.now()
  })
} 