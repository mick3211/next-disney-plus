import { useContext } from 'react';
import { Movie } from 'src/@types/movie';
import { apiService } from 'src/services/apiService';
import useSWR from 'swr';
import { CurrentUserContext } from '../useAuth';

const getPopularMovies = async () => {
    const response = await apiService.get<{ results: Movie[] }>(
        '/discover/movie',
        {
            params: {
                region: 'BR',
                page: '1',
                with_watch_providers: '337',
                watch_region: 'BR',
            },
        }
    );

    return response.data.results;
};

const getActionMovies = async () => {
    const response = await apiService.get<{ results: Movie[] }>(
        '/discover/movie',
        {
            params: {
                region: 'BR',
                page: '1',
                with_watch_providers: '337',
                with_genres: '28',
                watch_region: 'BR',
            },
        }
    );

    return response.data.results;
};

const getFantasyMovies = async () => {
    const response = await apiService.get<{ results: Movie[] }>(
        '/discover/movie',
        {
            params: {
                region: 'BR',
                page: '2',
                with_watch_providers: '337',
                with_genres: '14',
                watch_region: 'BR',
            },
        }
    );

    return response.data.results;
};

const getComedyMovies = async () => {
    const response = await apiService.get<{ results: Movie[] }>(
        '/discover/movie',
        {
            params: {
                region: 'BR',
                page: '1',
                with_watch_providers: '337',
                with_genres: '35',
                watch_region: 'BR',
            },
        }
    );

    return response.data.results;
};

export function useIndex() {
    const { user } = useContext(CurrentUserContext);

    if (!user) return {};

    const { data: popularMovies } = useSWR('popularMovies', getPopularMovies);
    const { data: actionMovies } = useSWR('actionMovies', getActionMovies);
    const { data: fantasyMovies } = useSWR('fantasyMovies', getFantasyMovies);
    const { data: comedyMovies } = useSWR('comedyMovies', getComedyMovies);

    return { popularMovies, actionMovies, fantasyMovies, comedyMovies };
}
