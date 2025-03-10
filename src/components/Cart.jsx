import React from 'react';
import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cart = ({ cartItems, setCartItems },cartOpen ) => {
    //const [cartOpen, setCartOpen] = React.useState(false);

    const removeItemFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <Box>
            {cartOpen && (
                <Box sx={{ position: 'absolute', backgroundColor: 'white', border: '1px solid #ccc', padding: 2, zIndex: 1000 }}>
                    <Typography variant='h6'>Carrito</Typography>
                    <List>
                        {cartItems.length === 0 ? (
                            <ListItem>
                                <ListItemText primary='El carrito está vacío' />
                            </ListItem>
                        ) : (
                            cartItems.map((item) => (
                                <ListItem key={item.id}>
                                    <ListItemText primary={item.Name} secondary={`Precio: $${item.price}`} />
                                    <Button onClick={() => removeItemFromCart(item.id)} color="error">Eliminar</Button>
                                </ListItem>
                            ))
                        )}
                    </List>
                    <Button onClick={clearCart} color="secondary">Vaciar Carrito</Button>
                </Box>
            )}
        </Box>
    );
};

export default Cart;