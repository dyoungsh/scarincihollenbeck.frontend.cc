import React, { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ThemeProvider } from 'styled-components'
import NavBar from 'components/shared/Navbar'
import Footer from 'components/shared/Footer'

import GlobalStyles from 'styles/global-styles'
import theme from 'styles/theme'
import * as gtag from 'utils/gtag'

/**
 *
 * 3rd Party Resources
 *
 * */
import 'nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-multi-carousel/lib/styles.css'
import 'animate.css/animate.min.css'

/**
 * Custom Style Sheets
 * */

import 'styles/carousel.css'

/**
 *  Add page transition loader
 */
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

/**
 *
 *  Head content includes charset, viewport defaults, fonts, and favicons
 */
const SHSiteHead = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="msvalidate.01" content="D568BE2730F6C27E33061E84F8DE58B1" />
    <meta name="google-site-verification" content="ulImKkFX6Wqx04n63QzoiKMPDPwbQ53bDZAfwxyMq2Q" />
    <link rel="preload" href="/fonts/proxima-nova-regular.ttf" as="font" crossOrigin=" " />
    <link rel="preload" href="/fonts/proxima-nova-bold.ttf" as="font" crossOrigin=" " />
    <link rel="preload" href="/fonts/proxima-nova-italic.ttf" as="font" crossOrigin=" " />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
)

const SHSite = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <>
      <SHSiteHead />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default SHSite
