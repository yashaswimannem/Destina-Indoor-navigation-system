import React, { useState } from "react";
import { MapContainer, ImageOverlay, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import mallData from "../data/stores.json"; // Store & Walkable Paths Data
import { findShortestPath } from "./ShortestPath"; // Shortest Path Algorithm
import L from "leaflet";
import mapImage from "../assets/map1.png"; // Mall Blueprint
import markerIconImg from "../assets/marker.png"; // Store Marker Icon

// 🗺️ Set Map Image Dimensions (Match the actual map image size)
const imageWidth = 1039;  
const imageHeight = 1080; 
const bounds = [[0, 0], [imageHeight, imageWidth]];

// 📌 Custom Marker Icon
const customIcon = new L.Icon({
    iconUrl: markerIconImg,
    iconSize: [25, 25], 
    iconAnchor: [12, 25] 
});

// 📌 Function to Adjust Y-Coordinates (Fixes Alignment Issues)
const adjustY = (y) => imageHeight - y; // Flip Y-axis to align correctly

const MapComponent = () => {
    const [source, setSource] = useState("");  
    const [destination, setDestination] = useState("");  
    const [shortestPath, setShortestPath] = useState([]);

    // 📌 Find & Display Shortest Path
    const handleFindPath = () => {
        if (!source || !destination) {
            alert("Please select both source and destination.");
            return;
        }
        const path = findShortestPath(source, destination);
        setShortestPath(path);
    };

    return (
        <div style={{ padding: "10px" }}>
            {/* 📌 Dropdown Selection */}
            <div style={{ marginBottom: "10px" }}>
                <label>Source: </label>
                <select value={source} onChange={(e) => setSource(e.target.value)}>
                    <option value="">Select Source</option>
                    {mallData.stores.map(store => (
                        <option key={store.id} value={store.id}>{store.id}</option>
                    ))}
                </select>

                <label style={{ marginLeft: "20px" }}>Destination: </label>
                <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                    <option value="">Select Destination</option>
                    {mallData.stores.map(store => (
                        <option key={store.id} value={store.id}>{store.id}</option>
                    ))}
                </select>

                <button 
    onClick={handleFindPath} 
    style={{ 
        backgroundColor: "#007bff", color: "white", 
        padding: "10px 16px", fontSize: "16px", 
        border: "none", cursor: "pointer", borderRadius: "5px" 
    }}>
    Find Path
</button>

            </div>

            {/* 🗺️ Map Display */}
            <MapContainer 
                center={[imageHeight / 2, imageWidth / 2]}  
                zoom={1} 
                maxBounds={bounds} 
                style={{ height: "150vh", width: "100vw" }}  
                crs={L.CRS.Simple}
            >
                <ImageOverlay url={mapImage} bounds={bounds} />

                {/* 📍 Store Markers */}
                {mallData.stores.map((store) => (
                    <Marker key={store.id} position={[adjustY(store.y), store.x]} icon={customIcon}>
                        <Popup>{store.id}</Popup>
                    </Marker>
                ))}

                {/* 🔵 Walkable Paths */}
                {mallData.Walkable_paths.map((path, index) => {
                    const from = mallData.stores.find(s => s.id === path.from);
                    const to = mallData.stores.find(s => s.id === path.to);
                    return from && to ? (
                        <Polyline key={index} positions={[[adjustY(from.y), from.x], [adjustY(to.y), to.x]]} color="blue" />
                    ) : null;
                })}

                {/* 🔴`
                 Shortest Path (Highlighted) */}
                {shortestPath.length > 1 && (
                    <Polyline 
                        positions={shortestPath.map(node => {
                            const store = mallData.stores.find(s => s.id === node);
                            return store ? [adjustY(store.y), store.x] : null;
                        }).filter(Boolean)} 
                        color="red" 
                        weight={5} 
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
