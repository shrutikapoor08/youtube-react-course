import { create } from 'zustand'
import type { Movie } from '../types'

type SearchState = {
    query: string
    results: Movie[]
    setQuery: (q: string) => void
    setResults: (r: Movie[]) => void
}

export const useSearchStore = create<SearchState>((set) => ({
    query: '',
    results: [] as Movie[],
    setQuery: (q: string) => set({ query: q }),
    setResults: (r: Movie[]) => set({ results: r }),
}))

export default useSearchStore
