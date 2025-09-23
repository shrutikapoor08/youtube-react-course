
import MovieList from "./MovieList";

import MOVIE_DATA from "../data/mockdata.json";

const TrendingNow = () => {
    return (
        <div className="px-6 mt-6">
            <h3>Trending Now</h3>

            <div className="container mx-auto my-4">
                {MOVIE_DATA?.results?.length > 0 ? (
                    <MovieList movies={MOVIE_DATA.results} />
                ) : (
                    <div> No movies were found </div>
                )}
            </div>
        </div>
    );
};

export default TrendingNow;
