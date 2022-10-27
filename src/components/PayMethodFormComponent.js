import React, {useState, useEffect} from 'react';
import { Grid, TextField, Paper, Box, Checkbox, Autocomplete, Stack, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel} from "@mui/material";
import "../styles/Paymethods.scss";
import Button from './Button.js';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';
import { type } from '@testing-library/user-event/dist/type';




export default function Paymethodform(){

    const {values, setvalues}= useState();
    const [submit, setSubmit] = useState({submit : false});
    const auth = useAuth();
    const navigate = useNavigate();
    const banks = ['Bancolombia', 'Davivienda', 'Itau', 'Colpatria', 'Falabella', 'Banco de Bogota', 'Av Villas', 'Nequi', 'Daviplata'];
    
    const handleInputChange  = e=>{
        const {name, value} = e.target
        setvalues({
            ...values,
            [name]:value
        })
    }

    const redirect = () => {
        navigate("/profile/paymethods");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        

        try {
            const idUser = '634b051b464bb818bb2e611f'
            console.log(data)
            const bodies = JSON.stringify({
                "owner":idUser, 
                'number':data.get('number'), 
                'bank':data.get('bank'), 
                'expirationDate':data.get('expirationDate'), 
                'type':data.get('type')
            })
            const requestOptionsToInfo = {
                method: 'POST',
                headers: 
                {'Content-Type': 'application/json', 
                'Access-Control-Allow-Origin': '*', 
                'Authorization': 'Bearer ' + auth.token}, 
                body: bodies
                }
            
            
            const urlTrips = 'http://localhost:8080/api/v1/paymethod/'
            console.log(requestOptionsToInfo)


            const asyncGetpaymethuser = async () => {
                try {
                    const response = await fetch(urlTrips, requestOptionsToInfo);
                    const data = await response.json().then(value => {
                        console.log(value)
                    });
                    return data;
                } catch(error) {
                        console.log(error)
                } 
            }
            asyncGetpaymethuser();
        }catch(error) {
            console.log(error)
        } 

        redirect()
    }

    return (
        <div >
            <Paper>
                <h1>Inscripción Tarjeta Nueva</h1>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <p>Dueño del producto</p>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="owner"
                        label="Nombre completo"
                        name="owner"
                        autoComplete="owner"
                        autoFocus
                    />
                    <p>Ingresar numero de tarjeta:</p>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="number"
                        label="Numero de tarjeta(numero de telefono en caso de Nequi o daviplata)"
                        type="cardnumber"
                        id="number"
                        autoComplete="current-number"
                    />
                    <p>ingresar el banco del producto(Nequi o Daviplata o banco tradicional)</p>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="bank"
                        label="Banco del metodo de pago"
                        type="bank"
                        id="bank"
                        autoComplete="current-bank"
                    />
                    <p>ingresar fecha de expiracion</p>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="expirationDate"
                        label="fecha de expiracion (mm/yy)"
                        type="expirationDate"
                        id="expirationDate"
                        autoComplete="current-expirationDate"
                    />
                    <p>Tipo de metodo de pago</p>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="type"
                        label="ingrese tipo de pago (Debit, Credit, VirtualWallet)"
                        type="type"
                        id="type"
                        autoComplete="current-type"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        content = 'Add++'
                    >
                        
                    </Button>
            </Box>
            </Paper>
            
        </div>
        
    )
}