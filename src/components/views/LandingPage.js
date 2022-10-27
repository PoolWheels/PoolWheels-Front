import Button from '@mui/material/Button';
import * as React from 'react';
import '../../styles/base.scss';
import { useNavigate } from 'react-router-dom';
import ladingpageimg from '../../images/ladingpage.png';

export default function LandingPage() {

    const navigate = useNavigate();

    const handleLogin= ()=>{
        navigate("/login");
    }
    const handleAbout= () =>{
        navigate("/about");
    }


    

    return (
        <div>
            <h1>Inicia sesión para acceder a tu cuenta</h1>
            <img src={ladingpageimg}/>
            <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                    onClick={handleLogin}
            >
                    Login
            </Button>

            <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                    onClick={handleAbout}
            >
                    About
            </Button>

            

        </div>
    );

}