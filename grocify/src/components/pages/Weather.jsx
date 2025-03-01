import React, { useState } from "react";
import axios from "axios";
import { getWeather } from "../../utils/GetWeatherData";


const Weather = () => {
	const [city, setCity] = useState(""); // State for user input
	const [weatherData, setWeatherData] = useState(null); // State to store weather info
	const [error, setError] = useState(""); // State for error handling

	// Function to fetch weather data
	// const getWeather = async () => {
	// 	if (!city) {
	// 		alert("Please enter a city name.");
	// 		return;
	// 	}

	// 	const weatherApi = `https://goweather.herokuapp.com/weather/${city}`;

	// 	try {
	// 		const response = await axios.get(weatherApi);
	// 		setWeatherData(response.data);
	// 		setError(""); // Clear any previous errors
	// 	} catch (error) {
	// 		setWeatherData(null);
	// 		setError("⚠️ City not found! Try again.");
	// 	}
    // };
    const getWeatherData = () => {
        getWeather(city,setWeatherData,setError);
    }

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white p-6 shadow-lg rounded-md text-center w-96">
				<h2 className="text-2xl font-bold mb-4 border-b-4 border-blue-500 pb-2">
					Weather App
				</h2>

				{/* Input & Button */}
				<div className="flex space-x-2 mb-4">
					<input
						type="text"
						placeholder="Enter city name"
						className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
					<button
						className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
						onClick={getWeatherData}
					>
						Get Weather
					</button>
				</div>

				{/* Display Weather Info */}
				{error && <p className="text-red-500">{error}</p>}
				{weatherData && (
					<div>
						<h3 className="text-xl font-bold">Weather in {city}</h3>
						<p>🌡️ Temperature: {weatherData.temperature}</p>
						<p>🌬️ Wind: {weatherData.wind}</p>
						<p>📅 Forecast:</p>
						<ul>
							{weatherData.forecast.map((day, index) => (
								<li key={index}>
									Day {day.day}: {day.temperature}, {day.wind}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Weather;
