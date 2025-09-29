import type { Movie, MovieListProps } from '../types'
import MovieCard from './MovieCard'
const MovieList = ({ movies }: MovieListProps) => {
    return (

        <ul className="flex overflow-x-scroll overflow-y-visible space-x-4 scrollbar-hide relative">
            {movies.map((movie: Movie) => (
                <li key={movie.id}>
                    <MovieCard movie={movie} />
                </li>
            ))}
        </ul>

    )

}

export default MovieList