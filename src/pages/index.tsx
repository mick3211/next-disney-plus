import { Carousel } from '@components/Carousel/Crousel';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { Movie } from 'src/@types/movie';
import { apiService } from 'src/services/apiService';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const response = await apiService.get<{ results: Movie[] }>(
        '/discover/movie',
        {
            params: {
                region: 'BR',
                sort_by: 'popularity.desc',
                page: '1',
                with_watch_providers: '337',
                watch_region: 'BR',
            },
        }
    );

    return { props: { popularMovieList: response.data.results } };
}

interface Props {
    popularMovieList: Movie[];
}

const Home: NextPage<Props> = ({ popularMovieList }) => {
    return (
        <>
            <Head>
                <title>Início</title>
            </Head>

            <main style={{ height: '150vh', paddingTop: 64 }}>
                <Carousel contentList={popularMovieList.slice(0, 15)} />
            </main>
        </>
    );
};

export default Home;
