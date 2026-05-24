const API_KEY = "34429a77c950d4b08fa3273bfeb9f0c1";

// async function getWeather() {
//   const cityName = document.getElementById("cityName").value.trim();

//   const { Lattitude, Longitude } = await geoLocation(cityName);
//   const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

//   const response = await fetch(WEATHER_API);
//   const data = await response.json;

//   document.getElementById("Temperature").innerText = data.main.temp;
// }

// async function geoLocation(cityName) {
//   const GEO_LOC = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=3${API_KEY}`;

//   const response = await fetch(GEO_LOC);

//   const data = await response.json();

//   console.log(data);

//   const Lattitude = data[0].lat;
//   const Longitude = data[0].lon;

//   return { Lattitude, Longitude };
// }


async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  const { Lattitude, Longitude } = await getGeoLocation(cityName);


  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();


  const temperature = data.main.temp - 273.15;

  document.getElementById("Temperature").innerText = temperature.toFixed(2);
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;

  return { Lattitude, Longitude };
}
