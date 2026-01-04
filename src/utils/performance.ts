// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: Map<string, number[]> = new Map()
  private observers: PerformanceObserver[] = []

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  // Measure function execution time
  static measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
    return new Promise(async (resolve, reject) => {
      const start = performance.now()
      try {
        const result = await fn()
        const end = performance.now()
        PerformanceMonitor.getInstance().recordMetric(name, end - start)
        resolve(result)
      } catch (error) {
        const end = performance.now()
        PerformanceMonitor.getInstance().recordMetric(name, end - start)
        reject(error)
      }
    })
  }

  static measureSync<T>(name: string, fn: () => T): T {
    const start = performance.now()
    try {
      const result = fn()
      const end = performance.now()
      PerformanceMonitor.getInstance().recordMetric(name, end - start)
      return result
    } catch (error) {
      const end = performance.now()
      PerformanceMonitor.getInstance().recordMetric(name, end - start)
      throw error
    }
  }

  private recordMetric(name: string, duration: number): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, [])
    }
    const measurements = this.metrics.get(name)!
    measurements.push(duration)

    // Keep only last 100 measurements to prevent memory leaks
    if (measurements.length > 100) {
      measurements.shift()
    }
  }

  getMetricStats(name: string) {
    const measurements = this.metrics.get(name)
    if (!measurements || measurements.length === 0) {
      return null
    }

    const sorted = [...measurements].sort((a, b) => a - b)
    const sum = measurements.reduce((acc, val) => acc + val, 0)

    return {
      count: measurements.length,
      min: sorted[0],
      max: sorted[sorted.length - 1],
      avg: sum / measurements.length,
      median: sorted[Math.floor(sorted.length / 2)],
      p95: sorted[Math.floor(sorted.length * 0.95)],
      p99: sorted[Math.floor(sorted.length * 0.99)],
    }
  }

  getAllMetrics() {
    const result: Record<string, ReturnType<typeof this.getMetricStats>> = {}
    for (const [name] of this.metrics) {
      result[name] = this.getMetricStats(name)
    }
    return result
  }

  // Monitor Core Web Vitals
  startCoreWebVitalsMonitoring(): void {
    if (typeof window === 'undefined') return

    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime)
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(lcpObserver)

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          console.log('FID:', entry.processingStart - entry.startTime)
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
      this.observers.push(fidObserver)

      // Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        console.log('CLS:', clsValue)
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(clsObserver)
    }
  }

  // Memory usage monitoring
  getMemoryUsage() {
    if (typeof window === 'undefined' || !(window.performance as any).memory) {
      return null
    }

    const memory = (window.performance as any).memory
    return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
      usedPercentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
    }
  }

  // Cleanup observers
  cleanup(): void {
    this.observers.forEach((observer) => observer.disconnect())
    this.observers = []
    this.metrics.clear()
  }
}

// Performance decorator for methods
export function measure(name?: string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    const metricName = name || `${target.constructor.name}.${propertyKey}`

    descriptor.value = function (...args: any[]) {
      return PerformanceMonitor.measureSync(metricName, () => originalMethod.apply(this, args))
    }

    return descriptor
  }
}

// Debounce utility for performance
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: number | null = null

  return function (...args: Parameters<T>) {
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }

    timeoutId = window.setTimeout(() => {
      fn(...args)
      timeoutId = null
    }, delay)
  }
}

// Throttle utility for performance
export function throttle<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lastCall = 0

  return function (...args: Parameters<T>) {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      fn(...args)
    }
  }
}

// Lazy load utility
export function lazyLoad<T>(loader: () => Promise<T>, fallback?: T): Promise<T> {
  if (typeof window === 'undefined') {
    // SSR fallback
    return Promise.resolve(fallback as T)
  }

  return new Promise((resolve, reject) => {
    // Use requestIdleCallback for non-critical loads
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        loader().then(resolve).catch(reject)
      })
    } else {
      // Fallback to setTimeout
      setTimeout(() => {
        loader().then(resolve).catch(reject)
      }, 0)
    }
  })
}
