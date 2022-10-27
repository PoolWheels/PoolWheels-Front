import {React, useState,useEffect} from 'react'
import "../../styles/HomeTravelerUser.scss";
import { Grid } from "@mui/material";
import TripTraveler from "../TripUserTraveler"

function HomeTravelerUser () {
	const [inHome, setInHome] = useState({ inHome: false });
	const [change, setChange] = useState({ change: false });
	const [res, setResponse] = useState('');
    const [trips, setTrips] = useState([]);
	const [token, setToken] = useState({
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzRiMDQzOWEyOTkyZjdkOGU5ZjEwNDYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY4NTM0NTgsImV4cCI6MTY2Njg1NzA1OH0.VaLxkUJUjkMgxbFdnfoB7jmUtyvpAw5hIndkoU8BZa0",
  });
    useEffect(() => {
    	if (!(inHome.inHome) || (change.change)) {
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
	}, [inHome,trips,token,change]);
	//cancelar viajes - removePassengerReservation
	const cancelTrip = async (idT) => {
		const requestOptionsToCancel = {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + token.token},
		} 

		const urlCancelReservation = 'http://localhost:8080/api/v1/trip/'+idT+"/passengers/634b051b464bb818bb2e611f"
		const response = await fetch(urlCancelReservation, requestOptionsToCancel);
		const data = await response.json().then(value => {
					setResponse(value);
					setChange({change:true});
		});	
	}

    return (
    	<div>
				<h1>👋 Hola, bienvenido NAME!</h1>
				<Grid className="trips" rowSpacing={3} justifyContent="center"columnSpacing={1} container>
					{trips.map((trip) => (
						<Grid item xs="auto" wrap="nowrap" container key={trip.id}>
							<TripTraveler
								id = {trip.id}
								key={trip.id}
								driver={trip.driver}
								addrInit={trip.addrInit}
								addrFin={trip.addrFin}
								initTime={trip.initTime}
								stops = {trip.stops}
								availableSeats = {trip.availableSeats}
								contentButton = 'CANCELAR'
								func = {cancelTrip}
							></TripTraveler>
						</Grid>
					))}
				</Grid>
		</div>
    );
}

export default HomeTravelerUser;