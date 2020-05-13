class UI {
  constructor() {
    this.latitude = document.getElementById('lat');
    this.longitude = document.getElementById('long');
  }

  paint(test) {
    this.latitude.textContent = test.lat;
    this.longitude.textContent = test.long;
  }
}
