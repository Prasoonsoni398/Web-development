const API_KEY = "your api key needed";

async function getWeather() {
  const city = document.getElementById("cityName").value.trim();

  if (city === "") return;

  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(API);

  const data = await response.json();

  if (data.cod != 200) return;

  // City

  document.getElementById("city").innerText = data.name;

  // Condition
  document.getElementById("condition").innerText = data.weather[0].main;

  // Temperature

  document.getElementById("temperature").innerText = data.main.temp.toFixed(1);

  // Humidity

  document.getElementById("humidity").innerText = data.main.humidity + "%";

  // Wind Speed

  document.getElementById("wind").innerText = data.wind.speed + " km/h";

  // Feels Like

  document.getElementById("feelsLike").innerText =
    data.main.feels_like.toFixed(1) + "°C";

  // Pressure

  document.getElementById("pressure").innerText = data.main.pressure + " hPa";

  // Weather Icon

  
}

// Enter Key Support

document.getElementById("cityName").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getWeather();
  }
});
