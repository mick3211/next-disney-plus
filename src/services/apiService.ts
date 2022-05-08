import axios from 'axios';

export const apiService = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        language: 'pt-BR',
    },
});

export const config = {
    base_url: 'http://image.tmdb.org/t/p/',
    secure_base_url: 'https://image.tmdb.org/t/p/',
    backdrop_sizes: {
        300: 'w300',
        780: 'w780',
        1280: 'w1280',
        original: 'original',
    },
    poster_sizes: {
        92: 'w92',
        154: 'w154',
        185: 'w185',
        342: 'w342',
        500: 'w500',
        780: 'w780',
        original: 'original',
    },
    profile_sizes: {
        45: 'w45',
        185: 'w185',
        632: 'h632',
        original: 'original',
    },
};
