const apiKey = "e035537a8bcec0c2a296de565ddeaa37";

const apiURl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searhBox = document.querySelector(".search input");
const searchBtn = document.querySelector("button");

const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(cityName) {
  try {
    let response = await axios.get(`${apiURl}&q=${cityName}&appid=${apiKey}`);
    let data = response.data;
    console.log(response);

    let city = document.querySelector(".city");
    city.innerHTML = data.name;

    let temp = document.querySelector(".temp");
    temp.innerHTML = data.main.temp + "°C";

    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = `${data.main.humidity}%`;

    let wind = document.querySelector(".wind");
    wind.innerHTML = `${data.wind.speed}KM/H`;

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".details").style.display = "flex";
    document.querySelector(".error").style.display = "none";
  } catch (error) {
    console.log("ERROR:", error);
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".details").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searhBox.value);
});
