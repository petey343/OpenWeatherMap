class WeatherData {
    constructor(weatherData) {
        for (const key in weatherData) {
            this[key] = weatherData[key];
        }
    }

    tempInC() {
        const tempInC = this.main.temp - 273.15;
        return parseFloat(tempInC.toFixed(1));
    }

    tempInF() {
        const tempInF = (this.main.temp - 273.15) * 9 / 5 + 32;
        return parseFloat(tempInF.toFixed(0));
    }
}

export async function getTheWeather(lat, lon) {
    try {
        const response = await fetch(`/.netlify/functions/weatherApi?lat=${lat}&lon=${lon}`);
        const weatherData = await response.json();
        return new WeatherData(weatherData);
    } catch (error) {
        console.log(error);
    }
}