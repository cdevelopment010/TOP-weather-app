import toggle from "./toggle";
import handleSearch from './handleSearch'; 

export default function createHeader() {

    const header = document.createElement('header'); 
    const title = document.createElement('h1'); 
    const searchContainer = document.createElement('form'); 
    const searchBox = document.createElement('input'); 
    const searchIcon = document.createElement('button'); 
    let toggleInput = toggle(); 
    toggleInput.id = 'toggle'; 

    title.innerText = 'Weather App';
    searchBox.type='text'; 
    searchBox.placeholder = 'City, country code'; 
    searchBox.id = 'search-box'
    searchIcon.className = 'fa-solid fa-magnifying-glass'
    searchIcon.id = 'search-icon'
    // searchIcon.type = 'button';

    searchContainer.append(toggleInput);
    searchContainer.append(searchBox); 
    searchContainer.append(searchIcon);
    searchContainer.className = 'searchContainer';

    header.append(title); 
    header.append(searchContainer); 

    document.querySelector('#header').append(header); 




    const search = document.querySelector('form')
    const togs = document.querySelector('#toggle');
    togs.querySelector('input').addEventListener('click', function(){
        updateTemp(this); 
    }); 
    search.addEventListener('submit', function(e) {
        e.preventDefault(); 
        handleSearch(); 
    });
}


function updateTemp(input) {
    const checked = input.checked; 
    let currTemp = document.querySelectorAll('.temp')
    currTemp.forEach(temp => {
        let t = temp.innerText.split(' ')[0];

        if (checked) {
            temp.innerHTML = Math.round(((t * (9/5)) + 32) * 10)/10 + ' &#8457;';
        } else {
            temp.innerHTML = Math.round(((t  -32)* (5/9)) * 10)/10 + ' &#8451;';
        }
    })
}