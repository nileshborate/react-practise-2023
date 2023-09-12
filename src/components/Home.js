import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const contacts =  useSelector((state) => state)
  console.log("contacts = ",contacts);
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 my-5 text-end">
                    <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
            </div>
            <div className="col-md-6 mx-auto">
                <h1>Welcome to Redux</h1>
            </div>
        </div>
    </div>
  )
}

export default Home