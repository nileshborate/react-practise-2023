import React from 'react'
import { ToastContainer } from "react-toastify"
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/add" element={<AddContact/>}></Route>
      <Route path="/edit/:id" element={<EditContact />}></Route>
      </Routes>
    </>
  )
}

export default App