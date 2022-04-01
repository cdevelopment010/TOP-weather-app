export default function futureWeatherDisplay(obj, startId, endId) {

    const futureContainer = document.createElement('div'); 

    obj.forEach( (forecast, index) => {
        if (index >= startId && index <= endId) {
            console.log(forecast); 
            const container = document.createElement('div'); 
            const img = document.createElement('img'); 
            const dateTime = document.createElement('p');
            const temp = document.createElement('p');

            dateTime.innerText = forecast.dt_txt;
            temp.innerText = Math.round((forecast.main.temp - 273)*10)/10 + ' C' || '0'; //kelvins
            img.src = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`
            temp.classList = 'temp'; 

            container.append(img); 
            container.append(dateTime); 
            container.append(temp); 

            container.className = 'future-card'; 
            futureContainer.append(container);
        }
    })
    return futureContainer;
}