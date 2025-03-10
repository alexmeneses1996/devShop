import { AppBar, BottomNavigation, BottomNavigationAction, Button, IconButton, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Home, Search, ShoppingCart, AccountCircle, Person } from '@mui/icons-material';
import Cart from './Cart';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

export default function NavBar() {

  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src="https://res.cloudinary.com/dqgbna4ni/image/upload/v1741628604/ceai9i4i00s62pmk6jac.png" alt="Logo" style={{ height: 40 }} />
        </IconButton>

        <Button color="inherit">SHOP</Button>
        <Button color="inherit">COLLECTION</Button>


        <IconButton onClick={() => setCartOpen(!cartOpen)} aria-label="Toggle cart">
          <ShoppingCartIcon />
          {cartItems.length > 0 && <span>({cartItems.length})</span>}
        </IconButton>
        
        <IconButton >
          <PersonIcon />
        </IconButton>


      </Toolbar>
    </AppBar>
  );
}
