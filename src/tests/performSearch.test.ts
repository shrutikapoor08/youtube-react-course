import performSearch from '../lib/performSearch'
import { expect, test } from 'vitest'


const movies = [
    { id: 1, title: 'Inception', poster_path: null },
    { id: 2, title: 'Interstellar', poster_path: null },
    { id: 3, title: 'The Matrix', poster_path: null },
]

test('returns empty array for empty query', () => {
    const res = performSearch('', movies as any)
    expect(res.data).toEqual([])
})

test('matches partial titles case-insensitively', () => {
    const res = performSearch('inter', movies as any)
    expect(res.data).toHaveLength(1)
    expect(res.data[0].title).toBe('Interstellar')
})

test('matches multiple titles', () => {
    const res = performSearch('in', movies as any)
    expect(res.data).toHaveLength(2)
    const titles = res.data.map(m => m.title)
    expect(titles).toContain('Inception')
    expect(titles).toContain('Interstellar')
})

test('returns empty array for no matches', () => {
    const res = performSearch('xyz', movies as any)
    expect(res.data).toEqual([])
})

test('trims whitespace in query', () => {
    const res = performSearch('  inception  ', movies as any)
    expect(res.data).toHaveLength(1)
    expect(res.data[0].title).toBe('Inception')
})



