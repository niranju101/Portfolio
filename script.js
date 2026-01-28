// ===== Scroll Animations =====
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Dark Mode Toggle =====
const toggleBtn = document.createElement('button');
toggleBtn.innerText = "🌙 Toggle Dark Mode";
toggleBtn.classList.add('btn');
toggleBtn.style.position = "fixed";
toggleBtn.style.bottom = "20px";
toggleBtn.style.right = "20px";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ===== Typewriter Effect for Intro Heading =====
function typeWriter(element, text, speed = 100) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

window.addEventListener('DOMContentLoaded', () => {
  const introHeading = document.querySelector('.hero-left h1');
  const originalText = introHeading.innerHTML;
  introHeading.innerHTML = ""; // clear text
  typeWriter(introHeading, originalText, 80);
});