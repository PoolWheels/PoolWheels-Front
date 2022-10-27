import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import LandingPage from "../components/views/LandingPage";
import Login from "../components/views/Login";
import About from "../components/views/about";
import Faq from "../components/views/Faq";
import Profile from "../components/views/Profile";

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
                        {/* <Route path="/profile/paymethods" element={<PaymentMethodsLandingPage />} /> */}
                        {/* <Route path="/profile/paymethods/newpaymethodspage" element={<NewPayMethodsLandingPage />} /> */}
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/frequentquestions" element={<Faq />} />
                    </Routes>
                </div>
            </main>
        </Router>
    );
}
