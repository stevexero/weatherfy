require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather/:latlong', async (req, res) => {
  const latlong = req.params.latlong.split(',');
  const lat = latlong[0];
  const long = latlong[1];
  const units = latlong[2];
  const key = process.env.OPENWEATHERMAP_API_KEY;

  const api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
      exclude=hourly,daily&appid=${key}&units=${units}`;
  const response = await fetch(api_url);
  const json = await response.json();
  res.json(json);
});

app.get('/reversegeocoding/:latlong', async (req, res) => {
  const latlong = req.params.latlong.split(',');
  const lat = latlong[0];
  const long = latlong[1];
  const key = process.env.MAPQUESTAPI_KEY;

  const api_url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${key}&location=${lat},${long}`;
  const response = await fetch(api_url);
  const json = await response.json();
  res.json(json);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server on ${PORT}`));
