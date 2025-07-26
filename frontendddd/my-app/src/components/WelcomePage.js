import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import Navbar from "../components/Navbar";
import "./WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate(); // Navigation hook
  const text = "Welcome to DESTINA"; // Text for typing effect
  const [visibleText, setVisibleText] = useState(""); // State for typed text
  const [cursorVisible, setCursorVisible] = useState(true); // For blinking cursor

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval); // Stop the typing effect
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev); // Make cursor blink
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <>
      <aNavbar />
      <div className="welcome-container">
        <h1 className="glow-text">
          {visibleText}
          <span className="blinking-cursor">{cursorVisible ? "|" : ""}</span>
        </h1>
        <p className="fade-in-text">
          Seamless Navigation, Endless Exploration – Find Your Way, Effortlessly! 🏬✨
        </p>
        <button className="neon-button" onClick={() => navigate("/map")}>
          START NAVIGATION
        </button>
      </div>
    </>
  );
}

export default WelcomePage;
