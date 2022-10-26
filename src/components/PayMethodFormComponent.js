import React, {useState, useEffect} from 'react';
import { Grid, TextField, Paper,  Autocomplete, Stack, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel} from "@mui/material";
import { LocalizationProvider,  DatePicker } from '@mui/x-date-pickers'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs';
import "../styles/Paymethods.scss";
import Button from './Button.js';


const initialFvalues = {
    Type: '',
    owner: '',
    number:'',
    bank: '',
    expirationDate: new Date()
}



export default function Paymethodform(){

    const {values, setvalues}= useState();
    const banks = ['Bancolombia', 'Davivienda', 'Itau', 'Colpatria', 'Falabella', 'Banco de Bogota', 'Av Villas', 'Nequi', 'Daviplata'];
    const handleInputChange  = e=>{
        const {name, value} = e.target
        setvalues({
            ...values,
            [name]:value
        })
    }

    return (
        <div >
            <Paper>
                <h1>Inscripción Tarjeta Nueva</h1>
                <form ClassName = 'paymethodform'>
                    <Grid item xs = {6}>
                    <FormControl>
                            <FormLabel>Tipo de metodo de pago</FormLabel>
                                <RadioGroup
                                row
                                name = "paymethodtype"
                                value = {values.type}
                                onChange = {handleInputChange}>
                                    <FormControlLabel value = "Bank" control = {<Radio />} label = "Bank Account" />
                                    <FormControlLabel value = "Nequi" control = {<Radio />} label = "Nequi" />
                                    <FormControlLabel value = "DaviPlata" control = {<Radio />} label = "DaviPlata" />
                                </RadioGroup>
                        </FormControl>
                        <br></br>
                        <br></br>
                        <FormLabel>Selecciona tu Banco</FormLabel>
                        <br></br>
                        <br></br>
                        <Stack spacing = {2}>
                            <Autocomplete
                            disablePortal
                            sx={{width:300}}
                            options = {banks} 
                            renderInput={(params) => <TextField {...params}/>} 
                            labels = 'Bancos' 
                            name = "Numbercard"
                            value = {values.number}
                            >
                            </Autocomplete>
                        </Stack>

                        <br></br>
                        <br></br>
                        <FormLabel>Nombre del dueño</FormLabel>
                        <br></br>
                        <br></br>
                        <TextField
                        variant = "outlined"
                        label = "Nombre completo"
                        name = "Owner full name"
                        value = {values.owner}
                        onChange = {handleInputChange}
                        />
                        <br></br>
                        <br></br>
                        <FormLabel>numero de metodo de pago</FormLabel>
                        <br></br>
                        <br></br>
                        <TextField
                        variant = "outlined"
                        label = "Numero"
                        name = "Numbercard"
                        value = {values.number}
                        onChange = {handleInputChange}
                        />
                        <br></br>
                        <br></br>
                        <FormLabel>fecha de expiracion</FormLabel>
                        <br></br>
                        <br></br>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            views={['year', 'month']}
                            label="Mes y año"
                            minDate={dayjs('2012-03-01')}
                            maxDate={dayjs('2023-06-01')}
                            value={values.expirationDate}
                            onChange={(newValue) => {
                                setvalues(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} helperText={null} />}
                            />
                        </LocalizationProvider>
                    
                    </Grid>
                </form>
                <br></br>
                <br></br>
                <Button 
                id = "newpaymeth" content = "Add Payment method" type = "submit" ></Button>
            </Paper>
        </div>
    )
}