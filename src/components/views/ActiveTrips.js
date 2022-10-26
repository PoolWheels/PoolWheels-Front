import {React, useState,useEffect} from 'react'
import "../../styles/ActiveTrips.scss";
import { Grid } from "@mui/material";
import TripTraveler from "../TripUserTraveler"

function ActiveTrips () {
	const [inActive, setInActive] = useState({ inActive: false });
    const [trips, setTrips] = useState([]);
	const [token, setToken] = useState({ token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzRiMDQzOWEyOTkyZjdkOGU5ZjEwNDYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY4MDcwNDksImV4cCI6MTY2NjgxMDY0OX0.avmMg840JHnT3IfV1zWNFpNggaZ0J7TIBbWAxP7t4e0" });
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
		else if(inActive.inActive){
			console.log("ENTRE AL IF");
			console.log("TRIPS render "+ trips[0].id);
			trips.map((trip) => (console.log("TRIP " + trip.driver)))
		}
	}, [inActive,trips,token]);

    return (
    	<div>
				<h1>🚗 Book a new trip.</h1>
				<Grid className="activeTrips" rowSpacing={3} justifyContent="center"columnSpacing={1} container>
					{trips.map((trip,index) => (
						<Grid item xs="auto" wrap="nowrap" container key={trip.id}>
							<TripTraveler
								num = {index+1}
								driver={trip.driver}
								addrInit={trip.addrInit}
								addrFin={trip.addrFin}
								initTime={trip.initTime}
								stops = {trip.stops}
								availableSeats = {trip.availableSeats}
							></TripTraveler>
						</Grid>
					))}
				</Grid>
		</div>
    );
}

export default ActiveTrips;