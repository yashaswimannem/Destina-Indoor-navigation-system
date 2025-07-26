import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Add Navbar
import WelcomePage from "./components/WelcomePage";
import MapComponent from "./components/MapComponent";
import SearchBar from "./components/SearchBar";
import Chatbot from "./components/Chatbot";
import AboutPage from "./components/about";  // Import AboutPage
import Contact from "./components/contact";  // Import Contact Page
import Features from "./components/features";  // Import Features Page

// Layout for Map + Search + Floor Selector
function MapWithSearch() {
  const [floor, setFloor] = useState("lg"); // Default to lower ground

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Floor Selector */}
      <div style={{ padding: "10px", backgroundColor: "#222", color: "#fff" }}>
        <label htmlFor="floorSelect">Choose Floor: </label>
        <select
          id="floorSelect"
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
        >
          <option value="lg">Lower Ground</option>
          <option value="ug">Upper Ground</option>
        </select>
      </div>

      <SearchBar floor={floor} />
      <div style={{ flexGrow: 1 }}>
        <MapComponent floor={floor} />
      </div>
    </div>
  );
}

// App Component with Routing
function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar for navigation */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/map" element={<MapWithSearch />} />
        <Route path="/about" element={<AboutPage />} />  {/* Add About Page Route */}
        <Route path="/contact" element={<Contact />} />  {/* Add Contact Page Route */}
        <Route path="/features" element={<Features />} />  {/* Add Features Page Route */}
      </Routes>

      {/* Chatbot floats over the content */}
      <Chatbot />
    </Router>
  );
}

export default App;
