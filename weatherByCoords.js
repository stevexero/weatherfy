class WeatherByCoords {
  constructor(lat, long) {
    this.apiKey = '64164420fcaa5faab639e7ae888362fb';
    this.lat = lat;
    this.long = long;
    this.units = 'imperial';
  }

  //   Fetch Weather from API
  async getWeatherByCoords() {
    const response = await fetch(
      //   `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=${this.apiKey}`
      `https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.long}&
      exclude=hourly,daily&appid=${this.apiKey}&units=${this.units}`
    );

    const responseData = await response.json();

    return responseData;
  }
}
