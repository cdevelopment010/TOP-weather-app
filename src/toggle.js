export default function toggle() {
    const label = document.createElement('label'); 
    const checkbox = document.createElement('input'); 
    const span = document.createElement('span'); 

    label.className = 'switch'; 
    checkbox.type = 'checkbox'
    span.className = 'slider round'; 

    label.append(checkbox); 
    label.append(span); 

    return label; 
}
