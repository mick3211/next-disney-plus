export interface Movie {
    id: number;
    original_title: string;
    adult?: boolean;
    backdrop_path?: string;
    poster_path: string;
    original_language?: string;
    title?: string;
    overview: string;
    popularity?: string;
    release_date: string;
    vote_average?: number;
}
