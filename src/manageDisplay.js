

export default function manageDisplay(main, future) {
    console.log("managedisplay")
    const container = document.createElement('div'); 

    container.append(main); 
    container.append(future); 
    container.className = 'main-container'; 

    document.querySelector('#main').append(container); 

    
    
}
