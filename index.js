import { lat, lon } from "./config.js";
import { getTheWeather } from "./weatherData.js";

(async () => {
    const weather = await getTheWeather(lat, lon);

    const tempElement = document.getElementById("temp-js");
    tempElement.innerHTML = weather.tempInC();

    const tempElementF = document.getElementById("tempf-js");
    tempElementF.innerHTML = weather.tempInF();



    console.log(`The current temperature in ${weather.name} is ${weather.tempInC()}°C.`);
})();

