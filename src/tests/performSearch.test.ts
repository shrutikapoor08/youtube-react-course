import performSearch from '../lib/performSearch'

describe('performSearch', () => {
    const movies = [
        { id: 1, title: 'Inception', poster_path: null },
        { id: 2, title: 'Interstellar', poster_path: null },
        { id: 3, title: 'The Matrix', poster_path: null },
    ]

    it('returns empty array for empty query', () => {
        const res = performSearch('', movies as any)
        expect(res.data).toEqual([])
    })

    it('matches partial titles case-insensitively', () => {
        const res = performSearch('inter', movies as any)
        expect(res.data).toHaveLength(1)
        expect(res.data[0].title).toBe('Interstellar')
    })
})
