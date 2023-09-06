import React, { useState } from 'react'

const App = () => {
    let [count,setCount] = useState(3)
    const IncrementNumber = () => {
        setCount(++count)
    }
    const DecrementNumber = () => {
        setCount(--count)
    }
  return (
    <>
        <h1>{count}</h1>
        <button onClick={IncrementNumber}>Inc</button>
        <button onClick={DecrementNumber}>Dec</button>
    </>
  )
}

export default App