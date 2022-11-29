import contacts from './modules/contact.js';
import menu from './modules/menu';
import mainSection from './modules/homepage';

let container = document.getElementById('content');

const html = `
    <nav class='flex space-between align-center'>
        <div id='logo'>Restaurant</div>
        <ul class='flex space-between'>
            <li><a id='home-link'>Home</a></li>
            <li><a id='menu-link'>Menu</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About</a></li>
            <li><a id='contacts-link'>Contact</a></li>
        </ul>
        <button type='button' class='orange'>Book a table</button>
    </nav>
`;


function addEvents() {
    let homeBtn = document.getElementById('home-link');
    let menuBtn = document.getElementById('menu-link');
    let contactBtn = document.getElementById('contacts-link');
    
    homeBtn.addEventListener('click', () => openTab('home'));
    menuBtn.addEventListener('click', () => openTab('menu'));
    contactBtn.addEventListener('click', () => openTab('contact'));    
}

function renderHomePage(base, mainSection, menu, contacts) {
    container.innerHTML = base + mainSection + menu + contacts;
}


function openTab(tabName) {
    let tabArray = document.getElementsByClassName("tab");
    for (let i = 0; i < tabArray.length; i++) {
        tabArray[i].style.display = "none";  
    }
    if (tabName == 'home') {
        document.getElementById(tabName).style.display = "flex";
    }
    else  {
        document.getElementById(tabName).style.display = "block";
    }  
}

function init() {
    renderHomePage(html, mainSection, menu, contacts);
    addEvents();
}


init();