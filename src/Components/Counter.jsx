import React, { useState } from "react"


function Counter() {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
    if(counter<=0){
      setCounter(0)

    }
  }

  function reset() {
    setCounter(0)
  }

  return (
    <div className="text-center m-5 p-5">
      <h1>Counter Application</h1>
      <h1>{counter}</h1>
      <div className="align-items-center">
        <button onClick={increment} className="btn btn-success m-2">
          INCREMENT
        </button>
        &nbsp;
        <button onClick={decrement} className="btn btn-danger m-2">
          DECREMENT
        </button>
        &nbsp;
        <button onClick={reset} className="btn btn-dark m-2">
          RESET
        </button>
      </div>
    </div>
  )
}

export default Counter
