import getHourlyWeatherData from "./weatherDataHourly.js";

async function buildCards(lat, lon) {
    const weatherData = await getHourlyWeatherData(lat, lon);
    const weatherCardsContainer = document.querySelector(".weather-cards-container");
    const weatherDataArray = weatherData.list;

    for (let i = 0; i < 4; i++) {
        const entry = weatherDataArray[i];
        const time = new Date(entry.dt * 1000).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
        });
        const temp = entry.main.temp.toFixed(1);
        const icon = entry.weather[0].icon;
        const description = entry.weather[0].main;

        const cardHTML = `
        <div class="weather-card col bg-primary p-2 text-start m-2 rounded">
        <div class="weather-card-time">${time}</div>
        <div class="d-flex justify-content-center">
        <img class="weather-card-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png"></div>
        <div class="weather-card-description"><em>${description}</em></div>
        <div class="weather-card-temp text-bold"><strong>${temp}°C</strong></div></div>
    `;
        weatherCardsContainer.innerHTML += cardHTML;
    }


}

export default buildCards;