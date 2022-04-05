import processData from "./processData";
import _404Page from "./404Error";

export default async function retrieveData(location) {


    // add loading screen;
    const apiKey = 'cb561535d4382bd95e0f2ab965974e4e'
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`; //current
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`; // 5day/3 hour
    try {
        const response = await fetch(url); 
        const data = await response.json(); 
        processData(data);

    } catch(err) {
        console.log(err);
        // 404 page
        _404Page(); 
    }
    
}