import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

export default function NavBar() {
    //const auth = useAuth();
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/landingpage">Landing Page</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/userhome">User Home</Link>
                </li>
                {/* {!auth.userEmail && (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
                {auth.userEmail && (
                    <div className='logout'>
                        <button className='logout-button' onClick={() => auth.logout()}>Logout</button>
                    </div>
                )} */}
            </ul>
        </nav>
    );
}