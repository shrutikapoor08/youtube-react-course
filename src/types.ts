export type Movie = {
    id: number;
    title: string;
};

export type MovieListProps = {
    movies: Movie[];
};

export interface TMDBResponse {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}