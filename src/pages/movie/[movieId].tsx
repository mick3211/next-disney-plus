import { GetServerSidePropsContext, NextPage } from 'next';
import { Movie } from 'src/@types/movie';
import { apiService } from 'src/services/apiService';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const movieId = ctx.query.movieId;
    const response = await apiService.get<Movie>(`/movie/${movieId}`);

    return { props: { movie: response.data } };
}

interface Props {
    movie: Movie;
}

const MoviePage: NextPage<Props> = ({ movie }) => {
    return <h1>{movie.title}</h1>;
};

export default MoviePage;
