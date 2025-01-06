import { lat, lon } from "./config.js";
import { getTheWeather } from "./weatherData.js";
import { secondLine } from "./secondLine.js";


(async () => {
    const weather = await getTheWeather(lat, lon);

    const tempElement = document.getElementById("temp-js");
    tempElement.innerHTML = weather.tempInC();

    const tempElementF = document.getElementById("tempf-js");
    tempElementF.innerHTML = weather.tempInF();

    const funnyLine = document.getElementById("secondary");
    funnyLine.innerHTML = secondLine(weather.tempInC());
})();