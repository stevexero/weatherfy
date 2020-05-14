class UI {
  constructor() {
    this.cityName = document.getElementById('city-name');
    this.temp = document.getElementById('tempurature');
    this.feelsLike = document.getElementById('feels-like');
    this.low = document.getElementById('low');
    this.high = document.getElementById('high');
  }

  paint(weather) {
    this.cityName.innerHTML = weather.name;
    this.temp.innerHTML =
      Math.round(((weather.current.temp - 273.15) * 9) / 5 + 32) + 'º';
    this.feelsLike.innerHTML =
      Math.round(((weather.current.feels_like - 273.15) * 9) / 5 + 32) + 'º';
    this.low.innerHTML =
      Math.round(((weather.daily[0].temp.min - 273.15) * 9) / 5 + 32) + 'º';
    this.high.innerHTML =
      Math.round(((weather.daily[0].temp.max - 273.15) * 9) / 5 + 32) + 'º';
  }
}
