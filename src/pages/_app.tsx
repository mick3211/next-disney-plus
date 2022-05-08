import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
    globalStyles();

    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
export default MyApp;
