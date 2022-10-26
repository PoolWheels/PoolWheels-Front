import {React, useState,useEffect} from 'react'
import "../../styles/ActiveTrips.scss";
import { Grid } from "@mui/material";
import TripTraveler from "../TripUserTraveler"

function ActiveTrips () {
	const [inActive, setInActive] = useState({ inActive: false });
    const [trips, setTrips] = useState([]);
	const [token, setToken] = useState({ token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzRiMDQzOWEyOTkyZjdkOGU5ZjEwNDYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY4MTQ4OTcsImV4cCI6MTY2NjgxODQ5N30.U0gEvo4A5bSkkaPeCfZl5kLhkd_E5dvPc3IHwZNjMuA" });
    useEffect(() => {
    	if (!(inActive.inActive)) {
			try {
                // 1. Traer los viajes activos y organizarlos. Cada uno con la función de reservar.
				// Mostrar lso que tengan puestos disponibles
				const requestOptionsToInfo = {
					method: 'GET',
					headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + token.token}
				}
				const urlActiveTrips = 'http://localhost:8080/api/v1/trip'
				const asyncGetTripActive = async () => {
					try {
						const response = await fetch(urlActiveTrips, requestOptionsToInfo);
						const data = await response.json().then(value => {
							setTrips(value);
							setInActive({ inActive: true });
						});
						return data;
					} catch(error) {
							console.log(error)
					} 
				}
				asyncGetTripActive();
			}catch(error) {
				console.log(error)
			} 
		}
	}, [inActive,trips,token]);


    return (
    	<div>
				<h1>🚗 RESERVA UN NUEVO VIAJE.</h1>
				<Grid className="activeTrips" rowSpacing={3} justifyContent="center"columnSpacing={1} container>
					{trips.map((trip) => (
						<Grid item xs="auto" wrap="nowrap" container key={trip.id}>
							<TripTraveler 
								id={trip.id}
								driver={trip.driver}
								addrInit={trip.addrInit}
								addrFin={trip.addrFin}
								initTime={trip.initTime}
								stops = {trip.stops}
								availableSeats = {trip.availableSeats}
								func = {'bookATrip'}
								contentButton = 'RESERVAR VIAJE'
							></TripTraveler>
						</Grid>
					))}
				</Grid>
		</div>
    );
}

export default ActiveTrips;