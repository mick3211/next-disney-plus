import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'src/styles/stitches';

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <meta name="theme-color" content="rgb(43,48,65)" />
                <style
                    id="stitches"
                    dangerouslySetInnerHTML={{ __html: getCssText() }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
