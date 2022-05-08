import { GetServerSidePropsContext, NextPage } from 'next';
import { Movie } from 'src/@types/movie';
import { apiService, config } from 'src/services/apiService';
import { styled } from 'src/styles/stitches';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { formatDate } from 'src/services/dateService';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const movieId = ctx.query.movieId;
    const response = await apiService.get<Movie>(`/movie/${movieId}`);

    return { props: { movie: response.data } };
}

interface Props {
    movie: Movie;
}

const MoviePage: NextPage<Props> = ({ movie }) => {
    return (
        <main>
            <Gradient />
            <BgImage
                src={
                    config.base_url +
                    config.backdrop_sizes.original +
                    movie.backdrop_path
                }
            />
            <Container>
                <div>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieInfo>{movie.vote_average}</MovieInfo>
                    {' \u2022 '}
                    <MovieInfo>{formatDate(movie.release_date)}</MovieInfo>
                </div>
                <ButtonContainer>
                    <Button>
                        <FaPlay /> Assistir
                    </Button>
                    <Button dark>Trailer</Button>
                    <Button dark circular>
                        <FaPlus />
                    </Button>
                    <Button dark circular>
                        <HiUserGroup />
                    </Button>
                </ButtonContainer>
                <OverviewWrapper>{movie.overview}</OverviewWrapper>
            </Container>
        </main>
    );
};

export default MoviePage;

const Gradient = styled('div', {
    backgroundImage:
        'radial-gradient(at top right,transparent 0% , rgba(43,48,65,1) 70%)',
    height: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
});

const BgImage = styled('img', {
    height: '100vh',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -2,
});

const Container = styled('div', {
    mx: 'auto',
    paddingTop: '5rem',
    px: 16,
    color: '$textPrimary',
    display: 'flex',
    flexDirection: 'column',
    gap: 32,

    '@sm': {
        maxWidth: 640,
    },
    '@md': {
        maxWidth: 768,
    },
    '@lg': {
        maxWidth: 1024,
    },
    '@xl': {
        maxWidth: 1536,
    },
});

const MovieTitle = styled('h2', {
    fontSize: '2rem',

    '@sm': {
        fontSize: '3rem',
    },
});

const MovieInfo = styled('span', {
    color: '$textSecondary',
});

const ButtonContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
});

const OverviewWrapper = styled('p', {
    maxWidth: 800,
    fontSize: '$md',
    lineHeight: 1.6,
});

const Button = styled('button', {
    backgroundColor: '$textPrimary',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    px: 24,
    py: 16,
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    transitionProperty: 'color, backgroundColor, opacity',
    transitionDuration: '.2s',

    '&:hover': {
        opacity: '80%',
    },

    variants: {
        dark: {
            true: {
                backgroundColor: '$surface',
                color: '$textPrimary',
                border: '1px solid white',
            },
        },
        circular: {
            true: {
                borderRadius: '100%',
                padding: 12,

                '&:hover': {
                    backgroundColor: '$textPrimary',
                    color: 'black',
                },
            },
        },
    },
});
