import React from 'react'
import Navbar from './layouts/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ContactUsPage from './pages/ContactUsPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        {/* home page */}
        <Route exact path='/' element={<HomePage />} />
        {/* about us page */}
        <Route exact path='/about' element={<AboutUsPage />} />
        {/* contact us page */}
        <Route exact path='/contact' element={<ContactUsPage />} />
      </Routes>
    </>
  )
}

export default App
