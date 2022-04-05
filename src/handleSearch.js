import retrieveData from "./retrieveData";
export default function handleSearch() {
    const input = document.querySelector('#search-box').value; 

    // clear main then repopulate; 
    document.querySelector('#main').innerHTML = '';

    // repopulate with new input; 
    console.log(input);
    retrieveData(input); 

    // clear input value; 
    document.querySelector('#search-box').value = ''; 

}