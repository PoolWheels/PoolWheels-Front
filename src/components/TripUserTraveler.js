import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import '../styles/TripUserTraveler.scss'

function TripTraveler(props) {

	const formatStops= (stops) =>{
		const arrayStops = []
		console.log(stops)
		for (let key in stops){
			arrayStops.push([key,stops[key]]);
		}
		return arrayStops
	}
	return (
		<Card variant="outlined">
      		<CardContent>
				<Typography className="numTrip">{props.num}</Typography>
				<Typography className="driver"> {props.driver}</Typography>
				<Typography className="addrInit">PUNTO DE PARTIDA: {props.addrInit}</Typography>
				<Typography className="addrInit">PUNTO FINAL: {props.addrFin}</Typography>
				<Typography className="addrInit">PUESTOS DISPONIBLES: {props.availableSeats}</Typography>
				{formatStops(props.stops).map((stop) => <p className="stop">{stop[0] + ": " +stop[1]}</p>)}
				<Typography className="initTime"> HORA DE SALIDA: {props.initTime}</Typography>
			</CardContent>
		</Card> 
  );
}

export default TripTraveler;