
import MovieList from "./MovieList";

const TrendingNow = ({ movies }) => {
    return (
        <div className="px-6 mt-6">
            <h3>Trending Now</h3>

            <div className="container mx-auto my-4">

                <MovieList movies={movies} />

            </div>
        </div>
    );
};

export default TrendingNow;
