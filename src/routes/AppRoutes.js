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
import RequireAuth from "../utils/RequireAuth";
import HomeTravelerUser from "../components/views/HomeTravelerUser";
import ActiveTrips from "../components/views/ActiveTrips";

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
                        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
                        <Route path="/frequentquestions" element={<Faq />} />
                        <Route path="/profile/paymethods" element={<RequireAuth><PayMethodsLandingPage /></RequireAuth>} /> 
                        <Route path="/profile/paymethods/newpaymethodspage" element={<NewPayMethodsPage />} /> 
                        <Route path="/userhome" element={<RequireAuth><HomeTravelerUser /></RequireAuth>} />
                        <Route path="/activetrips" element={<RequireAuth><ActiveTrips /></RequireAuth>} />
                    </Routes>
                </div>
            </main>
        </Router>
    );
}
