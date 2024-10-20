//Menu
const menu = document.querySelector('#menu');
const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('invisible');
    if(!menu.classList.contains('invisible')) {
        menuButton.classList.add('text-white');
    } else {
        menuButton.classList.remove('text-white');
    }
});