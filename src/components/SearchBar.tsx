import { Search } from "lucide-react";
import { useState } from "react";
import MOVIE_DATA from "../data/mockdata.json";
import type { Movie } from "../types";


export default function SearchBar() {
    const [shouldShowSearch, setShouldShowSearch] = useState(false);

    const searchQuery = (query: string) => {
        // Implement your search logic here
        const results = MOVIE_DATA.results.filter((movie: Movie) =>
            movie.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Search results:", results);
    };


    const handleSearchQueryChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const query = event.target.value;
        console.log("Search query:", query);

        searchQuery(query);
    };

    return (
        <div className="flex items-center gap-2">
            {shouldShowSearch && (
                <input
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="text"
                    placeholder="Search"
                    onChange={handleSearchQueryChange}
                />
            )}

            <button onClick={() => setShouldShowSearch(true)}>
                <Search />
            </button>
        </div>
    );
}
