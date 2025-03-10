import React, { useEffect, useState } from 'react'
import Logo from '../img/Logo.png'
import { Container, Divider, Grid, ToggleButtonGroup } from '@mui/material'
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

const Inicio = () => {
  const [collection, setCollection] = useState([]);
  // const [selectedSize, setSelectedSize] = useState('');
  useEffect(() => {
    fetch(``)
      .then(response => response.json())
      .then(data =>
        setCollection(data))

  }, []);


  const handleclick = () => {
    console.log('Diste click');


  }

  return (
    <Container
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        bgcolor: '#ffff'
      }}
    >
    
      <img src={Logo} style={{ width: '30%' }} onClick={handleclick} />
      <Box sx={{ padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant='h4'>{collection.name}</Typography>
        <Typography variant='h6'>{collection.price}</Typography>
        <Typography variant='h6'>Size</Typography>
        {/* <Box sx={{ display: "flex", justifyContent: "center", marginY: 2 }}>
          <ToggleButtonGroup
            value={selectedSize}
            exclusive
            onChange={handleSizeChange}
            aria-label="Tallas"
          >
            {product.sizes.map((size) => (
              <ToggleButton key={size} value={size} sx={{ marginX: 0.5 }}>
                {size}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box> */}
        <select>
          <option value="small">S</option>
          <option value="medium">M</option>
          <option value="large">L</option>
          <option value="extra-large">XL</option>
          <option value="double-extra-large">XXL</option>
        </select>

        <Typography variant='h9'>{collection.description}</Typography>
        <Button variant='contained' sx={{ backgroundColor: "#000", color: "#fff", "&:hover": { backgroundColor: "#333" } }}>Add to Cart</Button>
        <Button variant='contained' color='primary'>Buy it now</Button>
        
      </Box>
    </Container>
  )
}



export default Inicio