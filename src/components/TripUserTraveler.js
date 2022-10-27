import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import '../styles/TripUserTraveler.scss'
import Button from './Button';

function TripTraveler(props) {
	const formatStops= (stops) =>{
		const arrayStops = []
		for (let key in stops){
			arrayStops.push([key,stops[key]]);
		}
		return arrayStops
	}

	return (
		<Card variant="outlined">
      		<CardContent>
				<Typography className="driver"> CONDUCTOR: {props.driver}</Typography>
				<Typography className="addrInit">PUNTO DE PARTIDA: {props.addrInit}</Typography>
				<Typography className="addrFin">PUNTO FINAL: {props.addrFin}</Typography>
				<Typography className="seats">PUESTOS DISPONIBLES: {props.availableSeats}</Typography>
				{formatStops(props.stops).map((stop,index) => <p className="stop" key={index}>{stop[0] + ": " +stop[1]}</p>)}
				<Typography className="initTime"> HORA DE SALIDA: {props.initTime}</Typography>
				<div className= 'divBoton'>
					<Button  className="boton"align = 'center'
						type = "submit"
						onClick = {e => props.func(props.id)}
						content = {props.contentButton}
					></Button>
				</div>
			</CardContent>
		</Card> 
  );
}

export default TripTraveler;