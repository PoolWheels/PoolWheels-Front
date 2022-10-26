import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import '../styles/TripUserTraveler.scss'
import Button from './Button';
import { ScrollRestoration } from "react-router-dom";

function TripTraveler(props) {

	const [submit, setSubmit] = useState({submit:false});
	const [func, setFunction] = useState({function:''});
	const [token, setToken] = useState({ token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzRiMDQzOWEyOTkyZjdkOGU5ZjEwNDYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY4MTQ4OTcsImV4cCI6MTY2NjgxODQ5N30.U0gEvo4A5bSkkaPeCfZl5kLhkd_E5dvPc3IHwZNjMuA" });

	const formatStops= (stops) =>{
		const arrayStops = []
		for (let key in stops){
			arrayStops.push([key,stops[key]]);
		}
		return arrayStops
	}

	useEffect(() => {
		if ((submit.submit) && (func === 'bookATrip')) {
			//Hacer una reserva
			const bookTrip = async (idTrip) => {
				try {
					const requestOptionsToInfo = {
						method: 'POST',
						headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + token.token}, 
						body: {'idTrip': idTrip, 'idUser':"634b051b464bb818bb2e611f"}
					}
					const urlActiveTrips = 'http://localhost:8080/api/v1/trip/'+idTrip+"/"+'634b051b464bb818bb2e611f';
					const response = await fetch(urlActiveTrips, requestOptionsToInfo);
					const data = await response.json().then(value => {
					});
					return data;
				} catch(error) {
						console.log(error)
				} 
			}
			bookTrip();
		}
	},[submit])

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
						onClick = {
							setFunction({func:props.func}),
							setSubmit({submit: true})
							}
						type = "submit"
						content = {props.contentButton}
					></Button>
				</div>
			</CardContent>
		</Card> 
  );
}

export default TripTraveler;