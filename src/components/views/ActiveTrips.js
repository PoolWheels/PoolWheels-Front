import { React, useState, useEffect } from "react";
import "../../styles/ActiveTrips.scss";
import { Grid } from "@mui/material";
import TripTraveler from "../TripUserTraveler";
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";

function ActiveTrips() {
  const navigate = useNavigate();
  const [inActive, setInActive] = useState({ inActive: false });
  const [trips, setTrips] = useState([]);
  const [res, setResponse] = useState("");
  const [change, setChange] = useState({ change: false });
  const auth = useAuth();
  useEffect(() => {
    if (!inActive.inActive || change.change) {
      try {
        const requestOptionsToInfo = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + auth.token,
          },
        };
        const urlActiveTrips = "http://localhost:8080/api/v1/trip";
        const asyncGetTripActive = async () => {
          try {
            const response = await fetch(urlActiveTrips, requestOptionsToInfo);
            const data = await response.json().then((value) => {
              setTrips(value);
              setInActive({ inActive: true });
              //setChange({change: true})
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

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [inActive, trips, auth.token, change]);

  const bookTrip = async (idT) => {
    const requestOptionsToBook = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + auth.token,
      },
    };

    const urlBookReservation =
      "http://localhost:8080/api/v1/trip/" + idT + "/passengers/" + auth.userId;
    const response = await fetch(urlBookReservation, requestOptionsToBook);
    const data = await response.json().then((value) => {
      setResponse(value);
      setChange({ change: true });
      navigate("/userhome");
    });
  };

  return (
    <div>
      <h1>???? RESERVA UN NUEVO VIAJE.</h1>
      <Grid
        className="activeTrips"
        rowSpacing={3}
        justifyContent="center"
        columnSpacing={1}
        container
      >
        {trips.map((trip) => (
          <Grid item xs="auto" wrap="nowrap" container key={trip.id}>
            <TripTraveler
              id={trip.id}
              driver={trip.driver}
              addrInit={trip.addrInit}
              addrFin={trip.addrFin}
              initTime={trip.initTime}
              stops={trip.stops}
              availableSeats={trip.availableSeats}
              func={bookTrip}
              contentButton="RESERVAR VIAJE"
            ></TripTraveler>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ActiveTrips;
