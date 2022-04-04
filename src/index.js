import './sass/main.scss'; 
import retrieveData from './retrieveData';
import createHeader from './header';
import createFooter from './footer';


createHeader(); 
retrieveData('Durham, UK'); 
createFooter(); 