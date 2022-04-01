import processData from "./processData";

export default async function retrieveData(location) {


    // add loading screen;

    const apiKey = 'cb561535d4382bd95e0f2ab965974e4e'
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`; //current
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`; // 5day/3 hour
    const response = await fetch(url); 
    const data = await response.json(); 
    processData(data);
}