import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateNote from './CreateNote'
import Note from './Note'

const App = () => {
  const [listNote,setListNote] = useState([])

  const addNote = (note) => {
    console.log("add note by app.js :",note);

    setListNote((prevData)=>{
      return [...prevData,note]
    })
  }

  const deleteNote = (id) => {
    console.log("delete call :",id);
    const newArray = listNote.filter((obj,index)=>{
      return index !== id;
    })
    setListNote(newArray)
  }
  return (
    <>
       <Header />
       <CreateNote passNote = {addNote}/>
        
        {
          listNote.map((val,index)=>{
            return <Note 
                      id={index}
                      title={val.title}
                      content={val.content}
                      deleteItem = {deleteNote}
                    />
          })
        }
       
     
       <Footer />
    </>
  )
}

export default App