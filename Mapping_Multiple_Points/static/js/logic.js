// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.
//Create the map object with a center and zoom level.
let map = L.map('map').setView([40.7, -94.5], 4);

//Alternative method 
// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
 // center: [
 //   40.7, -94.5
//  ],
 // zoom: 4
//});
//  Add a marker to the map for Los Angeles, California.
 //let marker = L.marker([34.0522, -118.2437]).addTo(map);

 //circle function
   //L.circle([34.0522, -118.2437], {
   //radius: 100
   //}).addTo(map);

 //adding the circle marker
  /*  L.circleMarker([34.0522, -118.2437],{
    radius: 300,
    color : "black",
    fillcolor :'#ffffa1'
 }).addTo(map);*/

 
// Get data from cities.js
let cityData = cities;

// An array containing each city's location, state, and population.
 /*let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
  },
  {
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
  },
  {
    location: [29.7604, -95.3698],
    city: "Houston",
    state: "TX",
    population: 2325502
  },
  {
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
  }
  ];*/

  // Loop through the cities array and create one marker for each city.
  cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location,{ //adding circle markerfunction
        radius: city.population/100000
    })
  //Adding bindpopup function  
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
   });

   

// We create the tile layer that will be the background of our map.
  //let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);