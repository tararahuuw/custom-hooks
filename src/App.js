import React from 'react'
import useTimer from "./useTimer"

const App = () => {
  const {countdown, reset} = useTimer();
  return (
    <div style = {{textAlign: 'center'}}>
      <h1>Challenge Front End Forky</h1>
      {countdown >= 0 ? <h3>Time : {countdown}</h3> : reset()}
      <button onClick = {() => reset()}>Reset</button>
    </div>
  )
}

export default App