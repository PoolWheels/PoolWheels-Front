import {React, useEffect, useState, useContext} from "react";
import '../../styles/Driver.scss';
import {Grid} from '@mui/material'
import { useNavigate } from 'react-router-dom';

function DriverView(){

    const url = 'http://localhost:8080/api/v1/trip';

    return(
        <div>
            <h1>Hello!!</h1>
        </div>
    )

}

export default DriverView;