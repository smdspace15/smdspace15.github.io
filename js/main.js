document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

const frames = document.querySelectorAll('.console__frame');
if (frames.length > 1) {
  let idx = 0;
  setInterval(() => {
    frames[idx].classList.remove('is-active');
    idx = (idx + 1) % frames.length;
    frames[idx].classList.add('is-active');
  }, 5000);
}
