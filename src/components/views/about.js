import '../../styles/base.scss'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import card1img from '../../images/card1.jpg';
import card2img from '../../images/card2.png';
import '../../styles/about.scss';

export default function About() {

    return (

        <div >
            <h1>PoolWheels</h1>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={card1img}
                        alt="Genera Ganancias"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Genera ganancias
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Genera ganancias por viajes realizados.Organiza tus horarios y dispone de tu tiempo.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 400 }} id="aboutcard2">
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="160"
                        image={card2img}
                        alt="Tu seguridad es prioridad"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Tu seguridad es prioridad
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Transporte colectivo en un entorno común entre estudiantes universitarios y empleados.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>

                    <h1>Contactanos</h1>
                    <p>uniwheelscompany@gmail.com</p>
                    
        </div>
        


    );
}