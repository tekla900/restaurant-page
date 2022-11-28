import contacts from './modules/contact.js';
import menu from './modules/menu';

let container = document.getElementById('content');

const html = `
    <nav class='flex space-between'>
        <div id='logo'>Restaurant</div>
        <ul class='flex space-between'>
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
    let menuBtn = document.getElementById('menu-link');
    let contactBtn = document.getElementById('contacts-link');
    
    menuBtn.addEventListener('click', () => openTab('menu'));
    contactBtn.addEventListener('click', () => openTab('contact'));    
}

function renderHomePage(base, menu, contact) {
    container.innerHTML = base + menu + contact;
}


function openTab(tabName) {
    let tabArray = document.getElementsByClassName("tab");
    for (let i = 0; i < tabArray.length; i++) {
        tabArray[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
}

function init() {
    renderHomePage(html, menu, contacts);
    addEvents();
}


init();