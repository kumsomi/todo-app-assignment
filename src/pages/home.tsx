import React from "react";
import hero from "../assets/hero-img.svg";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">
      <div>
        <img src={hero} alt="hero" height="200px" width="200px" />
      </div>
      <div>
        <h1>Stay organized and boost your productivity </h1>
        <p>
          Are you tired of juggling multiple tasks and feeling overwhelmed? Look
          no further! <strong>TaskTrip</strong> is your ultimate task management
          solution.
        </p>

        <span className="home-btn">
          <Link to="/todos" className="link">
            Get Started
          </Link>
        </span>
      </div>
    </div>
  );
};
