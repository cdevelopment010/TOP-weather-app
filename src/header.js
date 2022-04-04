import toggle from "./toggle";
export default function createHeader() {

    const header = document.createElement('header'); 
    const title = document.createElement('h1'); 
    const searchContainer = document.createElement('div'); 
    const searchBox = document.createElement('input'); 
    const searchIcon = document.createElement('i'); 
    let toggleInput = toggle(); 
    toggleInput.id = 'toggle'; 

    title.innerText = 'Weather App';
    searchBox.type='text'; 
    searchBox.placeholder = 'City...'; 
    searchIcon.className = 'fa-solid fa-magnifying-glass'

    searchContainer.append(toggleInput);
    searchContainer.append(searchBox); 
    searchContainer.append(searchIcon);
    searchContainer.className = 'searchContainer';

    header.append(title); 
    header.append(searchContainer); 

    document.querySelector('#header').append(header); 
}