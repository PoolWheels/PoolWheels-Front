import React, { useEffect, useState, useContext } from "react";
import { Grid } from "@mui/material";
import Button from '../Button.js';
import PayMethodS from "../PayMethodS.js"
import { useAuth } from '../../contexts/Auth.js';


function PayMethodsLandingPage() {
    const auth=useAuth();
    const [PayMethods, setPayMethods] = useState([]);
    const [inLPage, setInLPage] = useState({ inHome: false });
    const [deleted, setDeleted]= useState({deleted:false})
	const [token, setToken] = useState({ token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MzRiMDQzOWEyOTkyZjdkOGU5ZjEwNDYiLCJjbGFpbXMiOiJEUklWRVIiLCJpYXQiOjE2NjY4NDMwMTMsImV4cCI6MTY2Njg0NjYxM30.v-9hHQ0HVu5VryctZCZhDZ__KCiV_rv7lCSfPSaB6ok" });
    useEffect(() => {
    	if (!(inLPage.inHome) || (deleted.deleted)) {
			try {
				const idUser = auth.userId
				const requestOptionsToInfo = {
					method: 'GET',
					headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + token.token}
				}
				
				const urlTrips = 'http://localhost:8080/api/v1/paymethod/Paymeths/' + idUser
				const asyncGetpaymethuser = async () => {
					try {
						const response = await fetch(urlTrips, requestOptionsToInfo);
						const data = await response.json().then(value => {
							setPayMethods(value);
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
	}, [inLPage,deleted,PayMethods,token]);

    const cancelpaymethod = (idpaymethods)=>{
        try {
            const idUser = '634b051b464bb818bb2e611f'
            const requestOptionsToInfo = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Authorization': 'Bearer ' + token.token}
            }
            
            const urlTrips = 'http://localhost:8080/api/v1/paymethod/' + idpaymethods

            const asyncGetpaymethuser = async () => {
                try {
                    const response = await fetch(urlTrips, requestOptionsToInfo);
                    const data = await response.json().then(value => {
                        setDeleted({deleted:value});
                        
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
                        id ={Paymeths.id}
                        owner={Paymeths.owner}
                        type={Paymeths.type}
                        number={Paymeths.number}
                        bank ={Paymeths.bank}
                        expirationDate={Paymeths.expirationDate}
                        func={cancelpaymethod}
                        
                ></PayMethodS>
            </Grid>
          ))}

            
                
        </Grid>
        <Button 
        id = "newpaymeth" content = "Add Payment method" type = "submit" ></Button>
      </div>
    );
  }
  
  export default PayMethodsLandingPage;