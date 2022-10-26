import {React, useState,useEffect} from 'react'
import "../../styles/HomeTravelerUser.scss";
import { Grid } from "@mui/material";
import TripTraveler from "../TripUserTraveler"

function HomeTravelerUser () {
	const [inHome, setInHome] = useState({ inHome: false });
    const [trips, setTrips] = useState([]);
	const [token, setToken] = useState({ token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzRiMDQzOWEyOTkyZjdkOGU5ZjEwNDYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY3NTY5MjgsImV4cCI6MTY2Njc2MDUyOH0.7sL-KmTh4astg-l6x5BSI27ZVy_28h3KsJdrHMfOkpc" });
    useEffect(() => {
    	if (!(inHome.inHome)) {
			try {
				// 1. Token -> useContext (Camilo)
				// 2. Hacer la peticion - Viajes en los que esta el usuario(Viajes activos) (IN PROCESS)
				// 3. Peticion de viajes activos no reservados cuando le de en buscar (IN PROCESS)
				// 4. Funcion cancelar viaje para cada uno de los viajes (IN PROCESS)
				// 5. Mostrar informacion del conductor al dar click en el nombre (IN PROCESS)
				
				const idUser = '634b051b464bb818bb2e611f'
				const requestOptionsToInfo = {
					method: 'GET',
					headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + token.token}
				}
				//Token  y User FIN //
				//VIAJEEEES
				const urlTrips = 'http://localhost:8080/api/v1/trip/trips/' + idUser
				const asyncGetTripActive = async () => {
					try {
						const response = await fetch(urlTrips, requestOptionsToInfo);
						const data = await response.json().then(value => {
							setTrips(value);
							setInHome( { inHome: true });
						});
						//setTrips(data);
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
	}, [inHome,trips,token]);
	//REVISAR STOPS
    return (
    	<div>
				<h1>👋 Hola, bienvenido NAME!</h1>
				<Grid className="trips" rowSpacing={3} justifyContent="center"columnSpacing={1} container>
					{trips.map((trip) => (
						<Grid item xs="auto" wrap="nowrap" container key={trip.id}>
							<TripTraveler
								key={trip.id}
								driver={trip.driver}
								addrInit={trip.addrInit}
								addrFin={trip.addrFin}
								initTime={trip.initTime}
								stops = {trip.stops}
								availableSeats = {trip.availableSeats}
								content
							></TripTraveler>
						</Grid>
					))}
				</Grid>
		</div>
    );
}

export default HomeTravelerUser;