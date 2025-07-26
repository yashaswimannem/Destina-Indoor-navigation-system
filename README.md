

# 🧭 Destina - Indoor Navigation System

**Destina** is a web-based indoor navigation system designed to help users navigate large public spaces such as malls, hospitals, and universities with ease. The system allows users to input their source and destination within a floor layout and provides the shortest, most efficient path using a 2D route map.

## 🌟 Features

- 🗺️ Interactive 2D Map Visualization
- 🔍 Input-based Source and Destination Selection
- 📌 Shortest Path Calculation using Graph Algorithms
- 🏬 Floor-specific Navigation (Currently built for Lower Ground Floor of Sarath City Capital Mall, Hyderabad)
- 👤 User Login System
- ⚡ Real-time Route Display on the Map
- 📦 JSON-based Store Coordinate Management

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js (optional WebSocket integration)
- **Data Format**: JSON (for store coordinates and map structure)
- **Algorithms**: Dijkstra’s / BFS for shortest path computation

## 🗂️ Project Structure
Destina-Indoor-navigation-system/
├── index.html
├── style.css
├── script.js
├── store_coordinates.json
├── login.html
└── README.md


## 🧠 How It Works

1. User logs into the system.
2. Selects the source and destination stores from dropdowns.
3. On clicking "Find", the system calculates the shortest route between two stores.
4. A 2D path is drawn dynamically on the map using the stored coordinates.

## 🧮 Example JSON Format

```json
[
  {
    "id": "pantaloons",
    "name": "Pantaloons",
    "x": 120,
    "y": 310
  },
  ...
]

🚀 Future Enhancements
Multi-floor navigation with elevator/escalator logic

Mobile app integration with AR wayfinding

Voice-based guidance system

Store search and filter features

Admin dashboard for updating map and store info
