// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

let replaysOnErrorSampleRate = 0
let tracesSampleRate = 0.1
 
if (process.env.NODE_ENV === 'production') {
    replaysOnErrorSampleRate = 1
}
 
if (process.env.NODE_ENV === 'development') {
    tracesSampleRate = 0
}

Sentry.init({
  dsn: 'https://be6f8e1dd6e7e0e9890ecbddf20752ed@o4506763688542208.ingest.us.sentry.io/4506763723341824',

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: tracesSampleRate,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  replaysOnErrorSampleRate: replaysOnErrorSampleRate,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
})