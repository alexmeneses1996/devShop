import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Inicio from '../components/Inicio'
import Cart from '../components/Cart'



const AppRouter = () => {
  const [cartItems, setCartItems] = useState([]);



  return (
    <>
       <Routes>
         <Route path='/' element={<Inicio />}/>
        </Routes> 
        <NavBar />
        <Cart cartItems={cartItems} setCartItems={setCardItems} />
    </>
)
}

export default AppRouter