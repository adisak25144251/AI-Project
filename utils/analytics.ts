// Observability & Analytics Utility
// Tracks key product events for post-launch analysis

type EventName = 
  | 'page_view'
  | 'enroll_click'
  | 'checkout_start'
  | 'track_view'
  | 'lesson_view'
  | 'error_boundary';

interface EventProperties {
  [key: string]: any;
}

export const logEvent = (name: EventName, properties?: EventProperties) => {
  // In production, this would send data to tools like Mixpanel, Amplitude, or Google Analytics
  // For now, we use structured console logging for dev observability
  if (process.env.NODE_ENV !== 'production') {
    console.groupCollapsed(`📊 [Analytics] ${name}`);
    console.log('Properties:', properties);
    console.log('Timestamp:', new Date().toISOString());
    console.groupEnd();
  }
  
  // Example hook for external service
  // window.gtag('event', name, properties);
};

export const logError = (error: Error, context: string) => {
  console.error(`🚨 [ErrorTracker] ${context}:`, error);
  // In production: Sentry.captureException(error);
};