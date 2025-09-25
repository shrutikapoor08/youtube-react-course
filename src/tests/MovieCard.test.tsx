import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'

import MovieCard from '../components/MovieCard'
import type { Movie } from '../types'

const mockMovie: Movie = {
    id: 1,
    title: 'Inception',
    poster_path: '/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
}

// Mock the Card component that's imported via path alias so tests don't need path-mapping.
vi.mock('@/components/ui/card', () => ({
    Card: (props: any) => {
        // eslint-disable-next-line react/prop-types
        return React.createElement('div', props)
    },
}))


test('renders movie poster and is clickable', () => {
    render(<MovieCard movie={mockMovie} />)

    // MovieCard currently renders the poster image inside a button.
    const imgElement = screen.getByAltText(/Inception/i)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', expect.stringContaining(mockMovie.poster_path!))

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})
test('renders placeholder image when poster_path is null', () => {
    const movieWithNoPoster: Movie = { ...mockMovie, poster_path: null }
    render(<MovieCard movie={movieWithNoPoster} />)

    const imgElement = screen.getByAltText(/Inception/i)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', '/placeholder.svg')
})

test('renders placeholder image when poster_path is undefined', () => {
    const movieWithNoPoster: Movie = { ...mockMovie, poster_path: undefined }
    render(<MovieCard movie={movieWithNoPoster} />)

    const imgElement = screen.getByAltText(/Inception/i)
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', '/placeholder.svg')
})  
