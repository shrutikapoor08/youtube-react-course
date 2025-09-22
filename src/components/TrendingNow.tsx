
import MovieList from "./MovieList";

import MOVIE_DATA from "../data/mockdata.json";

const TrendingNow = () => {
    return (
        <div className="px-6 mt-6">
            <h3>Trending Now</h3>

            {MOVIE_DATA?.results?.length > 0 ? (
                <MovieList movies={MOVIE_DATA.results} />
            ) : (
                <div> No movies were found </div>
            )}
        </div>
    );
};

export default TrendingNow;
