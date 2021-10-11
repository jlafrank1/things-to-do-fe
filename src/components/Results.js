import React from 'react'
import EmailResults from './EmailResults'

const Results = (props) => {
  // console.log("props", props.activity)
  const activity = props.activity
  return (
    <>
      <h2>{activity}</h2>
      <EmailResults activity={activity}/>

    </>
  )
}

export default Results
