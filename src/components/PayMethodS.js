import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Button from './Button';
import { ScrollRestoration } from "react-router-dom";

function PayMethodS(props) {

	const [submit, setSubmit] = useState({submit:false});
	const [token, setToken] = useState({ token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzRiMDQzOWEyOTkyZjdkOGU5ZjEwNDYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY4Mzc1MjgsImV4cCI6MTY2Njg0MTEyOH0.d9IperCDUXkr4DLS_isxK6Mpt4KX9fINcVjTyVtruVU" });

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
				<Typography className="Owner"> Dueño: {props.owner}</Typography>
				<Typography className="Type"> Typo de metodo de pago: {props.type}</Typography>
				<Typography className="number"> Numero de tarjeta: {props.number}</Typography>
				<Typography className="bank"> Banco: {props.bank}</Typography>
                <Typography className="expirationDate"> Fecha de expiracion: {props.expirationDate}</Typography>
				{formatStops(props.stops).map((stop,index) => <p className="stop" key={index}>{stop[0] + ": " +stop[1]}</p>)}
				<div className= 'divBoton'>
					<Button  className="boton"align = 'center'
						type = "submit"
						onClick = { e =>
							{console.log("HOLA HACIENDO LA RESERVA...")	}
						}
						content = {props.contentButton}
					></Button>
				</div>
			</CardContent>
		</Card> 
  );
}

export default PayMethodS;