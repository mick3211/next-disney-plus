import { Carousel } from '@components/Carousel/Crousel';
import { Header } from '@components/Header/Header';
import { Row } from '@components/Row/Row';
import { RowWrapper } from '@components/Row/Row.styled';
import { Spinner } from '@components/Spinner/Spinner.styled';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useIndex } from 'src/hooks/pages/useIndex';
import useAuth from 'src/hooks/useAuth';

const Home: NextPage = () => {
    const { popularMovies, actionMovies, fantasyMovies, comedyMovies } =
        useIndex();
    const user = useAuth();
    const router = useRouter();

    useEffect(() => {
        console.log(user);

        const timer = window.setTimeout(() => {
            if (!user) {
                router.push('/login');
            }
        }, 100);

        return () => window.clearTimeout(timer);
    }, [user]);

    if (!user) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Início</title>
                <meta name="theme-color" content="rgb(4,6,12)" />
            </Head>
            <Header />

            {!(
                popularMovies &&
                actionMovies &&
                fantasyMovies &&
                comedyMovies
            ) ? (
                <Spinner />
            ) : (
                <main>
                    <Carousel contentList={popularMovies.slice(0, 15)} />
                    <RowWrapper>
                        <Row
                            contentList={actionMovies}
                            title={'Filmes cheios de ação'}
                        />
                        <Row
                            contentList={fantasyMovies}
                            title={'Filmes de fantasia'}
                        />
                        <Row
                            contentList={comedyMovies}
                            title={'Filmes de comédia'}
                        />
                    </RowWrapper>
                </main>
            )}
        </>
    );
};

export default Home;
