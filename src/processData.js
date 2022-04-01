import displayMainWeather from "./displayMainWeather";
import manageDisplay from "./manageDisplay";
import futureWeatherDisplay from "./futureWeatherDisplay";


export default function processData(data) {
    const weather = data.list; 

    const weatherNow = weather[0]; 

    const mainDisplay = displayMainWeather(weatherNow);
    const futureDisplay = futureWeatherDisplay(weather, 0, 2);
    console.log(futureDisplay);
    // futureDisplay.textContent = 'hellow';

    manageDisplay(mainDisplay, futureDisplay); 
    // const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
}