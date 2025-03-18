import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Inicio from '../components/Inicio'
import Login from '../components/Login'



const AppRouter = () => {



  return (
    <>
       <Routes>
         <Route path='/' element={<Login />}/>
        </Routes> 
        <NavBar />
    </>
)
}

export default AppRouter