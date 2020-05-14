class UI {
  constructor() {
    this.temp = document.getElementById('tempurature');
    this.feelsLike = document.getElementById('feels-like');
    this.low = document.getElementById('low');
    this.high = document.getElementById('high');
    this.humidity = document.getElementById('humidity');
    this.skies = document.getElementById('skies');
    this.wind = document.getElementById('wind');
    this.windDirection = document.getElementById('wind-direction');
    this.sunrise = document.getElementById('sunrise');
    this.sunset = document.getElementById('sunset');
  }

  paint(weather) {
    function timeStamp(t) {
      var dt = new Date(t * 1000);
      var hr = dt.getHours();
      var m = '0' + dt.getMinutes();

      var h = hr;
      if (h >= 12) {
        h = hr - 12;
      }
      if (h == 0) {
        h = 12;
      }
      return h + ':' + m.substr(-2);
    }

    function compass(angle) {
      const degreePerDirection = 360 / 8;
      const offsetAngle = angle + degreePerDirection / 2;
      return offsetAngle >= 0 * degreePerDirection &&
        offsetAngle < 1 * degreePerDirection
        ? 'N'
        : offsetAngle >= 1 * degreePerDirection &&
          offsetAngle < 2 * degreePerDirection
        ? 'NE'
        : offsetAngle >= 2 * degreePerDirection &&
          offsetAngle < 3 * degreePerDirection
        ? 'E'
        : offsetAngle >= 3 * degreePerDirection &&
          offsetAngle < 4 * degreePerDirection
        ? 'SE'
        : offsetAngle >= 4 * degreePerDirection &&
          offsetAngle < 5 * degreePerDirection
        ? 'S'
        : offsetAngle >= 5 * degreePerDirection &&
          offsetAngle < 6 * degreePerDirection
        ? 'SW'
        : offsetAngle >= 6 * degreePerDirection &&
          offsetAngle < 7 * degreePerDirection
        ? 'W'
        : 'NW';
    }

    function getCity(lat, long) {
      const key = '';

      const xhr = new XMLHttpRequest();

      xhr.open(
        'GET',
        `http://www.mapquestapi.com/geocoding/v1/reverse?key=${key}&location=${lat},${long}`,
        true
      );

      xhr.onload = function() {
        if (this.status === 200) {
          const response = JSON.parse(this.responseText);

          document.getElementById('city-name').innerHTML =
            response.results[0].locations[0].adminArea5;
        }
      };
      xhr.send();
    }

    getCity(weather.lat, weather.lon);
    this.temp.innerHTML = Math.round(weather.current.temp) + 'º';
    this.feelsLike.innerHTML = Math.round(weather.current.feels_like) + 'º';
    this.low.innerHTML = Math.round(weather.daily[0].temp.min) + 'º';
    this.high.innerHTML = Math.round(weather.daily[0].temp.max) + 'º';
    this.humidity.innerHTML = weather.current.humidity + '%';
    this.skies.innerHTML = weather.current.weather[0].description;
    this.wind.innerHTML = Math.round(weather.current.wind_speed) + ' mph - ';
    this.windDirection.innerHTML = compass(weather.current.wind_deg);
    this.sunrise.innerHTML = timeStamp(weather.current.sunrise);
    this.sunset.innerHTML = timeStamp(weather.current.sunset);
  }
}
