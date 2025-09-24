import { Card } from "@/components/ui/card"
import type { Movie } from '../types'
const TMDB_IMAGES_ASSET_URL = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (<Card className="rounded-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl outline-blue-200 p-0 lg:px-2 border-0 sm:w-[7rem] sm:h-[9.8rem] lg:w-[11.25rem] lg:h-[15.75rem]"
    >

        <img
            src={movie?.poster_path ? TMDB_IMAGES_ASSET_URL + movie?.poster_path : "/placeholder.svg"}
            alt={movie?.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 z-10"
        />
    </Card>)
}

export default MovieCard;