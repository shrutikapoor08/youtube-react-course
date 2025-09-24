import { createFileRoute, useParams } from '@tanstack/react-router'
import MovieCard from '../components/MovieCard'
import useSearchStore from '@/store/searchStore'
export const Route = createFileRoute('/search')({
    component: SearchComponent,
})

function SearchComponent() {
    const { movie } = Route.useSearch();
    console.log('Search query:', movie);

    const results = useSearchStore(state => state.results);
    console.log('Search results from store:', results);


    return (
        <div className='container mx-auto px-4'>
            {results.length > 0 ?
                (<div className='mt-8 p-8 grid grid-cols-fluid gap-6'>
                    {results.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>)
                : "No results found"}
        </div>)
}
