import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAuth } from '../../contexts/Auth';
import { useNavigate } from 'react-router-dom';
import '../../styles/base.scss';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export default function Register() {

    const auth = useAuth();
    const navigate = useNavigate();

    const redirect = () => {
        navigate("/");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        auth.login(data.get('email'), data.get('password'), redirect)
    }

    return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: "rgb(154,25,205)" }}>
            </Avatar>
            <Typography component="h1" variant="h5">
                Registrarse
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nombre"
                    name="name"
                    autoFocus
                />
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="Apellido"
                    name="lastname"
                    autoFocus
                />
                
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo Electrónico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="university"
                    label="universidad"
                    name="university"
                    autoFocus
                />
            <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="document"
                    label="Número de Documento de Identidad"
                    name="document"
                    autoFocus
                />
            <TextField

                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Número de Celular"
                    name="phone"
                    autoFocus
                />
                <AddToPhotosIcon
                type="submit"
                fullWidth
                id="photo"
                
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    
                    

                    
                </Button>
            </Box>
        </Box>
      </Container>
    );

}