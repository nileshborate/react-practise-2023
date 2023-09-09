import React from 'react'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Menu from './Menu'
import Info from './Info'

const App = () => {

  return (
    <>
      <Menu />
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<Error />} />
       </Routes>
    </>
  )
}

export default App