import React  from 'react'
import Logo from '../img/Logo.png'
import { Container } from '@mui/material'
import { getImageURL } from '../helpers/mediaUpload'

const Inicio = () => {

    const handleclick= ()=>{
        console.log('Diste click');
      
        
    }

    const handleUpload = async (e) => {
        console.log(e.target.files[0]);
        const file = await getImageURL(e.target.files[0])
        console.log(file)
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
      <input type='file' onChange={handleUpload}/>
        
        <img  src={Logo} style={{width: '30%'}}  onClick={handleclick}/>
    </Container>
  )
}



export default Inicio