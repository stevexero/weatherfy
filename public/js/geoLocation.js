class GeoLocation {
  async getLocation() {
    const promise = new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          const data = {
            lat: position.coords.latitude,
            long: position.coords.longitude
          };
          resolve(data);
        });
      }
    });
    const res = await promise;

    return res;
  }
}
