import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Inicio from '../components/Inicio'
import Modal from '../components/Modal'



const AppRouter = () => {



  return (
    <>
       <Routes>
         <Route path='/' element={<Inicio />}/>
         <Route path='/Modal' element={<Modal />}/>
        </Routes> 
        <NavBar />
    </>
)
}

export default AppRouter