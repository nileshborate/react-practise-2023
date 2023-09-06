import React, { useState } from 'react'

const App = () => {
    let [name,setName] = useState("")
    const InputEvent = (e) => {
        console.log("Name :",e.target.name);
        console.log("Value :",e.target.value);
        setName(e.target.value)
    }
    const ButtonEvent = (e) => {
        console.log("Button : ",e.target);
    }
  return (
    <>
        <div>
            <h1>Hello {name}</h1>
            <input type="text" onChange={InputEvent} name="myname"/> <br /><br />
            <button onClick={ButtonEvent}>Click Me</button>
        </div>
    </>
  )
}

export default App