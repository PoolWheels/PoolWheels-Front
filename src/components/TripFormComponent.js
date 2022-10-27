import React, { useState, useEffect } from 'react';
import { Grid, TextField, Paper, Box, Checkbox, Autocomplete, Stack, RadioGroup, Radio, FormControl, FormLabel, FormControlLabel } from "@mui/material";
import Button from "./Button";
import { useAuth } from '../contexts/Auth';
import { type } from '@testing-library/user-event/dist/type';

function TripForm() {

    const options = [
        { label: '$2000', id: 1 },
        { label: '$5000', id: 2 },
        { label: '$7000', id: 3 },
    ];

    //const auth = useAuth();

    const [token, setToken] = useState({
        token:
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzVhOTE3NzRkNWY1OTI0NzM0NjAyMGYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY5MDkzNzYsImV4cCI6MTY2NjkxMjk3Nn0.FMT_cTbjBGwXblHWW_yv3MmzDB3jhEB6fRnNHzg1-G0",
      });

    const [formData, setFormData] = useState({
        "driver": "634b0439a2992f7d8e9f1046",
        "addrInit": "",
        "addrFin": "",
        "availableSeats": "",
        "passengers": ["634b051b464bb818bb2e611f"],
        "initTime": "",
        "finTime": "13:30",
        "stops": { "Stop 1": "2000"},
        "active": true
    })

    function handleChange(event){
        const {name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name] : value
        }));
    }

    async function postTravel(){
        try{
            var response = await fetch('http://localhost:8080/api/v1/trip', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization' : 'Bearer ' + token.token
                },
                body: JSON.stringify(formData)});
            var data = await response.json();
            console.log(data)
        }catch(e){
            console.log(e.message);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postTravel();
        // const data = new FormData(event.currentTarget);
        // console.log(data)

        // try {
        //     const idUser = '635a91774d5f59247346020f'
        //     console.log(data)
            
        //     console.log(
        //         {
        //             "driver": "634b0439a2992f7d8e9f1046",
        //             "addrInit": "C.C Santa Fe",
        //             "addrFin": "ECI",
        //             "availableSeats": "3",
        //             "passengers": ["634b051b464bb818bb2e611f"],
        //             "initTime": "13:00",
        //             "finTime": "13:30",
        //             "stops": { "Stop 1": "2000"},
        //             "active": true
        //         }
        //     )

        //     const body = JSON.stringify({
        //         'driver': idUser,
        //         'addrInit': data.get('initialAddress'),
        //         'addrFin': data.get('finalAddress'),
        //         'availableSeats': data.get('availableSeats'),
        //         'passengers': [],
        //         'initTime' : data.get('hour'),
        //         'finTime' : '14:30',
        //         'stops': [data.get('stops'), data.get('price')],
        //         'active' : true
        //     })
        //     const requestOptionsToInfo = {
        //         method: 'POST',
        //         headers:
        //         {
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Origin': '*',
        //             'Authorization': 'Bearer ' + token.token
        //         },
        //         body: body
        //     }


        //     const urlTrips = 'http://localhost:8080/api/v1/trip'
        //     console.log(requestOptionsToInfo)


        //     const asyncGetpaymethuser = async () => {
        //         try {
        //             const response = await fetch(urlTrips, requestOptionsToInfo);
        //             const data = await response.json().then(value => {
        //                 console.log(value)
        //             });
        //             return data;
        //         } catch (error) {
        //             console.log(error)
        //         }
        //     }
        //     asyncGetpaymethuser();
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (

        <div >
            <Paper>
                <h1>Agregar Nuevo Viaje</h1>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <p>Dirreción de Salida: </p>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="initialAddress"
                        name="addrInit"
                        value={formData.addrInit}
                        onChange={handleChange}
                    />
                    <br></br>
                    <p>Dirreción de Destino: </p>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="addrFin"
                        id="finalAddress"
                        value={formData.addrFin}
                        onChange={handleChange}
                    />
                    <br></br>
                    <p>Cupos Disponibles: </p>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="availableSeats"
                        id="availableSeats"
                        value={formData.availableSeats}
                        onChange={handleChange}
                    />
                    <br></br>
                    <p>Paradas durante el trayecto: </p>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="stops"
                        id="stops"
                    />
                    <br></br>
                    <Autocomplete
                        disablePortal
                        id="price"
                        name="price"
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Precio" />}
                    />
                    <br></br>
                    <p>Hora de Salida</p>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="initTime"
                        id="hour"
                        value={formData.initTime}
                        onChange={handleChange}
                    />
                    <br></br>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        content='Create'
                    >

                    </Button>
                </Box>
            </Paper>

        </div>
    )
}

export default TripForm;
