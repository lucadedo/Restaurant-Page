
import './style.css';
import { appendHome } from './home.js';
import { appendMenu } from './menu.js';
import { appendAbout } from './about.js';

content.appendChild(appendHome());

// Link buttons to functions 

(function updateDisplay() {

const content = document.getElementById('content');
const homeBtnElement = document.getElementById('home');
const menuBtnElement = document.getElementById('menu');
const aboutElement = document.getElementById('about');


function switchToHome() {
    reset();
    content.appendChild(appendHome());
}


function switchToMenu() {
    reset();
    content.appendChild(appendMenu());
}

function switchToAbout() {
    reset();
    content.appendChild(appendAbout());
}


function reset() {
    content.innerHTML = '';
}


homeBtnElement.addEventListener('click', switchToHome);
menuBtnElement.addEventListener('click', switchToMenu);
aboutElement.addEventListener('click', switchToAbout);

})();