import toggle from "./toggle";

export default function displayMainWeather(obj, location) {

    const container = document.createElement('div'); 
    const loc = document.createElement('p'); 
    const img = document.createElement('img'); 
    const dateTime = document.createElement('p');
    const temp = document.createElement('p');
    const weather = document.createElement('p');
    const pressure = document.createElement('p');
    const wind = document.createElement('p');

    let date = new Date(obj.dt_txt); 

    loc.innerText = location; 
    dateTime.innerText = new Intl.DateTimeFormat('en-GB', {weekday: "short"}).format(date) + " | " + new Intl.DateTimeFormat('en-GB', {hour12: false, hour: 'numeric', minute: 'numeric'}).format(date);
    temp.innerHTML = Math.round((obj.main.temp - 273)*10)/10 + ' &#8451;'; //kelvins
    weather.innerText = obj.weather[0].main; 
    pressure.innerText = obj.main.pressure + ' hPa'; 
    wind.innerText = obj.wind.speed + ' m/s';

    img.src = `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`; 

    temp.classList = 'temp'; 
    temp.id = 'temp';
    loc.id = 'location'; 
    dateTime.id = 'date-time'; 
    weather.id = 'weather'; 
    pressure.id = 'pressure'; 
    wind.id = 'wind'; 

    container.append(loc);
    container.append(img); 
    container.append(dateTime); 
    container.append(temp); 
    container.append(weather); 
    container.append(pressure); 
    container.append(wind); 

    container.id = 'main-weather';


    return container; 
}
