import {React, useState,useEffect} from 'react'
import "../../styles/ActiveTrips.scss";
import { Grid } from "@mui/material";
import TripDriver from '../TripUserDriver';

function ActiveTripsDriver () {
	const [inActive, setInActive] = useState({ inActive: false });
    const [trips, setTrips] = useState([]);
	const [res, setResponse] = useState('');
	const [change, setChange] = useState({ change: false });
	const [token, setToken] = useState({
    token:
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzVhOTE3NzRkNWY1OTI0NzM0NjAyMGYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY5MDU4NTgsImV4cCI6MTY2NjkwOTQ1OH0.DNrTodQNZSYrz9RQpBCmLD3K0GUTNCdxnIqVlsGmhUQ",
  });
    useEffect(() => {
    	if (!(inActive.inActive) || (change.change)) {		
			try {
				const requestOptionsToInfo = {
					method: 'GET',
					headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + token.token}
				}
				const urlActiveTripsForDriver = 'http://localhost:8080/api/v1/tripsDriver/635a91774d5f59247346020f'
				const asyncGetTripActive = async () => {
					try {
						const response = await fetch(urlActiveTripsForDriver, requestOptionsToInfo);
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
	}, [inActive,trips,token,change]);


    return (
    	<div>
				<h1>🚗 TUS VIAJES.</h1>
				<Grid className="activeTrips" rowSpacing={3} justifyContent="center"columnSpacing={1} container>
					{trips.map((trip) => (
						<Grid item xs="auto" wrap="nowrap" container key={trip.id}>
							<TripDriver 
								id={trip.id}
								driver={trip.driver}
								addrInit={trip.addrInit}
								addrFin={trip.addrFin}
								initTime={trip.initTime}
								stops = {trip.stops}
								availableSeats = {trip.availableSeats}
								//func = {bookTrip}
								contentButton = 'RESERVAR VIAJE'
							>
							</TripDriver>
						</Grid>
					))}
				</Grid>
		</div>
    );
}

export default ActiveTripsDriver;