import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src="image.png" alt="Landing" style={{ width: '100%', height: 'auto' }} />
      <div className="landing-content">
        <h1>Welcome to Our Fitness App</h1>
        <p>Your journey to a healthier life starts here.</p>
        <div className="landing-buttons">
          <Link to="/login">
            <button className="btn">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="btn">Sign Up</button>
          </Link>
          <Link to="/chatbot">
            <button className="btn">help</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
