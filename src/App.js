import './App.css'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Filters from './components/Filters'
import Results from './components/Results'


function App() {

  const getNewResult = async () => {
    const newResult = await fetch('http://www.boredapi.com/api/activity/')
    console.log(newResult)

    const parsedResult = await newResult.json()
    console.log(parsedResult)

    const {key, activity} = parsedResult

    console.log(key, activity)
  }



  return (
    <div>
      <Intro/>
      <Filters/>
      <Results/>

      <br/><button onClick ={getNewResult}>I'm Bored</button>

      <Footer/>
    </div>
  )
}

export default App;
