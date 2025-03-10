import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Inicio from '../components/Inicio'



const AppRouter = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>

    </>
  )
}

export default AppRouter