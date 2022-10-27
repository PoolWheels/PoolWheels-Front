import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import LandingPage from "../components/views/LandingPage";
import Login from "../components/views/Login";
import About from "../components/views/about";
<<<<<<< HEAD
import Register from "../components/views/Register";
=======
<<<<<<< HEAD
import Faq from "../components/views/Faq";
import Profile from "../components/views/Profile";
import PayMethodsLandingPage from "../components/views/PayMethodsLandingPage";
import NewPayMethodsPage from "../components/views/NewPayMethodPage";
=======
import Register from "../components/views/Register";
>>>>>>> 73071ec29f71c78a28859a4968c61c4bcfd77df4
>>>>>>> f9a9cfb94d40487b83b5b060c66d5653ef0e2042

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
