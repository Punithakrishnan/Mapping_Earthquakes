// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
  //let map = L.map('map').setView([37.5, -122.5], 10);

  // Create the map object with center and zoom level.
//let map = L.map('map').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with a center and zoom level.
let map = L.map("map", {
  center: [30, 30],
  zoom: 4,
  layers: [streets]
});

<<<<<<< HEAD

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/Punithakrishnan/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data).addTo(map);
});


=======
>>>>>>> dc4b8cd472be23c8630684314cc28c43a44ed9a1
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Punithakrishnan/Mapping_Earthquakes/main/majorAirports.json" ;

<<<<<<< HEAD
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

=======
>>>>>>> dc4b8cd472be23c8630684314cc28c43a44ed9a1
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
//L.geoJSON(data).addTo(map);
//});

// Grabbing our GeoJSON data. adding thepointto layer function
L.geoJSON(data, {
<<<<<<< HEAD
  style: myStyle,
=======
>>>>>>> dc4b8cd472be23c8630684314cc28c43a44ed9a1
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer)
    layer.bindPopup("<h2>Airport code: " + feature.properties.faa + "</h2> <hr> <h3> Airport name: " + feature.properties.name + "</h3>");
  }

}).addTo(map);

}); 





