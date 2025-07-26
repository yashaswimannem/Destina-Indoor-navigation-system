import React, { useState, useRef, useEffect } from "react";
import {
  MapContainer,
  ImageOverlay,
  Marker,
  Popup,
  Polyline,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mallDataLG from "../data/stores_lg.json";
import mallDataUG from "../data/stores_ug.json";
import { findShortestPath } from "./ShortestPath";
import L from "leaflet";
import mapImageLG from "../assets/map_lg.png";
import mapImageUG from "../assets/map_ug.png";
import markerIconImg from "../assets/pinn.png";
import "./MapComponent.css";
import io from "socket.io-client";
import { speak, generateVoiceInstructions } from "../utils/speak";
import Navbar from "./Navbar"; // Import Navbar

const socket = io("http://localhost:5000");

const MapComponent = () => {
  const [floor, setFloor] = useState("LG"); // New: selected floor
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [animatedPath, setAnimatedPath] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(0);
  const animationInterval = useRef(null);

  const customIcon = new L.Icon({
    iconUrl: markerIconImg,
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -25],
  });

  const adjustY = (y) => 1080 - y;

  const mallData = floor === "LG" ? mallDataLG : mallDataUG;
  const mapImage = floor === "LG" ? mapImageLG : mapImageUG;

  useEffect(() => {
    socket.on("pathData", ({ source, destination }) => {
      console.log("📡 Received from chatbot:", source, destination);
      setSource(source);
      setDestination(destination);

      const path = findShortestPath(source, destination, mallData);
      if (path.length > 0) {
        if (path[0] !== source) {
          path.unshift(source);
        }
        setAnimatedPath(path);
        const voiceInstructions = generateVoiceInstructions(path, mallData.stores);
        speak(voiceInstructions);
      }
    });

    return () => socket.off("pathData");
  }, [floor]);

  useEffect(() => {
    if (animatedPath.length === 0) return;
    setAnimationIndex(0);
    clearInterval(animationInterval.current);

    animationInterval.current = setInterval(() => {
      setAnimationIndex((prev) => {
        if (prev < animatedPath.length - 1) return prev + 1;
        clearInterval(animationInterval.current);
        return prev;
      });
    }, 200);

    return () => clearInterval(animationInterval.current);
  }, [animatedPath]);

  const handleFindPath = () => {
    if (!source || !destination) {
      alert("Please select both source and destination.");
      return;
    }
    const path = findShortestPath(source, destination, mallData);
    if (path.length > 0) {
      if (path[0] !== source) {
        path.unshift(source);
      }
      setAnimatedPath(path);
      const voiceInstructions = generateVoiceInstructions(path, mallData.stores);
      speak(voiceInstructions);
    }
  };

  const filteredStores = mallData.stores.filter(
    (store) =>
      !store.id.toLowerCase().startsWith("lc") &&
      !store.id.toLowerCase().startsWith("mc")
  );

  return (
    <div className="map-container">
      <Navbar /> {/* Add Navbar here */}

      <div className="controls">
        <label>Select Floor: </label>
        <select value={floor} onChange={(e) => setFloor(e.target.value)}>
          <option value="LG">Lower Ground</option>
          <option value="UG">Upper Ground</option>
        </select>

        <label>Source: </label>
        <select value={source} onChange={(e) => setSource(e.target.value)}>
          <option value="">Select Source</option>
          {filteredStores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.id}
            </option>
          ))}
        </select>

        <label>Destination: </label>
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="">Select Destination</option>
          {filteredStores.map((store) => (
            <option key={store.id} value={store.id}>
              {store.id}
            </option>
          ))}
        </select>

        <button className="neon-button" onClick={handleFindPath}>
          Find Path
        </button>
      </div>

      <div className="map-display">
        <MapContainer
          center={[500, 520]}
          zoom={1}
          style={{ height: "1080px", width: "1039px" }}
          crs={L.CRS.Simple}
        >
          <ImageOverlay url={mapImage} bounds={[[0, 0], [1080, 1039]]} />

          {filteredStores.map((store) => (
            <Marker
              key={store.id}
              position={[adjustY(store.y), store.x]}
              icon={customIcon}
            >
              <Popup>
                <div className="popup-box">
                  <div className="popup-id">{store.id}</div>
                </div>
              </Popup>
            </Marker>
          ))}

          {source && (
            <Marker
              position={[
                adjustY(mallData.stores.find((s) => s.id === source)?.y),
                mallData.stores.find((s) => s.id === source)?.x,
              ]}
              icon={customIcon}
            >
              <Popup>
                <div className="popup-box">
                  <span className="popup-tag">🚩 Source</span>
                  <div className="popup-id">{source}</div>
                </div>
              </Popup>
              <Tooltip permanent direction="top">
                {source}
              </Tooltip>
            </Marker>
          )}

          {destination && (
            <Marker
              position={[
                adjustY(mallData.stores.find((s) => s.id === destination)?.y),
                mallData.stores.find((s) => s.id === destination)?.x,
              ]}
              icon={customIcon}
            >
              <Popup>
                <div className="popup-box">
                  <span className="popup-tag">🏁 Destination</span>
                  <div className="popup-id">{destination}</div>
                </div>
              </Popup>
              <Tooltip permanent direction="top">
                {destination}
              </Tooltip>
            </Marker>
          )}

          {animatedPath.length > 1 && (
            <Polyline
              key={animationIndex}
              positions={animatedPath
                .slice(0, animationIndex + 1)
                .map((node) => {
                  const store = mallData.stores.find((s) => s.id === node);
                  return store ? [adjustY(store.y), store.x] : null;
                })
                .filter(Boolean)}
              color="red"
              weight={5}
              opacity={0.8}
              dashArray="10, 15"
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
