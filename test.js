const apiKey = "e03a1db673aeda774d0d3ca4d857c646";
const lat = 43.4036744;
const lon = -73.2667154;

// https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}

function getForecast() {
    fetch(`https://pro.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            const timestamp = data.list[1].dt;
            const date = new Date(timestamp * 1000);
            console.log(date.toISOString());
            console.log(date.toLocaleString());
            console.log(date.toDateString());
        })
        .catch((e) => console.log(e));
}

getForecast();