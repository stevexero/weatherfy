// Init geolocation
const geoLocation = new GeoLocation();

// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Get weather function
function getWeather() {
  // Initialize weather based on geolocation
  geoLocation.getLocation().then(res => {
    const weatherByCoords = new WeatherByCoords(res.lat, res.long);
    weatherByCoords.getWeatherByCoords().then(result => {
      ui.paint(result);
      console.log(result);
    });
  });
}

// tech used:

// Mozilla Geolocation API
// OpenWeather API
// Mapquest API for reverse geocoding
