import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import { useAuth } from '../contexts/Auth';
import Button from './Button'
export default function NavBar() {
    const auth = useAuth();
    return (
      <nav>
        <ul>
          <li>
            <Link to="/landingpage">Landing Page</Link>
          </li>
          <li>
            <Link to="/userhome">User Home</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!auth.userEmail && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {auth.userEmail && (
            <div className="logout">
              <Button
                onClick={() => auth.logout()}
                content="Logout"
                type="submit"
              ></Button>
            </div>
          )}
        </ul>
      </nav>
    );
}