const mobileMen = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMen.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
