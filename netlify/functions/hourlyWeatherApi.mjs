import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export async function handler(event) {
    const apiKey = process.env.API_KEY;
    const { lat, lon, units } = event.queryStringParameters;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`);
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.log("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch weather data" }),
        };
    }
};


