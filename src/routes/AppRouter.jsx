import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Inicio from '../components/Inicio'



const AppRouter = () => {



  return (
    <>
       <Routes>
         <Route path='/' element={<Inicio />}/>
        </Routes> 
        <NavBar />
    </>
)
}

export default AppRouter