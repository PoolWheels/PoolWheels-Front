import { Autocomplete, FormLabel, TextField } from "@mui/material";
import { React, useEffect, useState, useContext } from "react";
import {AdapterDayjs, LocalizationProvider, StaticTimePicker } from "@mui/x-date-pickers";
//import dayjs from 'dayjs';

function NewTripView() {
  const url = 'http://localhost:8080/api/v1/trip';

  const options = [
    { label: '$2000', id: 1 },
    { label: '$5000', id: 2 },
    { label: '$7000', id: 3 },
  ];

  //const [value, setValue] = React.useState(dayjs('2022-04-07'));


  return (
    <div className="component">
      <h1>Agregar Nuevo Viaje</h1>

      <FormLabel>Dirreción de Salida</FormLabel>
      <TextField
        variant="outlined"
        name="Initial Address"
      ></TextField>
      <br></br>

      <FormLabel>Dirreción de Destino</FormLabel>
      <TextField
        variant="outlined"
        name="Initial Address"
      ></TextField>
      <br></br>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticTimePicker
        displayStaticWrapperAs="mobile"
        //value={value}
        // onChange={(newValue) => {
        //   setValue(newValue);
        // }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

      <Autocomplete
        disablePortal
        id="price"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Precio" />}
      />
    </div>
  )

}

export default NewTripView;