let now = new Date();

let h2 = document.querySelector(".date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

h2.innerHTML = `${day}, ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#search-text-input").innerHTML = response.data.name;
  document.querySelector("h2").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.main.wind
  );
  document.querySelector("#forecast").innerHTML = response.data.weather[0].main;
}

function getCurrentLocation(event) {
  navigator.geolocation.getCurrentPosition(function (position) {
    do_something(positition.coords.latitude, position.coords.longitude);
  });
}

function search(event) {
  event.preventDefault();
  let apiKey = "e74a23c2a9d9d9df3b21a206d1362888";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", search);
