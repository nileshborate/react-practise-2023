import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expanded-lg navbar-dark bg-dark'>
        <Link to="/" className="navbar-brand ms-2">Contact App</Link>
    </nav>
  )
}

export default Navbar