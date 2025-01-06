import fetch from 'node-fetch'; // Used to make HTTP requests (like fetch in the browser)
import dotenv from 'dotenv';
dotenv.config();

// This is the code Netlify will run when your frontend calls this function
export async function handler(event) {
    const apiKey = process.env.API_KEY; // Get the API key from Netlify's environment variables
    const { lat, lon } = event.queryStringParameters; // Get lat/lon from the request

    try {
        // Call OpenWeatherMap API with your secret API key
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        // Send the weather data back to your frontend
        return {
            statusCode: 200,
            body: JSON.stringify(data), // Turn the data into JSON
        };
    } catch (error) {
        console.log("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch weather data" }),
        };
    }
};
