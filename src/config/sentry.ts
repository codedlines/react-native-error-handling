import * as Sentry from '@sentry/react-native';
import config from 'react-native-ultimate-config';

export const routingInstrumentation =
  new Sentry.ReactNavigationInstrumentation();

export const initSentry = () => {
  Sentry.init({
    dsn: config.SENTRY_DSN,
    // Capture transactions for performance monitoring.
    tracesSampleRate: 1.0,
    integrations: [
      new Sentry.ReactNativeTracing({
        routingInstrumentation,
      }),
    ],
  });
};
