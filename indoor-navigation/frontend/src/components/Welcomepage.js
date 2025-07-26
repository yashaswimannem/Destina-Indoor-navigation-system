import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import "./WelcomePage.css";

function WelcomePage() {
  const text = "Welcome to DESTINA";
  const [visibleText, setVisibleText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <>
      <Navbar />  {/* Navbar is placed above the content */}
      <div className="welcome-container">
        <h1 className="glow-text">
          {visibleText}
          <span className="blinking-cursor">{cursorVisible ? "|" : ""}</span>
        </h1>
        <p className="fade-in-text">
          Seamless Navigation, Endless Exploration – Find Your Way, Effortlessly! 🏬✨
        </p>
        <button className="neon-button" onClick={() => alert("Welcome!")}>
          START NAVIGATION
        </button>
      </div>
    </>
  );
}

export default WelcomePage;
