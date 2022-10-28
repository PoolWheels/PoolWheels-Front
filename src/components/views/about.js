import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../styles/About.scss';
import { useNavigate } from 'react-router-dom';
import ladingpageimg from '../../images/ladingpage.png';
import logoimg from '../../images/logo.png';


export default function About() {

    const navigate = useNavigate();
    
    const changePage = (event) => {33
    
        if(event.target.name==="contact"){
            window.location = "/Contact";
          }
    } 

    const bull = (
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
      </Box>
    );

=======
import { Button, CardActionArea, CardActions } from '@mui/material';
import card1img from '../../images/card1.jpg';
import card2img from '../../images/card2.png';
import '../../styles/about.scss';

export default function About() {


    return (
        
        <div>
            <h1>Quienes somos</h1>
            <div id="blockLogo1D">
                <img id="logo1D" src={logoimg} alt=""/>
            </div>
            <img id="lading1" src={ladingpageimg} alt=""/>
            <Card id="card1" sx={{ minWidth: 275 }} >
                <CardContent>
                    <Typography variant="h5" component="div">
                        Integrantes
                    </Typography>
                    <br />
                    <Typography variant="body2">
                        <li class="labelList1D" type="circle">Camilo Andrés Pichimata Cárdenas</li>
                        <li class="labelList1D" type="circle">Eduardo Ospina Mejía</li>
                        <li class="labelList1D" type="circle">José Manuel Gamboa Gómez</li>
                        <li class="labelList1D" type="circle">Kristhian Segura Guatibonza</li>
                        <li class="labelList1D" type="circle">Zuly Valentina Vargas Ramírez</li>
                        <li class="labelList1D" type="circle">Natalia Orjuela Hernandez</li>
                    </Typography>

                </CardContent>
                <CardActions>
                   <Button href="Contact" size="small">Contactanos</Button>
                </CardActions>
            </Card>


            <Card id="card2" sx={{ minWidth: 275 }} >
                <CardContent>
                    <Typography variant="h5" component="div">
                        Justo a tiempo Siempre
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            
                            Te brindamos una nueva manera de pedir tus viajes y de llegar a tu destino.
                            <br />
                            Tu seguridad es muy importante para nosotros.
                            <br />
                            Nuestro propósito es ayudar a los usuarios a encontrar una forma de movilidad segura y rápida para que logres llegar a tu destino de una manera comoda y tranquila.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href="Contact" size="small">Contactanos</Button>
                </CardActions>
            </Card>
        </div>
    )

    );

}