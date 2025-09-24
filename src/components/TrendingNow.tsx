
import MovieList from "./MovieList";
import type { Movie } from '../types'

const TrendingNow = ({ movies }: { movies: Movie[] }) => {
    return (
        <>
            <h3 className="font-medium lg:text-2xl sm:text-xl">Trending Now</h3>

            <div className="mx-auto my-4">
                <MovieList movies={movies} />
            </div>
        </>
    );
};

export default TrendingNow;
