// LandingPage.js

import React from "react";
import painting from "./painting.png";
import Photography from "./photography.png";
import sculpture from "./sculpture.png";
import graphic from "./graphicDesign.png";
import nail from "./nail.png";
import { useNavigate } from "react-router-dom";

import "./landing.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <div className="logo">Artistic Creations</div>
          <div className="auth-buttons">
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
            <button className="btn" onClick={handleSignup}>
              Signup
            </button>
          </div>
        </div>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <div className="container">
            <h1>Welcome to Artistic Creations</h1>
            <p>Unlock your creativity with our platform.</p>
          </div>
        </section>
        <section className="features-section">
          <div className="container">
            <h2>Why Choose Artistic Creations?</h2>
            <div className="features-grid">
              <div className="feature">
                <i className="fas fa-paint-brush"></i>
                <h3>Explore Diverse Art Forms</h3>
                <p>Discover and create across various art mediums.</p>
              </div>
              <div className="feature">
                <i className="fas fa-users"></i>
                <h3>Join a Vibrant Community</h3>
                <p>Connect with fellow artists and enthusiasts.</p>
              </div>
              <div className="feature">
                <i className="fas fa-star"></i>
                <h3>Showcase Your Talent</h3>
                <p>Display your work to a global audience.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="explore-section">
          <div className="container">
            <h2>Start Exploring Now</h2>
            <div className="explore-grid">
              <div className="explore-item">
                <img src={painting} alt="Artwork 1" />
                <h3>Painting</h3>
              </div>
              <div className="explore-item">
                <img src={Photography} alt="Artwork 2" />
                <h3>Photography</h3>
              </div>
              <div className="explore-item">
                <img src={sculpture} alt="Artwork 3" />
                <h3>Sculpture</h3>
              </div>
              <div className="explore-item">
                <img src={graphic} alt="Artwork 4" />
                <h3>Graphic Design</h3>
              </div>
              <div className="explore-item">
                <img src={nail} alt="Artwork 5" />
                <h3>Nail Art</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Artistic Creations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
