import React from 'react'
import NextDocument, {
    Html,
    Main,
    Head,
    NextScript,
    DocumentContext,
} from 'next/document'
import Favicons from '../components/atoms/favicons'
import Meta from '../components/atoms/meta'

class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await NextDocument.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <Meta/>
                    <Favicons/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default Document
