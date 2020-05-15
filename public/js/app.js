// Init geolocation
const geoLocation = new GeoLocation();

// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

let units = 'imperial';

this.toggler = document
  .getElementById('toggler')
  .addEventListener('click', e => {
    if (e.path[0].checked === true) {
      units = 'metric';
      getWeather();
      document.getElementById('wind-metric').innerHTML = ' mps - ';
    } else {
      units = 'imperial';
      getWeather();
      document.getElementById('wind-metric').innerHTML = ' mph - ';
    }
  });

// Get weather function
function getWeather() {
  // Initialize weather based on geolocation
  geoLocation.getLocation().then(res => {
    const weatherByCoords = new WeatherByCoords(res.lat, res.long, units);
    weatherByCoords.getWeatherByCoords().then(result => {
      ui.paint(result);
    });
  });
}

// tech used:

// Mozilla Geolocation API
// OpenWeather API
// Mapquest API for reverse geocoding
// Express
// Vanilla Javascript and CSS
// fontawesome
// node-fetch
