class WeatherByCoords {
  constructor(lat, long, units) {
    this.lat = lat;
    this.long = long;
    this.units = units;
  }

  //   Fetch Weather from API
  async getWeatherByCoords() {
    const api_url = `weather/${this.lat},${this.long},${this.units}`;

    const response = await fetch(api_url);

    const responseData = await response.json();

    return responseData;
  }
}
