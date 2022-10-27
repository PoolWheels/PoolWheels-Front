import { React, useState, useEffect } from "react";
import "../../styles/HomeTravelerUser.scss";
import { Grid } from "@mui/material";
import TripTraveler from "../TripUserTraveler";
//Context
import { useAuth } from "../../contexts/Auth";
import Button from "../Button.js";
import { useNavigate } from "react-router-dom";

function HomeTravelerUser() {
  const [inHome, setInHome] = useState({ inHome: false });
  const [change, setChange] = useState({ change: false });
  const [res, setResponse] = useState("");
  const [trips, setTrips] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!inHome.inHome || change.change) {
      try {
        const idUser = auth.userId;
        const requestOptionsToInfo = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + auth.token,
          },
        };
        //Token  y User FIN //
        const urlTrips = "http://localhost:8080/api/v1/trip/trips/" + idUser;
        const asyncGetTripActive = async () => {
          try {
            const response = await fetch(urlTrips, requestOptionsToInfo);
            const data = await response.json().then((value) => {
              setTrips(value);
              setInHome({ inHome: true });
            });
            return data;
          } catch (error) {
            console.log(error);
          }
        };
        asyncGetTripActive();
      } catch (error) {
        console.log(error);
      }
    }
  }, [inHome, trips, change, auth.token]);
  const cancelTrip = async (idT) => {
    const requestOptionsToCancel = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + auth.token,
      },
    };

    const urlCancelReservation =
      "http://localhost:8080/api/v1/trip/" +
      idT +
      "/passengers/634b051b464bb818bb2e611f";
    const response = await fetch(urlCancelReservation, requestOptionsToCancel);
    const data = await response.json().then((value) => {
      setResponse(value);
      setChange({ change: true });
    });
  };

  return (
    <div>
      <h1>👋 Hola, bienvenido {auth.userName}!</h1>
      <Grid
        className="trips"
        rowSpacing={3}
        justifyContent="center"
        columnSpacing={1}
        container
      >
        {trips.map((trip) => (
          <Grid item xs="auto" wrap="nowrap" container key={trip.id}>
            <TripTraveler
              id={trip.id}
              key={trip.id}
              driver={trip.driver}
              addrInit={trip.addrInit}
              addrFin={trip.addrFin}
              initTime={trip.initTime}
              stops={trip.stops}
              availableSeats={trip.availableSeats}
              contentButton="CANCELAR"
              func={cancelTrip}
            ></TripTraveler>
          </Grid>
        ))}
      </Grid>
      <Button
        className="boton"
        align="center"
        type="submit"
        onClick={(e) => navigate("/activetrips")}
        content={"RESERVAR NUEVO VIAJE "}
      ></Button>
    </div>
  );
}

export default HomeTravelerUser;
