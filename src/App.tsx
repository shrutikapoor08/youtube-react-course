
import './App.css'
import Header from './components/Header'
import TrendingNow from './components/TrendingNow'
import Hero from './components/Hero'
import useSearchStore from "./store/searchStore";
import MovieCard from './components/MovieCard';

function App() {
  const results = useSearchStore(state => state.results)
  console.log("Search results:", results);
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        {results.length > 0 ?
          (<div className='mt-8 p-8 grid grid-cols-fluid gap-6'>
            {results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>)
          :
          <>
            <Hero />
            <TrendingNow />
          </>}
      </div>
    </main>
  )
}

export default App
