import { createFileRoute } from '@tanstack/react-router'
import MovieCard from '../components/MovieCard'
import performSearch from '@/lib/performSearch'

import type { TMDBResponse } from "@/types";


const API_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

export const Route = createFileRoute('/search')({
    component: SearchComponent,
    loader: async () => {
        const token = import.meta.env.VITE_TMDB_AUTH_TOKEN;
        const response = await fetch(
            API_URL,
            {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch movies: ${response.statusText}`);
        }
        const data = (await response.json()) as TMDBResponse;
        const movies = data.results;
        return {
            baseMovies: movies
        }
    }
})

function SearchComponent() {
    const search = Route.useSearch() as Record<string, string | undefined>;
    const { baseMovies } = Route.useLoaderData();
    const movie = search.movie ?? '';

    const results = performSearch(movie ?? '', baseMovies).data;

    return (
        <div className='container relative mx-auto mt-6 max-w-6xl px-6'>
            {movie && <h2 className='text-2xl font-semibold mt-6'>Search Results for "{movie}"</h2>}

            <div aria-live="polite" aria-atomic="true" className="sr-only">
                {movie ? `${results.length} results for ${movie}` : `${results.length} results`}
            </div>

            {results.length > 0 ?
                (<div className='mt-8 p-8 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    {results.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>)
                : "No results found"}
        </div>
    )
}
