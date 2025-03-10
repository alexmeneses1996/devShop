import { AppBar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Home, Search, ShoppingCart, AccountCircle } from '@mui/icons-material';


const navItems = [
  { id: 0, name: 'Home', path: '/home', icon: <Home /> },
  { id: 1, name: 'Search', path: '/search', icon: <Search /> },
  { id: 2, name: 'Orders', path: '/orders', icon: <ShoppingCart /> },
  { id: 3, name: 'Profile', path: '/profile', icon: <AccountCircle /> }
];

export default function NavBar() {
  return (
    <AppBar position="static">
    <BottomNavigation sx={{ position: 'fixed', bottom: 0, width: '100vw', zIndex: 1000, justifyContent:'center' }}>
      {navItems.map((item) => (
        <BottomNavigationAction
          key={item.id}
          label={item.name}
          icon={item.icon}
          sx={{ '&.active': { color: 'primary.main' } }} // Cambia color al estar activo
        />
      ))}
    </BottomNavigation>
    </AppBar>
  );
}
