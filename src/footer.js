export default function createFooter() {

    const footer = document.createElement('footer'); 
    const top = document.createElement('a'); 
    const linkContainer = document.createElement('div'); 
    const github = document.createElement('a'); 
    const youtube = document.createElement('a'); 

    top.innerText = `The Odin Project`; 
    top.href = 'https://www.theodinproject.com/'; 
    top.target='_blank'; 

    github.innerHTML = '<i class="fa-brands fa-github"></i>'; 
    github.href = 'https://github.com/cdevelopment010/'; 
    github.target = '_blank';
    
    youtube.innerHTML = '<i class="fa-brands fa-youtube"></i>'; 
    youtube.href = 'https://www.youtube.com/channel/UCtHK20C4Dw4fcs7kZDl4QPQ'; 
    youtube.target = '_blank';

    linkContainer.append(github); 
    linkContainer.append(youtube);
    linkContainer.className = 'linkContainer';

    footer.append(top); 
    footer.append(linkContainer); 

    document.querySelector('#footer').append(footer); 
}