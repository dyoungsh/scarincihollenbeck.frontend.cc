import React from 'react'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { createMarkup } from 'utils/helpers'
import { GA_TRACKING_ID } from 'utils/constants'

const GA_TAG_MANAGER_URL = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
const GA_SNIPPET = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config','${GA_TRACKING_ID}',{page_path: window.location.pathname});`
const isProduction = process.env.NODE_ENV !== 'development'

const SHLawHead = () =>
  isProduction ? (
    <Head>
      <script src={GA_TAG_MANAGER_URL} />
      <script dangerouslySetInnerHTML={createMarkup(GA_SNIPPET)} />
    </Head>
  ) : (
    <Head />
  )

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // we're collecting some of the styles for creating a server side stylesheet
    // (though this doesn't apply to styled-components)
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <SHLawHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
