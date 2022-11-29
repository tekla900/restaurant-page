import contacts from './modules/contact.js';
import menu from './modules/menu';
import mainSection from './modules/homepage';
import promo from './modules/promo';

let container = document.getElementById('content');

const html = `
    <nav class='flex space-between align-center'>
        <div id='logo'>Restaurant</div>
        <ul class='flex space-between'>
            <li><a id='home-link'>Home</a></li>
            <li><a id='menu-link'>Menu</a></li>
            <li><a href="#">Events</a></li>
            <li><a id='promo-link'>Subscribe</a></li>
            <li><a id='contacts-link'>Contact</a></li>
        </ul>
        <button type='button' class='orange'>Book a table</button>
    </nav>
`;


function addEvents() {
    let homeBtn = document.getElementById('home-link');
    let menuBtn = document.getElementById('menu-link');
    let contactBtn = document.getElementById('contacts-link');
    let promoBtn = document.getElementById('promo-link');

    homeBtn.addEventListener('click', () => openTab('home'));
    menuBtn.addEventListener('click', () => openTab('menu'));
    contactBtn.addEventListener('click', () => openTab('contact')); 
    promoBtn.addEventListener('click', () => openTab('promo'));   
}

function renderHomePage(base, mainSection, menu, promo, contacts) {
    container.innerHTML = base + mainSection + menu + promo + contacts;
}


function openTab(tabName) {
    let tabArray = document.getElementsByClassName("tab");
    for (let i = 0; i < tabArray.length; i++) {
        tabArray[i].style.display = "none";  
    }
    if (tabName == 'home') {
        document.getElementById(tabName).style.display = "flex";
    } else if (tabName == 'promo') {
        document.getElementById(tabName).style.display = "grid";
    }
    else  {
        document.getElementById(tabName).style.display = "block";
    }  
}

function init() {
    renderHomePage(html, mainSection, menu, promo, contacts);
    addEvents();
}


init();