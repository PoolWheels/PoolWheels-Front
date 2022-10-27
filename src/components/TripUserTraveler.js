import React, { useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import '../styles/TripUserTraveler.scss'
import Button from './Button';
import Modal from './ModalDriver.jsx'

function TripTraveler(props) {
	const [openModal, setOpenModal] = useState(false);
	const [driverInfo, setDriverInfo] = useState(false);

	const formatStops= (stops) =>{
		const arrayStops = []

		for (let key in stops){
			arrayStops.push([key,stops[key]]);
		}
		return arrayStops
	}

	const getDriver = async (id) => {
		return new Promise(resolve => {
			const requestOptionsToDriver = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzRiMDQzOWEyOTkyZjdkOGU5ZjEwNDYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY4ODEwNzEsImV4cCI6MTY2Njg4NDY3MX0.q__P0-dLbqJlcAkwM99ySousdeh8xaylaJ6EAjETwbc",
        },
      }; 
			const urlgetdriver = 'http://localhost:8080/api/v1/user/driverusers/' + id
			return resolve(
                fetch(urlgetdriver, requestOptionsToDriver).then(res => res.json()).then(json => {
					setDriverInfo(json);
					setOpenModal(true);
                    return json;
                })
            );
        });
	};	

	return (
    <Card variant="outlined">
      <CardContent className="divgeneral">
        <div className="divDriver">
          <button
            onClick={(e) => getDriver(props.driver)}
            className="modalButton driverBoton"
          >
            🚦 CONDUCTOR
          </button>
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            driver={driverInfo}
          />
        </div>
        <Typography className="addrInit">
          PUNTO DE PARTIDA: {props.addrInit}
        </Typography>
        <Typography className="addrFin">
          PUNTO FINAL: {props.addrFin}
        </Typography>
        <Typography className="seats">
          PUESTOS DISPONIBLES: {props.availableSeats}
        </Typography>
        {formatStops(props.stops).map((stop, index) => (
          <p className="stop" key={index}>
            {stop[0] + ": " + stop[1]}
          </p>
        ))}
        <Typography className="initTime">
          {" "}
          HORA DE SALIDA: {props.initTime}
        </Typography>
        <div className="divBoton">
          <Button
            className="boton"
            align="center"
            type="submit"
            onClick={(e) => props.func(props.id)}
            content={props.contentButton}
          ></Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default TripTraveler;