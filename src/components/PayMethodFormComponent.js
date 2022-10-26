import React, {useState, useEffect} from 'react';
import { Grid, TextField, Paper, Autocomplete, Stack, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel} from "@mui/material";
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
                <form ClassName = 'paymethodform'>
                    <Grid item xs = {6}>
                    <br></br>
                    <FormControl>
                            <FormLabel>type of payMethod</FormLabel>
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
                        <FormLabel>Choose your bank</FormLabel>
                        <br></br>
                        <Stack spacing = {2}>
                            <Autocomplete
                            disablePortal
                            sx={{width:300}}
                            options = {banks} 
                            renderInput={(params) => <TextField {...params}/>} 
                            labels = 'Banks' 
                            name = "Numbercard"
                            value = {values.number}
                            >
                            </Autocomplete>
                        </Stack>

                        <br></br>
                        <FormLabel>Name of owner</FormLabel>
                        <br></br>
                        <TextField
                        variant = "outlined"
                        label = "Full Name"
                        name = "Owner full name"
                        value = {values.owner}
                        onChange = {handleInputChange}
                        />
                        <br></br>
                        
                        <FormLabel>Number for the payment method</FormLabel>
                        <br></br>
                        <TextField
                        variant = "outlined"
                        label = "Card Number"
                        name = "Numbercard"
                        value = {values.number}
                        onChange = {handleInputChange}
                        />
                        <br></br>
                        
                    
                    </Grid>
                </form>
                <br></br>
                <Button 
                id = "newpaymeth" content = "Add Payment method" type = "submit" ></Button>
            </Paper>
        </div>
    )
}