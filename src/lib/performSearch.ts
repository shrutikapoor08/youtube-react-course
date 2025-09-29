import type { Movie } from "@/types";

export default function performSearch(query: string, results: Movie[]) {

    const q = query?.trim().toLowerCase();
    if (!q) return { data: [] as Movie[] };
    const data = results.filter(movie => movie.title.toLowerCase().includes(q));
    return { data };
}

