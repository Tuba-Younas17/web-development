import { getWeather } from "./getWeather.js";

const weatherInformation=document.getElementById("weather-info")
// console.log("hello");

const button=document.getElementById("getWeatherBtn")
button.addEventListener("click", () => {
    const city = document.getElementById("city").value; 
    getWeather(city, weatherInformation);
});


