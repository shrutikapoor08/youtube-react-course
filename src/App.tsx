
import './App.css'
import TrendingNow from './components/TrendingNow'
import Hero from './components/Hero'



function App() {
  return (
    <main>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Hero />
        <TrendingNow />
      </div>
    </main>
  )
}

export default App
