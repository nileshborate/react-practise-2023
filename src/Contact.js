import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
  return (
    <>
        <div>Contact</div>
        <button onClick={()=>navigate("/info",{state:{val:10,name:'Nilesh'}})}>Go to Info</button>
        
    </>
  )
}

export default Contact