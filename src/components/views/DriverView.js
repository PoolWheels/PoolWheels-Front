import React, {useEffect, useState, useContext} from "react";
import '../../styles/Driver.scss';
import {Grid, Paper, Container, Avatar,TextField, Link, Alert} from '@mui/material'
import { useNavigate } from 'react-router-dom';

function DriverView(){

    const url = 'http://localhost:8080/v1/auth';

    return(
        <div>
            <h1>Hello!!</h1>
        </div>
    )

}

export default DriverView;