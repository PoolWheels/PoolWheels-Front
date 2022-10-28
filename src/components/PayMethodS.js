import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Button from './Button';

function PayMethodS(props) {

	const [submit, setSubmit] = useState({submit:false});
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
				<div className= 'divBoton'>
					<Button  
                        className="boton" 
                        align = 'center'
						type = "submit"
                        content = 'Eliminar'
						onClick = {e => props.func(props.id)}
						
					></Button>
				</div>
			</CardContent>
		</Card> 
  );
}

export default PayMethodS;