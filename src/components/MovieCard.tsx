import { Card } from "@/components/ui/card"
import type { Movie } from '../types'
const TMDB_IMAGES_ASSET_URL = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <button onClick={() => console.log('Movie clicked: ', movie?.title)}>
            <Card
                className="rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-xl outline-blue-200 p-0 lg:px-2 border-0 w-[7rem] h-[9.8rem] md:w-[11.25rem] md:h-[15.75rem]"
            >
                <img
                    src={movie?.poster_path ? TMDB_IMAGES_ASSET_URL + movie?.poster_path : "/placeholder.svg"}
                    alt={movie?.title || "Movie poster"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-10"
                    loading="lazy"
                />
            </Card>
        </button>
    )
}

export default MovieCard;