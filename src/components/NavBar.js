import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import { useAuth } from '../contexts/Auth';
import Button from './Button';

export default function NavBar() {
    const auth = useAuth();
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/landingpage">Inicio</Link>
                </li>
                <li>
                    <Link to="/userhome">Viajes</Link>
                </li>
                <li>
                    <Link to="/profile">Perfil</Link>
                </li>
                <li>
                    <Link to="/about">Acerca de</Link>
                </li>
                {!auth.userEmail && (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
                {auth.userEmail && (
                    <div className='logout'>
                        <Button onClick={() => auth.logout()} content="Cerrar Sesion" type="submit"></Button>
                    </div>
                )}
            </ul>
        </nav>
    );
}