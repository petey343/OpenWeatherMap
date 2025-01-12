class HourlyWeatherData {
    constructor(hourlyWeatherData) {
        for (const key of Object.keys(hourlyWeatherData)) {
            this[key] = hourlyWeatherData[key];
        }
    }
}

async function getHourlyWeatherData(lat, lon, units = "metric") {
    try {
        const response = await fetch(`/.netlify/functions/hourlyWeatherApi?lat=${lat}&lon=${lon}&units=${units}`);
        if (response.ok) {
            const data = await response.json();
            return new HourlyWeatherData(data);
        }
    } catch (e) {
        console.log(`Something went wrong: ${e}`);
    }
}

export default getHourlyWeatherData;