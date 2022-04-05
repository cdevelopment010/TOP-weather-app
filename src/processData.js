import displayMainWeather from "./displayMainWeather";
import manageDisplay from "./manageDisplay";
import futureWeatherDisplay from "./futureWeatherDisplay";


export default function processData(data) {
    const weather = data.list; 
    console.log("process data")
    console.log(data);
    const weatherNow = weather[0]; 
    const mainDisplay = displayMainWeather(weatherNow, `${data.city.name}, ${data.city.country}`);
    const futureDisplay = futureWeatherDisplay(weather, 0, 5);
    // futureDisplay.textContent = 'hellow';

    manageDisplay(mainDisplay, futureDisplay); 
    // const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
}