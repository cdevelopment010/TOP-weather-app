export default function _404Page() {
    const container = document.createElement('div'); 
    const errorText = document.createElement('p'); 
    const errorTitle = document.createElement('h2'); 


    errorTitle.innerText = 'Oh No! Looks like there was an error.'
    errorTitle.id = 'error-title';
    errorText.innerText = 'Please try searching again.'
    errorText.id = 'error-text';
    container.id='error-card'; 
    container.append(errorTitle); 
    container.append(errorText); 

    document.querySelector('#main').append(container); 
}