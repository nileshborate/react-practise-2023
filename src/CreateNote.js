import React, { useState } from 'react'

const CreateNote = (props) => {
  const [note,setNote] = useState({
    title :'',
    content : ''
  })

  const InputEvent = (e) => {
    const name = e.target.name
    const value = e.target.value

    setNote((prevData) => {
      return{
        ...prevData,
        [name]:value
      }
    })
  }

  const addEvent = (e) => {
    e.preventDefault();
    console.log("note = ",note);
    props.passNote(note)
  }
  return (
    <div className="main_note">
        <form>
            <input type="text" 
              placeholder='Title' 
              name='title' 
              onChange={InputEvent}
              value={note.title}/>
            
            <textarea 
              placeholder='Write a Note...' 
              name='content' 
              onChange={InputEvent}
              value={note.content}>
            </textarea>
            <button className='add-button' onClick={addEvent}><span className='plus_sign'>+</span></button>
        </form>
    </div>
  )
}

export default CreateNote