import './App.css'

import {useState, useEffect} from 'react'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Filters from './components/Filters'
import Results from './components/Results'


function App() {

  const [activity, setActivity] = useState([])

  const getNewResult = async () => {
    const newResult = await fetch('http://www.boredapi.com/api/activity/')
    console.log("new result", newResult)

    const parsedResult = await newResult.json()
    console.log("parsed result", parsedResult)

    const {key, activity} = parsedResult
    console.log("key and activity", key, activity)

    setActivity(activity)
    }

    useEffect(()=> {
      setActivity()
    }, [])

  return (
    <div>
      <Intro/>
      <Filters/>
      <Results activity={activity}/>

      <br/><button onClick ={getNewResult}>I'm Bored</button>

      <Footer/>
    </div>
  )
}

export default App;
