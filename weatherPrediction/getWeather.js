export const getWeather = async (city,weatherInformation) => {
    
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://goweather.herokuapp.com/weather/${city}`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);

        weatherInformation.innerHTML = `
            <h3 class="text-xl font-bold">Weather in ${city}</h3>
            <p>\u{1F321} Temperature : ${data.temperature}</p>
            <p>\u{1F32C} Wind : ${data.wind}</p>
            <p>\u{1F4C5} Forecast :</p>
            <ul>
                ${data.forecast.map(day => `<li>Day ${day.day}: ${day.temperature}, ${day.wind}</li>`).join("")}
            </ul>
        `;
    } catch (error) {
        
        weatherInformation.innerHTML = "<p>⚠️ City not found! Try again.</p>";
    }
};