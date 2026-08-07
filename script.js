const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const player = document.getElementById('player');
const playerTitle = document.getElementById('playerTitle');
document.querySelectorAll('.play').forEach(button => {
  button.addEventListener('click', () => {
    playerTitle.textContent = button.dataset.title;
    player.classList.add('show');
  });
});
document.getElementById('stop').addEventListener('click', () => player.classList.remove('show'));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMessage').textContent =
    'Thanks! Connect this form to Formspree or another form service before publishing.';
});
