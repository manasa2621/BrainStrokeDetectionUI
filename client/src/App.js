import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/login/SignIn";
import SignupForm from "./components/login/Signuppage";
import LandingPage from "./components/landing/landingPage";
import Home from "./components/login/home";
import ArtImageForm from "./components/admin/artImageForm";
import ArtDetailsPage from "./components/admin/artDetails";
import ViewPurchaseDetails from "./components/admin/view-purchase-details";
import ViewProfile from "./components/admin/ViewProfile";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />{" "}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route
            path="/view-purchase-details"
            element={<ViewPurchaseDetails />}
          />
          <Route path="/admin-home" element={<ArtImageForm />} />{" "}
          <Route path="/add-art-details" element={<ArtDetailsPage />} />{" "}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
