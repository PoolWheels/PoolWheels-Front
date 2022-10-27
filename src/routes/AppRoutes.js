import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import LandingPage from "../components/views/LandingPage";
import Login from "../components/views/Login";
import About from "../components/views/about";
import Faq from "../components/views/Faq";
import Profile from "../components/views/Profile";
import PayMethodsLandingPage from "../components/views/PayMethodsLandingPage";
import NewPayMethodsPage from "../components/views/NewPayMethodPage";

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
                        <Route path="/" element={<LandingPage />} />
                        {/* <Route path="/userhome" element={<UserHome />} /> */}
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/frequentquestions" element={<Faq />} />
                        <Route path="/profile/paymethods" element={<PayMethodsLandingPage />} /> 
                        <Route path="/profile/paymethods/newpaymethodspage" element={<NewPayMethodsPage />} /> 
                    </Routes>
                </div>
            </main>
        </Router>
    );
}
