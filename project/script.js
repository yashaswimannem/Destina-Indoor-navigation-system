// Initialize the map
var map = L.map('map', {
    crs: L.CRS.Simple, // Use a simple coordinate system
    minZoom: -2,
    maxZoom: 1
});

// Load mall floor plan
var bounds = [[0, 0], [1000, 1000]]; // Adjust according to your image scale
L.imageOverlay("data/map.png", bounds).addTo(map);
map.fitBounds(bounds);

// Load store data
fetch("data/mall_map.json")
    .then(response => response.json())
    .then(data => {
        data.locations.forEach(store => {
            var marker = L.marker([store.y, store.x]).addTo(map)
                .bindPopup(`<b>${store.id}</b>`);
            marker._id = store.id;
        });
    });

// Search Functionality
function searchStore() {
    var query = document.getElementById("search").value.toLowerCase();
    map.eachLayer(layer => {
        if (layer._id && layer._id.toLowerCase().includes(query)) {
            layer.openPopup(); // Highlight matched store
        }
    });
}
