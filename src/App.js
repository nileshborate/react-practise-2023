import React, { useState } from 'react'
import Lists from './components/Lists'

const App = () => {
    
    const [inputList,setInputList] = useState("")
    const [items,setItems] = useState([])

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }
    const buttonEvent = () => {
        setItems((oldItem) => {
            return [...oldItem,inputList]
        })
        setInputList("")
    }
  return (
    <>
       <div className='main-div'>
            <div className='center-div'>
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder='Add a Item' onChange={itemEvent} value={inputList}/>
                <button onClick={buttonEvent}>+</button>
                {/* <ol>
                   {
                    items.map((val)=>{
                        return <li>{val}</li>
                    })
                   }
                </ol> */}
                <ol>
                    {
                    items.map((val)=>{
                        return <Lists text={val} />
                    })
                   }
                </ol>
            </div>
       </div>
    </>
  )
}

export default App