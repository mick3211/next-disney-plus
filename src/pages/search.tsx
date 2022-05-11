import { Header } from '@components/Header/Header';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Movie } from 'src/@types/movie';
import useDebounce from 'src/hooks/useDebounce';
import { apiService, config } from 'src/services/apiService';
import {
    ClearTextButton,
    MovieGrid,
    SearchInput,
    SearchInputWrapper,
} from 'src/styles/pages/search.styled';

const SearchPage: NextPage = () => {
    const [searchValue, setSearchValue] = useState(''),
        [movieList, setMovieList] = useState<Movie[] | null>(null);
    const debouncedSearchValue = useDebounce<string>(searchValue, 1000);

    useEffect(() => {
        if (debouncedSearchValue) {
            apiService
                .get<{ results: Movie[] }>('/search/movie', {
                    params: {
                        query: debouncedSearchValue,
                    },
                })
                .then(res => setMovieList(res.data.results));
        }
    }, [debouncedSearchValue]);

    return (
        <>
            <Header />

            <main>
                <SearchInputWrapper>
                    <SearchInput
                        placeholder="Título, personagem ou gêneros"
                        value={searchValue}
                        onChange={ev => setSearchValue(ev.target.value)}
                    />
                    {searchValue && (
                        <ClearTextButton
                            title="Limpar"
                            aria-label="Limpar texto"
                            onClick={() => setSearchValue('')}
                        />
                    )}
                </SearchInputWrapper>
                <MovieGrid>
                    {movieList &&
                        movieList.map(movie => (
                            <div key={movie.id}>
                                <Link href={`/movie/${movie.id}`}>
                                    <a>
                                        <Image
                                            src={
                                                config.base_url +
                                                config.backdrop_sizes[780] +
                                                movie.backdrop_path
                                            }
                                            width={320}
                                            height={180}
                                            alt={movie.title}
                                        />
                                    </a>
                                </Link>
                            </div>
                        ))}
                </MovieGrid>
            </main>
        </>
    );
};

export default SearchPage;
