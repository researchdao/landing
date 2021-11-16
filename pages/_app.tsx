import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import debounce from 'lodash.debounce'
import {DefaultSeo as DefaultSEO} from 'next-seo'
import type {AppProps} from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import SEO from '../next-seo.config'
import customTheme from '../theme'
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner: false})

const start = debounce(NProgress.start, 200)

Router.events.on('routeChangeStart', () => start())

Router.events.on('routeChangeComplete', () => {
    start.cancel()
    NProgress.done()
})

Router.events.on('routeChangeError', () => {
    start.cancel()
    NProgress.done()
})

const App = ({Component, pageProps}: AppProps) => (
    <>
        <DefaultSEO {...SEO}/>
        <ChakraProvider theme={customTheme}>
            <Component {...pageProps}/>
        </ChakraProvider>
    </>
)

export default App
