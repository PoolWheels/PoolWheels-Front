import { React, useEffect, useState, useContext } from "react";
import '../../styles/Driver.scss';
import { useNavigate } from 'react-router-dom';
import Button from "../Button";
import NewTripView from "./NewTripView";

function DriverView() {

    //const navigate = useNavigate();

    const [submit, setSubmit] = useState(false);

    const showFormNewTrip = () => {
        setSubmit({submit : true});
    }

    return (
        <div className="component">
            <h1>Hello</h1>
            <Button
                id="newTrip"
                content="Crear un Nuevo Viaje"
                type="submit"
                onClick={showFormNewTrip}
            ></Button>
            <div className="newTrip" id="newTrip" style={{ visibility: submit  ? "visible" : "hidden" }}>
                <NewTripView />
            </div>
        </div>
    )

}

export default DriverView;