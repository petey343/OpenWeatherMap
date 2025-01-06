import { lat, lon } from "./config.js";
import { getTheWeather } from "./weatherData.js";
import { secondLine } from "./secondLine.js";

(async () => {
    const spinner = document.getElementById("loading-spinner");
    spinner.style.display = "block";

    try {
        const weather = await getTheWeather(lat, lon);
        if (weather) {
            spinner.style.display = "none";

            const tempElement = document.getElementById("temp-js");
            tempElement.innerHTML = weather.tempInC;

            const tempElementF = document.getElementById("tempf-js");
            tempElementF.innerHTML = weather.tempInF;

            const funnyLine = document.getElementById("secondary");
            funnyLine.innerHTML = secondLine(weather.tempInC);
            console.log(typeof weather.tempC);
        } else {
            throw new Error("No data received.");
        }
    } catch (error) {
        spinner.style.display = "none";
        console.error("Error fetching weather data:", error);
    }
})();
