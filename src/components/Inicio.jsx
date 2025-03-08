import React  from 'react'
import Logo from '../img/Logo.png'
import { Container } from '@mui/material'

const Inicio = () => {

    const handleclick= ()=>{
        console.log('Diste click');
      
        
    }

  return (
    <Container
    sx={{
      height: '100vh',
      width:'100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
      bgcolor: '#FFE031'
    }}
     >
        
        <img  src={Logo} style={{width: '30%'}}  onClick={handleclick}/>
    </Container>
  )
}



export default Inicio