import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { initializeApp } from 'firebase/app';
import type { AppProps } from 'next/app';
import { UserProvider } from 'src/hooks/useAuth';
import { firebaseConfig } from 'src/services/firebase';
import { globalStyles } from '../styles/globals';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
    globalStyles();

    return (
        <UserProvider>
            <div
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Component {...pageProps} />
                <Footer />
            </div>
        </UserProvider>
    );
}
export default MyApp;
