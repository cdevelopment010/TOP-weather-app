import './sass/main.scss'; 
import retrieveData from './retrieveData';
import createHeader from './header';
import createFooter from './footer';


createHeader(); 
retrieveData('Consett, UK'); 
createFooter(); 

// (async function init() {
//     createHeader(); 
//     await retrieveData('Consett, UK'); 
//     createFooter(); 
// })(); 


