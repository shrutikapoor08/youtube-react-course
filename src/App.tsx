
import './App.css'
import TrendingNow from './components/TrendingNow'
import Hero from './components/Hero'

import { usePopularMovies } from './lib/usePopularMovies'


function App() {
  const { movies, error, loading } = usePopularMovies();

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!movies) return <div>No movies found.</div>

  return (
    <main>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Hero />
        <TrendingNow movies={movies} />

      </div>
    </main>
  )
}

export default App
