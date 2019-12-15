const API_KEY = 'b83be1ca6b81d74ed0fd06356479aa7a';
const URL = 'api.openweathermap.org/data/2.5/weather?lat=35&lon=139';
const COORDS = 'coords';

const weatherContainer = document.querySelector('#js-weather');

function createWeather(city, temp, weather) {
  const div = document.createElement('div');
  const weatherSpan = document.createElement('span');
  const tempSpan = document.createElement('span');
  const cityDiv = document.createElement('div');

  weatherSpan.innerHTML = weather;
  tempSpan.innerHTML = temp;
  tempSpan.id = 'js-weather-temp';
  cityDiv.innerHTML = city;
  cityDiv.id = 'js-weather-city';

  div.appendChild(weatherSpan);
  div.appendChild(tempSpan);
  weatherContainer.appendChild(div);
  weatherContainer.appendChild(cityDiv);
}

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      const city = response.name;
      const temp = `${Math.ceil(response.main.temp)}°`;
      const weather = response.weather[0].main;
      createWeather(city, temp, weather);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const { latitude, longitude } = position.coords;
  const coordsObj = { latitude, longitude };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log('Cant access geo location');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords) {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  } else {
    askForCoords();
  }
}

function init() {
  loadCoords();
}

init();