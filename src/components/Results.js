import React from 'react'

const Results = (props) => {
  console.log("props", props.activity)
  return (
    <>
      <h2>Learn how to fold a paper crane</h2>
      <br/>
      <p>Email this result</p>
      <button>Email</button>

    </>
  )
}

export default Results
