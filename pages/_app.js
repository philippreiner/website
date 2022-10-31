import '../styles/globals.css'
import { useEffect } from 'react'
import Router from 'next/router'
import * as ackeeTracker from 'ackee-tracker'

function App({ Component, pageProps, router }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.ackeeTrackerInstance = ackeeTracker.create({
        server: 'https://count.reiner.info',
        domainId: '9c20f8ac-780f-4d14-8928-6e7441f1b4b0'
      }, {
        ignoreLocalhost: true,
        detailed: true
      })
      window.ackeeTrackerInstance.record()

      Router.events.on('routeChangeComplete', window.ackeeTrackerInstance.record())
    }
  }, [])

  return (
      <Component {...pageProps} key={router.route} />
  )
}

export default App
