import { getWeatherApiUrl, } from "../services/weatherApi";

export const getWeather = async (city, setWeatherData, setError) => {
	if (!city) {
		alert("Please enter a city name.");
		return;
	}

    const weatherApi = getWeatherApiUrl(city);
    console.log(weatherApi);

	try {
		const response = await axios.get(weatherApi);
        setWeatherData(response.data);
        console.log(response);
		setError(""); // Clear any previous errors
	} catch (error) {
		setWeatherData(null);
		setError("⚠️ City not found! Try again.");
	}
};