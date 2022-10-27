import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import LandingPage from "../components/views/LandingPage";
import Login from "../components/views/Login";
//import Register from "../components/views/Register";
import Faq from "../components/views/Faq";
import Profile from "../components/views/Profile";
import PayMethodsLandingPage from "../components/views/PayMethodsLandingPage";
import NewPayMethodsPage from "../components/views/NewPayMethodPage";
import HomeTravelerUser from "../components/views/HomeTravelerUser";
import ActiveTrips from "../components/views/ActiveTrips";
import RequiereAuth from "../utils/RequireAuth";
//import Register from "../components/views/Register";  

export default function AppRoutes() {

    return (
      <Router>
        <header>
          <NavBar />
        </header>

        <main>
          <div className="container">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/userhome" element={<RequiereAuth>
                  <HomeTravelerUser /></RequiereAuth>
                  } />
              <Route
                path="/profile"
                element={
                  <RequiereAuth>
                    <Profile />
                  </RequiereAuth>
                }
              />
              <Route path="/frequentquestions" element={<Faq />} />
              <Route
                path="/profile/paymethods"
                element={<RequiereAuth>
                  <PayMethodsLandingPage /></RequiereAuth>
                  }
              />
              <Route
                path="/profile/paymethods/newpaymethodspage"
                element={<RequiereAuth>
                  <NewPayMethodsPage /></RequiereAuth>
                  }
              />
              <Route path="/activetrips" element={<ActiveTrips />} />
            </Routes>
          </div>
        </main>
      </Router>
    );
}
