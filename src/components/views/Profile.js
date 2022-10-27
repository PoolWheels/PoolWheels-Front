import '../../styles/profile.scss'
import avatar from '../../img/avatar.png'
import { useAuth } from '../../contexts/Auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

export default function Profile(){
    const navigate = useNavigate();
    const auth = useAuth();
    const idUser = auth.userId;
    const userRol = auth.userRol;
    const [profileData, setProfileData] = React.useState({});
    const [redirect, setRedirect] = React.useState(false);

    useEffect(()=>{
        getProfile();
    }, []);

    useEffect(()=>{
        if(redirect){
            navigate('/profile/paymethods');
        }
    }, [redirect]);
    

    async function getProfile(){
        try{
            const endPoint = userRol === 'DRIVER' ? 'driverusers/':'travelerusers/';
            var response = await fetch('http://localhost:8080/api/v1/user/' + endPoint + idUser, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization' : 'Bearer ' + auth.token
                }});
            var data = await response.json();
            setProfileData(data);
        }catch(e){
            console.log(e.message);
        }
    }

    return(
        <div className='flex-container'>
            <Card sx={{ width: 310, padding:'5px'}}>
                <CardMedia
                    component="img"
                    height="250"
                    image={avatar}
                    alt="avatar"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {profileData.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                    {profileData.lastName}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                    {profileData.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {profileData.university}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {profileData.modeloCar}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {profileData.rol}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {profileData.email}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        variant="contained"
                        onClick={() => {
                            setRedirect(prev => !prev);
                        }}
                    >
                        Métodos de pago
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}