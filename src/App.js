import './App.css'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Filters from './components/Filters'
import Results from './components/Results'


function App() {
  return (
    <div>
      <Intro/>
      <Filters/>
      <Results/>
      <Footer/>
    </div>
  )
}

export default App;
