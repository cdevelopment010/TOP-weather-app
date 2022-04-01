
export default function manageDisplay(main, future) {
    const container = document.createElement('div'); 
    
    container.append(main); 
    container.append(future); 
    container.className = 'main-container'; 


    
    
    document.querySelector('#main').append(container); 
    const toggleInput = document.querySelector('#toggle');
    toggleInput.querySelector('input').addEventListener('click', function(){
        updateTemp(this); 
    })
}

function updateTemp(input) {
    const checked = input.checked; 
    let currTemp = document.querySelectorAll('.temp')
    currTemp.forEach(temp => {
        let t = temp.innerText.split(' ')[0];

        if (checked) {
            temp.innerText = Math.round(((t * (9/5)) + 32) * 10)/10 + ' F';
        } else {
            temp.innerText = Math.round(((t  -32)* (5/9)) * 10)/10 + ' C';
        }
    })
}