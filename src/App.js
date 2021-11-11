import { BrowserRouter as Router } from 'react-router-dom'
import { AllRoutes } from './components/routes/AllRoutes'
import { Header } from './components/pages/layout/Header'
import { Footer } from './components/pages/layout/Footer'
import CharactersState from './components/context/characters/CharactersState'
import EpisodesState from './components/context/episodes/EpisodesState'

const App = () => {
  return (
    <CharactersState>
      <EpisodesState>
        <Router>
          <div className='App'>
            <Header />
            <AllRoutes />
            <Footer />
          </div>
        </Router>
      </EpisodesState>
    </CharactersState>
  )
}

export default App
