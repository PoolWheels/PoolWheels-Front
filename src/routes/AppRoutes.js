import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import LandingPage from "../components/views/LandingPage";
import Login from "../components/views/Login";
import About from "../components/views/about";
import Register from "../components/views/Register";

export default function AppRoutes() {

    return (
        <Router>
            <header>
                <NavBar />
            </header>

            <main>
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/landingpage" element={<LandingPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/register" element={<Register />} />
                        {/* <Route path="/userhome" element={<UserHome />} /> */}
                        {/* <Route path="/profile/paymethods" element={<PaymentMethodsLandingPage />} /> */}
                        {/* <Route path="/profile/paymethods/newpaymethodspage" element={<NewPayMethodsLandingPage />} /> */}
                        {/* <Route path="/profile" element={<Profile />} /> */}
                        {/* <Route path="/frequentquestions" element={<FrequentQuestions />} /> */}
                    </Routes>
                </div>
            </main>
        </Router>
    );
}
