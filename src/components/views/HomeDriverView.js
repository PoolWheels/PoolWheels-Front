import { React, useEffect, useState, useContext } from "react";
import '../../styles/Driver.scss';
import { useNavigate } from 'react-router-dom';
import Button from "../Button";

function DriverView() {

    // const navigate = useNavigate();

    return (
        <div className="component">
            <h1>Hello</h1>
            <Button
                id="newTrip"
                content="Create New Trip"
                type="submit"
            ></Button>
        </div>
    )

}

export default DriverView;