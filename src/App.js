import React, { useState } from 'react'
import Lists from './components/Lists'

const App = () => {
    
    const [inputList,setInputList] = useState("")
    const [items,setItems] = useState([])

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }
    const addEvent = () => {
        setItems((oldItem) => {
            return [...oldItem,inputList]
        })
        setInputList("")
    }

    const deleteItem = (id) => {
        const newData = items.filter((value,index)=>index !== id)

        setItems(newData)
    }
  return (
    <>
       <div className='main-div'>
            <div className='center-div'>
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder='Add a Item' onChange={itemEvent} value={inputList}/>
                <button onClick={addEvent}>+</button>
                {/* <ol>
                   {
                    items.map((val)=>{
                        return <li>{val}</li>
                    })
                   }
                </ol> */}
                <ol>
                    {
                    items.map((val,index)=>{
                        return <Lists
                                    id={index} 
                                    text={val} 
                                    delete={deleteItem} />
                    })
                   }
                </ol>
            </div>
       </div>
    </>
  )
}

export default App