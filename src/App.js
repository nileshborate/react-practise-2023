import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber, decNumber } from './actions'

const App = () => {
  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch()
  return (
    <>
     <div className='container'>
      <h4>Increment and Decrement Counter Example</h4>
      <div className='quantity'>
        <button onClick={()=>dispatch(decNumber())}>Minus</button>
        <input type="text" value={myState}/>
        <button onClick={()=>dispatch(incNumber())}>Plus</button>
      </div>
     </div>
    </>
  )
}

export default App