const logoNav = document.querySelector('[data-nav');
const menu = document.querySelector('[data-menu]');
const triangle = document.querySelector('[data-triangle]');

menu.addEventListener('click', () => {
    logoNav.classList.toggle('view');
    triangle.classList.toggle('visible');
})