import React, { useEffect, useState, useContext } from "react";
import { Grid } from "@mui/material";
import Button from '../Button.js';
import PayMethodS from "../PayMethodS.js"



function PayMethodsLandingPage() {
    const [PayMethods, setPayMethods] = useState([]);
    const [inLPage, setInLPage] = useState({ inHome: false });

    const [trips, setTrips] = useState([]);
	const [token, setToken] = useState({ token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzRiMDQzOWEyOTkyZjdkOGU5ZjEwNDYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY4Mzc1MjgsImV4cCI6MTY2Njg0MTEyOH0.d9IperCDUXkr4DLS_isxK6Mpt4KX9fINcVjTyVtruVU" });
    useEffect(() => {
    	if (!(inLPage.inHome)) {
			try {
				const idUser = '634b051b464bb818bb2e611f'
				const requestOptionsToInfo = {
					method: 'GET',
					headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + token.token}
				}
				
				const urlTrips = 'http://localhost:8080/api/v1/paymethod/Paymeths/' + idUser
				const asyncGetpaymethuser = async () => {
					try {
						const response = await fetch(urlTrips, requestOptionsToInfo);
						const data = await response.json().then(value => {
							setTrips(value);
							setInLPage( { inHome: true });
						});
						return data;
					} catch(error) {
							console.log(error)
					} 
				}
				asyncGetpaymethuser();
			}catch(error) {
				console.log(error)
			} 
		}
	}, [inLPage,trips,token]);
  
    return (
      <div>
        <h1>Estos son tus metodos de pago:</h1>
        <Grid
          className="Pay Methods"
          rowSpacing={3}
          justifyContent="center"
          columnSpacing={1}
          container
        >
          {PayMethods.map((Paymeths) => (
                <Grid item xs="auto" wrap="nowrap" container key={Paymeths.id}>
                    <PayMethodS
                        owner={Paymeths.id}
                        type={Paymeths.type}
                        number={Paymeths.number}
                        bank ={Paymeths.bank}
                        expirationDate={Paymeths.expirationDate}
                ></PayMethodS>
            </Grid>
          ))}

            <Button 
                id = "newpaymeth" content = "Add Payment method" type = "submit" ></Button>
        </Grid>
      </div>
    );
  }
  
  export default PayMethodsLandingPage;