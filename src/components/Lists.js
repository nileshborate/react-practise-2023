import React from 'react'

const Lists = (props) => {

  return (
    <div className='todo_style'>
      <i class="fa-solid fa-circle-xmark" onClick={()=>{
        props.delete(props.id)
      }}></i>      
      <li>{props.text}</li>
    </div>
  )
}

export default Lists