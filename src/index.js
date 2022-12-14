import menu from './modules/menu';
import mainSection from './modules/homepage';
import promo from './modules/promo';
import footer from './modules/footer';
import chefs from './modules/chefs';

let container = document.getElementById('content');

const html = `
    <nav class='flex space-between align-center'>
        <div id='logo'>Restaurant</div>
        <ul class='flex space-between'>
            <li><a id='home-link'>Home</a></li>
            <li><a id='menu-link'>Menu</a></li>
            <li><a id='chef-link'>Meet our chefs</a></li>
            <li><a id='promo-link'>Subscribe</a></li>
        </ul>
        <button type='button' class='orange'>Book a table</button>
    </nav>
`;


function addEvents() {
    let homeBtn = document.getElementById('home-link');
    let menuBtn = document.getElementById('menu-link');
    let promoBtn = document.getElementById('promo-link');
    let chefBtn = document.getElementById('chef-link');

    homeBtn.addEventListener('click', () => openTab('home'));
    menuBtn.addEventListener('click', () => openTab('menu'));
    promoBtn.addEventListener('click', () => openTab('promo'));   
    chefBtn.addEventListener('click', () => openTab('chefs'));   
}

function renderHomePage(base, mainSection, menu, chefs, promo, footer) {
    container.innerHTML = base + mainSection + menu + chefs + promo + footer;
}


function openTab(tabName) {
    let tabArray = document.getElementsByClassName("tab");
    for (let i = 0; i < tabArray.length; i++) {
        tabArray[i].style.display = "none";  
    }
    if (tabName == 'home' || tabName == 'chefs') {
        document.getElementById(tabName).style.display = "flex";
    } else if (tabName == 'promo') {
        document.getElementById(tabName).style.display = "grid";
    }
    else  {
        document.getElementById(tabName).style.display = "block";
    }  
}

function init() {
    renderHomePage(html, mainSection, menu, chefs, promo, footer);
    addEvents();
}


init();