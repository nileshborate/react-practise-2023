import React from 'react'
import { useLocation } from 'react-router-dom';

const Info = () => {
    const { state } = useLocation();
  return (
    <>
        <div>Info</div>
        <h3>Val = {state.val}</h3>
        <h3>Name = {state.name}</h3>
    </>
    
)
}

export default Info