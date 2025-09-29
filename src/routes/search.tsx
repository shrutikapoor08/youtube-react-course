import { createFileRoute } from '@tanstack/react-router'
// ...existing code...
import { useQuery } from '@tanstack/react-query'
import type { UseQueryOptions } from '@tanstack/react-query'
import MovieCard from '../components/MovieCard'
import useSearchStore from '@/store/searchStore'
import useBaseMovieStore from '@/store/moviesStore'
import performSearch from '@/lib/performSearch'
export const Route = createFileRoute('/search')({
    component: SearchComponent,
})

function SearchComponent() {
    const search = Route.useSearch() as Record<string, string | undefined>;
    const movie = search.movie ?? '';

    const results = useSearchStore(state => state.results);


    return (
        <div className='container relative mx-auto mt-6 max-w-6xl px-6'>
            <h2 className='text-2xl font-semibold mt-6'>Search Results for "{movie}"</h2>

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
