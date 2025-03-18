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
                width: 500, // Tamaño del círculo
                height: 500,
                backgroundColor: "white",
                borderRadius: "50%", // Hace que sea un círculo
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: 2, // Agrega una sombra ligera
                border: "2px solid #ddd", // Borde opcional
            }}
            // height: 'calc(100vh - 4rem)',
            //     display: 'flex',
            //         justifyContent: 'center',
            //             alignItems: 'center',
            //                 backgroundColor: '#fff',
            //                     padding: '2rem',
            //                         borderRadius: '0.5rem',
            //                             boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            //                                 display: 'flex',
  >
    <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit}
    >
        <Typography sx={{display: 'flex', alignItems: "center",
                justifyContent: "center" }}>INGRESAR</Typography>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <TextField
                label="Email"
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
            }}
        >
            Ingresar
        </Button>
    </form>
  </Container >
  )
}

export default Login