import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
    globalStyles();

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
export default MyApp;
