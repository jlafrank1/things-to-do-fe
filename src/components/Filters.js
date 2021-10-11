import React from 'react'
import {useState, useEffect} from 'react'
import Results from './Results'

const Filters = (props) => {
  // ideally, these will dynamically populate for each category in array [type]
  // set an array of types
  // for each type
  // create a function and API fetch

  const types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

  const [activity, setActivity] = useState('Bored?')

  const getImBoredResult = async () => {
    const newResult = await fetch('http://www.boredapi.com/api/activity/')
    const parsedResult = await newResult.json()
    const {key, activity} = parsedResult
    setActivity(activity)
    }

    useEffect(()=> {
      setActivity()
    }, [])

    const typeButton = types.map((type) => (
      <><button>{type}</button></>
    ))

  return (
    <>
      <button onClick={getImBoredResult}>I'm Bored</button>

      <br/>{typeButton}

      <Results activity={activity}/>
    </>
  )
}

export default Filters
