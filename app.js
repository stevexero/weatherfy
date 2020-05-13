// Init geolocation
const geoLocation = new GeoLocation();

// geoLocation.getLocation().then(res => console.log(res));

// Init UI
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Get weather function
function getWeather() {
  geoLocation.getLocation().then(res => ui.paint(res));
}

// tech used:

// Mozilla Geolocation API
// OpenWeather API
