import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import LandingPage from "../components/views/LandingPage";
import Login from "../components/views/Login";
import About from "../components/views/about";

export default function AppRoutes() {

    return (
        <Router>
            <header>
                <NavBar />
            </header>

            <main>
                <div className='container'>
                    <Routes>
                        <Route path="/landingpage" element={<LandingPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/about" element={<About />} />
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/userhome" element={<About />} />
                    </Routes>
                </div>
            </main>
        </Router>
    );
}
