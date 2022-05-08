import { Carousel } from '@components/Carousel/Crousel';
import { Row } from '@components/Row/Row';
import { RowWrapper } from '@components/Row/Row.styled';
import { Spinner } from '@components/Spinner/Spinner.styled';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useIndex } from 'src/hooks/pages/useIndex';

const Home: NextPage = () => {
    const { popularMovies, actionMovies, fantasyMovies, comedyMovies } =
        useIndex();

    return (
        <>
            <Head>
                <title>Início</title>
                <meta name="theme-color" content="rgb(4,6,12)" />
            </Head>

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
