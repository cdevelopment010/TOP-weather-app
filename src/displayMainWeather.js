import toggle from "./toggle";

export default function displayMainWeather(obj) {

    console.log(obj);
    const container = document.createElement('div'); 
    const img = document.createElement('img'); 
    const dateTime = document.createElement('p');
    const temp = document.createElement('p');
    const weather = document.createElement('p');
    const pressure = document.createElement('p');
    const wind = document.createElement('p');
    let toggleInput = toggle(); 
    toggleInput.id = 'toggle'; 

    dateTime.innerText = obj.dt_txt;
    temp.innerText = Math.round((obj.main.temp - 273)*10)/10 + ' C'; //kelvins
    weather.innerText = obj.weather[0].main; 
    pressure.innerText = obj.main.pressure + ' hPa'; 
    wind.innerText = obj.wind.speed + ' m/s';

    img.src = `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`; 


    updateBg(weather.innerText);

    temp.classList = 'temp'; 
    container.append(img); 
    container.append(toggleInput); 
    container.append(dateTime); 
    container.append(temp); 
    container.append(weather); 
    container.append(pressure); 
    container.append(wind); 

    container.id = 'main-weather';


    return container; 
}

function updateBg(currWeather) {
    const weatherList = ['snow', 'rain', 'sun', 'clouds', 'lightning', 'mist']; 

    if (weatherList.indexOf(currWeather.toLowerCase()) != -1) {
        document.querySelector('#root').style.backgroundImage = `url(../images/${currWeather.toLowerCase()}-bg.jpg)`;
        console.log('updated');
    } else {
        console.log('MISSING');
        console.log(currWeather);
    }
}