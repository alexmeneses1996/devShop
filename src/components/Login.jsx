import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Container, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    }
    return (

        <Container
        
            sx={{
                width: 450, // Tamaño del círculo
                height: 450,
                backgroundColor: "white",
                borderRadius: "50%", // Hace que sea un círculo
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 2, // Agrega una sombra ligera
                border: "2px solid #ddd", // Borde opcional
            }}

  >
    <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
    >
        <Typography sx={{display: 'flex', alignItems: "center",
                justifyContent: "center" }}>INGRESO</Typography>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <TextField
                label="Usuario"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Contraseña</InputLabel>
            <FilledInput
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
        <Button sx={{ display: 'flex', alignItems: "center",
                justifyContent: "center", marginTop: '10px' }}>¿Olvidaste tu contraseña?</Button>

        <Button
            type="submit"
            sx={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#03ab87",
                borderRadius: "10px",
                border: "0",
                width: "358px",
                height: "44px",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                color: "white"
            }}
        >
            Ingresar
        </Button>
        <Button sx={{ display: 'flex', alignItems: "center",
                justifyContent: "center", marginTop: '10px' }}>Regístrate aquí</Button>
    </form>

  </Container >
  )
}

export default Login