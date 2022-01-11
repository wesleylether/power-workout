import React from 'react'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                    <title>Power Workout | LetherMade</title>
                    <meta
                        name="description"
                        content="7-minute power workout! Enjoy"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className={'font-sans'}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
