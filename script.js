// ===============================
// Scroll Reveal Animations
// ===============================
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));


// ===============================
// Smooth Scroll for Navigation
// ===============================
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ===============================
// Dark Mode Toggle
// ===============================
const toggleBtn = document.createElement('button');
toggleBtn.className = 'btn dark-toggle';
toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
toggleBtn.innerText = '🌙 Dark Mode';

document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


// ===============================
// Typewriter Effect (Accessible)
// ===============================
function typeWriter(element, text, speed = 80) {
  let i = 0;
  element.setAttribute('aria-live', 'polite');

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

window.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const heading = document.getElementById('hero-title');

  if (!heading || prefersReducedMotion) return;

  // Store plain text (no HTML breaking)
  const text = heading.innerText;
  heading.textContent = '';
  typeWriter(heading, text);
});
